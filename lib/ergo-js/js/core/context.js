
/**
 * Контекст
 *
 * Сериализуемое состояние приложения
 *
 * @class
 * @name Ergo.core.Context
 * @extends Ergo.core.Object
 * 
 */
Ergo.defineClass('Ergo.core.Context', 'Ergo.core.Object', /** @lends Ergo.core.Context.prototype */{
	
	defaults: {
//		plugins: [Ergo.Observable] //, Ergo.Statable]
		include: 'observable',

		events: {
			'scope:restore': function(e) {

				console.log('- history', e.scope, e.params);

				this.restore(e.params);
			},
			'scope:joined': function(e) {

				if(e.scope.history && !this._no_history) {


					var name_a = e.scope._name.split(':');
					var p = {};
					p[name_a[0]] = (name_a.length > 1) ? name_a[1] : true;
					window.history.pushState( Ergo.override(p, this._params), e.scope._name );//, 'title', '#'+url);

					console.log('+ history', e.scope._name, Ergo.override(p, this._params));

				}				
			}
		}
	},
	
	
	
	
	
	_construct: function(o) {
		this._super(o);
		
		
		this._scopes = {};
		this._callbacks = {};
		this._depends = {};
		this._data = {};
		this._params = {};


		if('events' in o) {
			for(var i in o.events) {
				var callback_a = o.events[i];
				for(var j = 0; j < callback_a.length; j++) {
					var callback = callback_a[j];
					if( $.isFunction(callback) ) {
						this.events.on(i, callback, this);
					}
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
			
			var ctx = this;




			$(window).on('popstate', function(e) {

				var p = e.originalEvent.state;

				console.log('popstate');
//				console.log(e.originalEvent);
//				console.log(p);

				if(p) {
					ctx._no_history = true;
					ctx.events.fire('scope:restore', {scope: p._scope, params: p});
					ctx._no_history = false;
				}
				else {
					ctx.reset();
					ctx.init();
				}


			//	console.log('popstate:', e.originalEvent);

			});





			// $(window).on('popstate', function(e) {
			// 	var p = e.originalEvent.state;
			// 	if(p) {
			// 		self._no_history = true;
			// 		self.events.fire('restore', {scope: p._scope, params: p});
			// 		self._no_history = false;
			// 	}
			// });

			
			// this.events.reg('scope:joined', function(e) {

			// 	if(e.scope.history && !self._no_history) {
			// 		window.history.pushState( Ergo.override({_scope: e.scope._name}, self._params), e.scope._name );//, 'title', '#'+url);
			// 	}

			// });

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
	
	
	/*
	state: function(s, fn) {
		this.states.state(s, function() {
			fn.apply(this, arguments);
			return false;
		}.bind(this));
	},
	*/
	
		
	
	
	open_glass_pane: function() {
		var gp = $('<div class="glass-pane" autoheight="ignore"/>')
			.on('mousedown', function(e){
				e.preventDefault();
				return false;				
			});		
			
		$('body').append(gp);	
			
		return gp;
	},
	
	
	close_glass_pane: function() {
		$('.glass-pane').remove();
	},



	// получение виджета из контекста (обход всех скоупов)
	widget: function(key) {

		var name_a = key.split('@');

		if(name_a.length == 2) {
			return this._scopes[name_a[0]].widget(name_a[1]);
		}

		// for(var i in this._scopes) {
		// 	var w = this._scopes[i].widgets[key];
		// 	if(w) return w;
		// }

	},


	// получение данных из контекста
	data: function(key, v) {

		if(arguments.length == 1)
			return this._data[key];
		else
			this._data[key] = v;

		// for(var i in this._scopes) {
		// 	var d = this._scopes[i].data[key];
		// 	if(d) return d;
		// }

	},




	param: function(key, v) {
		if(arguments.length == 1)
			return this._params[key];
		else
			this._params[key] = v;		
	},


	// регистрация скоупа
	scope: function(name, callback) {

		if(arguments.length == 1) {
			if(name[0] == ':') {
				for(var i in this._scopes) {
					if(i.indexOf(name) > 0)
						return this._scopes[i];
				}
			}
			else {
				return this._scopes[name];
			}
		}
		else if(arguments.length == 2) {
			this._callbacks[name] = callback;
		}
		else {
			this._callbacks[name] = arguments[2];			
			this._depends[name] = Object.isArray(arguments[1]) ? arguments[1] : [arguments[1]] ;
		}

	},


	// подсоединяем скоуп к контексту
	join: function(scope_name, parent, container) {

		var ctx = this;

		if(!this._callbacks[scope_name])
			throw 'Scope ['+scope_name+'] is not registered in context';


		var name_a = scope_name.split(':');
		var group = (name_a.length == 1) ? null : name_a[name_a.length-1];

		// если присутствует скоуп с такой же группой, то отсоединяем его
		for(var i in this._scopes) {
			if(i.indexOf(':'+group) != -1) {
				this.events.fire('scope:disjoin', {scope: this._scopes[i]});
				this.disjoin(i);
			}
		}

		// если отсутствует базовый скоуп, то сначала присоединяем его
		if( this._depends[scope_name] ) {
			this._depends[scope_name].forEach(function(base_scope) {
				if( !this._scopes[base_scope] )
					ctx.join(base_scope);
			});
		}


		this._params[scope_name] = this._params[scope_name] || {};

		// создаем скоуп
		var scope = new Ergo.core.Scope();
		scope._context = this;
		scope._name = scope_name;
		scope._parent = parent;
		scope._params = this._params[scope_name];
		scope._container = container;

		if(parent)
			parent._children[scope_name] = scope;

		this._scopes[scope_name] = scope;


		var deferred = $.Deferred();

		// инициализируем скоуп
		var initPromise = this._callbacks[scope_name].call(this, scope, scope._params, deferred.promise()) || true;

		// загружаем данные скоупа?


		$.when(initPromise).done(function() {

			// рендерим виджеты скоупа (включаем виджеты в скоуп)
			for(var i in scope.widgets) {
				
				var w = scope.widgets[i];
				
				if(!w._rendered) {
					if(scope._container)
						scope._container.set(i, w);
					else
						w.render('body');
				}
			}


			ctx.events.fire('scope:joined', {scope: scope});

//			console.log('joined');

			deferred.resolve(scope, scope._params);
		});

		return deferred.promise();
	},


	// отсоединяем скоуп от контекста
	disjoin: function(scope_name) {

		var scope = this._scopes[scope_name];


		// отсоединяем вложенные скоупы
		for(var i in scope._children) {
			this.disjoin(i);
		}


		// удаляем виджеты скоупа (отсоединяем виджеты от скоупа)
		for(var i in scope.widgets) {
			
			var w = scope.widgets[i];

			console.log('destroy', i);


			w._destroy();
			
		}


		delete this._scopes[scope_name];

		console.log('disjoin', scope_name);

		if(scope._parent)
			delete scope._parent._children[scope_name];



		// выгружаем данные?

	},


	// сменить контекст
	to: function(scope_name, params, data) {

		// удалить текущий субконтекст?


		// создаем новый контекст
		var ctx = new Ergo.core.Context();
		ctx.params = params;
		ctx._data = data;
//		ctx._scope = this;

		ctx.join(scope_name);

		this._subcontext = ctx;

	},



	reset: function() {

		for(var i in this._scopes) {
			this.events.fire('scope:disjoin', {scope: this._scopes[i]});
			this.disjoin(i);
		}
		
	},


	init: function() {

		var ctx = this;

		var p = window.history.state;

		this._no_history = true;

		this.events.fire('scope:restore', {params: (p ? p : ctx.options.main)});

	// 	if(p) {

	// 		// восстанавливаем
	// 		this.restore(p);
	// 	}
	// 	else {
	// 		// устанавливаем по умолчанию
	// //		$context.join( $context.options.main );
	// 		this.restore( $context.options.main )
	// 	}

		this._no_history = false;				
	},


	restore: function(p) {

		// обходим параметры
		for(var i in p) {
			for(var j in this._callbacks) {
				var s = ''+i+':'+p[i];
				if(i == j || s == j) {
	//				console.log('restore', i);
					$context.join(j);
				}
			}
		}

	}

	
});



/**
* Скоуп
*
*	Структурный элемент страницы, включающий набор виджетов
*
*
*/

Ergo.defineClass('Ergo.core.Scope', 'Ergo.core.Object', {


	_construct: function(o) {
		this._super(o);

		this.widgets = {};

		this._children = {};
//		this.data = {};

//		this.context = null;
	},




	// получение/создание виджета из пространства контекста
	widget: function(key, w) {

		if(arguments.length == 1) {
			return this.widgets[key];
		}
		else if(arguments.length == 2) {

			if($.isPlainObject(w)) {
				w = $.ergo(w, null, this._context);
//				w.bind();
			}

			this.widgets[key] = w;

			return w;
		}

	},


	disjoin: function() {

		this._context.disjoin(this._name);
	}



});








Ergo.context = new Ergo.core.Context();
