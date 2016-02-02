(function () {
  'use strict';

  module.exports = HostCtrl;
  HostCtrl.$inject = ['$scope', '$stateParams'];

  function HostCtrl($scope, $stateParams) {
    console.log('host ctrl');

    var vm = this;

    vm.answers = {};
    vm.currentStep = 1;
    vm.showStep = function(index) {
      return vm.currentStep === index
    }
    vm.next = function() {
      vm.currentStep += 1;
    }
    vm.previous = function() {
      vm.currentStep -= 1;
    }
  }

})();
