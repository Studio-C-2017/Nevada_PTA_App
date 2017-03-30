angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu.contactUs', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('menu.latestNews', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/latestNews.html',
        controller: 'latestNewsCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu.events', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu.programs', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programs.html',
        controller: 'programsCtrl'
      }
    }
  })

  .state('menu.advocacy', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/advocacy.html',
        controller: 'advocacyCtrl'
      }
    }
  })

  .state('menu.membership', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/membership.html',
        controller: 'membershipCtrl'
      }
    }
  })

  .state('menu.convention', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/convention.html',
        controller: 'conventionCtrl'
      }
    }
  })

  .state('menu.resources', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resources.html',
        controller: 'resourcesCtrl'
      }
    }
  })

  .state('menu.ourSponsors', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ourSponsors.html',
        controller: 'ourSponsorsCtrl'
      }
    }
  })

  .state('menu.health', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      }
    }
  })

  .state('menu.moves', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moves.html',
        controller: 'movesCtrl'
      }
    }
  })

  .state('menu.awards', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/awards.html',
        controller: 'awardsCtrl'
      }
    }
  })

  .state('menu.leaderForms', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leaderForms.html',
        controller: 'leaderFormsCtrl'
      }
    }
  })

  .state('facebook', {
    url: '/page13',
    templateUrl: 'templates/facebook.html',
    controller: 'facebookCtrl'
  })

  .state('twitter', {
    url: '/page14',
    templateUrl: 'templates/twitter.html',
    controller: 'twitterCtrl'
  })

  .state('health', {
    url: '/page18',
    templateUrl: 'templates/health.html',
    controller: 'healthCtrl'
  })

    .state('moves', {
    url: '/page19',
    templateUrl: 'templates/moves.html',
    controller: 'movesCtrl'
  })

      .state('awards', {
    url: '/page20',
    templateUrl: 'templates/awards.html',
    controller: 'awardsCtrl'
  })

  .state('leaderForms', {
url: '/page20',
templateUrl: 'templates/leaderForms.html',
controller: 'leaderFormsCtrl'
})

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
