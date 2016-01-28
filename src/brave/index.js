(function() {
  'use strict';

  require('./templates/hosts.html');
  require('./templates/participants.html');
  require('./templates/welcome.html');

  angular.module('crossroads', ['ui.router']).
  controller('BraveController', require('./brave.controller')).
  config(require('./brave.routes'));

})();
