
//========= Menu burger ============
$(document).ready(function () {
    const menu = $('.header__menu');
    const menuBtn = $('.header__burger');
    const body = $('body');

    if (menu.length && menuBtn.length) {
        menuBtn.on('click', function () {
            menu.toggleClass('active');
            menuBtn.toggleClass('active');
            body.toggleClass('lock');
        });

        menu.on('click', function (event) {
            if ($(event.target).hasClass('header__body')) {
                menu.removeClass('active');
                menuBtn.removeClass('active');
                body.removeClass('lock');
            }
        });
        menu.find('.header__link').on('click', function () {
            menu.removeClass('active');
            menuBtn.removeClass('active');
            body.removeClass('lock');
        });
    }
});

// ============ Якоря ==============

const anchors = $('a[href*="#"]');

anchors.on('click', function (event) {
    event.preventDefault();
    const blockID = $(this).attr('href').substring(1);
    $('#' + blockID)[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


// ============== Универсальные табы ===========

const tabsSwitchesItem = document.querySelectorAll('.tabs-switches__item');
const tabsContent = document.querySelectorAll('.tabs-content');

tabsSwitchesItem.forEach(item => item.addEventListener('click', event => {

    const tabsSwitchesItemTarget = event.target.getAttribute('data-tab');

    tabsSwitchesItem.forEach(element => element.classList.remove('active-tab'))
    tabsContent.forEach(element => element.classList.add('hidden'))
    tabsContent.forEach(element => element.classList.add('hide-anime'))


    item.classList.add('active-tab')
    document.getElementById(tabsSwitchesItemTarget).classList.remove('hidden');
}))

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab')
document.querySelector('#tab-1').classList.remove('hidden')


//   =================Observer Intersection==================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add('show-anime');
        }
        /* Якщо у else  прибрати умову if 
        анмаціїї будуть повторюватись постійно 
        до верху та до низу*/
        else {

            if (!entry.target.classList.contains('show-anime')) {
                entry.target.classList.remove('show-anime');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide-anime')
hiddenElements.forEach((el) => observer.observe(el));


// =========== Swiper ==========

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

        //Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
        //  Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true

    // },
    // Брейк поинты (адаптив)
    // Ширина экрана  

    breakpoints: {

        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },

        480: {
            slidesPerView: 2,

        },

        992: {
            slidesPerView: 3,

        },

    },

    // Брейк поинты (адаптив)
    // Соотношение сторон   

    // breakpoints: {
    //     '@0.75': {
    //         slidesPerView: 1,
    //         // spaceBetween: 30,
    //     },

    //     '@1.00': {
    //         480: {
    //             slidesPerView: 2,
    //         },

    //         '@1.50': {
    //             slidesPerView: 3,
    //         }
    //     },

    // }

    // spaceBetween: 30,

    // Автопрокрутка слайда 
    autoplay: {
        //Задержка при прокрутке
        delay: 2000,
        //Законсить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnInteraction: false
    },
});



































