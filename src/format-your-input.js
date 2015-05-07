/*
 * 
 * 
 *
 * Copyright (c) 2015 Allan Bettarel
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.formatInputs = function (options) {

    var defaults = {
      formatType : {
        phoneNumber : 'phone-number',
        creditCard : 'credit-card'
      }
    };

    var settings = $.extend( true, {}, defaults, options );

    function defineFormatingOptions(element) {

      switch ( element.data('format-type') ) {

        case settings.formatType.phoneNumber:
          $(element).on('input', phoneNumberFormatter);
          break;

        case settings.formatType.creditCard:
          $(element).on('input', creditCartFormatter);
          break;

        default:
          console.log('Warning, you are trying to format an input without specifying format type. use data-format-type attribute');
          //throw 'Warning, you are trying to format an input without specifying format type. use data-format-type attribute';
      }
    }

    function format(e) {

      var currentValue = e.currentTarget.value;
    }

    function phoneNumberFormatter() {
      console.log('you are in the phoneNumberFormatter fn');
    }

    function creditCartFormatter() {
      console.log('you are in the creditCartFormatter fn');
    }

    this.each(function (i, element) {
      defineFormatingOptions($(element));
    });

    return this.each(function (i, element) {

    });

  };

}(jQuery));