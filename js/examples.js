

var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


$(document).ready(function(){
	
	
	var EXAMPLES = [{
		title: 'Ядро',
		children: [{
			title: 'Объект',
			children: [{
				title: 'Параметры (опции)',
				name: 'core/object'
			}, {
				title: 'Наследование',
				name: 'core/object-2'
			}, {
				title: 'Примеси',
				name: 'core/object-3'
			}, {
				title: 'Пространства имен',
				name: 'core/object-4'
			}]
		}, {
			title: 'Виджет',
			children: [{
				title: 'Параметры (опции)',
				name: 'core/widget'
			}, {
				title: 'Иерархия',
				name: 'core/widget-2'				
			}, {
				title: 'HTML',
				name: 'core/widget-3'
			}]
		}, {
			title: 'Элементы и компоненты',
			children: [{
				title: 'Элементы (items)',
				name: 'core/items-and-components'
			}, {
				title: 'Компоненты (components)',
				name: 'core/items-and-components-2'
			}, {
				title: 'Фабрики',
				name: 'core/items-and-components-3'
			}]
		}, {
			title: 'Компоновка',
			children: [{
				title: 'Авто-высота',
				name: 'core/layout-autoheight'
			}]
		}, {
			title: 'События',
			children: [{
				title: 'Обработка событий',
				name: 'core/events'
			}, {
				title: 'Подъем и спуск',
				name: 'core/events-2'
			}, {
				title: 'Группы событий',
				name: 'core/events-3'
			}]
		}, {
			title: 'Данные',
			children: [{
				title: 'Связывание',
				name: 'core/data-binding'
			}, {
				title: 'Форматирование',
				name: 'core/data-binding-2'
			}, {
				title: 'Настройка',
				name: 'core/data-binding-3'
			}, {
				title: 'Динамическое связывание',
				name: 'core/data-binding-4'
			}, {
				title: 'Обратное связывание',
				name: 'core/data-binding-5'
			}]
		}]
	}, {
		title: 'Виджеты',
		children: [{
			title: 'Базовые элементы',
			children: [{
				title: 'Бокс',
				name: 'basic/box'
			}, {
				title: 'Иконка',			
				name: 'basic/icon'
			}, {
				title: 'Кнопка',			
				name: 'basic/button'
			}, {
				title: 'Ссылка',
				name: 'basic/link'
			}, {
				title: 'Линия',
				name: 'basic/line'
			}, {
				title: 'Список',
				name: 'basic/list'
			}, {
				title: 'Панель',
				name: 'basic/panel'
			}, {
				title: 'Таблица',
				name: 'basic/table'
			}, {
				title: 'Текст',
				name: 'basic/text'
			}, {
				title: 'Дерево',
				name: 'basic/tree'
			}]
		}, {
			title: 'Кнопки'
		}, {
			title: 'Поля'
		}]
	}, {
		title: 'Компоновки'
	}, {
		title: 'Примеси'
	}];
	
	
	
	var w = $.ergo({
		etype: 'box',
		id: 'content-menu',
		defaultItem: {
			layout: 'inherited',
			autoRender: false,
			components: {
				title: {
					dataId: 'title',
					binding: 'text'
				},
				content: {
					etype: 'list-tree',
					dataId: 'children',
					node: {
						$content: {
//							etype: 'link',
							format: '#{title}',
							onClick: function() {
								this.parent.states.toggle('expanded');
								
								var v = this.data.get();
								if(v.name) {
									load_sample(v.name, v.title);
								}
							}
						}
					}
					
				}
			}
		},
		data: EXAMPLES,
		dynamic: true
/*		
		etype: 'tree',
		id: 'content-menu',
		data: EXAMPLES,
		node: {
			$content: {
				etype: 'link',
				format: '#{title}',
				onClick: function() {
					this.parent.states.toggle('expanded');
					
					var v = this.data.get();
					if(v.name) {
						load_sample(v.name, v.title);
					}
				}
			}
		}
*/		
	});
	
	w.$render('.page-content > aside');
	
	
	$context = new Ergo.core.Object({
		plugins: [Ergo.Observable]
	});
	
	$context.create_sample = function(title, o, s) {
		
		// Ergo.indent_s = '  ';
// 		
		// var s = Ergo.pretty_print(o);
		
		var smpl = $.ergo({
			etype: 'panel',
			cls: 'sample',
			title: title,
			$content: {
				etype: 'tab-panel',
				tabs: [{
					tab: {
						text: 'Пример',
						cls: 'sample-tab'
					},
					id: 'sample'
//					$content: o
				}, {
					tab: 'Код',
					$content: {
						etype: 'html:pre',
//						cls: 'sh_javascript'
						$content: {
							etype: 'html:code',
							cls: 'javascript',
						}
					}
				}]
			}
		});
		
		smpl.$render('#samples');
		
		smpl.content.tabbar.item(0).states.set('selected');
		
		
		$context._sample = smpl;
	};
	
	
	$context.alert = function(msg, type) {
		
		type = type || 'info';
		
		var titles = {
			info: 'Информация! ',
			success: 'Успех! '
		};
		
		$.ergo({
			render: '#sample',
			etype: 'alert',
			title: titles[type],
			text: msg,
			state: type
		});
		
	};
	
	
	
	var load_sample = function(name, title) {
		
		$('#samples').empty();

		$context.events.unreg_all();

		$context.create_sample(title);
		
		$.getScript('samples/'+name+'.js').success(function(script){
			
//			$('pre', $context._sample.el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
			$('pre code', $context._sample.el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
			
			$('pre code', $context._sample.el).each(function(i, block) {
		    hljs.highlightBlock(block);
		  });		
			
			
//			sh_highlightDocument();			
		});
		
	};
	
	
	
	$( document ).ajaxError(function() {
		console.log(arguments);
	});	
	
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
	
	
	$('html').click(function(e){
		var el = $(e.target);
		if(el[0] && el[0].localName == 'a' && el.attr('href') == '#') {
			e.preventDefault();
		}
	});
	
	
	
});
