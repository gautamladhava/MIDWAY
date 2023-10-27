function eqHeight() {
  $.fn.extend({
    equalHeights: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeights" + Math.random()).replace(".", "");
      $(this)
        .each(function () {
          var thistop = $(this).offset().top;
          if (thistop > top) {
            $("." + classname).removeClass(classname);
            top = thistop;
          }
          $(this).addClass(classname);
          $(this).height("auto");
          var h = Math.max.apply(
            null,
            $("." + classname)
              .map(function () {
                return $(this).height();
              })
              .get()
          );
          $("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  $(".partenter-list .image-content-card .image-block").equalHeights();
  $(".partenter-list .image-content-card .content-block").equalHeights();
  $(".feature-services-section .services-card-list .services-card .content-block").equalHeights();
  
}

function hfuncation() {
    var hhight = $(".header").innerHeight();
    $(".main-wrapper").css("padding-top", hhight);
  }
  function ffuncation() {
    var fhight = $(".footer").innerHeight();
    $(".main-wrapper").css("padding-bottom", fhight);
    $(".footer").css("margin-top", -fhight);
  }

  $(document).ready(function(){
    $(".up-arrow").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "200");
    });
    $(".toggle-button").click(function(){
      $("body,html").toggleClass("open-menu");
    })
    $(".overlay").click(function(){
      $("body,html").removeClass("open-menu");
    })
    $(".search-icon").click(function(){
      $(".search-block").css("right",0);
    })
    $(".header .header-block .search-block .input-field .search-img .close-input").click(function(){
      $(".search-block").css("right","-100%");
    })
  
    hfuncation();
    ffuncation();
    eqHeight();
  })
  $(window).resize(function () {
    hfuncation();
    ffuncation();
    eqHeight();
  });