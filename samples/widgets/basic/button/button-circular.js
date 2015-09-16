
$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		as: 'circular'
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
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		as: 'large circular'
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
