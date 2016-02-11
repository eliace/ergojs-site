(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!


	// $(window).on('popstate', function(e) {
	// 	console.log( window.location.hash );
	// });


//	$context.events.fire('scopeRestore');

//	$context._widget = $ergo({tag: document.body});



	var todos = new Ergo.data.Collection({
		provider: 'localStorage',
		storeId: 'todos',
		events: {
			'dirty': 'flush' // auto flush
		}
	});

	todos.fetch();



	var Header = $.ergo({
		etype: 'html:header',
		as: 'header',
//		autoBind: false,
		$title: {
			etype: 'html:h1',
			text: 'todos'
		},
		$newTodo: {
			etype: 'html:input',
			as: 'new-todo',
			placeholder: 'What needs to be done?',
			onChange: function(e) {
				this.prop('value', '');
				this.rise('addTask', e);
			}
		},
	});


	var Footer = $.ergo({
		etype: 'html:footer',
		as: 'footer',
		data: todos,
		$todoCount: {
			etype: 'html:span',
			as: 'todo-count',
			$counter: {
				etype: 'html:strong',
				binding: 'text',
				format: '#{*|countActive}'
			},
			$content: {
				etype: 'html:.',
				format: ' #{*|countActive|pluralizeItem} left',
				binding: 'text'
			}
		},
		$filters: {
			etype: 'html:ul',
			as: 'filters',
			include: 'selectable',
//			autoBind: false,
			defaultItem: {
				etype: 'html:li',
				$content: {
					etype: 'html:a',
				},
				get: {
					'name': function() {
						return this.prop('text');
					}
				}
			},
			selection: {
				lookup: function(k) {
					return this.item(k).$content;
				}
			},
			items: [
				{	text: 'All', $content__href: '#/' },
				{	text: 'Active', $content__href: '#/active' },
				{	text: 'Completed', $content__href: '#/completed' }
			]
		},
		$clearBtn: {
			etype: 'html:button',
			as: 'clear-completed',
			text: 'Crear completed',
			onClick: 'action:clearCompleted',
			format: '#{*|countCompleted}',
			binding: function(v) {
				this.toggle('hidden', v == '0');
			}
		},
		binding: function(v) {
			this.toggle('hidden', !v.length);
		}
	});


	var Content = $.ergo({
		etype: 'html:section',
		as: 'main',
		data: todos,
		$checkbox: {
			etype: 'html:checkbox',
//			type: 'checkbox',
			as: 'toggle-all',
			// events: {
			// 	'jquery:change': function() {
			// 		this.events.fire('change', {value: this.el.prop('checked')});
			// 	}
			// },
			binding: function(v) {
				this.el.prop('checked', v == 'true');
			},
			format: '#{*|allCompleted}',
			onChange: function(e) {
//				console.log(e);
				this.rise('toggleAll', e);
				e.interrupt();
			}
//			onChange: 'action:toggleAll'
		},
		$label: {
			etype: 'html:label',
			_for: 'toggle-all',
			text: 'Mark all as complete'
		},
		$list: {
			etype: 'html:ul',
			as: 'todo-list',
			dynamic: true,
			events: {
				'data:dirty': function(e) {
//					console.log('dirty', e.updated);
					this._dataDiff([], [], e.updated);
				}
			},
			defaultItem: {
				etype: 'html:li',
				include: 'editor:input',
				editor: {
					dataId: 'title',
		      as: 'edit'
				},
				$content: {
					etype: 'html:div',
					as: 'view',
					$check: {
						etype: 'html:checkbox',
						as: 'toggle',
						dataId: 'completed'
					},
					$content: {
						etype: 'html:label',
						binding: 'text',
						format: '#{title}',
						onDoubleClick: 'action:edit'
					},
					$close: {
						etype: 'html:button',
						as: 'destroy',
						onClick: 'action:deleteTask'
					},
				},
				binding: function(v) {
					this.toggle('completed', !!v.completed);
				},


				onEdit: function() {

					this.$content.unrender();

					this.startEdit( this.data.copy() );

				},

				onStopEdit: function(e) {

					this.$content.render();

					this.rise('editTask', e);

				},
				onCancelEdit: function() {
					this.$content.render();
				}
			}
		},
		binding: function(v) {
			this.$checkbox.toggle('hidden', !v.length);
		}
	});




	var ToDo = $.ergo({
		etype: 'html:section',
		as: 'todoapp',
//		data: data,
		items: [ Header, Content, Footer ],

		onAddTask: function(e) {
			todos.add( {title: e.value.trim()} );
		},

		onDeleteTask: function(e) {
			e.target.data.del();
		},

		onEditTask: function(e) {
			e.target.data.set('title', e.value.trim() );
		},

		onToggleAll: function(e) {
			todos.each(function(todo) {
				todo.set('completed', e.value);
			})
		},

		onClearCompleted: function(e) {
			todos.each(function(todo) {
				todo.set('completed', false);
			})
		},


		states: {
			'': {
				'all': function(on) {
					Content.$list.opt('dynamicFilter', null);
					Content.$list._rebind();
					Footer.$filters.selection.set('All');
				},
				'active': function(on) {
					var f = function(v) {
						return !v.completed;
					};
			//		Content.$list.filter('compose', f);
					Content.$list.opt('dynamicFilter', f);
					Content.$list._rebind();

					Footer.$filters.selection.set('Active');
				},
				'completed': function(on) {
					var f = function(v) {
						return v.completed;
					};
			//		Content.$list.filter('compose', f);
					Content.$list.opt('dynamicFilter', f);
					Content.$list._rebind();

					Footer.$filters.selection.set('Completed');
				}
			}
		}

	});

	$('body').prepend(ToDo.el);

	ToDo.render();


/*
	$context.scope('', function($scope) {
		//
	});


	$context.scope('all', function($scope) {
		Content.$list.opt('dynamicFilter', null);
		Content.$list._rebind();
		Footer.$filters.selection.set('All');
	});

	$context.scope('active', function($scope) {
		var f = function(v) {
			return !v.completed;
		};
//		Content.$list.filter('compose', f);
		Content.$list.opt('dynamicFilter', f);
		Content.$list._rebind();

		Footer.$filters.selection.set('Active');
	});

	$context.scope('completed', function($scope) {
		var f = function(v) {
			return v.completed;
		};
//		Content.$list.filter('compose', f);
		Content.$list.opt('dynamicFilter', f);
		Content.$list._rebind();

		Footer.$filters.selection.set('Completed');
	});

*/

	var routes = {
		'/': ToDo.set.bind(ToDo, '.all'),
		'/active': ToDo.set.bind(ToDo, '.active'),
		'/completed': ToDo.set.bind(ToDo, '.completed')
	};

	var router = Router(routes);

	router.init();




})(window);
