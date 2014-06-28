'use strict';

angular.module('tinyAngularBitsApp')
  .controller('youtubeVideo', function ($scope) {
    $scope.embedUrl = 'http://www.youtube.com/embed/' + $scope.videoId  
  })


angular.module('tinyAngularBitsApp')
  .directive('youtubeVideo', function () {
    return {
      template: '\
        <div> \
            <div ng-controller="SceTrustSrc"> \
              <div style="position: relative; top: 0; height: 600; width: 800;"> \
                <iframe ng-src="{{ trustAsResourceUrl(embedUrl) }}" style="border: none" style="height: 100%; width: 100%;"> \
                </iframe> \
              </div> \
            </div> \
        </div>',
      restrict: 'E',
      scope: {
        "videoId": "@"
      },
      controller: "youtubeVideo",
    };
  });
