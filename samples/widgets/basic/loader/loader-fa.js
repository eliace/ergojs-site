
var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader inverted',
		$icon: {
			etype: 'icon',
			cls: 'fa-spin fa-spinner fa-3x medium'
		},
	}
});


w.render('#sample');

