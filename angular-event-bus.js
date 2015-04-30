angular.module('angular-event-bus',[])
  .service('$bus', function ($rootScope) {
    return $rootScope.$new(true);
  });

