/**
 *
 * test
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-10
 * @update 2014-09-10
 */

var validator = require('../index');
var assert = require('assert');
var format = require('util').format;

function test(options) {
  var args = options.args || [];
  args.unshift(null);
  if (options.valid) {
    options.valid.forEach(function (valid) {
      args[0] = valid;
      if (validator[options.validator].apply(validator, args) !== true) {
        var warning = format('validator.%s(%s) failed but should have passed',
          options.validator, args.join(', '));
        throw new Error(warning);
      }
    });
  }
  if (options.invalid) {
    options.invalid.forEach(function (invalid) {
      args[0] = invalid;
      if (validator[options.validator].apply(validator, args) !== false) {
        var warning = format('validator.%s(%s) passed but should have failed',
          options.validator, args.join(', '));
        throw new Error(warning);
      }
    });
  }
}

describe('Validate', function () {

  describe('#isEmail', function () {
    it('should validate email address', function (done) {
      test({
        validator: 'isEmail',
        valid: [
          'abc@test.com',
          'a0gg@gmail.com',
          'test123@abc.com.cn',
          'test.123@gmail.com'
        ],
        invalid: [
          'abcd@',
          '@test.com'
        ]
      });

      done();
    });
  });

});