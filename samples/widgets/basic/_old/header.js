
$context.section('Стандартные заголовки h1-h5');


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


w = $.ergo({
	etype: 'html:h2',
	cls: 'header',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/003.jpg',
		cls: 'circular'
	},
	$content: {
		etype: '&text',
		text: 'Волкова Е.И.'
	},
	style: {'margin-bottom': 24} //FIXME
}); 

w.render('#sample');



w = $.ergo({
	etype: 'html:h2',
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


w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded box-large',
	$header: {
		etype: 'html:h2',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug'
		},
		$content: {
			etype: '&text',
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
	cls: 'bordered rounded box-large',
	$header: {
		etype: 'html:h2',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '&text',
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


w = $.ergo({
	etype: 'box',
	width: 800,
	$header: {
		etype: 'html:h2',
		cls: 'header divided',
		$content: {
			etype: '&text',
			text: 'Заголовок'
		}
	},
	$content: LOREMIPSUM
}); 

w.render('#sample');


$context.section('Отключенный');


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


