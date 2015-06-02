

$context.section('Поле ввода');
$context.section_begin('input-basic');
$context.section_end('input-basic');

/*
$.ergo({
	etype: 'text-box',
//	includes: 'action-icon',
//	icon: 'fa-search',
	renderTo: '#sample',
	width: 200,
	placeholder: 'Search...'
	// $icon: {
	// 	etype: 'icon',
	// 	cls: 'fa fa-search fa-fw addon'
	// }
});
*/



var input1 = $.ergo({
	etype: 'box',
	cls: 'input',
	placeholder: 'Search...',
	$content: {
		etype: 'html:input'
	},
	$icon: {
		etype: 'icon',
		cls: 'fa-search'
	},
});



var input2 = $.ergo({
	etype: 'box',
	cls: 'input-group',
	placeholder: 'Search...',
	$content: {
		etype: 'html:input'
	},
	$label: {
		etype: 'html:label',
		weight: -10,
		text: '+7'
	},
});



$.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [ input1, input2 ]
});
$context.section('Состояния');
$context.section_begin('input-states');
$context.section_end('input-states');


var input1 = $.ergo({
	etype: 'text-box',
	width: 200,
	placeholder: 'Search...',
	state: 'focused'
});

var input2 = $.ergo({
	etype: 'text-box',
	width: 200,
	placeholder: 'Search...',
	state: 'disabled'
});

var input3 = $.ergo({
	etype: 'text-box',
	width: 200,
	placeholder: 'Search...',
	state: 'danger'
});



$.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});



$context.section('Иконка');
$context.section_begin('input-icon');
$context.section_end('input-icon');


var input1 = $.ergo({
	etype: 'text-box',
	include: 'icon-addon',
	icon: 'fa-search',
	placeholder: 'Search...',
	width: 180
});



var input2 = $.ergo({
	etype: 'text-box',
	include: 'icon-addon',
	icon: 'fa-search',
	placeholder: 'Search...',
	width: 180,
	$icon: {
		weight: -10
	}
});




$.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [ input1, input2 ]
});

