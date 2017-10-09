import template from './countryItem.html';
import controller from './countryItem.controller';

let countryItemComponent = {
  bindings: {
      "countryData": '<'
  },
  template,
  controller: controller 
};

export default countryItemComponent;
