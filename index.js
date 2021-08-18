window.addEventListener('DOMContentLoaded', () => {
    const sideSlidesWrapper = document.querySelector('.slider__side-wrapper'),
          mainSlidesWrapper = document.querySelector('.slide__wrapper'),
          slider = document.querySelector('.slider'),
          slides = document.querySelectorAll('.slide'),
          upBtn = document.querySelector('.slider__arrow_up'),
          downBtn = document.querySelector('.slider__arrow_down');

    let count = 0,
        cursor = 0;

    let autoSlider = setInterval(interval, 6000);

    function interval() {
        counter('up');
        getSlide();
    }

    function counter(arrow) {
        if( arrow == 'up') {
            count++;
            if (count > slides.length - 1) {
                count = 0;
            }
        } else if ( arrow == 'down') {
            count--;
            if (count < 0) {
                count = slides.length - 1;
            }
        }
    }

    function getSlide() {
        mainSlidesWrapper.style.top = `-${count * slides[0].clientHeight}px`;

        sideSlidesWrapper.style.top = `${count * 100}vh`;
    }
    
    getSlide();

    //arrows
    upBtn.addEventListener('click', () => {
        clearInterval(autoSlider);
        counter('up');
        getSlide();
        autoSlider = setInterval(interval,6000);
    });

    downBtn.addEventListener('click', () => {
        clearInterval(autoSlider);
        counter('down');
        getSlide();
        autoSlider = setInterval(interval,6000);
    });

    //keyboard arrows
    window.addEventListener('keydown', (e) => {
        if(e.key == 'ArrowUp') {
            upBtn.click();
        } else if (e.key == 'ArrowDown') {
            downBtn.click();
        }
    });

    //scrol
    window.addEventListener('wheel', e => {
        if (e.deltaY > 0) {
            downBtn.click();
        } else if (e.deltaY < 0) {
            upBtn.click();
        }
    });

    //swipe
    slider.addEventListener('mousedown', e => {
        cursor = e.clientY;
    });

    slider.addEventListener('mouseup', e => {
        if (e.clientY > (cursor + 150)) {
            downBtn.click();
        } else if(e.clientY < (cursor - 150)) {
            upBtn.click();
        }
    });

    console.log(`
    1) Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение - 10 баллов
    2) Дополнить исходный проект обязательным дополнительным функционалом - 10 баллов
    3) Дополнить исходный проект дополнительным функционалом на выбор:
        -пролистывание слайдера колёсиком мышки - 10 баллов
        -пролистывание слайдера не только кликами по кнопкам, но и свайпами мышки - 10 баллов 
        -слайдер работает автоматически каждые 6 секунд - 10 баллов
    -----------------------------------------------------------------------------------------------
    общий балл - 30/30 баллов!`);
});