

// нарисуем модель основной компоновки
var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'my-widget',
	items: [{
		text: 'Group A',
		$box: {
			layout: 'hbox',
			items: [{
				text: 'Weight = -1',
				$box: {
					style: {'visibility': 'hidden'},
					items: ['.']
				}
			}, {
				text: 'Weight = 0',
				$box: {
					layout: 'hbox',
					items: ['Item 0', 'Item 1', 'Item 2']
				}
			}, {
				text: 'Weight = 1',
				$box: {
					style: {'visibility': 'hidden'},
					items: ['.']
				}
			}]
		}
	}, {
		text: 'Group B',
		$box: {
			style: {'visibility': 'hidden'},
			items: [{
				text: 'Weight = 0',
				$box: {
					items: ['.']
				}
			}]
		}
	}]
});


w.render('#sample');




$context.section('Основные параметры', 'Вес, индекс, группа');
//= require layout-base
$context.section('Элементы', 'Элементы упорядочиваются по индексу');
//= require layout-items
$context.section('Компоненты', 'Порядок компонентов по умолчанию не определен (особенность обхода свойств в Hash/Object). Для того, чтобы задать порядок, используются числовые веса');
//= require layout-components
$context.section('Вес и индекс', 'Вес элементов равен 0, поэтому, если вес компонента меньше 0, то он окажется до элементов, а если вес больше 0 - то после');
//= require layout-weight-index
$context.section('Обертка компоновки', 'Элементы можно обернуть вспомогательным тегом');
//= require layout-wrapper
$context.section('Обертка виджета', 'Необходимость "обертки" и ее настройки могут задаваться дочерним виджетом');
//= require layout-item-wrapper
//$context.section('Селектор обертки', 'Если виджет состоит из нескольких тегов, можно добиться нужного результата, настраивая компоновку');
// = require layout-selector
$context.section('Авто-высота вертикальных элементов', 'autoHeight = true');
//= require layout-autoheight-v
$context.section('Авто-высота горизонтальных элементов', 'autoHeight = "ignore-siblings"');
//= require layout-autoheight-h
$context.section('Авто-ширина', 'autoWidth = true');
//= require layout-autowidth
$context.section('Авто-размер', 'autoFit = true');
//= require layout-autofit
