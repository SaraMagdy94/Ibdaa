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

      $("html").niceScroll({
        cursorcolor: "#3AADE6",
        cursorwidth: "10px"
      });
    })