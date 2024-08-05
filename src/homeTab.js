import foodBackground from './assets/food-background.jpg';

const homeTab = function(){
    
    const homeItem = document.createElement(`div`);
    homeItem.classList.add(`show`);
    homeItem.dataset.tab = 'home';

    homeItem.innerHTML = `
     <h1>food for heros</h1>
     <img src="${foodBackground}" width="500"  alt="">
   `
   return homeItem;
}

export {homeTab};