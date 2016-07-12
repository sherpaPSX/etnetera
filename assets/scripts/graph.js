$(document).ready(function() {
	graph();
	$(window).resize(graph);
});


function graph(){
	if ($(window).width() < 380) {
    	$('.graphs .graph .item').each(function(){
			var percent = $(this).data('percent');
			var color = '#e84e0f';


			if(percent < 33) {
				color = '#ffc59b';
			} else if (percent < 66){
				color = '#f88c6c';
			} 

			$(this).width(percent).height(20).css({'background': color, 'margin-top': 0});
			$(this).find('span').html(percent + '%');

		});
  	} else if ($(window).width() < 650) {
    	$('.graphs .graph .item').each(function(){
			var percent = $(this).data('percent');
			var color = '#e84e0f';


			if(percent < 33) {
				color = '#ffc59b';
			} else if (percent < 66){
				color = '#f88c6c';
			} 

			$(this).width(percent*2).height(20).css({'background': color, 'margin-top': 0});
			$(this).find('span').html(percent + '%');

		});
 	} else {
 		$('.graphs .graph .item').each(function(){
			var percent = $(this).data('percent');
			var color = '#e84e0f';


			if(percent < 33) {
				color = '#ffc59b';
			} else if (percent < 66){
				color = '#f88c6c';
			} 

			$(this).height(percent).width(20).css({'background': color, 'margin-top': 100-percent});
			$(this).find('span').html(percent + '%');

		});
 	}
}