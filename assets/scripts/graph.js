$(document).ready(function() {
	graph();
	$(window).resize(graph);
});


function graph(){
	
	if ($(window).width() < 380) {
    	loop(1);
  	} else if ($(window).width() < 650) {
    	loop(2);
 	} else {
 		loop(3);
 	}
}

function loop(type) {
	$('.graphs .graph .item').each(function(){
		var percent = $(this).data('percent');
		var color = '#e84e0f';


		if(percent < 33) {
			color = '#ffc59b';
		} else if (percent < 66){
			color = '#f88c6c';
		} 

		if(type == 1) {
			$(this).width(percent).height(20).css({'background': color, 'margin-top': 0});
		} else if (type == 2) {
			$(this).width(percent*2).height(20).css({'background': color, 'margin-top': 0});
		} else if (type == 3) {
			$(this).height(percent).width(20).css({'background': color, 'margin-top': 100-percent});
		}
			
		$(this).find('span').html(percent + '%');

	});
}