
var w = $.ergo({
	etype: 'button-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.$render('#sample');


w = $.ergo({
	etype: 'button-box',
	items: [{$content: {etype: 'icon', cls: 'fa fa-check', style: {'color': '#27ae60'}}}, 'Кнопка 1']
});

w.$render('#sample');
