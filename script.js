const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
// const outside = document.querySelector('.search');

btn.addEventListener('click', ()=>{
    search.classList.toggle('active');
    input.focus();
})


// search.addEventListener('click', ()=>{
//     search.classList.remove('active');

// })