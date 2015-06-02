
var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	defaultItem: 'label',
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

