
$context.section('Basic');
$context.section_begin('data-ajax');
$context.section_end('data-ajax');

JsonAjaxProvider = {
	find_all: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/grid.json'});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'table grid box single-line celled',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	columns: [{
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
//	mixins: ['loader'],
//	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	// $toolbar: {
		// weight: -100,
		// etype: 'tool-bar',
		// state: 'right',
		// items: [{
			// etype: 'icon',
			// cls: 'lock-icon fa-refresh fa-spin'
		// }]
	// },
	// onFetch: function() {
		// this.states.set('locked');
	// },
	// onFetched: function() {
		// this.states.unset('locked');
	// },
	data: data
});


w.render('#sample');

data.fetch();

$context.section('Pagination');
$context.section_begin('data-pagination');
$context.section_end('data-pagination');

ajaxProvider = {
	url: 'data/grid.json', 
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.PagedCollection({
	provider: ajaxProvider, 
	parser: function(data){
		// эмуляция страницы данных
		var from = (this.options.index-1)*this.options.pageSize;
		var to = this.options.index*this.options.pageSize;
		
		var v = [];
		
		to = Math.min(to, data.length);
		
		for(var i = from; i < to; i++) {
			v.push(data[i]);
		}
		
		this.options.totalCount = data.length;
		
		return v;
	},
});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'table grid box single-line celled',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text'
			}
		},
		autoBind: false,
		set: {
			'text': function(v) {this.content.opt('text', v);}
		}		
	},
	columns: [{
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
	// mixins: ['loader'],
	// $loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data,
	components: {
		footer: {
			$toolbar: {
				etype: 'tool-bar',
				items: [{
					etype: 'grid-pagination',
				}]
			}
		}
	},
	onChangeDataIndex: function(e) {
		this.opt('index', e.index);
	},
	set: {
		'index': function(index) {
			
			this.data.opt('index', index);
			
			this.data.fetch();
			
//			this.footer.item(0).opt('index', v);
		}
	}
});


w.render('#sample');


w.opt('index', 1);
