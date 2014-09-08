/**
 *
 * example
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-08
 * @update 2014-09-08
 */

var validator = require('../lib');

// isEmail
console.log(validator.isEmail('test@gmail.com'));

// isAllChinese
console.log(validator.isAllChinese('测试'));

// isAllEnglish
console.log(validator.isAllEnglish('test'));

// isAllDigit
console.log(validator.isAllDigit('12345'));
