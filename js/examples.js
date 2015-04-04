


Ergo.widgets.Icon.prototype.defaults.cls = 'icon fa fa-fw';



var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra dignissim nisl at fermentum. Donec id nisl ut ligula consectetur fermentum at vel urna. Mauris orci tellus, ullamcorper non malesuada eu, aliquet a diam. Phasellus nibh quam, interdum et egestas sit amet, eleifend in augue. Aliquam elementum libero quis est sodales auctor. Suspendisse ac dignissim mauris. Suspendisse scelerisque tristique molestie. Maecenas et tellus nulla. Duis gravida mauris et mi porta, eu scelerisque dolor placerat.';
var LOREMIPSUM_2 = 'Donec elementum convallis lacus, nec accumsan arcu placerat nec. Integer dapibus lectus at eros ullamcorper malesuada. Suspendisse potenti. Aenean magna quam, bibendum sit amet mi mollis, convallis scelerisque velit. Aliquam ac tempor eros. Vestibulum venenatis neque vitae venenatis sodales. Suspendisse lobortis nec lorem a consequat. Proin lorem ante, pharetra finibus urna sit amet, commodo sollicitudin risus.';
var LOREMIPSUM_3 = 'Praesent dapibus nunc id quam pellentesque sagittis. Nam scelerisque ut dui in cursus. Morbi fringilla, tellus nec finibus rutrum, ex purus posuere tortor, vitae sodales mi ipsum eu ipsum. Aenean et tristique ex. Vestibulum non tellus id augue dapibus malesuada nec sit amet nisi. Maecenas sed velit vel enim maximus interdum ac nec lectus. In et ante ullamcorper felis sagittis tincidunt eu et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate consectetur mauris nec ultricies. Mauris accumsan quam ut dolor porta placerat. Nulla lobortis viverra enim et ornare. Maecenas ullamcorper dignissim odio ut eleifend. Quisque bibendum ornare libero id hendrerit. ';
var LOREMIPSUM_4 = 'Aliquam erat volutpat. Vivamus eu leo odio. Sed a massa ac sem condimentum rhoncus vel at risus. Integer tincidunt ultricies risus sed luctus. Vestibulum tincidunt dolor a ante consectetur interdum. Sed ut sapien bibendum, congue turpis non, convallis diam. Aliquam mollis, quam non interdum egestas, libero lectus lobortis mauris, vitae tempor nibh diam nec nisi. Sed dolor nulla, molestie nec neque eget, venenatis tristique leo. Phasellus non scelerisque eros, non blandit metus. ';
var LOREMIPSUM_5 = 'Suspendisse et sem ac enim semper dapibus sed a risus. Duis vel tellus ligula. Fusce posuere venenatis tellus, vitae tempor lacus pellentesque ac. Proin sit amet pretium lorem. Cras in commodo sem. Proin dolor mi, lacinia nec lectus et, volutpat dapibus arcu. Proin accumsan tortor varius mi feugiat, nec sodales metus lacinia. Duis euismod sollicitudin maximus. Fusce ut lectus libero. Aenean lobortis interdum justo, at fringilla metus ultricies vel. Sed at massa tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at iaculis nisl. Cras sit amet molestie augue. Donec convallis malesuada sem, nec mollis risus faucibus at. ';

	
	
	var EXAMPLES = [{
		title: 'Ядро',
		children: [{
			title: 'Объект',
			icon: 'fa-cog',
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
			icon: 'fa-code',
			children: [{
				title: 'Параметры (опции)',
				name: 'core/widget'
			}, {
				title: 'Иерархия',
				name: 'core/widget-2'				
			}, {
				title: 'HTML',
				name: 'core/widget-3'
			}, {
				title: 'Отрисовка',
				name: 'core/widget-rendering'
			}]
		}, {
			title: 'Элементы и компоненты',
			icon: 'fa-cubes',
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
			icon: 'fa-columns',
			children: [{
				title: 'Модель',
				name: 'core/layout-base'
			}, {
				title: 'Вес и индекс',
				name: 'core/layout-weight'
			}, {
				title: 'Контейнер и обертка',
				name: 'core/layout-wrapper'
			}, {
				title: 'Авто-размер',
				name: 'core/layout-autosize'
			}]
		}, {
			title: 'События',
			icon: 'fa-flash',
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
			icon: 'fa-database',
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
			icon: 'fa-check-square',
			children: [{
				title: 'Настройка',
				name: 'core/states-basic'
			}, {
				title: 'Переходы',
				name: 'core/states-transitions'
			}, {
				title: 'Группировка',
				name: 'core/states-groups'
			}]
		}]
	}, {
		title: 'Виджеты',
		children: [{
			title: 'Базовые',
			icon: 'fa-puzzle-piece',
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
			title: 'Поля',
			icon: 'fa-edit',
			children: [{
				title: 'Типы полей',
				name: 'widgets/fields/all'
			}, {
				title: 'SelectBox',
				name: 'widgets/fields/select-box'
			}, {
				title: 'ComboBox',
				name: 'widgets/fields/combo-box'
			}, {
				title: 'RadioBox',
				name: 'widgets/fields/radio-box'
			}, {
				title: 'CheckBox',
				name: 'widgets/fields/check-box'
			}, {
				title: 'NumberBox',
				name: 'widgets/fields/number-box'
			}]
		}, {
			title: 'Таблицы',
			icon: 'fa-table',
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
				title: 'Таблица-Список',
				name: 'widgets/grids/list-grid'
			}/*, {
				title: 'Таблица-Дерево'
			}, {
				title: 'Таблица-Свойства'
			}*/, {
				title: '1500 строк',
				name: 'widgets/grids/1500'
			}]
		}, {
			title: 'Деревья',
			icon: 'fa-sitemap',
			children: [{
				title: 'Параметры',
				name: 'widgets/trees/basic'
			}, {
				title: 'Ajax',
				name: 'widgets/trees/ajax'
			}, {
				title: 'Пути',
				name: 'widgets/trees/paths'
			}, {
				title: 'Чекбоксы',
				name: 'widgets/trees/checkboxes'
			}, {
				title: 'Фильтрация'
			}]
		}, {
			title: 'Диалоги',
			icon: 'fa-list-alt',
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
			icon: 'fa-rocket',
			children: [{
				title: 'Навигация',
				name: 'widgets/app/navigation'
			}, {
				title: 'Breadcrumbs',
				name: 'widgets/app/breadcrumbs'
			}, {
				title: 'Pagination',
				name: 'widgets/app/pagination'
			}, {
				title: 'Login',
				name: 'widgets/app/login'
			}]
		}, {
			title: 'Меню',
			icon: 'fa-bars',
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
			icon: 'fa-cogs',
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
				title: 'Tags & Badges',
				name: 'widgets/other/tags_badges'
			}, {
				title: 'Media',
				name: 'widgets/other/media'
			}, {
				title: 'Фильтрация',
				name: 'widgets/other/filter'
			}, {
				title: 'Сортировка',
				name: 'widgets/other/sort'
			}, {
				title: "Drag'n'Drop",
				name: 'widgets/other/drag_n_drop'
			}, {
				title: "Списки",
				name: 'widgets/other/lists'
			}, {
				title: "Dynamic List",
				name: 'widgets/other/dynamic-list'
			}, {
				title: "Detail List",
				name: 'widgets/other/detail-list'
			}, {
				title: "Галерея",
				name: 'widgets/other/gallery'
			}, {
				title: "MVC",
				name: 'widgets/other/mvc'
			}, {
				title: '10000',
				name: 'widgets/other/10000'
			}]
		}]
	}, {
		title: 'Компоновки',
		children: [{
			title: 'Grid',
			name: 'layouts/grid'
		}, {
			title: 'HVF',
			name: 'layouts/h_v_f'
		}, {
			title: 'Form',
			name: 'layouts/form'
		}]
	}, {
		title: 'Примеси',
		children: []
	}];
	



$context = new Ergo.core.Context();


//
// Подключаем данные к контексту
//
$context.data('examples', EXAMPLES);


//-----------------------------------------------------
// Страница примеров
//-----------------------------------------------------
$context.scope('main', function(ctx) {


	var menu = this.widget('menu', {

		etype: 'box',
		id: 'content-menu',
		mixins: ['selectable'],
		defaultItem: {
			layout: 'inherited',
			autoRender: false,
			components: {
				title: {
					dataId: 'title',
					binding: 'text'
				},
				content: {
					etype: 'side-menu',
					dataId: 'children',
					nestedItem: {
						$content: {
//							etype: 'link',
//							format: '#{title}',
							$content_dataId: 'title',
							$icon_dataId: 'icon'
							// onClick: function() {
								// this.parent.states.toggle('expanded');
// 								
								// var v = this.data.get();
								// if(!v.children) {
									// load_sample(v.name, v.title, this.data.source.source.get('title'));
								// }
							// }
						},
						binding: function(v) {
							this.opt('name', v.title);
						},
						onItemExpanded: function(e) {
							var self = this;
							this.parent.items.each(function(item) {
								if(item.states.is('expanded') && item != this)
									item.states.unset('expanded');
							});
						}
					},
					
					onMenuAction: function(e) {
//						console.log(e.target.path());
						this.events.rise('select', {key: e.target.path()});
					}
					
				}
			}
		},

		data: ctx.data('examples'),
//		dataId: '@examples',
		dynamic: true,
		
		selector: function(key) {			
			var result = {};
			this.items.each(function(item){
				var w = item.content.find_path(key);
				if(w) result.found = w;
			});
			return result.found;
		},
		
		onSelectionChanged: function(e) {
			var v = e.selection.data.get();


			ctx.sample = {
				name: v.name,
				title: v.title,
				section: e.selection.data.source.source.get('title')
			};

			ctx.join('sample:show');

//			console.log(v);
//			load_sample(v.name, v.title, e.selection.data.source.source.get('title'));			
		}
		
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


//	menu.bind();

	menu.render('.page-content > aside');


});





//----------------------------------------------------------------
// Скоуп загружаемого примера
//----------------------------------------------------------------
$context.scope('sample:show', function(ctx) {

	var w;

	if(ctx.sample.name) {

		w = {
			etype: 'panel',
			cls: 'sample',
			title: ctx.sample.title,
			$content: {
				etype: 'tab-panel',
				$tabbar: {
					state: 'simple'
				},
				tabs: [{
					tab: {
						text: 'Пример',
						cls: 'sample-tab'
					},
					id: 'sample'
	//					$content: o
				}, {
					tab: 'Javascript',
					$content: {
						etype: 'html:pre',
	//						cls: 'sh_javascript'
						$content: {
							etype: 'html:code',
							cls: 'javascript',
						}
					}
				}, {
					tab: 'CSS',
					$content: {
						etype: 'html:pre',
	//						cls: 'sh_javascript'
						$content: {
							etype: 'html:code',
							cls: 'css',
						}
					}
				}],
				selected: 0
			}
		};


		$.getScript('samples/'+ctx.sample.name+'.js').success(function(script){
			
//			$('pre', $context._sample.el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
			$('pre code.javascript', ctx.widget('samplePanel').el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );
			
			$('pre code.javascript', ctx.widget('samplePanel').el).each(function(i, block) {
		    hljs.highlightBlock(block);
		  });		
			
			
//			sh_highlightDocument();			
		});


		$('#sample-css').remove();

    $.ajax({
        url:'styles/'+ctx.sample.name+'.css',
        dataType:"text",
        success:function(data){
          $("head").append('<style id="sample-css">' + data + '</style>');

					$('pre code.css', ctx.widget('samplePanel').el).append( Ergo.escapeHtml(data).replace(/\t/g, '  ') );
					
					$('pre code.css', ctx.widget('samplePanel').el).each(function(i, block) {
				    hljs.highlightBlock(block);
				  });		

        }
    });


	}
	else {

		w = {
			etype: 'box',
			layout: 'column',
//			render: '#samples',
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
		};


	}


	w = this.widget('samplePanel', w);
	
	w.render('#samples');



});





	
	
	
	// $context = new Ergo.core.Object({
	// 	plugins: [Ergo.Observable]
	// });
	


	
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
			etype: 'simple-alert',
			$icon: {
				cls: 'fa fa-fw rounded'
			},
//			title: titles[type],
			icon: icons[type],
			text: msg,
			state: type
		});
		
	};



$context.section = function(s) {

	$.ergo({
		etype: 'box',
		renderTo: '#sample',
		cls: 'demo-section',
		text: s,
		$icon: {
			etype: 'icon',
			cls: 'fa-arrow-circle-down'
		},
		$content: {
			etype: 'html:h3'
		}
	});

};


	
	
	/*
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
	
*/










	

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
	



	$context.join('main');
	
	
});
