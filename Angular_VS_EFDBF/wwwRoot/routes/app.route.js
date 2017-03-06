(function () {
	'use strict';

	angular
		.module('app')
		.config(function ($stateProvider, $urlRouteProvider) {
			$urlRouteProvider.otherwise('/');
			$stateProvider
					.state('home', {
						url: '/',
						templateUrl: '../home/home.html',
						controller: 'AppCtrl',
						controllerAs: 'vm'
					})
		});
})()