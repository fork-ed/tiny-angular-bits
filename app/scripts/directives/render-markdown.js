'use strict';

angular.module("tinyAngularBitsApp").factory("MarkdownService", function () {
    
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    {
      render: function (text) {
        if (text) {
          return marked(text)
        } else {
          return null
        }
      }
    }

angular.module('tinyAngularBitsApp')
  .directive('renderMarkdown', function () {
    return {
      restrict: 'E'
      controller: 'renderMarkdown'
      scope: { 'text': '=' }
      template: "<div ng-bind-html='output'></div>"
    }
  })
  .controller('renderMarkdown', ['$scope', '$sce', 'MarkdownService', function ($scope, $sce, MarkdownService) {
    $scope.$watch("text", function (nv) {
      $scope.output = $sce.trustAsHtml(MarkdownService.render(nv))
    })
  ])
