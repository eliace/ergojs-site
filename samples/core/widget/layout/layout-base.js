
var w2 = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'my-widget',
	items: [{
		text: 'Weight 0, Item 0 (A)',
		group: 'a'
	}, {
		text: 'Weight 0, Item 1 (B)',
		group: 'b'
	}, {
		text: 'Weight 0, Item 2 (A)',
		group: 'a'
	}],
	$box1: {
		text: 'Weight -1 (A)',
		weight: -1,
		group: 'a'
	},
	$box2: {
		text: 'Weight 1 (A)',
		weight: 1,
		group: 'a'
	},
	$box3: {
		text: 'Weight -1 (B)',
		weight: -1,
		group: 'b'
	}
});


w2.render('#sample');
