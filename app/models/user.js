import DS from 'ember-data';

export default DS.Model.extend({
  family_name: DS.attr('string'),
  gender: DS.attr('string'),
  given_name: DS.attr('string'),
  link: DS.attr('string'),
  locale: DS.attr('string'),
  name: DS.attr('string'),
  picture: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.belongsTo('role', { async: true }),
  last_visit: DS.attr('number'),
});
