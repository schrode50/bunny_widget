module.exports = function(app) {
  app.directive('test', function() {
    return {
      templateUrl: './templates/CuteApp/test.html',
      scope: {
        thing: '='
      },
      replace: true
    };
  });
};
