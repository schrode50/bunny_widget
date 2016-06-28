module.exports = function(app) {
  app.directive('photoAlbumDirective', function() {
    return {
      templateUrl: './templates/CuteApp/album.html',
      scope: {
        animal: '='
      },
      controller: function($scope) {
        $scope.changeView = function() {
          $scope.mode === 'thumbnails' ? $scope.mode === 'descriptions' : $scope.mode === 'thumbnails';
        };
        $scope.toggleImage = function(image) {
          if (image) {
            $scope.currentimageurl = image;
            $scope.mode = 'full';
            return;
          }
          $scope.mode = 'thumbnails';
        };
      }
    };
  });
};
