import Ember from 'ember';
import ConfirmRouteMixin from '../../../mixins/confirm-route';
import { module, test } from 'qunit';

module('Unit | Mixin | confirm route');

// Replace this with your real tests.
test('it works', function(assert) {
  var ConfirmRouteObject = Ember.Object.extend(ConfirmRouteMixin);
  var subject = ConfirmRouteObject.create();
  assert.ok(subject);
});
