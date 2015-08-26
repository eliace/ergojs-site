
$context.section('Basic');
$context.section_begin('header-basic');
$context.section_end('header-basic');


var w = $.ergo({
	etype: 'title',
	text: 'Заголовок'
});


w.render('#sample');

$context.section('Размер');
$context.section_begin('header-size');
$context.section_end('header-size');


var w = $.ergo({
	etype: 'box',
	cls: 'list __gap',
	defaultItem: {
		etype: 'title'
	},
	items: [
		{cls: 'giant', text: 'Giant'},
//		LOREMIPSUM,
		{cls: 'huge', text: 'Huge'},
//		LOREMIPSUM_2,
		{cls: 'large', text: 'Large'},
//		LOREMIPSUM_3,
		{text: 'Default'},
//		LOREMIPSUM_4,
		{cls: 'small', text: 'Small'},
//		LOREMIPSUM_5,
		{cls: 'tiny', text: 'Tiny'},
//		LOREMIPSUM_6
	]
});


w.render('#sample');

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
	cls: 'title',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/003.jpg',
		cls: 'image circular small before'
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
	cls: 'title',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/002.jpg',
		cls: 'image circular small before'
	},
	$content: {
		etype: 'text',
		text: 'Лисицын А.Н.',
		$content: {
			etype: '.',
		},
		$subtitle: {
			etype: 'title',
			cls: 'sub',
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
	cls: 'bordered rounded padding',
	$title: {
		etype: 'html:h3',
		cls: 'title',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug before'
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
	cls: 'bordered rounded padding',
	$header: {
		etype: 'html:h3',
		cls: 'title',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs medium before'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '.',
			},
			$subheader: {
				etype: 'title',
				cls: 'sub',
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

// w = $.ergo({
// 	etype: 'box',
// 	width: 800,
// 	$header: {
// 		etype: 'html:h4',
// 		cls: 'title underlined',
// 		$content: {
// 			etype: '.',
// 			text: 'Заголовок'
// 		}
// 	},
// 	$content: LOREMIPSUM
// });



var w = $.ergo({
	etype: 'box',
	items: [{
		etype: 'title',
		text: 'Заголовок',
		cls: 'divided'		
	},
	LOREMIPSUM]
});


w.render('#sample');


$context.section('Эмфаза');
$context.section_begin('header-emphasis');
$context.section_end('header-emphasis');


var w = $.ergo({
	etype: 'box',
	cls: 'block',
	items: [
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined strong' },
		LOREMIPSUM,
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined' },
		LOREMIPSUM_2,
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined weak' },
		LOREMIPSUM_3
	]
})



w.render('#sample');


$context.section('Цвет');
$context.section_begin('header-color');
$context.section_end('header-color');

var title1 = $.ergo({
	etype: 'title',
	text: 'Green',
	cls: 'large underlined green'
});

var title2 = $.ergo({
	etype: 'title',
	text: 'Blue',
	cls: 'large underlined blue'
});

var title3 = $.ergo({
	etype: 'title',
	text: 'Teal',
	cls: 'large weak underlined teal'
});

var title4 = $.ergo({
	etype: 'title',
	text: 'Orange',
	cls: 'large weak underlined orange'
});



var w = $.ergo({
	etype: 'box',
	cls: 'block',
	items: [ title1, LOREMIPSUM, title2, LOREMIPSUM_2, title3, LOREMIPSUM_3, title4, LOREMIPSUM_4 ]
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


