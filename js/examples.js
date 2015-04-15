


Ergo.widgets.Icon.prototype.defaults.cls = 'icon fa fa-fw';



	

$(document).ready(function(){


	
	$( document ).ajaxError(function() {
		console.log(arguments);
	});	
	
	
	$(document).on('scroll', function(){
		Ergo.context.events.fire('scroll');
	});
	

/*	
	var fixed_header = false;
	var d = $('.page-header-ex').offset().top;
	var h = $('.page-header-ex').outerHeight();
	

	$(document).on('scroll', function() {
//		console.log($('html').scrollTop());
//		console.log($('.page-header-ex').offset());
		
		var y = $('html').scrollTop();
		
		if(y > d && !fixed_header) {
			$('.page-header-ex').css({position: 'fixed', width: '100%', top: 0});
			$('.page-content').css('margin-top', h);
			fixed_header = true;
		}
		else if(y <= d && fixed_header) {
			$('.page-header-ex').css({position: '', width: '', top: ''});
			$('.page-content').css('margin-top', 0);			
			fixed_header = false;
		}
		
	});
*/	
	
	$('html').click(function(e){
		var el = $(e.target);
		if(el[0] && el[0].localName == 'a' && el.attr('href') == '#') {
			e.preventDefault();
		}
	});
	



	// Подключаем данные к контексту
	$context.data('examples', EXAMPLES);

	// Переключаемся в состояние "main"
	$context.join('main');
	
	
});
