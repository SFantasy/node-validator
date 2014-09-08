node-validator
------

String validator for more.

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

## License

The MIT License
