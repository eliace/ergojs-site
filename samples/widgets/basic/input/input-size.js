

var w = $.ergo({
	etype: 'box',
	cls: '__gap',
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
		state: 'giant'
	}, {
		placeholder: 'Huge',
		state: 'huge'
	}, {
		placeholder: 'Large',
		state: 'large'
	}, {
		placeholder: 'Default',
		state: 'medium'
	}, {
		placeholder: 'Small',
		state: 'small'
	}, {
		placeholder: 'Tiny',
		state: 'tiny'
	}]
});

