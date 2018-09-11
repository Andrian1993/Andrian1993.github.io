$(function () {
  Barba.Pjax.start();
  $('nav ul li').hover(
    function () {
      $('ul', this).stop().slideDown(400)
    },
    function () {
      $('ul', this).stop().slideUp(400)
    }
  )

  $(function () {
    for (var i = 1; i <= 16; i++) {
      let imgName = 'img/portfolio/' + i + '.jpg';
      let imgHolder = $('<div class="col-3 portfolio-image"></div>')
        let img = $('<img>')
        img.attr('src', imgName)
        imgHolder.append(img)
        $('.image-holder').append(imgHolder)
        console.log('hello')
    }
  }())

  const purple = $('.site-color-purple').click(
    function () {
      $('nav, .footer').css('background-color', '#B47796')
    }
  )

  const aqua = $('.site-color-aqua').click(
    function () {
      $('nav, .footer').css('background-color', '#76c7c0')
    }
  )

  const green = $('.site-color-green').click(
    function () {
      $('nav, .footer').css('background-color', '#70c570')
    }
  )


  // let button = document.getElementsByClassName('top-menu');
  // console.log(button);
  // let arr = Array.from(button);
  // console.log(arr[0]);

let array = [];
$('.blog-button').each(function () {
    array.push(this.innerText);
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
      }
});




  // const pageName = (window.location.pathname).replace('.html','');
  // pageName.slice(0);
  // console.log(pageName);

  // const path = window.location.pathname;
  // console.log(path);


  // let button = document.getElementsByTagName('blog-button');
  // console.log(button);

  // let buttonName = button.childNodes.length;
  // console.log('button-name'+ buttonName);

  // let elements = [];
  // for (let i = 0; i < buttonName.length; i++) {
  //   elements.push(i);
  //   console.log(elements);

  // }

  // if (buttonName === 'BLOG') {
  //     button.classList.add('active');
  // }else if (buttonName === '/') {
  //     button.classList.add('active');
  // }
  $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  });
$(document).ready(function() {

    // Activate Carousel
$(".carousel #Carousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $(".carousel #Carousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $(".carousel #Carousel").carousel("prev");
});

$(".carousel-control-next").click(function(){
  $(".carousel #Carousel").carousel("next");
});



});



})
