var assert = require('assert'),
    math = require('../../../index');

describe('seed', function () {
  it('should have a function seed', function () {
    assert.equal(typeof math.seedrandom, 'function');
  })

  it('should LaTeX seed', function () {
    var expression = math.parse('randomseed(abc)');
    assert.equal(expression.toTex(), '\\mathrm{randomseed}\\left( abc\\right)');
  });

  it('should generate same number with seed', function () {
    math.seedrandom('a');
    var first = math.random();
    math.seedrandom('a');
    var second = math.random();
    assert.equal(first, second);
  });

  it('should generate different number subsequent calls to seeded random', function () {
    math.seedrandom('a');
    var first = math.random();
    var second = math.random();
    assert.notEqual(first, second);
  });
});
