/* eslint-disable no-undef */
import $ from "jquery";
$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").fadeOut();
    $(".animated-row").each(function () {
      var $this = $(this);
      $this.find(".animate").each(function (i) {
        var $item = $(this);
        var animation = $item.data("animate");
        $item.on("inview", function (event, isInView) {
          if (isInView) {
            setTimeout(function () {
              $item.addClass("animated " + animation).removeClass("animate");
            }, i * 50);
          } else if (!screencheck(767)) {
            $item.removeClass("animated " + animation).addClass("animate");
          }
        });
      });
    });
  });

  // Header Type = Fixed
  $(window).on("scroll", function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 300) {
      $(".site-header").addClass("scrolled-header animated fadeInDown");
    } else {
      $(".site-header").removeClass("scrolled-header animated fadeInDown");
    }
  });

  // Menu Function for DropDown
  $.fn.menumaker = function (options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          title: "",
          format: "dropdown",
          sticky: false,
        },
        options
      );

    return this.each(function () {
      cssmenu.prepend('<div id="menu-button">' + settings.title + "</div>");
      $(this)
        .find("#menu-button")
        .on("click", function () {
          $(this).toggleClass("menu-opened");
          var mainmenu = $(this).next("ul");
          if (mainmenu.hasClass("open")) {
            mainmenu.hide().removeClass("open");
          } else {
            mainmenu.show().addClass("open");
            if (settings.format === "dropdown") {
              mainmenu.find("ul").show();
            }
          }
        });

      cssmenu.find("li ul").parent().addClass("has-sub");

      var multiTg = function () {
        cssmenu
          .find(".has-sub")
          .prepend('<span class="submenu-button"></span>');
        cssmenu.find(".submenu-button").on("click", function () {
          $(this).toggleClass("submenu-opened");
          if ($(this).siblings("ul").hasClass("open")) {
            $(this).siblings("ul").removeClass("open").hide();
          } else {
            $(this).siblings("ul").addClass("open").show();
          }
        });
      };

      if (settings.format === "multitoggle") multiTg();
      else cssmenu.addClass("dropdown");

      if (settings.sticky === true) cssmenu.css("position", "fixed");

      var resizeFix = function () {
        if ($(window).width() > 768) {
          cssmenu.find("ul").show();
        }

        if ($(window).width() <= 768) {
          cssmenu.find("ul").hide().removeClass("open");
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };

  $("#cssmenu").menumaker({
    title: "",
    format: "multitoggle",
  });
});
