

var w = $.ergo({
	etype: 'box',
	layout: 'bar',
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


var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	style: {'margin-top': 16},
	defaultItem: {
		etype: 'label',
		cls: 'circular'
	},
	items: [{
		text: '10',
		cls: 'default'
	}, {
		text: '20',
		cls: 'primary'
	}, {
		text: '30',
		cls: 'success'
	}, {
		text: '40',
		cls: 'info'
	}, {
		text: '50',
		cls: 'warning'
	}, {
		text: '60',
		cls: 'danger'
	}]
});




w.render('#sample');

