

var w = $.ergo({
	etype: 'list',
	cls: '__gap',
	defaultItem: {
		etype: 'item',
		$icon: {
			etype: 'icon',
			cls: 'fa-envelope before',
			weight: -10
		}
	},
	items: ITEMS
});

w.render('#sample');
