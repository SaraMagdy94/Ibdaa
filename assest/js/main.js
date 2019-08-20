    $(document).ready(function () {
    
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });

      //Click event to scroll to top
      $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
      });


        $(".slider").slick({
          prevArrow: ".cust-slide .pre",
          nextArrow: ".cust-slide .nex",
          slidesToShow: 4,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            // rtl: true,
            responsive: [
             {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 2
              }
            }]
        });
        $(".slide-div").slick({
          prevArrow: ".what-slide .prev",
            nextArrow: ".what-slide .next",
          slidesToShow: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          // rtl: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
              }
            }
          ]
        });
// nice scroll
      $("html").niceScroll({
        cursorcolor: "#3AADE6",
        cursorwidth: "10px"
      });
// take roll
      $num = $('.my-card').length;
      $even = $num / 2;
      $odd = ($num + 1) / 2;

      if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
      } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
      }

      $('.my-card').click(function () {
        $slide = $('.active').width();
        console.log($('.active').position().left);

        if ($(this).hasClass('next')) {
          $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
        } else if ($(this).hasClass('prev')) {
          $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
      });

      // Keyboard nav
      $('html body').keydown(function (e) {
        if (e.keyCode == 37) { // left
          $('.active').prev().trigger('click');
        }
        else if (e.keyCode == 39) { // right
          $('.active').next().trigger('click');
        }
      });
    });
    ///////////////////////////////////
    // controllers
    $(".take-roll .prev").click(function () {
      $slide = $(".active").width();
      $('.active').prev().trigger('click');
    });

    $(".take-roll .next").click(function () {
      $slide = $(".active").width();
      $('.active').next().trigger('click');
    });
