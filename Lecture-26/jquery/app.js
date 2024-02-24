// console.log($("h1"));
// console.log($(".hi"));
// console.log($("#hello"));

// --------------------------

// h1.style.color = "red"

// $("h1").css("color", "red");
// $("h1").css("background-color", "green");

// $("h1").css({
//   color: "pink",
//   backgroundColor: "yellow",
//   border: "2px solid orange",
// });

// -----------------------
// getter & setter
// console.log($("#text").text("samarth vohra"));
// console.log($("#text").html("<h1>samarthhhh</h1>"));

// ------------------------
// getAttribute & setAttribute

// Attr() // getter & setter

// console.log($("input").attr("type")); //getter
// console.log($("input").attr("type", "color"));

// -----------------------

// $("li").css("color", "red");
// $("li").first().css("color", "green");
// $("li").last().css("color", "green");

// ---------------------

$("h1").addClass("red green border");
$("h1").removeClass("red green border");
$("h1").toggleClass("red");
console.log($("h1").hasClass("red"));
