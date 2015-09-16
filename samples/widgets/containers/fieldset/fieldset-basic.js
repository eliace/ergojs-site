

var w = $.ergo({
	etype: 'html:fieldset',
	as: 'border rounded',
	$title: {
		etype: 'html:legend',
		text: 'Заголовок'
	},
	$content: {
		etype: 'box',
		text: LOREMIPSUM
	}
});


w.render('#sample');
