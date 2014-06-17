$(function(){

	$('#main-content').show(); //This should be the initial draw

	var paths = $('path');

	paths.each(function(i,path){
		var length = path.getTotalLength();

		path.style.transition = path.style.WebkitTransition = 'none';

		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;

		path.getBoundingClientRect();

		path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out';

		path.style.strokeDashoffset = '0';
	})

	$('.trigger').click(function(e){
		$(this).next().slideToggle();
	});

	$('.button').click(function(e){
		nav(e.target.id);
	});

	var openContent = "main-content";
	function nav (clickedButton) {
		var clickedContent = clickedButton.split("-")[0] + "-content";
		if (clickedContent !== openContent) {
			$('#'+openContent).hide();
			$('#'+clickedContent).show();
			openContent = clickedContent;
		};
	};

})