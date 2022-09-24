$(function(){

    $('.questions__item-title').on('click', function(){

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    })
    
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });
});

// var some = document. querySelectorAll(".header__inner")[0];
// var rect = some.getBoundingClientRect();
// some.innerHTML = "ширина = " + rect.width + "<br>";
// some.innerHTML += "высота = " + rect.height + "<br>";
// some.innerHTML += "сверху = " + rect.top + "<br>";
// some.innerHTML += "слева = " + rect.left;


