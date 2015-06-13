

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
		include: 'icon',
		icon: 'fa-search',
		text: 'Search',
		state: 'primary',
		wrapper: {
			etype: 'box'
		},
		$icon: {
			cls: 'after'
		}
	}
});








$.ergo({
	etype: 'box',
	cls: 'indented',
	layout: 'rows',
	renderTo: '#sample',
	items: [ input1, input2, input3, input4, input5, input6, input7 ]
});