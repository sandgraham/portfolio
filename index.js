$(function(){

	$('.trigger').click(function(event){
		event.preventDefault();
		$(this).next().slideToggle();
	});

})