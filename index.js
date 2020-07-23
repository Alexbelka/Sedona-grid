let button = document.querySelector('.curiosity__btn');
let popup = document.querySelector('.popup');

button.onclick = function(){
    if(!popup.classList.contains('popup--appear')){
        popup.classList.add('popup--appear');
    }
    else{
        popup.classList.remove('popup--appear');
    }

};