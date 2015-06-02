
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
		
	}
	
});


var data = new PageCollection();



$context.section('Pagination');
$context.section_begin('pagination-1');
$context.section_end('pagination-1');

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


w.opt('index', 24);

$context.section('Pagination');
$context.section_begin('pagination-2');
$context.section_end('pagination-2');


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


w2.opt('index', 12);


