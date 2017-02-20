'use strict';

function factory (type, config, load, typed) {
  var rng = load(require('./rng'));

  /**
   * Seed the random number generator
   *
   * Syntax:
   *
   *     math.seedrandom('a')         // seed random number generator with 'a'
   *
   * Examples:
   *
   *     math.seedrandom('a')
   *     math.random();       // returns 0.43449421599986604 every time
   *
   * See also:
   *
   *     random, randomInt, pickRandom
   *
   * @param {string} [seed] seed for random number generator
   */
  // TODO: rework random to a typed-function
  var seedrandom = rng().setSeed;

  seedrandom.toTex = undefined; // use default template

  return seedrandom;
}

exports.name = 'seedrandom';
exports.factory = factory;
