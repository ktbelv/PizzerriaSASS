let form = document.querySelector ('form');
let message = document.querySelector ('#confirm');

form.addEventListener('submit', function(e){
    message.style.display = 'block';
})