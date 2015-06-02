

$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Элементы упорядочиваются по индексу',
	renderTo: '#sample'
});


// элементы компонуются по значению индекса
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',  // расположим элементы горизонтально
	items: ['Item 0', 'Item 1', 'Item 2', 'Item 3']
});



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Компоненты упорядочиваются по весу',
	renderTo: '#sample'
});


// Порядок компонентов по умолчанию не определен (особенность обхода свойств в Hash/Object).
// Для того, чтобы задать порядок, используются числовые веса
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',
	components: {
		c1: {
			text: 'Component 1',
			weight: 10
		},
		c2: {
			text: 'Component 2'			
		},
		c3: {
			text: 'Component 3',			
			weight: -3
		}
	}
});



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Вес элементов равен 0, вес компонентов может быть больше или меньше 0',
	renderTo: '#sample'
});


// Вес элементов равен 0, поэтому, если вес компонента меньше 0,
// то он окажется до элементов, а если вес больше 0 - то после
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',
	components: {
		c1: {
			text: 'Before component',
			weight: -10
		},
		c2: {
			text: 'After component',			
			weight: 10
		}
	},
	items: ['Item 0', 'Item 1', 'Item 2', 'Item 3']
});

