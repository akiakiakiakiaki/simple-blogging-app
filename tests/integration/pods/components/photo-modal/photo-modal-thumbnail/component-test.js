import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-modal/photo-modal-thumbnail', 'Integration | Component | photo modal/photo modal thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photo-modal/photo-modal-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#photo-modal/photo-modal-thumbnail}}
      template block text
    {{/photo-modal/photo-modal-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
