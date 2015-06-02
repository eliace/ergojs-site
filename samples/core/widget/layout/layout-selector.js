
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
