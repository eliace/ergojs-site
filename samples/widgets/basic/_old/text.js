

$context.section('Элемент с текстом (text)');


var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: '&text'
	},
	items: ['В этом тексте есть ', {etype: 'text', text: 'особенная строчка', style: {'font-weight': 'bold'}}, ', которая обернута тегом <span>']
});

w.render('#sample');



$context.section('Простой текст (&text)');


var w = $.ergo({
	etype: 'box',
	components: {
		icon: {
			etype: 'icon',
			cls: 'fa fa-home'
		},
		content: {
			etype: '&text',
			text: ' Главная '
		},
		xicon: {
			etype: 'icon',
			cls: 'fa fa-angle-double-right'			
		}
	}
});

w.render('#sample');
