import template from './country.html';
import controller from './country.controller';
import './country.scss';

let countryComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: controller 
};

export default countryComponent;
