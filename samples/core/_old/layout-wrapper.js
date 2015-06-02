

$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Элементы можно обернуть вспомогательным тегом',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: {
		wrapper: function(item) {
			var w = $('<div class="my-widget">');
			w.append(item.el);
			return w;
		}
	},
	items: ['Item 0', 'Item 1', 'Item 2']
});




$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Необходимость "обертки" и ее настройки могут задаваться дочерним виджетом',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	renderTo: '#sample',
	items: ['Item 0', 'Item 1', {
		text: 'Item 2',
		wrapper: {
			cls: 'my-widget'
		}
	}]
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Если виджет состоит из нескольких тегов, можно добиться нужного результата, настраивая компоновку',
	renderTo: '#sample'
});


$.ergo({
	etype: 'box',
	renderTo: '#sample',
	html: '<div><h4/></div>',
	layout: {
		selector: function(item) {
			// дочерний виджет с ключом 'title' добавляется во вложенный тег <h4/>
			if(item._key == 'title')
				return $('h4', this.el);
			return this.el;
		}
	},
	$title: {
		text: 'Заголовок'
	},
	$content: {
		text: LOREMIPSUM
	}
});




