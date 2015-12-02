import Ember from 'ember';
import AuthRoute from 'test-app/mixins/auth-route';

export default Ember.Route.extend(AuthRoute, {

  model() {
    return this.store.query('image', {
      orderBy: 'file_name',
    });
  }
});
