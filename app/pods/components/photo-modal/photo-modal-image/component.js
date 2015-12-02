import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['photo-modal__image'],

  classNameBindings: [

    'indexClassName',
    'visible:visible',
  ],

  image: null,

  actualImage: null,

  //NOTATION: .equal macro does not work since first param needs to be string: http://emberjs.com/api/classes/Ember.computed.html#method_equal
  //visible: Ember.computed.equal('image', 'actualImage'),

  visible: Ember.computed('image', 'actualImage', function() {
    return this.get('image') === this.get('actualImage');
  }),


  indexClassName: Ember.computed('index', function() {
    const index = this.get('index');

    return (index % 2 === 0) ? 'odd' : 'even';
  }),

  click: function() {
    this.sendAction('action');
    return false;
  },

  actions: {
    onImageClicked: function() {

    },
  },

});
