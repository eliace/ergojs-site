

var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra dignissim nisl at fermentum. Donec id nisl ut ligula consectetur fermentum at vel urna. Mauris orci tellus, ullamcorper non malesuada eu, aliquet a diam. Phasellus nibh quam, interdum et egestas sit amet, eleifend in augue. Aliquam elementum libero quis est sodales auctor. Suspendisse ac dignissim mauris. Suspendisse scelerisque tristique molestie. Maecenas et tellus nulla. Duis gravida mauris et mi porta, eu scelerisque dolor placerat.';
var LOREMIPSUM_2 = 'Donec elementum convallis lacus, nec accumsan arcu placerat nec. Integer dapibus lectus at eros ullamcorper malesuada. Suspendisse potenti. Aenean magna quam, bibendum sit amet mi mollis, convallis scelerisque velit. Aliquam ac tempor eros. Vestibulum venenatis neque vitae venenatis sodales. Suspendisse lobortis nec lorem a consequat. Proin lorem ante, pharetra finibus urna sit amet, commodo sollicitudin risus.';
var LOREMIPSUM_3 = 'Praesent dapibus nunc id quam pellentesque sagittis. Nam scelerisque ut dui in cursus. Morbi fringilla, tellus nec finibus rutrum, ex purus posuere tortor, vitae sodales mi ipsum eu ipsum. Aenean et tristique ex. Vestibulum non tellus id augue dapibus malesuada nec sit amet nisi. Maecenas sed velit vel enim maximus interdum ac nec lectus. In et ante ullamcorper felis sagittis tincidunt eu et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate consectetur mauris nec ultricies. Mauris accumsan quam ut dolor porta placerat. Nulla lobortis viverra enim et ornare. Maecenas ullamcorper dignissim odio ut eleifend. Quisque bibendum ornare libero id hendrerit. ';
var LOREMIPSUM_4 = 'Aliquam erat volutpat. Vivamus eu leo odio. Sed a massa ac sem condimentum rhoncus vel at risus. Integer tincidunt ultricies risus sed luctus. Vestibulum tincidunt dolor a ante consectetur interdum. Sed ut sapien bibendum, congue turpis non, convallis diam. Aliquam mollis, quam non interdum egestas, libero lectus lobortis mauris, vitae tempor nibh diam nec nisi. Sed dolor nulla, molestie nec neque eget, venenatis tristique leo. Phasellus non scelerisque eros, non blandit metus. ';
var LOREMIPSUM_5 = 'Suspendisse et sem ac enim semper dapibus sed a risus. Duis vel tellus ligula. Fusce posuere venenatis tellus, vitae tempor lacus pellentesque ac. Proin sit amet pretium lorem. Cras in commodo sem. Proin dolor mi, lacinia nec lectus et, volutpat dapibus arcu. Proin accumsan tortor varius mi feugiat, nec sodales metus lacinia. Duis euismod sollicitudin maximus. Fusce ut lectus libero. Aenean lobortis interdum justo, at fringilla metus ultricies vel. Sed at massa tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at iaculis nisl. Cras sit amet molestie augue. Donec convallis malesuada sem, nec mollis risus faucibus at. ';




Ergo.defineClass('Blog.app.Context', 'Ergo.core.Context', {

/*
	defaults: {
		events: {
			'load': function() {

				if(this.options.windowBox) {
					var dy = $('body').outerHeight(true) - $('body').height();
					$('body').height(window.innerHeight - dy);
				}

			}
		}
	},


	_construct: function(o) {
		this._super(o);



		if('events' in o){
			for(var i in o.events){
				var callback_a = o.events[i];
				callback_a = $.isArray(callback_a) ? callback_a : [callback_a]; //FIXME
				for(var j in callback_a) {
					var callback = callback_a[j];

					this.events.reg(i, callback, this);
				}
			}
		}






		if(o.hashLinks) {

			// обрабатываем нажатие ссылок
			$('html').click(function(e){
				var el = $(e.target);
		//		console.log(el[0].localName);
		//		console.log(el.attr('href'));
				if(el[0] && el[0].localName == 'a' && el.attr('href') == '#') {
					e.preventDefault();

					// !
					// var w = el.ergo();
					// if(w && w.opt('link')) {
		// //				$context.setState( w.opt('link'), 'pages', {}, true );
					// }
				}
			});


		}


		if(o.history) {

			// для полифила
			var location = window.history.location || window.location;


		}




		if(o.windowBox) {

			// обновляем компоновку при изменении размеров окна
			$(window).on('resize', function(){

				//устанавливаем высоту <body> по высоте окна
				var dy = $('body').outerHeight(true) - $('body').height();
				$('body').height(window.innerHeight - dy);
				// обновляем компоновку
				$context.app._layoutChanged();

			});


		}


	},


	_post_construct: function(o) {
		this._super(o);

		$(document).ready(function() {
			this.events.fire('load');
		}.bind(this));

	},



	state: function(s, fn) {
		this.states.state(s, function() {
			fn.apply(this, arguments);
			return false;
		}.bind(this));
	},




	ready: function(fn) {

		this.events.reg('load', fn);

	}
*/



});




// инициализируем контекст приложения
$context = new Blog.app.Context({
	// history: true,
	// windowBox: true,
	// hashLinks: true
});






$(document).ready(function() {

	$context._widget = $ergo({tag: document.body});

	$context.join('main');

});
