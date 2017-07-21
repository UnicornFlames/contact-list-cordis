var contactList = angular.module('contactList', ['ui.router']);
'use strict'

contactList.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('contactList', {
            url: '/contactList',
            templateUrl: 'views/contact-list.html',
            controller: 'contactListController'
        })
        
    $urlRouterProvider.otherwise('/contactList');
})

