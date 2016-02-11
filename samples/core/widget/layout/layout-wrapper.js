
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: {
		wrapper: function(item) {
			var w = $('<div class="my-widget">');
			w.append(item.el);
			return w[0];
		}
	},
	items: ['Item 0', 'Item 1', 'Item 2']
});
