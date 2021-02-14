import views from '../views/home.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.classList = 'container-fluid text-white';
  divElement.innerHTML = views;

  const btnClick = divElement.querySelector('#btnClick');
  btnClick.addEventListener('click', () => {
    alert('click en botton');
    console.log('click en botton');
  });

  return divElement;
};