

var w = $.ergo({
	etype: 'panel',
	title: 'Header',
	as: 'bordered divided padded',
	$header: {
	},
	$content: {
		text: LOREMIPSUM
	},
	$footer: {
		$content: {
			etype: '.',
			text: 'Footer'
		}
	}
});


w.render('#sample');
