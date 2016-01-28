(function() {
  'use strict';

  module.exports = BraveRoutes;
  BraveRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function BraveRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: "/welcome",
        templateUrl: "templates/welcome.html"
      })
      .state('participants', {
        url: "/participants",
        templateUrl: "templates/participants.html"
      })
      .state('hosts', {
        url: "/hosts",
        templateUrl: "templates/hosts.html"
      })

    $urlRouterProvider.otherwise('/welcome');
  }

})();
