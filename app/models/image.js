import DS from 'ember-data';

export default DS.Model.extend({
  fileName: DS.attr('string'),
  fileData: DS.attr('string'),
  post: DS.belongsTo('post', { async: true })
});
