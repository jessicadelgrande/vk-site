"use strict";

// NAV HOVERS
$("ul li").hover(function () {
	$(this).siblings().stop().fadeTo(200, 0.3);
}, function () {
	$(this).siblings().stop().fadeTo(400, 1);
});

// NAVBAR SHRINK ON SCROLL
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// 	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
// 		document.getElementById("navContainer").style.padding = "16px 48px 8px 0";
// 		document.getElementById("navRobot").style.width = "24px";
// 		document.getElementById("navRobot").style.height = "24px";
// 		document.getElementById("navRobot").style.backgroundSize = "24px";
// 	} else {
// 		document.getElementById("navContainer").style.padding = "24px 48px 16px 0";
// 		document.getElementById("navRobot").style.width = "48px";
// 		document.getElementById("navRobot").style.height = "48px";
// 		document.getElementById("navRobot").style.backgroundSize = "48px";
// 	}
// }

// WHAT WE PROVIDE - SLIDE-DOWN TEXT BLOCKS
$(".provideText-lunch").click(function () {
	$(".provideHidden-lunch").slideToggle();
});

$(".provideText-tools").click(function () {
	$(".provideHidden-tools").slideToggle();
});

$(".provideText-roleModels").click(function () {
	$(".provideHidden-roleModels").slideToggle();
});

// SPONSORS - SLIDE-DOWN TEXT BLOCKS
$(".sponsorText-lighthouse").click(function () {
	$(".sponsorHidden-lighthouse").slideToggle();
});

$(".sponsorText-nodeday").click(function () {
	$(".sponsorHidden-nodeday").slideToggle();
});

$(".sponsorText-enactus").click(function () {
	$(".sponsorHidden-enactus").slideToggle();
});

$(".sponsorText-communihelp").click(function () {
	$(".sponsorHidden-communihelp").slideToggle();
});

$(".sponsorText-tchc").click(function () {
	$(".sponsorHidden-tchc").slideToggle();
});