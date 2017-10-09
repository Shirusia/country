import template from './searchCountry.html';
import controller from './searchCountry.controller';

let searchCountryComponent = {
  restrict: 'E',
  bindings: {
      onSearch: '&'
  },
  template,
  controller: controller 
};

export default searchCountryComponent;
