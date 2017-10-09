import angular from 'angular';
import About from './about/about';
import Country from './country/country';
import SearchCountry from './country/searchCountry/searchCountry';

let componentModule = angular.module('app.components', [
  About,
  Country,
  SearchCountry
])
  
.name;

export default componentModule;
