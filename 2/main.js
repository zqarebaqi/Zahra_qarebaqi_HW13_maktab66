$(".accordion").css({
  "background-color": "#eee",
  color: "#444",
  cursor: "pointer",
  padding: "18px",
  width: "100%",
  border: "none",
  "text-align": "left",
  "font-size": "15px",
});

$(".panel").css({
  padding: "0 18px",
  // display: "none",
  "background-color": "white",
});

$(".container").css({
  width: "600px",
  margin: "0 auto",
});

// $(document).ready(function () {
//   // $(".accordion").removeClass("active");
//   $(".panel").hide();

//   $(".accordion").click(function () {
//     $(this).addClass("active");
//     $(".active").next().slideDown();
//     // $(".active").next().slideToggle();
//     // $(this).next().removeClass("active");

//     if ($(this).next().hasClass("active")) {
//       $(this).next().removeClass("active").slideUp();
//     } else {
//       //
//     }
//   });

$(document).ready(function () {
  var allPanels = $(".panel").hide();

  $(".accordion").click(function () {
    allPanels.slideUp();
    $(this).next().slideDown();
  });
});
