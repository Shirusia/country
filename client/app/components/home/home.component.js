import template from './home.html';
import controller, {HOME_CONTROLLER_NAME} from './home.controller';
import HomeService from './home.service';
import './home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: controller 
};

export default homeComponent;
