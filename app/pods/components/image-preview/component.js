import Ember from 'ember';

export default Ember.Component.extend({
  file: null,

  callbackImageData: null,

  didInsertElement: function () {
    var self = this;
    var file = this.get('file');
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;

      self.$("img.preview").attr("src", data);

      //bubble up action to controller
      self.get('onLoadImage')(data, file);

    };
    reader.readAsDataURL(file);
  },
});
