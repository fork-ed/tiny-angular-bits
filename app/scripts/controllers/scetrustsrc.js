'use strict';

angular.module('tinyAngularBitsApp')
  .controller('SceTrustSrc', function ($scope, $sce) {
    $scope.trustAsResourceUrl = function(url) { return $sce.trustAsResourceUrl(url) }
  })
