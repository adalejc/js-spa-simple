import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './main.scss';

import { router } from './router/index.router';

window.onload = () => {
  //console.log('Windows onload');
  //console.log(window.location.hash);
  router('#/');
}

window.addEventListener('hashchange', () => {
  //console.log(window.location.hash);
  router(window.location.hash);
}); 