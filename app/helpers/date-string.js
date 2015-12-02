import Ember from 'ember';

export function dateString(params/*, hash*/) {
  return new Date(params[0]);
}

export default Ember.Helper.helper(dateString);
