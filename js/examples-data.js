
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_ENTER = 13;
var KEY_ESC = 27;



var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra dignissim nisl at fermentum. Donec id nisl ut ligula consectetur fermentum at vel urna. Mauris orci tellus, ullamcorper non malesuada eu, aliquet a diam. Phasellus nibh quam, interdum et egestas sit amet, eleifend in augue. Aliquam elementum libero quis est sodales auctor. Suspendisse ac dignissim mauris. Suspendisse scelerisque tristique molestie. Maecenas et tellus nulla. Duis gravida mauris et mi porta, eu scelerisque dolor placerat.';
var LOREMIPSUM_2 = 'Donec elementum convallis lacus, nec accumsan arcu placerat nec. Integer dapibus lectus at eros ullamcorper malesuada. Suspendisse potenti. Aenean magna quam, bibendum sit amet mi mollis, convallis scelerisque velit. Aliquam ac tempor eros. Vestibulum venenatis neque vitae venenatis sodales. Suspendisse lobortis nec lorem a consequat. Proin lorem ante, pharetra finibus urna sit amet, commodo sollicitudin risus.';
var LOREMIPSUM_3 = 'Praesent dapibus nunc id quam pellentesque sagittis. Nam scelerisque ut dui in cursus. Morbi fringilla, tellus nec finibus rutrum, ex purus posuere tortor, vitae sodales mi ipsum eu ipsum. Aenean et tristique ex. Vestibulum non tellus id augue dapibus malesuada nec sit amet nisi. Maecenas sed velit vel enim maximus interdum ac nec lectus. In et ante ullamcorper felis sagittis tincidunt eu et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate consectetur mauris nec ultricies. Mauris accumsan quam ut dolor porta placerat. Nulla lobortis viverra enim et ornare. Maecenas ullamcorper dignissim odio ut eleifend. Quisque bibendum ornare libero id hendrerit. ';
var LOREMIPSUM_4 = 'Aliquam erat volutpat. Vivamus eu leo odio. Sed a massa ac sem condimentum rhoncus vel at risus. Integer tincidunt ultricies risus sed luctus. Vestibulum tincidunt dolor a ante consectetur interdum. Sed ut sapien bibendum, congue turpis non, convallis diam. Aliquam mollis, quam non interdum egestas, libero lectus lobortis mauris, vitae tempor nibh diam nec nisi. Sed dolor nulla, molestie nec neque eget, venenatis tristique leo. Phasellus non scelerisque eros, non blandit metus. ';
var LOREMIPSUM_5 = 'Suspendisse et sem ac enim semper dapibus sed a risus. Duis vel tellus ligula. Fusce posuere venenatis tellus, vitae tempor lacus pellentesque ac. Proin sit amet pretium lorem. Cras in commodo sem. Proin dolor mi, lacinia nec lectus et, volutpat dapibus arcu. Proin accumsan tortor varius mi feugiat, nec sodales metus lacinia. Duis euismod sollicitudin maximus. Fusce ut lectus libero. Aenean lobortis interdum justo, at fringilla metus ultricies vel. Sed at massa tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at iaculis nisl. Cras sit amet molestie augue. Donec convallis malesuada sem, nec mollis risus faucibus at. ';
var LOREMIPSUM_6 = 'Sed eget justo ullamcorper, congue enim a, pretium mi. Morbi vitae erat quam. Sed purus ex, tristique vel tristique id, bibendum et purus. Nunc commodo ipsum vitae viverra imperdiet. Praesent consequat, nibh vel rhoncus ultrices, mauris nibh efficitur mauris, a efficitur lectus nisl eget mauris. Aliquam tempus pellentesque elit at iaculis. Ut non leo elit. Donec sed egestas ipsum, a fermentum erat. Suspendisse non vulputate felis, eu dapibus nulla. Aliquam magna arcu, dapibus sed fermentum eu, semper quis lectus. Quisque pretium finibus ex. Praesent pretium nulla vel ante commodo, elementum condimentum arcu rutrum. ';


	var EXAMPLES = [{
		title: 'Ядро',
		children: [{
			title: 'Объект',
			icon: 'fa-cog',
			children: [{
				title: 'Параметры (опции)',
				name: 'core/object/options'
			}, {
				title: 'Наследование',
				name: 'core/object/inheritance'
			}, {
				title: 'Перегрузка',
				name: 'core/object/overrides'
			}, {
				title: 'Примеси',
				name: 'core/object/mixins'
			}, {
				title: 'События',
				name: 'core/object/events'
			}, {
				title: 'Пространства имен',
				name: 'core/object/namespaces'
			}]
		}, {
			title: 'Виджет',
			icon: 'fa-code',
			children: [{
				title: 'Параметры (опции)',
				name: 'core/widget/options'
			}, {
				title: 'Компоненты',
				name: 'core/widget/items'
			}, {
				title: 'Компоновка',
				name: 'core/widget/layout'
			}, {
				title: 'Отрисовка',
				name: 'core/widget/render'
			}, {
				title: 'Состояния',
				name: 'core/widget/states'
			}, {
				title: 'Данные',
				name: 'core/widget/data'
			}, {
				title: 'Фильтрация',
				name: 'core/widget/filter'
			}, {
				title: 'Сортировка',
				name: 'core/widget/sort'
			}, {
				title: 'Валидация',
				name: 'core/widget/validate'
			}]
		}/*, {
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
		}*/]
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
				title: 'Input',
				name: 'widgets/basic/input'
			}, {
				title: 'Select',
				name: 'widgets/basic/select'
			}, {
				title: 'Dropdown',
				name: 'widgets/basic/dropdown'
			}, {
				title: 'Разделитель',
				name: 'widgets/basic/divider'
			}, {
				title: 'Заголовок',
				name: 'widgets/basic/header'
			}, {
				title: 'Chip',
				name: 'widgets/basic/item'
			}, {
				title: 'Изображение',
				name: 'widgets/basic/image'
			}, {
				title: 'Метка',
				name: 'widgets/basic/label'
			}, {
				title: 'Загрузчик',
				name: 'widgets/basic/loader'
			}, {
				title: 'Шаги',
				name: 'widgets/basic/steps'
			}, {
				title: 'Текст',
				name: 'widgets/basic/text'
			}, {
				title: 'Checkbox',
				name: 'widgets/basic/checkbox'
			}, {
				title: 'Список',
				name: 'widgets/basic/list'
			}, {
				title: 'Дерево',
				name: 'widgets/basic/tree'
			}, {
				title: 'Таблица',
				name: 'widgets/basic/table'
			}]
		}, {
			title: 'Списки',
			icon: 'fa-list',
			children: [{
				title: "Компоновки",
				name: 'widgets/lists/layout'
			}, {
				title: 'Вложенные',
				name: 'widgets/lists/nested'
			}, {
				title: "Dynamic List",
				name: 'widgets/lists/dynamic'
			}, {
				title: "Detail List",
				name: 'widgets/lists/detail'
			}]
		}, {
			title: 'Деревья',
			icon: 'fa-sitemap',
			children: [{
				title: 'Компоновки',
				name: 'widgets/trees/layout'
			}, {
				title: 'Функции',
				name: 'widgets/trees/op'
			}, {
				title: 'Ajax',
				name: 'widgets/trees/data'
			}/*, {
				title: 'Расширения',
				name: 'widgets/trees/ext'
			}, {
				title: 'Чекбоксы',
				name: 'widgets/trees/checkboxes'
			}, {
				title: 'Фильтрация'
			}, {
				title: 'Редактирование',
				name: 'widgets/trees/edit'
			}*/]
		}, {
			title: 'Контейнеры',
			icon: 'fa-columns',
			children: [{
				title: 'Панель',
				name: 'widgets/containers/panel'
			}, {
				title: 'Форма',
				name: 'widgets/containers/form'
			}, {
				title: 'Набор полей',
				name: 'widgets/containers/fieldset'
			}, {
				title: 'Закладки',
				name: 'widgets/containers/tabs'
			}, {
				title: 'Аккордеон',
				name: 'widgets/containers/accordion'
			}]
		}/*, {
			title: 'Формы',
			icon: 'fa-edit',
			children: [{
				title: 'Combo',
				name: 'widgets/fields/combo'
			}, {
				title: 'Number',
				name: 'widgets/fields/number'
			}, {
				title: 'Slider',
				name: 'widgets/fields/slider'
			}]
		}*/, {
			title: 'Таблицы',
			icon: 'fa-table',
			children: [{
				title: 'Грид',
				name: 'widgets/grids/basic'
			}, {
				title: 'Данные',
				name: 'widgets/grids/data'
			}, {
				title: 'Колонки',
				name: 'widgets/grids/columns'
			}/*, {
				title: 'Постраничный вывод',
				name: 'widgets/grids/pagination'
			}*/, {
				title: 'Сортировка',
				name: 'widgets/grids/sort'
			}, {
				title: 'Группировка',
				name: 'widgets/grids/group'
			}, {
				title: 'Таблица-Список',
				name: 'widgets/grids/list'
			}/*, {
				title: 'Таблица-Дерево'
			}, {
				title: 'Таблица-Свойства'
			}*/, {
				title: '1500 строк',
				name: 'widgets/grids/1500'
			}]
		}, {
			title: 'Диалоги',
			icon: 'fa-list-alt',
			children: [{
				title: 'Основы',
				name: 'widgets/dialogs/basic'
			}, {
				title: 'Лайтбокс',
				name: 'widgets/dialogs/lightbox'
			}/*, {
				title: 'Модальный диалог',
				name: 'widgets/dialogs/modal'
			}, {
				title: 'Пошаговый диалог',
				name: 'widgets/dialogs/wizard'
			}, {
				title: 'Размеры'
			}, {
				title: 'Перемещение'
			}*/]
		}, {
			title: 'Навигация',
			icon: 'fa-rocket',
			children: [{
				title: 'Navbar/Sidebar',
				name: 'widgets/app/navigation'
			}, {
				title: 'Меню',
				name: 'widgets/app/menu'
			}, {
				title: 'Breadcrumbs',
				name: 'widgets/app/breadcrumbs'
			}, {
				title: 'Pagination',
				name: 'widgets/app/pagination'
			}]
		}/*, {
			title: 'Меню',
			icon: 'fa-bars',
			children: [{
				title: 'Навигационное',
				name: 'widgets/menu/nav'
			}, {
				title: 'Контекстное',
				name: 'widgets/menu/context'
			}, {
				title: 'Боковое',
				name: 'widgets/menu/side'
			}]
		}*/, {
			title: 'Другое',
			icon: 'fa-cogs',
			children: [{
				title: 'Оповещения',
				name: 'widgets/other/alert'
			}, {
				title: 'Cards',
				name: 'widgets/other/cards'
			}, {
				title: 'Tabs',
				name: 'widgets/other/tabs'
			}, {
				title: 'Growls',
				name: 'widgets/other/growl'
			}, {
				title: "Drag'n'Drop",
				name: 'widgets/other/dragndrop'
			}, {
				title: "Галерея",
				name: 'widgets/other/gallery'
			}, {
				title: "Perf Tests",
				name: 'widgets/other/test'
			}/*, {
				title: 'Tags & Badges',
				name: 'widgets/other/tags_badges'
			}, {
				title: 'Wizard',
				name: 'widgets/other/wizard'
			}, {
				title: "MVC",
				name: 'widgets/other/mvc'
			}, {
				title: '10000',
				name: 'widgets/other/10000'
			}, {
				title: 'test1',
				name: 'widgets/other/test1'
			}, {
				title: 'test2',
				name: 'widgets/other/test2'
			}*/]
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
		children: [{
			title: 'Popup',
			name: 'mixins/popup'
		}, {
			title: 'Selectable',
			name: 'mixins/selection'
		}]
	}];







var ICONS = [
	'fa-adjust',
	'fa-anchor',
	'fa-archive',
	'fa-area-chart',
	'fa-arrows',
	'fa-arrows-h',
	'fa-arrows-v',
	'fa-asterisk',
	'fa-at',
	'fa-automobile',
	'fa-ban',
	'fa-bank',
	'fa-bar-chart',
	'fa-barcode',
	'fa-bars',
	'fa-beer',
	'fa-bell',
	'fa-bell-o',
	'fa-bell-slash',
	'fa-bell-slash-o',
	'fa-bicycle',
	'fa-binoculars',
	'fa-birthday-cake',
	'fa-bolt',
	//'fa-bomb',
	'fa-book'
];





var COLORS = [
	'red',
	'pink',
	'purple',
	'deep-purple',
	'indigo',
	'blue',
	'light-blue',
	'cyan',
	'teal',
	'green',
	'light-green',
	'lime',
	'yellow',
	'amber',
	'orange',
	'deep-orange',
	'brown',
	'grey',
	'blue-grey',

	'black',
	''
];





var COUNTRIES = [
'Afghanistan',
'Albania',
'Algeria',
'Andorra',
'Angola',
'Antigua & Barbuda',
'Argentina',
'Armenia',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bhutan',
'Bolivia',
'Bosnia & Herzegovina',
'Botswana',
'Brazil',
'Brunei Darussalam',
'Bulgaria',
'Burkina Faso',
'Burma (Myanmar)',
'Burundi',
'Cambodia',
'Cameroon',
'Canada',
'Cape Verde',
'Central African Republic',
'Chad',
'Chile',
'China',
'Colombia',
'Comoros',
'Congo',
'Congo, Democratic Republic of the',
'Costa Rica',
"Côte d'Ivoire",
'Croatia',
'Cuba',
'Cyprus',
'Czech Republic',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'Ecuador',
'East Timor',
'Egypt',
'El Salvador',
'England',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Ethiopia',
'Fiji',
'Finland',
'France',
'Gabon',
'Gambia, The',
'Georgia',
'Germany',
'Ghana',
'Great Britain',
'Greece',
'Grenada',
'Guatemala',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Honduras',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Korea, North',
'Korea, South',
'Kosovo',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Macedonia',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Mauritania',
'Mauritius',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'The Netherlands',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Norway',
'Northern Ireland',
'Oman',
'Pakistan',
'Palau',
'Palestinian State*',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'The Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'St. Kitts & Nevis',
'St. Lucia',
'St. Vincent & The Grenadines',
'Samoa',
'San Marino',
'São Tomé & Príncipe',
'Saudi Arabia',
'Scotland',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'Spain',
'Sri Lanka',
'Sudan',
'South Sudan',
'Suriname',
'Swaziland',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Togo',
'Tonga',
'Trinidad & Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City (Holy See)',
'Venezuela',
'Vietnam',
'Western Sahara*',
'Wales',
'Yemen',
'Zaire',
'Zambia',
'Zimbabwe'
]
