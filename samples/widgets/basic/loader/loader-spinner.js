

var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable loading',
	width: 600,
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader',
		$icon: {
			cls: 'spinner medium',
			$content: {
				text: 'Загрузка',
				cls: 'loader-text'
			}

		},
	}
});


w.render('#sample');



var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable loading',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader inverted',
		$icon: {
			cls: 'spinner medium',
			$content: {
				text: 'Загрузка',
				cls: 'loader-text'
			}

		},
	}
});


w.render('#sample');
