
var w = $.ergo({
	etype: 'panel',
	title: 'Демо',
	content: LOREMIPSUM,
	$footer: {
		autoRender: true,
		defaultItem: {
			etype: 'button'
		},
		items: ['ОК', 'Отмена']
	}
});

w.$render('#sample');
