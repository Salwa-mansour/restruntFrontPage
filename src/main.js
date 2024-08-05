import './style.css';
import './homeTab';
import { homeTab } from './homeTab';
import './aboutTab';
import { aboutTab } from './aboutTab';
import './contactTab';
import { contactTab } from './contactTab';



const container =document.querySelector('#content')
const controlesContainer = document.querySelector('nav');



const swicher=function(event){
    if(!event.target.matches('button')) return;
    const tab = event.target.dataset.nav;
    clear(container);
    switch (tab) {
        case 'home':
            console.log(homeTab())
         container.appendChild(homeTab())
          break;
        
        case 'about':
           container.appendChild(aboutTab())
          break;
        case 'contact':
           container.appendChild(contactTab())
          break;
        default:
          break;
      }
      
    // container.querySelector('.show').classList.remove('show');
    // container.querySelector(`[data-tab*="${tab}"]`).classList.add('show');

    
}

function clear(container){
    container.replaceChildren();
}
container.appendChild(homeTab())
controlesContainer.addEventListener('click',()=>{swicher(event)})