

var input1 = $.ergo({
	etype: 'input',
	as: 'icon',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon',
		as: 'fa-calendar contextual action'
	}
});


var input2 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'label',
		include: 'icon',
		icon: 'fa-calendar',
		as: 'basic action contextual'
	}
});


var input3 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'label',
		include: 'icon',
		icon: 'fa-calendar',
		as: 'action button default'
	}
});


var input4 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon-button',
		html: '<label/>',
		weight: -10,
		icon: 'fa-calendar',
		as: 'action primary'
	}
});


var input5 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'icon-button',
		html: '<label/>',
		icon: 'fa-fw fa-calendar',
		as: 'action',
//		state: 'primary'
	},
	$action2: {
		etype: 'icon-button',
		html: '<label/>',
		icon: 'fa-fw fa-search',
		as: 'action',
//		state: 'primary'
	}
});



var input6 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'button',
		text: 'Search',
		as: 'basic',
		wrapper: {
			etype: 'box'
		}
	}
});


var input7 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: 'Дата',
//	width: 180,
	$action: {
		etype: 'button',
		include: 'xicon',
		xicon: 'fa-search',
		text: 'Search',
		as: 'primary',
		wrapper: {
			etype: 'box'
		},
		$xicon: {
			as: 'after'
		}
	}
});








$.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3, input4, input5, input6, input7 ]
});
