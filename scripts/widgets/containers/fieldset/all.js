

$context.section('Базовый');
$context.section_begin('fieldset-basic');
$context.section_end('fieldset-basic');


var w = $.ergo({
	etype: 'html:fieldset',
	as: 'border rounded',
	$title: {
		etype: 'html:legend',
		text: 'Заголовок'
	},
	$content: {
		etype: 'box',
		text: LOREMIPSUM
	}
});


w.render('#sample');
