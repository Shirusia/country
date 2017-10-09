import angular from 'angular';
import uiRouter from 'angular-ui-router';
import countryComponent from './country.component';
import ngResource from 'angular-resource';
import countryService from './country.service';

let countryModule = angular.module('Country', [
  uiRouter,
  ngResource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('country', {
      url: '/',
      component: 'country'
    });
})

.component('country', countryComponent)
  
.service('countryService', countryService)

.name;

export default countryModule;
