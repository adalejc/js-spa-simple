import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './main.scss';

import { router } from './router/index.router';

window.onload = () => {
  console.log('Windows onload');
  router(window.location.hash);
}

window.addEventListener('hashchange', () => {
  //console.log(window.location.hash);
  router(window.location.hash);
}); 