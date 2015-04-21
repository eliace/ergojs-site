
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
			title: 'Списки',
			icon: 'fa-list',
			children: [{
				title: 'Древовидный',
				name: 'widgets/lists/nested'
			}, {
				title: 'Media',
				name: 'widgets/lists/media'
			}, {
				title: "Item List",
				name: 'widgets/lists/lists'
			}, {
				title: "Dynamic List",
				name: 'widgets/lists/dynamic-list'
			}, {
				title: "Detail List",
				name: 'widgets/lists/detail-list'
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
			}, {
				title: 'Редактирование',
				name: 'widgets/trees/edit'
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
				title: 'Фильтрация',
				name: 'widgets/other/filter'
			}, {
				title: 'Сортировка',
				name: 'widgets/other/sort'
			}, {
				title: "Drag'n'Drop",
				name: 'widgets/other/drag_n_drop'
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
	

