import Ember from 'ember';

/**
 * this mixin is used for routes that require authentification as an admin
 */
export default Ember.Mixin.create(Ember.Route, {

  beforeModel() {
    if(!this.get('session.currentUser') || ( this.get('session.currentUser.role.type') !== 'admin') ) {

      /*
      define an attribute 'redirection' in your route if you want to redirect to another direction than 'index'
       */
      let direction = this.get('redirection') ? this.get('redirection') : 'index';

      this.transitionTo(direction);
    }
  },

});
