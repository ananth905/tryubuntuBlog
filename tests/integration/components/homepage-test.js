import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | homepage', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Homepage />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Homepage>
        template block text
      </Homepage>
    `);

    assert.dom().hasText('template block text');
  });
});
