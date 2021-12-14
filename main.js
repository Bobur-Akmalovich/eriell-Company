// let photo = document.querySelector('.photo');
// let photo2 = document.querySelector('.photo2');
// let button = document.querySelector('.button');
// let button2 = document.querySelector('.button2')

// button.addEventListener('click',function(){
//     photo.style.display = 'none';
//     photo2.style.display = 'block';
// })

// button2.addEventListener('click',function(){
//     photo2.style.display = 'none';
//     photo.style.display = 'block';
    
// })

// const prevBtn = document.querySelector('.button1')
const nextBtn = document.querySelector('.button2')
const sliderImgs = document.querySelector('.slider__ota')
const slideImg = document.querySelectorAll('.slider__ota img');

let i = 0;

function updateSlidePosition() {
    if(i == slideImg.length){
        i = 0
    
    }
    sliderImgs.style.marginTop = `${-i * 90}vh`
}

nextBtn.addEventListener('click', function(){
    i++;

    // console.log(i);
    updateSlidePosition()
})



  