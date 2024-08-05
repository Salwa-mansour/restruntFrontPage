const contactTab = function(){
    
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
    return contactItem;
}

export {contactTab};