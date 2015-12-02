import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [
    'photo-modal__thumbnail',
  ],

  actions: {
    onThumbnailClicked: function(image) {
      this.sendAction('action', image);
    }
  }

});
