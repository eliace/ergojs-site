
w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h4',
		cls: 'title underlined',
		$content: {
			etype: '.',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
}); 

w.render('#sample');

