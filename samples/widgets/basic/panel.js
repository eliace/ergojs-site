
var w = $.ergo({
	etype: 'panel',
	title: 'Демо',
	content: LOREMIPSUM,
	$footer: {
		autoRender: true,
		layout: 'bar',
		state: 'right',
		defaultItem: {
			etype: 'button'
		},
		items: [{text: 'ОК', state: 'primary'}, 'Отмена']
	}
});

w.$render('#sample');
