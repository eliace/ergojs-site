

//var data = [1,2,3,4,5];

var PageCollection = Ergo.data.PagedCollection.extend({
	
	defaults: {
		provider: {
			find_all: function(query) {
				var o = this.options;
				return $.when({total: 1000, from: query.from, to: query.to/*(o.index-1)*o.pageSize, to: o.index*o.pageSize*/, data: []});
			}
		},
		parser: function(v) {
			this.options.totalCount = v.total;
			this.options.from = v.from; 
			this.options.to = v.to; 
			
	//		console.log(v);
			
			return v.data;
		},
		
		// pageSize: 30,
		// index: 0,
		// totalCount: 0,
// 		
		// query: {},
// 		
		// set: {
			// 'index': function(v) {
				// this.options.query.from = (v-1)*this.options.pageSize;
				// this.options.query.to = v*this.options.pageSize;
			// }
		// },
// 		
		// get: {
			// 'count': function() {
				// return Math.ceil(this.options.totalCount / this.options.pageSize);		
			// }
		// }
		
	}
	
});



var data = new PageCollection();


var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Pagination',
	renderTo: '#sample',
	data: data,
	$header: {
		$title: {
			state: 'tiny'
		},
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'pagination',
				state: 'tiny'
			}]			
		}
	},
	$content: {
		cls: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		autoRender: true,

		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'pagination'
			}]
		},
		
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'pagination'
			}, {
				layout: 'bar',
				cls: 'pull-right',
				defaultItem: {
					etype: 'button'
				},
				items: ['ОК', 'Отмена']
			}]
		}
		
	},
	onChangeDataIndex: function(e) {
		this.opt('index', e.index);
	},
	set: {
		'index': function(index) {

			this.data.opt('index', index);
			
			this.data.fetch();
			
		}
	}
});













var w2 = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Pagination',
	renderTo: '#sample',
	data: new PageCollection(),
	$header: {
		$title: {
			state: 'tiny'
		},
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'grid-pagination',
				state: 'tiny'
			}]			
		}		
	},
	$content: {
		cls: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		autoRender: true,
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'grid-pagination'
			}]
		}
	},
	onChangeDataIndex: function(e) {
		this.opt('index', e.index);
	},
	set: {
		'index': function(index) {

			this.data.opt('index', index);
			
			this.data.fetch();
			
		}
	}
});



/*
var w = $.ergo({
	etype: 'pagination',
	data: data
});


w.render('#sample');
*/

w.opt('index', 24);
w2.opt('index', 12);
