'use strict';

describe('Directive: contentEntry', function () {

  // load the directive's module
  beforeEach(module('tinyAngularBitsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content-entry></content-entry>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the contentEntry directive');
  }));
});
