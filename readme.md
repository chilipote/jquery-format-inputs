# format-input

> Format your values in your input with specific options

[![Build Status](https://travis-ci.org/chilipote/jquery-format-inputs.svg?branch=master)](https://travis-ci.org/chilipote/jquery-format-inputs)


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/chilipote/jquery-format-your-input/master/dist/jquery.format-your-input.min.js
[max]: https://raw.githubusercontent.com/chilipote/jquery-format-your-input/master/dist/jquery.format-your-input.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/format-your-input.min.js"></script>
<script>

  /**
   * phoneNumber : {
   *   // to know how to format
   *   format      : 'xxx-xxx-xxxx',
   *
   *   // to construct your own regex
   *   replaceChar : 'x',
   *
   *   // to construct your own regex, choose your delimiter
   *   delimiter   : '-',
   *
   *   // accept only numbers ?
   *   numbersOnly : true // 123-123-1234 or 123-123-DEMO
   * },
   *
   * creditCard : {
   *   format      : 'xxxx-xxxx-xxxx-xxxx',
   *   replaceChar : 'x',
   *   delimiter   : ' '
   * },
   *
   * zipCode : {
   *   format      : 'xxx-xxx',
   *   replaceChar : 'x',
   *   delimiter   : ' '
   * }
   **/

  jQuery(function ($) {
    $('.js-format-me').formatInputs();
  });
</script>
```


## License

MIT © Allan Bettarel
