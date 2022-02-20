$(function () {
  $('.result__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });

  $('.diploma__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });
});

// скролл
  $(document).ready(function(){
  $("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1777);
    e.preventDefault();
    return false;
  });
});


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

