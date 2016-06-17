import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('favourite-questions-tile', 'Integration | Component | favourite questions tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{favourite-questions-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#favourite-questions-tile}}
      template block text
    {{/favourite-questions-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
