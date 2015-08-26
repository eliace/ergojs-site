

var form = $.ergo({
	etype: 'box',
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
	}, {
		layout: 'hform',
		items: [{
			etype: 'input',
			cls: 'flat primary',
			text: 'First Name'
		}, {
			etype: 'input',
			cls: 'flat primary',
			text: 'Last Name'
		}, {
			etype: 'input',
			cls: 'flat primary',
			text: 'Middle Name'
		}]		
	}, {
		layout: 'hform',
		pattern: [3, 9],
		items: [{
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-calendar',
			cls: 'flat primary',
			text: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-map-marker',
			cls: 'flat primary',
			text: 'Birth Place'
		}]		
	}]
});

form.render('#sample');
