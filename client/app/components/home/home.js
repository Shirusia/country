import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import ngResource from 'angular-resource';
import HomeService from './home.service';

let homeModule = angular.module('home', [
  uiRouter,
  ngResource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    });
})

.component('home', homeComponent)

.service('HomeService', HomeService)
  
.name;

export default homeModule;
