

var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader-box',
		$icon: {
			cls: 'timer medium',
			$content: {
				text: 'Загрузка',
				cls: 'loader-text medium'
			}

		},
	}
});


w.render('#sample');



var w = $.ergo({
	etype: 'box',
	cls: 'box-large loadable',
	width: 600,
	style: {'margin-top': 32},
	$content: {
		text: LOREMIPSUM
	},
	$loader: {
		cls: 'loader-box inverted',
		$icon: {
			cls: 'timer medium',
			$content: {
				text: 'Загрузка',
				cls: 'loader-text medium'
			}

		},
	}
});


w.render('#sample');
