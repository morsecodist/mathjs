'use strict';

var seedrandom = require('seedrandom');

var ArgumentsError = require('../../error/ArgumentsError');

function factory (type, config, load, typed) {

  /**
   * Create a rng object with a set of functions to seed
   * the rng and generate random numbers.
   *
   *
   * @return {Object}       Returns an object containing functions:
   *                        `setSeed(seed)`,
   *                        `generate()`,
   */

  var generator = Math.random;

  function rng() {
    return {
      setSeed: function(seed) {
        if(seed === undefined) {
          generator = Math.random;
        } else {
          generator = seedrandom(seed);
        }
      },
      generate: function() {
        return generator();
      }
    }
  }

  rng.toTex = undefined; // use default template

  return rng;
}

exports.name = 'rng';
exports.factory = factory;
