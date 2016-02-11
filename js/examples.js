
Ergo.alias('mixins:fa', {
	defaults: {
		as: 'fa fa-fw'
	}
})


$ergo.mergeOptions(Ergo.widgets.Icon.prototype, Ergo.alias('mixins:fa'), { defaults: ['object'] });



//Ergo.widgets.Icon.prototype.defaults.cls = 'icon fa fa-fw';







$(document).ready(function(){


	$context._widget = Ergo.core.Widget({
		tag: document.body
	});

//	$context.data = {};



	$( document ).ajaxError(function() {
		console.log(arguments);
	});


	$(document).on('scroll', function(){
		Ergo.context.events.fire('scroll');
	});






	// $context.showStats = function() {
	// 	$(body).append( $(this.stats) );
	// }
	//
	// $context.hideStats = function() {
	// 	$(body).append( $(this.stats) );
	// }


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



	$context._growls.render(document.body);


	// Подключаем данные к контексту
	$context.examples = EXAMPLES;

	// Переключаемся в состояние "main"
	$context.join('main');


});
