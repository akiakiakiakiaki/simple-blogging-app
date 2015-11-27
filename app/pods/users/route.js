import Ember from 'ember';

export default Ember.Route.extend({
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
