

var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'		
	}, {
		layout: 'vform',
		defaultItem: {
			as: 'fluid'
		},
//		cls: 'inline',
		items: [{
			etype: 'input',
			label: 'First Name'
		}, {
			etype: 'input',
			label: 'Last Name'
		}, {
			etype: 'input',
			label: 'Middle Name'
		}]		
	}, {
		layout: 'vform',
//		cls: 'inline',
		pattern: [4, 8],
		defaultItem: {
			as: 'fluid'
		},
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-calendar',
			label: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-map-marker',
			label: 'Birth Place'
		}]		
	}]
});

form.render('#sample');
