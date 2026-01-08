$(function () {
  $("a").click(function (e) {
    if ($(this).attr("href") === "#") {
      e.preventDefault();
    }
  })

  $(window).on("load", function () {
    $("section.hero").addClass("load");
  })

  $("#header nav .depth1 > li > a").mouseenter(function () {
    $("#header nav .depth2").removeClass("open");
    $("#header").addClass("hover");
    $(this).parent().find(".depth2").addClass("open");
  })
  $("#header").mouseleave(function () {
    $("#header").removeClass("hover");
    $("#header nav .depth2.open").removeClass("open");
  })

  $(".header-full-btn").click(function () {
    $(".full-header-bg").toggleClass("full");
    $("#full-header").toggleClass("full");
    $(this).toggleClass("full");
  })

  $("li.facilities-card").mouseenter(function () {
    $("li.facilities-card").removeClass("active");
    $(this).addClass("active");
  })

  $("main").fullpage({
    navigation: true,
    navigationPosition: "right",
    // scrollBar: true,
    scrollingSpeed: 1200,
    easingcss3: "ease-in-out",
    autoScrolling: true,
    onLeave: function (anchors, i) {
      if (i >= 2) {
        $(`main section:nth-child(${i})`).addClass("on");
      }
      if (i === 5) {
        $("#header").addClass("bk");
        $("#fp-nav").addClass("bk");
        $(".fp-slidesNav").addClass("bk");
      } else {
        $("#header").removeClass("bk");
        $("#fp-nav").removeClass("bk");
        $(".fp-slidesNav").removeClass("bk");
      }
    },
  })
})