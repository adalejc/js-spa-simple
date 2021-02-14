import { pages } from '../controllers/index';

let content = document.getElementById('root');


const  router = async (route) => {
  content.innerHTML = '';
  switch(route) {
    case '#/':
      return content.appendChild(pages.home());
    case '#/Posts':
      return content.appendChild(await pages.posts());
    case '#/Products':
      return console.log('#/products');
    default:
      return content.appendChild(pages.notFound());
  }
};

export { router };