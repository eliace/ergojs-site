
var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Простая кнопка'
	}, {
		etype: 'link-button',
		text: 'Ссылка'		
	}, {
		etype: 'icon-button',
		state: 'fa fa-cogs'
	}, {
		etype: 'image-button',
		src: 'img/Lil_cr.png',
		state: 'x128 circle'
	}]
});

w.$render('#sample');
