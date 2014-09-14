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
    it('should validate email address', function () {
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
    });
  });

  describe('#isAllChinese', function () {
    it('should validate all Chinese characters', function () {
      test({
        validator: 'isAllChinese',
        valid: [
          '你好世界'
        ],
        invalid: [
          'hello world',
          '你好world',
          '你好 世界',
          '你好123world'
        ]
      });
    });
  });

  describe('#isAllEnglish', function () {
    it('should validate all English characters', function () {
      test({
        validator: 'isAllEnglish',
        valid: [
          'HelloWorld'
        ],
        invalid: [
          'Hello世界',
          '你好世界',
          '你好123world',
          'Hello World'
        ]
      });
    });
  });

  describe('#isChineseTel', function () {
    it('should validate Chinese cell phone number', function () {
      test({
        validator: 'isChineseTel',
        valid: [
          '14700000000',
          '17700000000',
          '13513513511',
          '13838385438'
        ],
        invalid: [
          '33312341241',
          '1341231421',
          '133141212441'
        ]
      });
    });
  });

  describe('#isAllDigit', function () {
    it('should validate all digits', function () {
      test({
        validator: 'isAllDigit',
        valid: [
          '12345'
        ],
        invalid: [
          '123哈哈',
          'HelloWorld33',
          '你好世界'
        ]
      });
    });
  });

  describe('#isChineseIdCard', function () {
    it('should validate an Chinese Id Card', function () {
      test({
        validator: 'isChineseIdCard',
        valid: [
          '15210319861215033x'
        ],
        invalid: [
          '1234',
          '12345678910111213x',
          '123456789112312345'
        ]
      });
    });
  });

});