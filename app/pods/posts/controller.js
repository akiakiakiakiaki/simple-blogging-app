import Ember from 'ember';

export default Ember.Controller.extend({

  sortProperties: ['timestamp'],
  sortAscending: true, // sorts post by timestamp

  actions: {
    deletePost: function(post) {

      let deletions = post.get('images').map(image => {
        //returning seems to be executed before promise of blob is available.
        //resolved by starting an interval that prooves image to be defined
        let waitForPromise = setInterval(function(){
          if(typeof image !== 'undefined')
          {
            window.clearInterval(waitForPromise);
            return image.destroyRecord();
          }

        },10);
      });

      // Ensures all comments are deleted before the post
      Ember.RSVP.allSettled(deletions)
        .then(function() {
          return post.destroyRecord();
        })
        .catch(function(e) {
          throw Error(['posts/controller ',e]);
        });
    }
  }
});
