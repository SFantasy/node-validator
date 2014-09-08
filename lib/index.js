/**
 *
 * index
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-08
 * @update 2014-09-08
 */

module.exports = {

  isEmail: function (str) {
    return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(str);
  },

  isAllChinese: function (str) {
    return !/[^\u4e00-\u9fa5]/.test(str);
  },

  isAllEnglish: function (str) {
    return /^[a-zA-Z]+$/.test(str);
  },

  isAllDigit: function (str) {
    return /^[0-9]+$/.test(str);
  },

  isChineseTel: function (str) {
    return /^1[34578]\d{9}$/.test(str);
  }

};