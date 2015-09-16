
$context.section('Элемент с текстом');
$context.section_begin('text-span');
$context.section_end('text-span');

var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: '.'
	},
	items: ['В этом тексте есть ', {etype: 'text', text: 'особенная строчка', style: {'font-weight': 'bold'}}, ', которая обернута тегом <span>']
});

w.render('#sample');


$context.section('Внутренний текст');
$context.section_begin('text-node');
$context.section_end('text-node');

var w = $.ergo({
	etype: 'box',
	components: {
		icon: {
			etype: 'icon',
			as: 'fa fa-home'
		},
		content: {
			etype: '.',
			text: ' Главная '
		},
		xicon: {
			etype: 'icon',
			as: 'fa fa-angle-double-right'			
		}
	}
});

w.render('#sample');
