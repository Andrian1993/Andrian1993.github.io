$(function () {

  $('nav ul li').hover(
    function () {
      $('ul', this).stop().slideDown(400)
    },
    function () {
      $('ul', this).stop().slideUp(400)
    }
  )

$(function(){
    for (var i = 1; i <= 16; i++) {
        let imgName = "img/portfolio/" + i + ".jpg";
        let imgHolder = $('<div class="col-3 portfolio-image"></div>');
        let img = $('<img>');
        img.attr('src', imgName);
        imgHolder.append(img);
        $('.image-holder').append(imgHolder);
        console.log('hello');        
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

  let saveColor = localStorage.setItem('citeColor', JSON.stringify(green))
  let parseColor = JSON.parse(localStorage.getItem('citeColor'))
})
