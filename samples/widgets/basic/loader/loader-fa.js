
var w = $.ergo({
	etype: 'box',
	as: 'box-large loadable loading',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		as: 'loader inverted',
		$icon: {
			etype: 'icon',
			as: 'fa-spin fa-spinner fa-3x medium'
		},
	}
});


w.render('#sample');
