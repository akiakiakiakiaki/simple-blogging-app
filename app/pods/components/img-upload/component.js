import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['multiple', 'type', 'accept'],
  accept: 'image/*',
  tagName: 'input',
  multiple: true,
  files: null,
  type: 'file',

  change: function(event){
    var files = event.target.files;
    for(var i =0;i < files.length; i++){
      var file = files[i];

      this.get('files').pushObject(file);
    }
    event.target.value = null;
  }
});
