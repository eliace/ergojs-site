


var box1 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-left bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'left fa-user',
		weight: -10
	}
});



var box2 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-right bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'right fa-search',
		weight: 10
	}
});



var box3 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-left at-right bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'left fa-user',
		weight: -10
	},
	$xicon: {
		etype: 'icon',
		cls: 'right fa-search',
		weight: 10
	}
});



var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: '__gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');