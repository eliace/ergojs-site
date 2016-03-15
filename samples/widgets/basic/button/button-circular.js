
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
		as: 'basic',
		icon: 'fa-edit'
	}, {
		as: 'primary',
		icon: 'fa-upload'
	}, {
		as: 'success',
		icon: 'fa-check'
	}, {
		as: 'warning',
		icon: 'fa-warning'
	}, {
		as: 'danger',
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
		as: 'basic',
		icon: 'fa-edit'
	}, {
		as: 'primary',
		icon: 'fa-upload'
	}, {
		as: 'success',
		icon: 'fa-check'
	}, {
		as: 'warning',
		icon: 'fa-warning'
	}, {
		as: 'danger',
		icon: 'fa-unlock'
	}]
});
