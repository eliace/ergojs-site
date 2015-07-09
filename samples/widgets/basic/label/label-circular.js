

var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
//	layout: 'bar',
	defaultItem: {
		etype: 'label',
		cls: 'circular'
	},
	items: [{
		text: 'default',
		cls: 'default'
	}, {
		text: 'primary',
		cls: 'primary'
	}, {
		text: 'success',
		cls: 'success'
	}, {
		text: 'info',
		cls: 'info'
	}, {
		text: 'warning',
		cls: 'warning'
	}, {
		text: 'danger',
		cls: 'danger'
	}]
});

w.render('#sample');


$.ergo({etype: 'html:br', renderTo: '#sample'});


var w = $.ergo({
	etype: 'box',
//	layout: 'bar',
	cls: 'items __gap',
//	style: {'margin-top': 16},
	defaultItem: {
		etype: 'label',
		cls: 'circular'
	},
	items: [{
		text: '1',
		cls: 'default'
	}, {
		text: '-3',
		cls: 'basic'
	}, {
		text: '2',
		cls: 'primary'
	}, {
		text: '30',
		cls: 'success'
	}, {
		text: '40',
		cls: 'info'
	}, {
		text: '500',
		cls: 'warning'
	}, {
		text: '600',
		cls: 'danger'
	}]
});




w.render('#sample');

