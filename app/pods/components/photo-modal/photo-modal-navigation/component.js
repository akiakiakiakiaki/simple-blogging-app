import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [
    'photo-modal__navigator',
  ],

  classNameBindings: [
    'typeClassName',
    'visible:visible',
  ],

  //builds the class name dynamically by handed identifier
  typeClassName: Ember.computed('identifier', function() {
    const identifier = this.get('identifier');

    return `photo-modal__navigator--${Ember.String.dasherize(identifier || 'default')}`;
  }),

  click: function(){
    this.sendAction('action', this);
    return false;//prevent bubbling
  }
});
