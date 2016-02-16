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
		etype: 'html',
		tag: 'header',
		as: 'header',
//		autoBind: false,
		$title: {
			tag: 'h1',
			text: 'todos'
		},
		$newTodo: {
			tag: 'input',
			as: 'new-todo',
			placeholder: 'What needs to be done?',
			events: {
				'vdom:keyup': function(e) {
					if(e.keyCode == KEY_ENTER) {
						var val = this.vdom.el.value;
						this.rise('addTask', val);
						this.vdom.el.value = '';
					}
				}
			}
		},
	});


	var Footer = $.ergo({
		tag: 'footer',
		as: 'footer',
		data: todos,
		$todoCount: {
			tag: 'span',
			as: 'todo-count',
			$counter: {
				tag: 'strong',
				binding: 'text',
				format: '#{*|countActive}'
			},
			$content: {
				format: ' #{*|countActive|pluralizeItem} left',
				binding: 'text'
			}
		},
		$filters: {
			tag: 'ul',
			as: 'filters',
			include: 'selectable',
//			autoBind: false,
			defaultItem: {
				tag: 'li',
				$content: {
					etype: 'html:a',
				},
				get: {
					'name': function() {
						return this.prop('text');
					}
				},
				set: {
					'href': function(v) {
						this.$content.prop('href', v);
					}
				}
			},
			selection: {
				lookup: function(k) {
					return this.item(k).$content;
				}
			},
			items: [
				{	text: 'All', href: '#/' },
				{	text: 'Active', href: '#/active' },
				{	text: 'Completed', href: '#/completed' }
			]
		},
		$clearBtn: {
			tag: 'button',
			as: 'clear-completed',
			text: 'Clear completed',
			onClick: 'rise:clearCompleted',
			format: '#{*|countCompleted}',
			binding: function(v) {
				this.toggle('hidden', !v);
			}
		},
		binding: function(v) {
			this.toggle('hidden', !v.length);
		}
	});


	var Content = $.ergo({
		etype: 'html',
		tag: 'section',
		as: 'main',
		data: todos,
		$checkbox: {
//			etype: 'html:checkbox',
			tag: 'input',
			type: 'checkbox',
			as: 'toggle-all',
			format: '#{*|allCompleted}',
			binding: 'checked',
			// binding: function(v) {
			// 	this.prop('checked', v);//v == 'true');
			// },
			events: {
				'vdom:change': function(e) {
//					console.log('change', this.vdom.el.checked);//.prop('checked'));
					this.rise('toggleAll', this.prop('checked'), e);
				}//'rise:toggleAll'
			}
		},
		$label: {
			tag: 'label',
			forName: 'toggle-all',
			text: 'Mark all as complete'
		},
		$list: {
			tag: 'ul',
			as: 'todo-list',
			dynamic: true,
			// events: {
			// 	'data:dirty': function(e) {
			// 		this._dataDiff([], [], e.updated);
			// 	}
			// },
			defaultItem: {
				tag: 'li',
				include: 'editor:input',
				editor: {
					dataId: 'title',
		      as: 'edit'
				},
				$content: {
					tag: 'div',
					as: 'view',
					$check: {
						tag: 'input',
						type: 'checkbox',
//						etype: 'html:checkbox',
						as: 'toggle',
						dataId: 'completed',
						binding: 'checked',
						// binding: function(v) {
						// 	this.prop('checked', v/*this.prop('value')*/);
						// },
						events: {
							'vdom:change': function(e) {
//								this.emit('change', this.prop('checked'), e);
								this.prop('value', this.prop('checked'));
							}
						},
//						onChange: 'prop:value'
					},
					$content: {
						tag: 'label',
						binding: 'text',
						format: '#{title}',
						onDoubleClick: 'rise:edit'
					},
					$close: {
						tag: 'button',
						as: 'destroy',
						onClick: 'rise:deleteTask'
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
		tag: 'section',
		as: 'todoapp',
//		data: data,
		items: [ Header, Content, Footer ],

		onAddTask: function(e) {
			todos.add( {title: e.$data.trim()} );
		},

		onDeleteTask: function(e) {
			e.target.data.del();
		},

		onEditTask: function(e) {
			e.target.data.set('title', e.$data.trim() );
		},

		onToggleAll: function(e) {
			console.log(e);
			todos.each(function(todo) {
				todo.set('completed', e.$data);
			})
		},

		onClearCompleted: function(e) {
			todos.each(function(todo) {
				todo.set('completed', false);
			})
		},


		states: {
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
