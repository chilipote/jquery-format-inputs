(function ($) {

  module('jQuery#FormatYourInput', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.formatInputs(), this.elems, 'should be chainable');
  });

}(jQuery));
