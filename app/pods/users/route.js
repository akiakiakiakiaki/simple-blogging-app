import Ember from 'ember';
import AuthRoute from 'test-app/mixins/auth-route';

export default Ember.Route.extend(AuthRoute, {
  model: function() {
    /*
    return this.store.query('user', {
      orderBy: 'published',
    });
*/

    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      roles: this.store.findAll('role')
    });
  },
});
