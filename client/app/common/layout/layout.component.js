import template from './layout.html';
import controller from './layout.controller';
import './layout.scss';

let layoutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  transclude: true
};

export default layoutComponent;
