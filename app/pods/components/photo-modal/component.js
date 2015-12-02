import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [
    'photo-modal',
  ],

  classNameBindings: [
    'visible:visible',
  ],

  images: null,

  indexedImages: Ember.computed('images', function() {
    return this.get('images').map(function(item, index) {
      return {item: item, index: index};
    });
  }),

  imagesLength: Ember.computed('images', 'images.length', function() {
    if(this.get('images') && typeof this.get('images.length') !== 'undefined') {
      return this.get('images.length');
    } else {
      return 0;
    }
  }),

  actualImage: null,

  actualIndex: null,

  showPreviousToggle: Ember.computed.gt('actualIndex', 0),

  showNextToggle: Ember.computed('actualIndex', 'images.length', function() {
    return this.get('actualIndex') < ( this.get('images.length') - 1 );
  }),

  visible: false,

  switchImage: function(image) {
    this.set('actualImage', image);
    this.set('actualIndex', this.get('images').indexOf(image));
  },

  actions: {
    onShowModal: function(image) {
      this.toggleProperty('visible');
      this.switchImage(image);
    },

    onCloseModal: function() {
      this.toggleProperty('visible');
      return false;
    },

    onShowPreviousImage: function(){

      let previous = this.get('images').find((item, index)=>{
        return index === this.get('actualIndex')-1;
      });

      this.switchImage(previous);
    },

    onShowNextImage: function(){
      let previous = this.get('images').find((item, index)=>{
        return index === this.get('actualIndex')+1;
      });

      if(!previous){
        previous = this.get('images.firstObject');
      }

      this.switchImage(previous);
    },
  }

});
