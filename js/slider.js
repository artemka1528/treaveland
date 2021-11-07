let next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    slide = document.querySelectorAll('.slider-box'),
    sliders = document.querySelector('.slider-content'),
    dot = document.querySelectorAll('.dot');
let k = 2010;
let k1 = 0;
let k2 = 0;
let end = -2345;
let start = 0;
console.log(dot);
sliders.addEventListener('click' , ()=> {
    sliders.style.marginLeft = 0 +'px';
});
next.addEventListener('click', ()=> {
    if(k1==end) {
        sliders.style.marginLeft = start +'px';
        k1 = 0;
        for(let i = 0; i< dot.length; i++) {
            dot[i].classList.remove('dot-activ');
        }
        dot[0].classList.add('dot-activ');
        return k1;
    }
    k1 = k1 - 335;
    sliders.style.marginLeft = k1 +'px';
    if(k1<=-1005&&k1>-2010) {
        for(let i = 0; i< dot.length; i++) {
            dot[i].classList.remove('dot-activ');
        }
        dot[1].classList.add('dot-activ');
    } else if (k1<=-2010) {
        for(let i = 0; i< dot.length; i++) {
            dot[i].classList.remove('dot-activ');
        }
        dot[2].classList.add('dot-activ');
    }
});
prev.addEventListener('click', ()=> {
    console.log(k1,end);
    if(k1==0) {
        sliders.style.marginLeft = end +'px';
        k1 = end;
        for(let i = 0; i< dot.length; i++) {
            dot[i].classList.remove('dot-activ');
        }
        dot[2].classList.add('dot-activ');
        return k1;
    } else {
        k1 = k1 + 335;
        sliders.style.marginLeft = k1 +'px';
        if(k1<=-1005&&k1>-2010) {
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[1].classList.add('dot-activ');
        } else if (k1<=-2010) {
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[2].classList.add('dot-activ');
        } else if(k1>-1005) {
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[0].classList.add('dot-activ');
        }
    }
});
for(let i = 0; i<dot.length; i++) {
    dot[i].addEventListener('click' , ()=> {
        if(i==0) {
            sliders.style.marginLeft = 0 +'px';
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[0].classList.add('dot-activ');
        } else if(i==1) {
            sliders.style.marginLeft = -1005 +'px';
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[1].classList.add('dot-activ');
        } else if(i==2) {
            sliders.style.marginLeft = -2010 +'px';
            for(let i = 0; i< dot.length; i++) {
                dot[i].classList.remove('dot-activ');
            }
            dot[2].classList.add('dot-activ');
        }
    });
}