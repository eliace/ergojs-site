

w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h2',
		cls: 'header disabled',
		$content: {
			etype: '&text',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
}); 

w.render('#sample');


