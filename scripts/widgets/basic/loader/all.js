
$context.section('Spinner');
$context.section_begin('loader-spinner');
$context.section_end('loader-spinner');


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

$context.section('Timer', 'Пример загрузчика, взятого с <a class="link" href="http://cssdeck.com/labs/loaderskit">http://cssdeck.com/labs/loaderskit<a/>');
$context.section_begin('loader-timer');
$context.section_end('loader-timer');


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

$context.section('FontAwesome загрузчик');
$context.section_begin('loader-fa');
$context.section_end('loader-fa');

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
			etype: 'icon',
			cls: 'fa-spin fa-spinner fa-3x medium'
		},
	}
});


w.render('#sample');

