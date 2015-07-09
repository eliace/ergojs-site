
$.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		cls: 'circular'
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		type: 'basic',
		icon: 'fa-edit'
	}, {
		type: 'primary',
		icon: 'fa-upload'
	}, {
		type: 'success',
		icon: 'fa-check'
	}, {
		type: 'warning',
		icon: 'fa-warning'
	}, {
		type: 'danger',
		icon: 'fa-unlock'
	}]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		cls: 'large circular'
//		size: 'large'
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		type: 'basic',
		icon: 'fa-edit'
	}, {
		type: 'primary',
		icon: 'fa-upload'
	}, {
		type: 'success',
		icon: 'fa-check'
	}, {
		type: 'warning',
		icon: 'fa-warning'
	}, {
		type: 'danger',
		icon: 'fa-unlock'
	}]
});


