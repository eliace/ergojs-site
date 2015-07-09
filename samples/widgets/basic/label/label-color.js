
var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
//	layout: 'bar',
	defaultItem: 'label',
	items: [{
		text: 'default',
	}, {
		text: 'basic',
		cls: 'basic'
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

