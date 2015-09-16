

w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h2',
		as: 'title disabled',
		$content: {
			etype: '.',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
});

w.render('#sample');
