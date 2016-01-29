(function() {
  'use strict';

  require('./host/index.html');
  require('./join/index.html');
  require('./common/welcome.html');
  require('./login/index.html');

  angular
    .module('crossroads', ['ui.router'])
    .controller('JoinController', require('./join/join.controller'))
    .controller('HostController', require('./host/host.controller'))
    .controller('LoginController', require('./login/login.controller'))
    .config(require('./routes'));

})();
