


var box1 = $.ergo({
	etype: 'text',
	text: 'Текст',
	as: 'has-icon at-left padding',
	$icon: {
		etype: 'icon',
		as: 'left fa-user',
		weight: -10
	}
});



var box2 = $.ergo({
	etype: 'text',
	text: 'Текст',
	as: 'has-icon at-right padding grey',
	$icon: {
		etype: 'icon',
		as: 'right fa-search',
		weight: 10
	}
});



var box3 = $.ergo({
	etype: 'text',
	text: 'Текст',
	as: 'has-icon at-left at-right padding',
	$icon: {
		etype: 'icon',
		as: 'left fa-user',
		weight: -10
	},
	$xicon: {
		etype: 'icon',
		as: 'right fa-search',
		weight: 10
	}
});



var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	as: '__gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');
