
var w = $.ergo({
	etype: 'html:div',
	items: [{
		etype: 'html:h1',
		text: 'Heading text 1'
	}, {
		etype: 'html:h2',
		text: 'Heading text 2'
	}, {
		etype: 'html:h3',
		text: 'Heading text 3'
	}, {
		etype: 'html:h4',
		text: 'Heading text 4'
	}, {
		etype: 'html:h5',
		text: 'Heading text 5'
	}]
});

w.render('#sample');
