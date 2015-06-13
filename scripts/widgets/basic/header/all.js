
$context.section('Стандартные заголовки h1-h5');
$context.section_begin('header-h1h5');
$context.section_end('header-h1h5');

var w = $.ergo({
	etype: 'box',
	items: [
		{etype: 'html:h1', text: 'Заголовок 1'},
		LOREMIPSUM,
		{etype: 'html:h2', text: 'Заголовок 2'},
		LOREMIPSUM_2,
		{etype: 'html:h3', text: 'Заголовок 3'},
		LOREMIPSUM_3,
		{etype: 'html:h4', text: 'Заголовок 4'},
		LOREMIPSUM_4,
		{etype: 'html:h5', text: 'Заголовок 5'},
		LOREMIPSUM_5
	]
});


w.render('#sample');

$context.section('С картинкой');
$context.section_begin('header-image');
$context.section_end('header-image');

w = $.ergo({
	etype: 'html:h3',
	cls: 'header',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/003.jpg',
		cls: 'circular'
	},
	$content: {
		etype: '.',
		text: 'Волкова Е.И.'
	},
//	style: {'margin-bottom': 24} //FIXME
}); 

w.render('#sample');



w = $.ergo({
	etype: 'html:h3',
	cls: 'header',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/002.jpg',
		cls: 'circular'
	},
	$title: {
		etype: 'text',
		text: 'Лисицын А.Н.',
		$content: {
			etype: '&text',
		},
		$subtitle: {
			etype: 'text',
			cls: 'sub-header',
			text: 'Ведущий веб-разработчик'
		}
	}
}); 

w.render('#sample');



$context.section('С иконкой');
$context.section_begin('header-icon');
$context.section_end('header-icon');

w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded padding-x2',
	$header: {
		etype: 'html:h3',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug'
		},
		$content: {
			etype: '.',
			text: 'Плагины'
		}
	},
	$content: LOREMIPSUM,
	style: {'margin-bottom': 24} //FIXME
}); 

w.render('#sample');



w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded padding-x2',
	$header: {
		etype: 'html:h3',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '.',
			},
			$subheader: {
				etype: 'text',
				cls: 'sub-header',
				text: 'Управление системными параметрами, пользователями и пр.'
			}
		}
	},
	$content: LOREMIPSUM_2
}); 

w.render('#sample');


$context.section('С разделителем');
$context.section_begin('header-divided');
$context.section_end('header-divided');

w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h4',
		cls: 'header divided',
		$content: {
			etype: '.',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
}); 

w.render('#sample');


$context.section('Отключенный');
$context.section_begin('header-disabled');
$context.section_end('header-disabled');


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


