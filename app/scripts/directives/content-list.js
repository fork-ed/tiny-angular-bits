'use strict';

angular.module('tinyAngularBitsApp')
  .directive('contentList', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the contentList directive');
      }
    };
  });
