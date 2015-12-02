import Ember from 'ember';
import AuthRoute from 'test-app/mixins/auth-route';

export default Ember.Route.extend(AuthRoute, {
  redirection: 'posts',

  actions: {
    willTransition(transition) {
      if (this.controller.get('title') !== '' || this.controller.get('body') !== '' || this.controller.get('files.length')) {
        if (confirm('reset unsaved changes?')) {
          this.controller.cancelNewPost();
        } else {
          transition.abort();
        }
      } else {
        this.controller.cancelNewPost();
      }
    },
  }
});
