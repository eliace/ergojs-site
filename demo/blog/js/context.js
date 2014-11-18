

Ergo.defineClass('Blog.app.Context', 'Ergo.core.Context', {
	
	
	
	
	_construct: function(o) {
		this._super(o);
		
		
		
		
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
				$('body').height(window.innerHeight);
				// обновляем компоновку
				$context.app._layoutChanged();
				
			});
			
			
			$('body').height(window.innerHeight);		
		}
		
		
	},
	
	
	
	state: function(s, fn) {
		this.states.state(s, function() {
			fn.apply(this, arguments);
			return false;
		}.bind(this));
	}
	
	
	
	
	
	
});
