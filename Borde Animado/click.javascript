const card = document.querySelector ('.card');


card.addEventListener ('click', ()=>{
    const speed = Math.random () * 5 + 3;
    card.style.setProperty ('--Speed', `${Speed}`)

});