

var w = $.ergo({
	etype: 'box',
	as: '__gap',
	renderTo: '#sample',
	layout: 'rows',
	defaultItem: {
		etype: 'input',
		include: 'icon:at-right',
		icon: 'fa-search'
//		cls: 'icon right',
		// $icon: {
		// 	etype: 'icon',
		// 	cls: 'fa-search'
		// }
	},
	items: [{
		placeholder: 'Giant',
		as: 'giant'
	}, {
		placeholder: 'Huge',
		as: 'huge'
	}, {
		placeholder: 'Large',
		as: 'large'
	}, {
		placeholder: 'Default',
		as: 'medium'
	}, {
		placeholder: 'Small',
		as: 'small'
	}, {
		placeholder: 'Tiny',
		as: 'tiny'
	}]
});
