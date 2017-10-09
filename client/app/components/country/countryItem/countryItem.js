import angular from 'angular';
import countryItemComponent from './countryItem.component';
import ngResource from 'angular-resource';

let countryItemModule = angular.module('countryItem', [
  ngResource
])

.component('countryItem', countryItemComponent)
  
.name;

export default countryItemModule;
