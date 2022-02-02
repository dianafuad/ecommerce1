
// function resize() {
//    if ($(window).width() < 767) {
//       $('.navbar').removeClass('fixed-top').addClass('fixed-bottom');
//    }
//    else{
//     $('.navbar').removeClass('fixed-bottom').addClass('fixed-top');
//    }
// }

// //watch window resize
// $(window).on('resize', function() {
//    resize()
// });


 
jQuery(document).ready(function($) {
    "use strict";
   
    $('#products1').owlCarousel({
        loop: true,
        // center: true,
        items: 4,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 2500,
        navigation : true,       
        slideSpeed: 300,
        paginationSpeed: 400,
        mouseDrag: true,    
        autoplayHoverPause:true,
        
        // smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          },
          1170: {
            items: 4
          }
        }
    });
    $('#products2').owlCarousel({
        loop: true,
        // center: true,
        items: 4,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 2500,
        navigation : true,       
        slideSpeed: 300,
        paginationSpeed: 400,
        mouseDrag: true,    
        autoplayHoverPause:true,
        rtl:true,
        // smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          },
          1170: {
            items: 4
          }
        }
    });

    $('#products3').owlCarousel({
      loop: true,
      // center: true,
      items: 4,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 2500,
      navigation : true,       
      slideSpeed: 300,
      paginationSpeed: 400,
      mouseDrag: true,    
      autoplayHoverPause:true,
      // smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1170: {
          items: 4
        }
      }
  });

  
  $('#products4').owlCarousel({
    loop: true,
    // center: true,
    items: 4,
    margin: 0,
    autoplay: false,
    dots:true,
    autoplayTimeout: 2500,
    navigation : true,       
    slideSpeed: 300,
    paginationSpeed: 400,
    mouseDrag: true,    
    autoplayHoverPause:true,
    // smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1170: {
        items: 4
      }
    }
});
  });
  
  

  function myFunction(x) {
      if (x.matches) {
          document.getElementById("catagory1").addEventListener("mouseover", mouseOver1);
          document.getElementById("catagory1").addEventListener("mouseout", mouseOut1);
          document.getElementById("catagory2").addEventListener("mouseover", mouseOver2);
          document.getElementById("catagory2").addEventListener("mouseout", mouseOut2);
          document.getElementById("catagory3").addEventListener("mouseover", mouseOver3);
          document.getElementById("catagory3").addEventListener("mouseout", mouseOut3);
          document.getElementById("nav").addEventListener("nav", nav_dawn);
          
          // window.addEventListener("resize"
      }
  }



  function  nav_dawn() {
    document.getElementById("nav").classList.remove("fixed-top");
    document.getElementById("nav").classList.add("fixed-bottom");
  }


  function mouseOver1() {
      document.getElementById("first-sub-women").style.top = "0";
      document.getElementById("first-sub-women").style.opacity = "1";
      document.getElementById("second-sub-women").style.top = "0";
      document.getElementById("second-sub-women").style.opacity = "1";
      document.getElementById("third-sub-women").style.top = "0";
      document.getElementById("third-sub-women").style.opacity = "1";
      document.getElementById("new-products-section").style.zIndex = "-2";
      document.getElementById("new-products-section").style.opacity = "0";



  }

  function mouseOver2() {


      document.getElementById("first-sub-kids").style.top = "0";
      document.getElementById("first-sub-kids").style.opacity = "1";
      document.getElementById("second-sub-kids").style.top = "0";
      document.getElementById("second-sub-kids").style.opacity = "1";
      document.getElementById("third-sub-kids").style.top = "0";
      document.getElementById("third-sub-kids").style.opacity = "1";
      document.getElementById("new-products-section").style.zIndex = "-2";
      document.getElementById("new-products-section").style.opacity = "0";
  }

  function mouseOver3() {

      document.getElementById("first-sub-men").style.top = "0";
      document.getElementById("first-sub-men").style.opacity = "1";
      document.getElementById("second-sub-men").style.top = "0";
      document.getElementById("second-sub-men").style.opacity = "1";
      document.getElementById("third-sub-men").style.top = "0";
      document.getElementById("third-sub-men").style.opacity = "1";
      document.getElementById("new-products-section").style.zIndex = "-2";
      document.getElementById("new-products-section").style.opacity = "0";

  }

  function mouseOut1() {
      document.getElementById("first-sub-women").style.top = "-100%";
      document.getElementById("first-sub-women").style.opacity = "0";
      document.getElementById("second-sub-women").style.top = "-100%";
      document.getElementById("second-sub-women").style.opacity = "0";
      document.getElementById("third-sub-women").style.top = "-100%";
      document.getElementById("third-sub-women").style.opacity = "0";
      document.getElementById("new-products-section").style.zIndex = "0";
      document.getElementById("new-products-section").style.opacity = "1";
  }

  function mouseOut2() {
      document.getElementById("first-sub-kids").style.top = "-100%";
      document.getElementById("first-sub-kids").style.opacity = "0";
      document.getElementById("second-sub-kids").style.top = "-100%";
      document.getElementById("second-sub-kids").style.opacity = "0";
      document.getElementById("third-sub-kids").style.top = "-100%";
      document.getElementById("third-sub-kids").style.opacity = "0";
      document.getElementById("new-products-section").style.zIndex = "0";
      document.getElementById("new-products-section").style.opacity = "1";
  }

  function mouseOut3() {
      document.getElementById("first-sub-men").style.top = "-100%";
      document.getElementById("first-sub-men").style.opacity = "0";
      document.getElementById("second-sub-men").style.top = "-100%";
      document.getElementById("second-sub-men").style.opacity = "0";
      document.getElementById("third-sub-men").style.top = "-100%";
      document.getElementById("third-sub-men").style.opacity = "0";
      document.getElementById("new-products-section").style.zIndex = "0";
      document.getElementById("new-products-section").style.opacity = "1";
  }
  var x = window.matchMedia("(min-width: 577px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction);


  // var divs = ["women-slider", "men-slider","kids-slider"];
  // var visibleDivId = null;

  // function divVisibility(divId) {
  //     if (visibleDivId === divId) {
  //         visibleDivId = null;
  //     } else {
  //         visibleDivId = divId;
  //     }
  //     hideNonVisibleDivs();
  // }

  // function hideNonVisibleDivs() {
  //     var i, divId, div;
  //     for (i = 0; i < divs.length; i++) {
  //         divId = divs[i];
  //         div = document.getElementById(divId);
  //         if (visibleDivId === divId) {
  //             div.style.display = "block";
  //         } else {
  //             div.style.display = "none";
  //         }
  //     }
  // }

  // function showall() {
  //     var i, div;
  //     for (i = 0; i < divs.length; i++) {

  //         div = document.getElementById(divs[i]);

  //         div.style.display = "block";

  //     }
  // }

  