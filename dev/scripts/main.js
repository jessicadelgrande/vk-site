// NAV HOVERS
$("ul li").hover(function() {
	$(this).siblings().stop().fadeTo(200,0.3);
}, 
function() {
	$(this).siblings().stop().fadeTo(400,1);
});

// NAV AND OVERLAY ANIMATION
$( "#burgerContainer" ).click(function() {
	$(this).toggleClass("active");
	$("#overlayContainer").toggleClass("open");
});

// WHAT WE PROVIDE - SLIDE-DOWN TEXT BLOCKS
$(".provideText-lunch").click(function() {
	$(".provideHidden-lunch").slideToggle();
});

$(".provideText-tools").click(function() {
	$(".provideHidden-tools").slideToggle();
});

$(".provideText-roleModels").click(function() {
	$( ".provideHidden-roleModels" ).slideToggle();
});

// SPONSORS - SLIDE-DOWN TEXT BLOCKS
$( ".sponsorText-lighthouse" ).click(function() {
	$( ".sponsorHidden-lighthouse" ).slideToggle();
});

$( ".sponsorText-nodeday" ).click(function() {
	$( ".sponsorHidden-nodeday" ).slideToggle();
});

$( ".sponsorText-enactus" ).click(function() {
	$( ".sponsorHidden-enactus" ).slideToggle();
});

$( ".sponsorText-communihelp" ).click(function() {
	$( ".sponsorHidden-communihelp" ).slideToggle();
});

$( ".sponsorText-tchc" ).click(function() {
	$( ".sponsorHidden-tchc" ).slideToggle();
});