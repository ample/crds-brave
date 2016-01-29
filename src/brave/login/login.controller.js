(function () {
  'use strict';

  module.exports = LoginCtrl;
  LoginCtrl.$inject = ['$scope', '$stateParams'];

  function LoginCtrl($scope, $stateParams) {
    console.log('login ctrl');

    $scope.login = function() {
      
    }
  }

})();
