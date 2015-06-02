
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

