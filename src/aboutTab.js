const aboutTab = function(){
    
  const aboutItem = document.createElement(`div`);

  aboutItem.dataset.tab = 'about';
  
  aboutItem.innerHTML = `
   <h1>food for heros</h1>
   <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel
    explicabo sed necessitatibus quaerat, incidunt impedit reiciendis voluptatibus atque iure?
   </p>
  `
   return aboutItem;
}

export {aboutTab};