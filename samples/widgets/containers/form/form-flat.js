

var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'
	}, {
		layout: 'hform',
		items: [{
			etype: 'input',
			as: 'flat primary',
			text: 'First Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			text: 'Last Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			text: 'Middle Name'
		}]
	}, {
		layout: 'hform',
		pattern: [3, 9],
		items: [{
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-calendar',
			as: 'flat primary',
			text: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-map-marker',
			as: 'flat primary',
			text: 'Birth Place'
		}]
	}]
});

form.render('#sample');
