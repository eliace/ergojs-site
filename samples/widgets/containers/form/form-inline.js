

var form = $.ergo({
	etype: 'box',
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
	}, {
		layout: 'hform',
		cls: 'inline',
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
		layout: 'hform',
		cls: 'inline',
		pattern: [4, 8],
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