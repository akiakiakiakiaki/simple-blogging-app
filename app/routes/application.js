import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider});
    },
    signOut: function() {
      this.get("session").close();
    },
    /*signInPw: function(user, password) {
      this.get("session").open("firebase", { provider: 'password', email: user, password: password}).then(function(data) {
        //console.log(data.currentUser);
      });
    },*/
  }
});
