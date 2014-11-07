

$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Элементы обертываются вспомогательным тегом',
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
	text: 'Если виджет состоит из нескольких тегов, необходимо корректировать компоновку',
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




