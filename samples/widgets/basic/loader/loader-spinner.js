

var w = $.ergo({
	etype: 'box',
	as: 'box-large loadable loading',
	width: 600,
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		as: 'loader',
		$icon: {
			as: 'spinner medium',
			$content: {
				text: 'Загрузка',
				as: 'loader-text'
			}

		},
	}
});


w.render('#sample');



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
			as: 'spinner medium',
			$content: {
				text: 'Загрузка',
				as: 'loader-text'
			}

		},
	}
});


w.render('#sample');
