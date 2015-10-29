import Ember from 'ember';

export default Ember.Controller.extend({

  sortProperties: ['timestamp'],
  sortAscending: true, // sorts post by timestamp

  actions: {
    deletePost: function(post) {
      post.deleteRecord();
      post.save();
    }
  }
});
