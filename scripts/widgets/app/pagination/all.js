
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
	as: 'box bordered padded divided',
	title: 'Pagination',
	renderTo: '#sample',
	data: data,
	$header: {
		layout: 'float',
		// $title: {
		// 	etype: 'html:h4'
		// },
		$tools: {
			etype: 'box',
			as: 'right',
			$pagination: {
				etype: 'pagination',
			}
		}
	},
	$content: {
		as: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		layout: 'float',
		$pagination: {
			etype: 'pagination'
		},
		$buttons: {
			etype: 'button-box',
//			layout: 'hbox',
			as: 'right __gap',
			// defaultItem: {
			// 	etype: 'button'
			// },
			items: [{text: 'ОК', as: 'primary'}, 'Отмена']
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
	as: 'box bordered divided padded',
	title: 'Pagination',
	renderTo: '#sample',
	data: new PageCollection(),
	$header: {
		layout: 'float',
		// $title: {
		// 	state: 'tiny'
		// },
		$tools: {
			etype: 'box',
			as: 'right',
			items: [{
				etype: 'grid-pagination',
//				state: 'tiny'
			}]
		}
	},
	$content: {
		as: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		$toolbar: {
			etype: 'box',
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



