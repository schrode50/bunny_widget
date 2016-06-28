module.exports = function(app) {
  app.directive('descriptionDirective', function() {
    return {
      templateUrl: './templates/CuteApp/description.html',
      scope: {
        animal: '='
      }
    };
  });
};
