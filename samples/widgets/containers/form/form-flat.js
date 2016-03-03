

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
			placeholder: 'First Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			placeholder: 'Last Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			placeholder: 'Middle Name'
		}]
	}, {
		layout: 'hform',
		pattern: [3, 9],
		items: [{
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-calendar',
			as: 'flat primary',
			placeholder: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-map-marker',
			as: 'flat primary',
			placeholder: 'Birth Place'
		}]
	}]
});

form.render('#sample');
