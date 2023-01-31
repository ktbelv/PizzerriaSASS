let slider = document.querySelector(".slider");
let wrapper = document.querySelector(".wrapper");
let next = document.querySelector(".sliderNext");
let prev = document.querySelector(".sliderPrev");
let slides = document.querySelectorAll(".slide");
let slidesNum = slides.length;

function goLeft(){
    let sliderWidth = parseFloat(getComputedStyle(slider).width);
    
    let wrapperPos = parseFloat(getComputedStyle(wrapper).left);

    if(wrapperPos >= 0){
        return;
    }
    else{
        wrapper.style.left = (wrapperPos + sliderWidth) + 'px';
    }
}

function goRight(){
    let sliderWidth = parseFloat(getComputedStyle(slider).width);
    
    let wrapperPos = parseFloat(getComputedStyle(wrapper).left);

    console.log (sliderWidth);
    console.log (wrapperPos);

    console.log (slides);

    if(wrapperPos <= -(slidesNum-1)*sliderWidth){
        wrapper.style.left = 0 + 'px';
    }
    else{
        wrapper.style.left = (wrapperPos - sliderWidth) + 'px';
    }
}


next.onclick = function(){
    goRight();
    con
}

prev.onclick = function(){
    goLeft();
}

