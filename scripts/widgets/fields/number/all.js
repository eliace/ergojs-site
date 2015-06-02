
$context.section('Поле ввода');
$context.section_begin('number-input');
$context.section_end('number-input');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'form',
	items: [{
		etype: 'number-box',
		width: 200
	}]
});
