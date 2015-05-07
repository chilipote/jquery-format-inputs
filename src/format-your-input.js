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
        // number of char before write a space
        space:'4'
      }
    };

    var settings = $.extend( true, {}, defaults, options );

    function defineFormatingMethod(element) {

      switch ( element.data('format-type') ) {

        case cons.formatType.phoneNumber:
          $(element).on('input', phoneNumberFormatter);
          break;

        case cons.formatType.creditCard:
          $(element).on('input', creditCartFormatter);
          break;

        default:
          console.log('Warning, you are trying to format an input without specifying format type. use data-format-type attribute');
          //throw 'Warning, you are trying to format an input without specifying format type. use data-format-type attribute';
      }
    }

    function phoneNumberFormatter(e) {
      var value = e.currentTarget.value
        , phoneNumberOptions = settings.phoneNumber
        , valueFormatted = ''
        , decade = 0;

      for(var i = 0; i < phoneNumberOptions.format.length && i < value.length; i++) {
        if(phoneNumberOptions.format[parseInt(i)] === phoneNumberOptions.format.replaceChar) {

          if(phoneNumberOptions.numbersOnly) valueFormatted += parseInt(value[i]) ? parseInt(value[i]) : '';
          else valueFormatted += parseInt(value[i]) ? parseInt(value[i]) : '';

        } else {
          valueFormatted += phoneNumberOptions.delimiter;
          decade = decade + 1;
        }
      }

      $(e.currentTarget).val(valueFormatted);
    }

    function creditCartFormatter() {
      console.log('you are in the creditCartFormatter fn');

      var value = e.currentTarget.value;
      var phoneNumberOptions = settings.creditCard;


    }

    this.each(function (i, element) {
      defineFormatingMethod($(element));
    });

    return this.each(function (i, element) {

    });

  };

}(jQuery));