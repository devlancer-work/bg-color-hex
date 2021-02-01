

const btn = document.getElementById('button');

const body = document.querySelector('body');

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const value = document.getElementsByClassName('hex-value');

btn.addEventListener('click', function(){

    let hex = '#';

    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[index];
    }
    document.getElementById('hex-value').innerHTML = hex;

    body.style.backgroundColor = hex;

});