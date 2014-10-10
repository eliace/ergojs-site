


Ergo.widgets.Icon.prototype.defaults.cls = 'icon fa fa-fw';



var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra dignissim nisl at fermentum. Donec id nisl ut ligula consectetur fermentum at vel urna. Mauris orci tellus, ullamcorper non malesuada eu, aliquet a diam. Phasellus nibh quam, interdum et egestas sit amet, eleifend in augue. Aliquam elementum libero quis est sodales auctor. Suspendisse ac dignissim mauris. Suspendisse scelerisque tristique molestie. Maecenas et tellus nulla. Duis gravida mauris et mi porta, eu scelerisque dolor placerat.';
var LOREMIPSUM_2 = 'Donec elementum convallis lacus, nec accumsan arcu placerat nec. Integer dapibus lectus at eros ullamcorper malesuada. Suspendisse potenti. Aenean magna quam, bibendum sit amet mi mollis, convallis scelerisque velit. Aliquam ac tempor eros. Vestibulum venenatis neque vitae venenatis sodales. Suspendisse lobortis nec lorem a consequat. Proin lorem ante, pharetra finibus urna sit amet, commodo sollicitudin risus.';
var LOREMIPSUM_3 = 'Praesent dapibus nunc id quam pellentesque sagittis. Nam scelerisque ut dui in cursus. Morbi fringilla, tellus nec finibus rutrum, ex purus posuere tortor, vitae sodales mi ipsum eu ipsum. Aenean et tristique ex. Vestibulum non tellus id augue dapibus malesuada nec sit amet nisi. Maecenas sed velit vel enim maximus interdum ac nec lectus. In et ante ullamcorper felis sagittis tincidunt eu et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate consectetur mauris nec ultricies. Mauris accumsan quam ut dolor porta placerat. Nulla lobortis viverra enim et ornare. Maecenas ullamcorper dignissim odio ut eleifend. Quisque bibendum ornare libero id hendrerit. ';
var LOREMIPSUM_4 = 'Aliquam erat volutpat. Vivamus eu leo odio. Sed a massa ac sem condimentum rhoncus vel at risus. Integer tincidunt ultricies risus sed luctus. Vestibulum tincidunt dolor a ante consectetur interdum. Sed ut sapien bibendum, congue turpis non, convallis diam. Aliquam mollis, quam non interdum egestas, libero lectus lobortis mauris, vitae tempor nibh diam nec nisi. Sed dolor nulla, molestie nec neque eget, venenatis tristique leo. Phasellus non scelerisque eros, non blandit metus. ';
var LOREMIPSUM_5 = 'Suspendisse et sem ac enim semper dapibus sed a risus. Duis vel tellus ligula. Fusce posuere venenatis tellus, vitae tempor lacus pellentesque ac. Proin sit amet pretium lorem. Cras in commodo sem. Proin dolor mi, lacinia nec lectus et, volutpat dapibus arcu. Proin accumsan tortor varius mi feugiat, nec sodales metus lacinia. Duis euismod sollicitudin maximus. Fusce ut lectus libero. Aenean lobortis interdum justo, at fringilla metus ultricies vel. Sed at massa tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at iaculis nisl. Cras sit amet molestie augue. Donec convallis malesuada sem, nec mollis risus faucibus at. ';


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
				title: 'Вес',
				name: 'core/layout'
			}, {
				title: 'Контейнер и обертка',
				name: 'core/layout-2'
			}, {
				title: 'Авто-высота',
				name: 'core/layout-3'
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
		}, {
			title: 'Состояния',
			children: [{
				title: 'Настройка'
			}, {
				title: 'Переходы'
			}, {
				title: 'Группировка'
			}]
		}]
	}, {
		title: 'Виджеты',
		children: [{
			title: 'Базовые',
			children: [{
				title: 'Бокс',
				name: 'widgets/basic/box'
			}, {
				title: 'Иконка',			
				name: 'widgets/basic/icon'
			}, {
				title: 'Кнопка',			
				name: 'widgets/basic/button'
			}, {
				title: 'Ссылка',
				name: 'widgets/basic/link'
			}, {
				title: 'Линия',
				name: 'widgets/basic/line'
			}, {
				title: 'Список',
				name: 'widgets/basic/list'
			}, {
				title: 'Панель',
				name: 'widgets/basic/panel'
			}, {
				title: 'Таблица',
				name: 'widgets/basic/table'
			}, {
				title: 'Текст',
				name: 'widgets/basic/text'
			}, {
				title: 'Дерево',
				name: 'widgets/basic/tree'
			}]
		}, {
			title: 'Кнопки',
			children: [{
				title: 'Типы кнопок',
				name: 'widgets/buttons/buttons'
			}, {
				title: 'Группа кнопок',
				name: 'widgets/buttons/buttons-2'
			}]
		}, {
			title: 'Поля',
			children: [{
				title: 'Типы полей',
				name: 'widgets/fields/all'
			}]
		}, {
			title: 'Таблицы',
			children: [{
				title: 'Параметры',
				name: 'widgets/grids/basic'
			}, {
				title: 'Ajax',
				name: 'widgets/grids/ajax'
			}, {
				title: 'Постраничный вывод',
				name: 'widgets/grids/pagination'
			}, {
				title: 'Отключение колонок',
				name: 'widgets/grids/columns'
			}, {
				title: 'Ширина колонок',
				name: 'widgets/grids/resize'
			}, {
				title: 'Меню',
				name: 'widgets/grids/headers'
			}, {
				title: 'Сортировка',
				name: 'widgets/grids/sort'
			}, {
				title: 'Чекбоксы',
				name: 'widgets/grids/checkboxes'
			}, {
				title: 'Фильтрация'
			}, {
				title: 'Группировка',
				name: 'widgets/grids/group'
			}, {
				title: 'Редактирование'
			}, {
				title: 'Таблица-Дерево'
			}, {
				title: 'Таблица-Свойства'
			}, {
				title: '1500 строк',
				name: 'widgets/grids/1500'
			}]
		}, {
			title: 'Деревья',
			children: [{
				title: 'Параметры',
				name: 'widgets/trees/basic'
			}, {
				title: 'Ajax',
				name: 'widgets/trees/ajax'
			}, {
				title: 'Пути'
			}, {
				title: 'Чекбоксы',
				name: 'widgets/trees/checkboxes'
			}, {
				title: 'Фильтрация'
			}]
		}, {
			title: 'Диалоги',
			children: [{
				title: 'Параметры',
				name: 'widgets/dialogs/basic'
			}, {
				title: 'Модальный диалог',
				name: 'widgets/dialogs/modal'
			}, {
				title: 'Пошаговый диалог',
				name: 'widgets/dialogs/wizard'
			}, {
				title: 'Лайтбокс',
				name: 'widgets/dialogs/lightbox'
			}, {
				title: 'Размеры'
			}, {
				title: 'Перемещение'
			}]
		}, {
			title: 'Приложение',
			children: [{
				title: 'Навигация',
				name: 'widgets/app/navigation'
			}, {
				title: 'Breadcrumbs',
				name: 'widgets/app/breadcrumbs'
			}, {
				title: 'Pagination',
				name: 'widgets/app/pagination'
			}]
		}, {
			title: 'Меню',
			children: [{
				title: 'Навигационное меню',
				name: 'widgets/menu/nav-menu'
			}, {
				title: 'Контекстное меню',
				name: 'widgets/menu/context-menu'
			}, {
				title: 'Боковое меню',
				name: 'widgets/menu/side-menu'
			}]			
		}, {
			title: 'Другое',
			children: [{
				title: 'Оповещения',
				name: 'widgets/other/alert'
			}, {
				title: 'Wizard',
				name: 'widgets/other/wizard'
			}, {
				title: 'Tabs',
				name: 'widgets/other/tabs'
			}, {
				title: 'Growls',
				name: 'widgets/other/growl'
			}, {
				title: 'Табличный список',
				name: 'widgets/other/table-list'
			}]
		}]
	}, {
		title: 'Компоновки',
		children: [{
			title: 'Grid',
			name: 'layouts/grid'
		}]
	}, {
		title: 'Примеси',
		children: []
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
					nestedItem: {
						$content: {
//							etype: 'link',
							format: '#{title}',
							onClick: function() {
								this.parent.states.toggle('expanded');
								
								var v = this.data.get();
								if(!v.children) {
									load_sample(v.name, v.title, this.data.source.source.get('title'));
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
				}],
				selected: 0
			}
		});
		
		smpl.$render('#samples');
		
//		smpl.content.tabbar.item(0).states.set('selected');
		
		
		$context._sample = smpl;
	};
	
	
	$context.alert = function(msg, type) {
		
		type = type || 'info';
		
		// var titles = {
			// info: 'Информация! ',
			// success: 'Успех! '
		// };
		var icons = {
			info: 'fa-info',
			success: 'fa-check'
		};
		
		$.ergo({
			renderTo: '#sample',
			etype: 'alert',
			$icon: {
				cls: 'fa fa-fw rounded'
			},
//			title: titles[type],
			icon: icons[type],
			text: msg,
			state: type
		});
		
	};
	
	
	
	var load_sample = function(name, title, section) {
		
		$('#samples').empty();

		$context.events.unreg_all();

		if(name) {
			
			$context.create_sample(title);
			
			$.getScript('samples/'+name+'.js').success(function(script){
				
	//			$('pre', $context._sample.el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
				$('pre code', $context._sample.el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
				
				$('pre code', $context._sample.el).each(function(i, block) {
			    hljs.highlightBlock(block);
			  });		
				
				
	//			sh_highlightDocument();			
			});
			
		}
		else {
			
			$.ergo({
				etype: 'box',
				layout: 'column',
				render: '#samples',
				cls: 'under-construct',
				components: {
					icon: {
						etype: 'icon',
						state: 'fa-wrench fa-3x'
					},
					message: {
						cls: 'message',
						text: 'Пример все еще находится в разработке. Немножко терпения :)'
					}
				}				
			});
			
		}


		
		
		// // обновляем строку навигации
		// if(section) {
			// $('#page-info h4').text( section );
			// $('#page-info span').text( title );			
		// }
		
		
	};
	
	
	
	$( document ).ajaxError(function() {
		console.log(arguments);
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
	
	
	
});
