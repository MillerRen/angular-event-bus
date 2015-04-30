angular.module('angular-event-bus')
  .service('Bus', function ($rootScope) {
    return $rootScope.$new(true);
  });

