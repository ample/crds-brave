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
        controller: 'JoinController as join',
        templateUrl: 'join/index.html'
      })
      .state('host', {
        url: '/host',
        controller: 'HostController as host',
        templateUrl: 'host/index.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController as login',
        templateUrl: 'login/index.html'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
