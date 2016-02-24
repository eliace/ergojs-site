

var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'chip',
		$icon: {
			etype: 'icon',
			as: 'fa-envelope before medium circular basic',
			weight: -10
		}
	},
	items: ITEMS
});

w.render('#sample');
