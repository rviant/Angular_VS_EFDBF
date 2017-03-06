(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl)

    AppCtrl.$Inject = [];

    function AppCtrl() {
        var vm = this;

        console.log("Started the App. Loaded App");
    }
})()