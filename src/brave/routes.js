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
        controller: 'JoinController',
        templateUrl: 'join/index.html'
      })
      .state('host', {
        url: '/host',
        controller: 'HostController',
        templateUrl: 'host/index.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'login/index.html'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
