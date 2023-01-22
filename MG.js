const boxes = document.querySelectorAll('.box');


boxes.forEach(function(box) {
    let randomNum = Math.floor(Math.random() * 12);        
    box.style.order = randomNum;
});