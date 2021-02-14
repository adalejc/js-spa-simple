import view from '../views/posts.html';

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();

};

export default async () => {
  /** Agreagamos el template html como vista al neuvo elemento */
   const divElement = document.createElement('div');
   divElement.innerHTML = view;

   const postsElement = divElement.querySelector('#posts');
   let totalElement = divElement.querySelector('#total');

   /** Agregamos los eventos del elemento a insertar */

   const posts = await getPosts();
   totalElement.innerHTML  = posts.lenght;

   //console.log(posts);
   posts.forEach(element => {
     postsElement.innerHTML += `
      <li class="list-group-item border-primary bg-dark text-white">
        <h5>${element.title}</h5>
        <p>${element.body}</p> 
      </li>
     `;
   });

   /** retornamos el elevemento listo */
  return divElement;    
}
