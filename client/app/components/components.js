import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Country from './country/country';
import SearchCountry from './country/searchCountry/searchCountry';
import CountryItem from './country/countryItem/countryItem';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Country,
  SearchCountry,
  CountryItem
])
  
.name;

export default componentModule;
