
var w = $.ergo({
	etype: 'box',
	text: 'Hello there!'
});

w.render('#sample');


var w2 = $.ergo({
	etype: 'box',
	text: 'Hello there 2!'
});

w2.render('#sample');



w = $.ergo({
	etype: 'box',
	layout: 'bar',
	cls: 'rect',
	defaultItem: {
		cls: 'box'
	},
	items: [{
		cls: 'sz-large',
		text: 'sz-large'
	}, {
		cls: 'sz-normal',
		text: 'sz-normal'
	}, {
		cls: 'sz-small',
		text: 'sz-small'
	}, {
		cls: 'sz-tiny',
		text: 'sz-tiny'
	}, {
		text: 'default'
	}]
});

w.render('#sample');


