import angular from 'angular';
import searchCountryComponent from './searchCountry.component';
import ngResource from 'angular-resource';
import countryService from './../country.service';

let searchCountryModule = angular.module('searchCountry', [
  ngResource
])

.component('searchCountry', searchCountryComponent)
  
.service('countryService', countryService)
.name;

export default searchCountryModule;
