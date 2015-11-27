import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    changeRole: function(user, users) {

      //be sure, there is at least one admin left, if admin is changed to be a normal user
      if(user.get('role.id')==='1'){

        let _adminLeft = users.find(user => {
          if(user.get('role.id')==='0') {
            return true;
          }
        });

        if(!_adminLeft) {
          this.store.find('role', 0).then(role => {
            user.set('role', role);
            users.save();
          });
        } else {
          user.save();
        }
      } else {
        user.save();
      }
    }
  }
});
