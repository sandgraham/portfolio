$(function(){

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