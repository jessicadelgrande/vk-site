"use strict";

// NAV HOVERS
$("ul li").hover(function () {
	$(this).siblings().stop().fadeTo(200, 0.3);
}, function () {
	$(this).siblings().stop().fadeTo(400, 1);
});

// NAVBAR CHANGES ON SCROLL
$(window).on("scroll", function () {
	if ($(this).scrollTop() > 24) {
		$("#navLinkContainer").addClass("shrink");
		$("#navLink").addClass("shrink");
		$("#fa-bars").addClass("burger");
	} else {
		$("#navLinkContainer").removeClass("shrink");
		$("#navLink").removeClass("shrink");
		$("#fa-bars").removeClass("burger");
	}
});

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