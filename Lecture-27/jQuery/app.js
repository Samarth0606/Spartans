// $("li").css({
//   color: "red",
//   backgroundColor: "yellow",
// });

// ---------------------------

// deprecated
// $("button").click(function () {
//   console.log("hello click");
// });

// on ->(addEventLister)

// $("button").on("click", function () {
//   console.log("mai hu event listener");
// });

// // ye jqeury vaala this hai not js
// let harsh = $("li");
// harsh.on("click", function () {
//   $(this).css("color", "pink");
// });

// let sam = document.getElementById("sam");
// // wrong ❌
// sam.on("click", function () {
//   console.log("mai beech ka hu");
// });

// ----------------------------------------

// $("input").keyup(function () {
//   console.log("key vapas upar aagyi");
//   console.log($(this).val("bhaukaal"));
// });

// $("input").keydown(function () {
//   console.log("key neeche chali aagyi");
//   console.log($(this).val());
// });

$("#fade-out").on("click", function () {
  //   $("#container").fadeOut(5000);
  $("#container").slideUp();
});

$("#fade-in").on("click", function () {
  //   $("#container").fadeIn(2000);
  $("#container").slideDown();
});
