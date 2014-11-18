

var w = $.ergo({
	etype: 'box',
	defaultItem: {
		layout: {
			etype: 'grid'
		},
		defaultItem: {
			style: {'padding': 8, 'background-color': '#eee', 'border': '1px solid #ccc'}			
		}
	},
	items: [{
		layout: {pattern: [1,1,1,1,1,1,1,1,1,1,1,1]},
		items: ['col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1', 'col-1']
	}, {
		layout: {pattern: [2,2,2,2,2,2]},
		items: ['col-2', 'col-2', 'col-2', 'col-2', 'col-2', 'col-2']		
	}, {
		layout: {pattern: [3,3,3,3]},
		items: ['col-3', 'col-3', 'col-3', 'col-3']		
	}, {
		layout: {pattern: [4,4,4]},
		items: ['col-4', 'col-4', 'col-4']		
	}, {
		pattern: [5,5,2],
		items: ['col-5', 'col-5', 'col-2']		
	}, {
		pattern: [6,6],
		items: ['col-6', 'col-6']		
	}, {
		pattern: [7,5],
		items: ['col-7', 'col-5']		
	}, {
		pattern: [8,4],
		items: ['col-8', 'col-4']		
	}, {
		pattern: [9,3],
		items: ['col-9', 'col-3']		
	}, {
		pattern: [10,2],
		items: ['col-10', 'col-2']		
	}, {
		pattern: [11,1],
		items: ['col-11', 'col-1']		
	}, {
		pattern: [12],
		items: ['col-12']		
	}]
});

w.render('#sample');