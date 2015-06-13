

var w = $.ergo({
	etype: 'html:nav',
	cls: 'box inverted padding text-center',// side-icon left right',
	width: 320,
	style: {'font-size': '1.2rem', 'line-height': '1'},
	$back: {
		etype: 'icon',
		icon: 'fa-chevron-left',
		cls: 'float-left'
	},
	$content: {
		etype: '.',
		text: 'Заказ',
//		cls: 'text-center'
	},
	$menu: {
		etype: 'icon',
		icon: 'fa-bars',
		cls: 'float-right'
	}
});


w.render('#sample');