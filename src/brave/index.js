(function() {
  'use strict';

  require('./host/index.html');
  require('./join/index.html');
  require('./common/welcome.html');

  angular.module('crossroads', ['ui.router']).
  controller('BraveJoinController', require('./brave.join.controller')).
  controller('BraveHostController', require('./brave.host.controller')).
  config(require('./brave.routes'));

})();
