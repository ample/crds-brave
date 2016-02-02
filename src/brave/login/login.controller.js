(function () {
  'use strict';

  module.exports = LoginCtrl;
  LoginCtrl.$inject = ['$scope', '$stateParams', '$location'];

  function LoginCtrl($scope, $stateParams, $location) {
    var vm = this;

    console.log('login ctrl');

    vm.login = function() {
      $location.path("/welcome");
    }

    vm.register = function() {

    }

    vm.showRegister = function() {

    }

    vm.showSignIn = function() {

    }
  }

})();
