angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


/*-- State side-menu21 --*/
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
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/latestNews.html',
        controller: 'latestNewsCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu.events', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu.programs', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programs.html',
        controller: 'programsCtrl'
      }
    }
  })

  .state('menu.health', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      }
    }
  })

  .state('menu.awards', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/awards.html',
        controller: 'awardsCtrl'
      }
    }
  })

  .state('menu.moves', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moves.html',
        controller: 'movesCtrl'
      }
    }
  })

  .state('menu.advocacy', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/advocacy.html',
        controller: 'advocacyCtrl'
      }
    }
  })

  .state('menu.membership', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/membership.html',
        controller: 'membershipCtrl'
      }
    }
  })

  .state('menu.convention', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/convention.html',
        controller: 'conventionCtrl'
      }
    }
  })

  .state('menu.resources', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resources.html',
        controller: 'resourcesCtrl'
      }
    }
  })

  .state('menu.leaderForms', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leaderForms.html',
        controller: 'leaderFormsCtrl'
      }
    }
  })

  .state('menu.ourSponsors', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ourSponsors.html',
        controller: 'ourSponsorsCtrl'
      }
    }
  })

  .state('menu.studioc', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/studioc.html',
        controller: 'studioCtrl'
      }
    }
  })

  .state('menu.translate', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/translate.html',
        controller: 'translateCtrl'
      }
    }
  })

  .state('menu.spanSearch', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanSearch.html',
        controller: 'spanSearchCtrl'
      }
    }
  })

  .state('menu.spanAbout', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanAbout.html',
        controller: 'spanAboutCtrl'
      }
    }
  })

  .state('menu.spanContact', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanContact.html',
        controller: 'spanContactCtrl'
      }
    }
  })

  .state('menu.spanLatest', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanLatest.html',
        controller: 'spanLatestCtrl'
      }
    }
  })

  .state('menu.spanMessages', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanMessages.html',
        controller: 'spanMessagesCtrl'
      }
    }
  })

  .state('menu.spanEvents', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanEvents.html',
        controller: 'spanEventsCtrl'
      }
    }
  })

  .state('menu.spanPrograms', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanPrograms.html',
        controller: 'spanProgramsCtrl'
      }
    }
  })

  .state('menu.spanHealth', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanHealth.html',
        controllers: 'spanHealthCtrl'
      }
    }
  })

  .state('menu.spanAwards', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanAwards.html',
        controllers: 'spanAwardsCtrl'
      }
    }
  })

  .state('menu.spanMoves', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanMoves.html',
        controllers: 'spanMovesCtrl'
      }
    }
  })

  .state('menu.spanAdvocacy', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanAdvocacy.html',
        controllers: 'spanAdvocacyCtrl'
      }
    }
  })

  .state('menu.spanMembership', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanMembership.html',
        controllers: 'spanMembershipCtrl'
      }
    }
  })

  .state('menu.spanConvention', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanConvention.html',
        controllers: 'spanConventionCtrl'
      }
    }
  })

  .state('menu.spanResources', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanResources.html',
        controllers: 'spanResourcesCtrl'
      }
    }
  })

  .state('menu.spanLeader', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanLeader.html',
        controllers: 'spanLeaderCtrl'
      }
    }
  })

  .state('menu.spanSponsors', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanSponsors.html',
        controllers: 'spanSponsorsCtrl'
      }
    }
  })

  .state('menu.spanStudioc', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanStudioc.html',
        controllers: 'spanStudiocCtrl'
      }
    }
  })

  .state('menu.facebook', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/facebook.html',
        controllers: 'facebookCtrl'
      }
    }
  })

  .state('menu.twitter', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/twitter.html',
        controllers: 'twitterCtrl'
      }
    }
  })

  .state('menu.spanTwitter', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spanTwitter.html',
        controllers: 'spanTwitterCtrl'
      }
    }
  })

/*-- State action. --*/


  .state('health', {
    url: '/page14',
    templateUrl: 'templates/health.html',
    controller: 'healthCtrl'
  })

      .state('awards', {
    url: '/page15',
    templateUrl: 'templates/awards.html',
    controller: 'awardsCtrl'
  })

      .state('moves', {
    url: '/page16',
    templateUrl: 'templates/moves.html',
    controller: 'movesCtrl'
  })

      .state('leaderForms', {
    url: '/page17',
    templateUrl: 'templates/leaderForms.html',
    controller: 'leaderFormsCtrl'
  })

      .state('studioc', {
    url: '/page18',
    templateUrl: 'templates/studioc.html',
    controller: 'studioCtrl'
  })

      .state('translate', {
    url: '/page19',
    templateUrl: 'templates/translate.html',
    controller: 'translateCtrl'
  })

      .state('spanSearch', {
    url: '/page20',
    templateUrl: 'templates/spanSearch.html',
    controller: 'spanSearchCtrl'
  })

      .state('spanAbout', {
    url: '/page21',
    templateUrl: 'templates/spanAbout.html',
    controller: 'spanAboutCtrl'
  })

      .state('spanContact', {
    url: '/page22',
    templateUrl: 'templates/spanContact.html',
    controller: 'spanContactCtrl'
  })

      .state('spanLatest', {
    url: '/page23',
    templateUrl: 'templates/spanLatest.html',
    controller: 'spanLatestCtrl'
  })

      .state('spanMessages', {
    url: '/page24',
    templateUrl: 'templates/spanMessages.html',
    controller: 'spanMessagesCtrl'
  })

      .state('spanEvents', {
    url: '/page25',
    templateUrl: 'templates/spanEvents.html',
    controller: 'spanEventsCtrl'
  })

      .state('spanPrograms', {
    url: '/page26',
    templateUrl: 'templates/spanPrograms.html',
    controller: 'spanProgramsCtrl'
  })

      .state('spanHealth', {
    url: '/page27',
    templateUrl: 'templates/spanHealth.html',
    controller: 'spanHealthCtrl'
  })

      .state('spanAwards', {
    url: '/page28',
    templateUrl: 'templates/spanAwards.html',
    controller: 'spanAwardsCtrl'
  })

      .state('spanMoves', {
    url: '/page29',
    templateUrl: 'templates/spanMoves.html',
    controller: 'spanMovesCtrl'
  })

      .state('spanAdvocacy', {
    url: '/page30',
    templateUrl: 'templates/spanAdvocacy.html',
    controller: 'spanAdvocacyCtrl'
  })

      .state('spanMembership', {
    url: '/page31',
    templateUrl: 'templates/spanMembership.html',
    controller: 'spanMembershipCtrl'
  })

      .state('spanConvention', {
    url: '/page32',
    templateUrl: 'templates/spanConvention.html',
    controller: 'spanConventionCtrl'
  })

      .state('spanResources', {
    url: '/page33',
    templateUrl: 'templates/spanResources.html',
    controller: 'spanResourcesCtrl'
  })

      .state('spanLeader', {
    url: '/page34',
    templateUrl: 'templates/spanLeader.html',
    controller: 'spanLeaderCtrl'
  })

      .state('spanSponsors', {
    url: '/page35',
    templateUrl: 'templates/spanSponsors.html',
    controller: 'spanSponsorsCtrl'
  })

      .state('spanStudioc', {
    url: '/page36',
    templateUrl: 'templates/spanStudioc.html',
    controller: 'spanStudiocCtrl'
  })

      .state('facebook', {
    url: '/page37',
    templateUrl: 'templates/facebook.html',
    controller: 'facebookCtrl'
  })

      .state('twitter', {
    url: '/page38',
    templateUrl: 'templates/twitter.html',
    controller: 'twitterCtrl'
  })

  .state('spanTwitter', {
url: '/page39',
templateUrl: 'templates/spanTwitter.html',
controller: 'spanTwitterCtrl'
})

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

});
