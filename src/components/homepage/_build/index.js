import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerHomepageController from './homepage.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerHomepageController(ngModule, options);
}
