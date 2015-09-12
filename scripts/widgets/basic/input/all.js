

$context.section('Поле ввода');
$context.section_begin('input-basic');
$context.section_end('input-basic');


var input1 = $.ergo({
	etype: 'input',
	text: 'Search...'
});



input1.render('#sample');



$context.section('Состояния');
$context.section_begin('input-states');
$context.section_end('input-states');



var input1 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '+focus'
});

var input2 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '+disabled'
});

var input3 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '+error'
});

// var input4 = $.ergo({
// 	etype: 'input',
// //	width: 200,
// 	placeholder: 'Search...',
// 	state: 'underlined'
// });

var input5 = $.ergo({
	etype: 'input',
	include: 'icon:at-right',
	icon: 'fa-search',
	text: 'Search...',
	as: '+transparent'
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3/*, input4*/, input5 ]
});



$context.section('Размер');
$context.section_begin('input-size');
$context.section_end('input-size');


var w = $.ergo({
	etype: 'box',
	cls: '__gap',
	renderTo: '#sample',
	layout: 'rows',
	defaultItem: {
		etype: 'input',
		include: 'icon:at-right',
		icon: 'fa-search'
//		cls: 'icon right',
		// $icon: {
		// 	etype: 'icon',
		// 	cls: 'fa-search'
		// }		
	},
	items: [{
		placeholder: 'Giant',
		state: 'giant'
	}, {
		placeholder: 'Huge',
		state: 'huge'
	}, {
		placeholder: 'Large',
		state: 'large'
	}, {
		placeholder: 'Default',
		state: 'medium'
	}, {
		placeholder: 'Small',
		state: 'small'
	}, {
		placeholder: 'Tiny',
		state: 'tiny'
	}]
});


$context.section('Иконка');
$context.section_begin('input-icon');
$context.section_end('input-icon');


var input1 = $.ergo({
	etype: 'input',
	cls: 'has-icon at-right',
	text: 'Search...',
//	width: 180,
	$icon: {
		etype: 'icon',
		cls: 'fa-search right'
	}
});



var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	cls: 'has-icon at-right',
	icon: 'fa-search',
	$icon: {
		weight: 10,
		cls: 'right'
	},
	text: 'Search...',
//	width: 180
});


var input3 = $.ergo({
	etype: 'input',
	include: 'icon:at-left',
//	cls: 'icon left',
	icon: 'fa-folder-open',
	text: 'Search...',
//	width: 180
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});
$context.section('Загрузчик');
$context.section_begin('input-loader');
$context.section_end('input-loader');


var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon right',
	xicon: 'spinner',
	placeholder: 'Search...',
//	width: 180
});


var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	cls: 'icon left',
	icon: 'spinner',
	placeholder: 'Search...',
//	width: 180
});





$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2 ]
});
$context.section('Метки');
$context.section_begin('input-label');
$context.section_end('input-label');


var input1 = $.ergo({
	etype: 'input',
	cls: 'group',
	$label: {
		etype: 'label',
		text: '.com',
		cls: 'basic'
	}
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: '(___) _______',
	$label: {
		etype: 'label',
		text: '+7',
		cls: 'basic',
		weight: -10
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	cls: '__gap',
	// layout: {
	// 	etype: 'vbox',
	// 	wrapper: function(item) {
	// 		return $('<div/>').append(item.el);
	// 	}
	// },
	items: [ input1, input2 ]
});
$context.section('Действия');
$context.section_begin('input-action');
$context.section_end('input-action');


var input1 = $.ergo({
	etype: 'input',
	cls: 'icon',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon',
		cls: 'fa-calendar contextual action'
	}
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'label',
		include: 'icon',
		icon: 'fa-calendar',
		cls: 'basic action contextual'
	}
});


var input3 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'label',
		include: 'icon',
		icon: 'fa-calendar',
		cls: 'action button',
		state: 'default'
	}
});


var input4 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon-button',
		html: '<label/>',
		weight: -10,
		icon: 'fa-calendar',
		cls: 'action',
		state: 'primary'
	}
});


var input5 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon-button',
		html: '<label/>',
		icon: 'fa-fw fa-calendar',
		cls: 'action',
//		state: 'primary'
	},
	$action2: {
		etype: 'icon-button',
		html: '<label/>',
		icon: 'fa-fw fa-search',
		cls: 'action',
//		state: 'primary'
	}
});



var input6 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'button',
		text: 'Search',
		state: 'basic',
		wrapper: {
			etype: 'box'
		}
	}
});


var input7 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'button',
		include: 'xicon',
		xicon: 'fa-search',
		text: 'Search',
		state: 'primary',
		wrapper: {
			etype: 'box'
		},
		$xicon: {
			cls: 'after'
		}
	}
});








$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3, input4, input5, input6, input7 ]
});
$context.section('На всю ширину');
$context.section_begin('input-block');
$context.section_end('input-block');



var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon right fluid',
	xicon: 'fa-search',
	placeholder: 'Search...'
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group fluid',
	$action: {
		etype: 'label',
		cls: 'button action',
		text: 'Search',
		state: 'basic'
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	cls: '__gap',
	items: [ input1, input2 ]
});
$context.section('Многострочный');
$context.section_begin('input-multiline');
$context.section_end('input-multiline');


var input1 = $.ergo({
	etype: 'input',
	placeholder: 'Search...',
//	multiline: true,
	$content: {
		etype: 'html:textarea'
	},
	renderTo: '#sample'
});

$context.section('С подсказкой');
$context.section_begin('input-select');
$context.section_end('input-select');

var n = 0;

var f = function(item) {
	var s = this.opt('search') || '';
	var out = n < 10 && item.opt('text').toLowerCase().indexOf(s.toLowerCase()) == 0;
	if(out)
		n++;
	return out;
};



var input = $.ergo({
	etype: 'input',
	text: 'Search...',
	include: 'dropdown',
	$dropdown: {
		items: COUNTRIES,
		renderFilter: f,
//		style: {'max-height': 200}
	},
	onChangeText: function(e) {
		if(e.text) {

			n = 0;

			this.$dropdown.opt('search', e.text);
			this.$dropdown.filter('render');

			this.states.set('opened');
		}
		else {
			this.states.unset('opened');
		}
	}
});



input.render('#sample');



