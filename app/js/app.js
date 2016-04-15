import angular from 'angular';

import 'appControllers';
import 'appServices';
import 'appFilters';

angular.module("app.dashboard",['app.controllers','app.services','app.filters'])
.run(function($rootScope,$state,$stateParams){

})
