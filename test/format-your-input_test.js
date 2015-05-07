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

  test('is FormatYourInput', function () {
    expect(1);
    strictEqual(this.elems.formatInputs().text(), 'FormatYourInput0FormatYourInput1FormatYourInput2', 'should be FormatYourInput');
  });

  test('adding a listener input on elements', function () {
    expect(1);
    strictEqual(this.elems.formatInputs().text(), 'FormatYourInput0FormatYourInput1FormatYourInput2', 'should be FormatYourInput');
  });

}(jQuery));
