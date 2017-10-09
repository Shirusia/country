import angular from 'angular';
import Navbar from './navbar/navbar';
import Layout from './layout/layout';

let commonModule = angular.module('app.common', [
  Navbar,
  Layout
])
  
.name;

export default commonModule;
