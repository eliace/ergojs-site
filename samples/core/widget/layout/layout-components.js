
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
