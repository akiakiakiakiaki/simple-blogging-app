import Ember from 'ember';

export function isAdmin(params/*, hash*/) {
  let val;
  if(typeof params[0] !== 'undefined'){
    val = params[0].get('role.id') === '0';
  }
  else {
    val = false;
  }


  return val;
}

export default Ember.Helper.helper(isAdmin);
