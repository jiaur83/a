/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      -
 * @created_by  -
 * @created_at  -
 * @modified_by -
 */

/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on("load", function () {
  // code should be execute here
});

/**
 * ========================================================
 * this function execute when DOM element ready
 * ===========================================================
 */

$(document).ready(function () {
  // code should be execute here


  // Add slideDown animation to Bootstrap dropdown when expanding.
  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
  });

  //   function add(a, c) {
  //     c(a);
  //   }

  //   add('kayes', function result(d) {
  //     console.log(d);
  //   });
});
