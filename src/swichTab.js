const container =document.querySelector('#content')
const controlesContainer = document.querySelector('nav');



const swicher=function(event){
    if(!event.target.matches('button')) return;
    const tab = event.target.dataset.nav
    container.querySelector('.show').classList.remove('show');
    container.querySelector(`[data-tab*="${tab}"]`).classList.add('show');

    
}


controlesContainer.addEventListener('click',()=>{swicher(event)})