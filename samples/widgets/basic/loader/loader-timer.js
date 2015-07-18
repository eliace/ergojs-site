

var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable loading',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader',
		$icon: {
			cls: 'timer medium',
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
			cls: 'timer medium',
			$content: {
				text: 'Загрузка',
				cls: 'loader-text'
			}

		},
	}
});


w.render('#sample');
