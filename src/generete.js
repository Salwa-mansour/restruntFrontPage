import foodBackground from './assets/food-background.jpg';
const maindiv = document.querySelector('#content');

const generateTabs = function () {
  
    const homeItem = document.createElement(`div`);
    homeItem.classList.add(`show`);
    homeItem.dataset.tab = 'home';

    homeItem.innerHTML = `
     <h1>food for heros</h1>
     <img src="${foodBackground}" width="500"  alt="">
   `
//   ----------------
const aboutItem = document.createElement(`div`);

aboutItem.dataset.tab = 'about';

aboutItem.innerHTML = `
 <h1>food for heros</h1>
 <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel
  explicabo sed necessitatibus quaerat, incidunt impedit reiciendis voluptatibus atque iure?
 </p>
`
// --------------------
const contactItem = document.createElement(`div`);

contactItem.dataset.tab = 'contact';

contactItem.innerHTML = `
 <h1>food for heros</h1>
   <form action="">
        <input type="text" name="name" placeholder="name">
        <input type="email" name="email" placeholder="email">
        <textarea name="message" name="message" placeholder="message" cols="30" rows="10"></textarea>
  </form>
`
// ----------------
  maindiv.appendChild(homeItem) ;
  maindiv.appendChild(aboutItem);
  maindiv.appendChild(contactItem);
}

export {
    generateTabs
};