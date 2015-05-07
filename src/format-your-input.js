/*
 * 
 * 
 *
 * Copyright (c) 2015 Allan Bettarel
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.formatInputs = function (options) {

    // A constant object
    var cons = {
      formatType : {
        phoneNumber : 'phone-number',
        creditCard  : 'credit-card'
      }
    };

    // The defaults options
    var defaults = {
      phoneNumber : {
        // to know how to format
        format      : 'xxx-xxx-xxxx',

        // to construct your own regex
        replaceChar : 'x',

        // to construct your own regex, choose your delimiter
        delimiter   : '-',

        // accept only numbers ?
        numbersOnly : true // 123-123-1234 or 123-123-DEMO
      },

      creditCard : {
        format      : 'xxxx-xxxx-xxxx-xxxx',
        replaceChar : 'x',
        delimiter   : ' '
      }
    };

    var settings = $.extend( true, {}, defaults, options );

    function defineFormattingMethod(element) {

      switch ( element.data('format-type') ) {

        case cons.formatType.phoneNumber:
          $(element).on('input', phoneNumberFormatter);
          break;

        case cons.formatType.creditCard:
          $(element).on('input', creditCartFormatter);
          break;

        default:
          throw 'Warning, you are trying to format an input without specifying format type. use data-format-type attribute';
      }
    }

    function phoneNumberFormatter(e) {
      var value = e.currentTarget.value,
          options = settings.phoneNumber;

      $(e.currentTarget).val(parseString(value, options));
    }

    function creditCartFormatter(e) {
      var value = e.currentTarget.value,
          options = settings.creditCard;

      $(e.currentTarget).val(parseString(value, options));
    }

    function parseString(value, options) {
      var valueFormatted = '',
          decade = 0;

      // 1234567
      //
      // 123-4
      // 123--45
      // 123--45-6
      // 123--45--67
      for(var i = 0; i < options.format.length && i < value.length; i++) {
        if(options.format[parseInt(i)] === options.replaceChar) {
          if(options.numbersOnly) {
            valueFormatted += value[i] == parseInt(value[i], 10) ? value[i] : '';
          } else {
            valueFormatted += value[i];
          }
        } else if(value[i] === options.delimiter) {
          valueFormatted += value[i];
        } else {
          valueFormatted += options.delimiter + value[i];
          decade = decade + 1;
        }
      }

      return valueFormatted;
    }

    this.each(function (i, element) {
      defineFormattingMethod($(element));
    });

    return this.each(function() {

    });

  };

}(jQuery));