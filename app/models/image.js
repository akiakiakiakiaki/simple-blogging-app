import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  file_name: DS.attr('string'),
  post: DS.belongsTo('post', { async: true })
});
