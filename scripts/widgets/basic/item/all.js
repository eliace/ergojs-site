

var ITEMS = [{
	text: 'Волков А.Н.',
	description: 'Java-разработчик',
	avatar: '001'
}, {
	text: 'Зайцев И.Д.',
	description: 'Руководитель группы',
	avatar: '002'
}, {
	text: 'Медведев К.Г.',
	description: 'Веб-разработчик',
	avatar: '004'
}, {
	text: 'Лисицина О.Е.',
	description: 'Дизайнер',
	avatar: '003'
}];


var AVATARS_URL = 'demo/blog/img/avatars/';







$context.section('Текст');
$context.section_begin('item-text');
$context.section_end('item-text');



var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item'
	},
	items: ITEMS
});

w.render('#sample');

$context.section('Иконка');
$context.section_begin('item-icon');
$context.section_end('item-icon');


var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$icon: {
			etype: 'icon',
			as: 'fa-envelope before medium circular basic',
			weight: -10
		}
	},
	items: ITEMS
});

w.render('#sample');

$context.section('Картинка');
$context.section_begin('item-image');
$context.section_end('item-image');


var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'image',
			as: 'circular small before',
//			width: 48,
			weight: -10
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');

$context.section('Описание', 'Добавляем компонент с описанием');
$context.section_begin('item-desc');
$context.section_end('item-desc');


var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 48,
			weight: -10
		},
		$content: {
			// $content: {
			// 	etype: '.'
			// },
			$description: {
				etype: 'html:small',
				as: 'description'
			}
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');

$context.section('Заголовок', 'Добавляем компонент с заголовком');
$context.section_begin('item-title');
$context.section_end('item-title');


var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'html:img',
			as: 'image circular before',
			width: 48,
			weight: -10
		},
		$content: {
			$content: {
				etype: 'html:h4',
				as: 'title'
			},
			$description: {
				etype: '.'
			}
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');

$context.section('Колоночная компоновка');
$context.section_begin('item-columns');
$context.section_end('item-columns');


var w = $.ergo({
	etype: 'list',
	as: '__indent',
	defaultItem: {
		etype: 'item',
		layout: 'columns',
		autoClass: true,
		as: 'items-align-top',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 48,
			weight: -10
		},
		$hugeText: {
			etype: 'box',
			text: LOREMIPSUM
		},
		$content: {
			etype: 'box',
			as: 'text-right',
			$description: {
				etype: 'html:small',
				as: 'description'
			},
			weight: 10,
			width: 150
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');

//$context.section('Иконка справа');
// require item-xicon
