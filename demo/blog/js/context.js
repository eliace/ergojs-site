

Ergo.defineClass('Blog.app.Context', 'Ergo.core.Context', {
	
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
	
	
	
	
});




// инициализируем контекст приложения
$context = new Blog.app.Context({
	history: true,
	windowBox: true,
	hashLinks: true
});






