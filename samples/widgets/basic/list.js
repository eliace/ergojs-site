

var w = $.ergo({
	etype: 'list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w.$render('#sample');


var w2 = $.ergo({
	etype: 'o-list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w2.$render('#sample');
