angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.private', {
    url: '/private',
    views: {
      'tab1': {
        templateUrl: 'templates/private.html',
        controller: 'privateCtrl'
      }
    }
  })

  .state('tabsController.public', {
    url: '/public',
    views: {
      'tab3': {
        templateUrl: 'templates/public.html',
        controller: 'publicCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabBar',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('audio', {
    url: '/audio',
    templateUrl: 'templates/audio.html',
    controller: 'audioCtrl'
  })

  .state('text', {
    url: '/text',
    templateUrl: 'templates/text.html',
    controller: 'textCtrl'
  })

  .state('page', {
    url: '/page8',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/text')

  

});