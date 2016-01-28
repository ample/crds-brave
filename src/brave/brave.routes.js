(function() {
  'use strict';

  module.exports = BraveRoutes;
  BraveRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function BraveRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'common/welcome.html'
      })
      .state('join', {
        url: '/join',
        controller: 'BraveJoinController',
        templateUrl: 'join/index.html'
      })
      .state('host', {
        url: '/host',
        controller: 'BraveHostController',
        templateUrl: 'host/index.html'
      });

    $urlRouterProvider.otherwise('/welcome');
  }

})();
