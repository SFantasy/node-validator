node-validator
------

String validator for more.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/is-valid.svg?style=flat
[npm-url]: https://npmjs.org/package/is-valid
[travis-image]: https://img.shields.io/travis/SFantasy/node-validator.svg?style=flat
[travis-url]: https://travis-ci.org/SFantasy/node-validator
[david-image]: https://img.shields.io/david/SFantasy/node-validator.svg?style=flat
[david-url]: https://david-dm.org/SFantasy/node-validator

## Install

```
[sudo] npm install is-valid [--save]
```

## Usage

```
var validator = require('is-valid');

validator.isEmail('abc@gmail.com'); // => true
```

### Validators

- isEmail(str): check if it is an Email string
- isAllChinese(str): check if it is a string only contains Chinese characters
- isAllEnglish(str): check if it is a string only contains English characters
- isAllDigit(str): check if it is a string only contains digits
- isChineseTel(str): check if it is a Chinese cell-phone number
- isChineseIdCard(str): check if it is a 18-digit Chinese ID card number

## License

The MIT License
