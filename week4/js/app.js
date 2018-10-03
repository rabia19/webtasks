// app js

// alert('Hello SDU');

// $('.logo-menu .red-btn').html('Hello');

$('.logo-menu .red-btn').click(function(e) {
	$(this).html('Click');
	return false;
});

$('.banner-carousel .carousel-item a').click(
	function(e) {
		var image_path = $(this).attr('href');
		$('.overlay').fadeIn(1000);
		$('.popup .inner-wrap').html('<img src="' + image_path + '" alt="Big Image" />');
		$('.popup').fadeIn(1400);

		return false;
	}
);

$('.popup .close-btn').click(
	function(e) {
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
	}
);

$(document).ready(function() {
	$('.banner-carousel').slick();
})