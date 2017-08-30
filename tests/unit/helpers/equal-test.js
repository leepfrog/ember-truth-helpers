import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'helper:eq', {
  integration: true
});

test('simple test 1', function(assert) {
  this.render(
    hbs("[{{eq true true}}] [{{eq true false}}] [{{eq false true}}] [{{eq false false}}]")
  );

  assert.equal(this.$().text(), '[true] [false] [false] [true]', 'value should be "[true] [false] [false] [true]"');
});

test('simple test 2', function(assert) {
  var fakeContextObject = Ember.Object.create({
    valueA: null,
    valueB: null
  });

  this.set('contextChild', fakeContextObject);

  this.render(
    hbs("[{{eq contextChild.valueA contextChild.valueB}}] [{{eq contextChild.valueB contextChild.valueA}}]")
  );

  assert.equal(this.$().text(), '[true] [true]', 'value should be "[true] [true]"');

  Ember.run(fakeContextObject, 'set', 'valueA', undefined);
  assert.equal(this.$().text(), '[false] [false]', 'value should be "[false] [false]"');

  Ember.run(fakeContextObject, 'set', 'valueB', undefined);
  assert.equal(this.$().text(), '[true] [true]', 'value should be "[true] [true]"');

  Ember.run(fakeContextObject, 'set', 'valueA', 'yellow');
  Ember.run(fakeContextObject, 'set', 'valueB', 'yellow');
  assert.equal(this.$().text(), '[true] [true]', 'value should be "[true] [true]"');

});
