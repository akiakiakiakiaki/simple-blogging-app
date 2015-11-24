import Ember from 'ember';

export default Ember.Controller.extend({

  title: '',
  body: '',
  files: [],
  images: [],

  observeImages: Ember.observer('images.@each.isSaving', function() {

    let saving = this.get('images').find(function(item) {
      return item.get('isSaving');
    });

    this.set('imagesSaving', !!saving);
  }),

  imagesSaving: false,

  resetPostData() {

      this.set('title', '');
      this.set('body', '');
      this.set('images', []);
      this.set('files', []);

  },

  cancelNewPost() {
    let deletions = this.get('images').map(image => {
      //returning seems to be executed before promise of blob is available.
      //resolved by starting an interval that prooves image to be defined
      let waitForPromise = setInterval(function(){
        if(typeof image !== 'undefined' && !image.get('isSaving'))
        {
          window.clearInterval(waitForPromise);

          return image.destroyRecord();
        }

      },10);
    });

    let controller = this;
    // Ensures all comments are deleted before the post
    Ember.RSVP.allSettled(deletions)
      .then(function() {

      })
      .catch(function(e) {
        throw Error(['posts/controller ',e]);
      }).finally(() => {

        controller.resetPostData();
      });

    this.transitionToRoute('posts');
  },

  actions: {
    addImage(data, file) {

      let newImage = this.store.createRecord('image', {
        fileName: file.name,
        fileData: data,
        post: this.get('post'),
      });

      this.get('images').pushObject(newImage);
      newImage.save().then( image => {

        this.get('images').forEach(image => {
          this.get('imagesSaving');
        });

      });

    },

    publishPost() {
      this.set('post',
        this.store.createRecord('post', {
          title: this.get('title'),
          body: this.get('body'),
          images: this.get('images'),
          timestamp: new Date().getTime(),
        })
      );
      let controller = this;
      this.get('post').save().then( () => {

        this.get('images').forEach(image => {
            image.set('post', this.get('post'));
            image.save().then( image => {
              //foo
            });
        });

      }).finally(() => {

        controller.resetPostData();
        controller.transitionToRoute('posts');
      });

    },

  }
});
