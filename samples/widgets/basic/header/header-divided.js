
w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h2',
		cls: 'header divided',
		$content: {
			etype: '&text',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
}); 

w.render('#sample');

