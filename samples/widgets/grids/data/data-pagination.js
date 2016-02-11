
ajaxProvider = {
	url: 'data/grid.json',
	findAll: function(source, query) {
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
	as: 'table grid box single-line celled',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text'
			}
		},
		autoBind: false,
		// set: {
		// 	'text': function(v) {this.$content.opt('text', v);}
		// }
	},
	columns: [{
		header: 'ID',
//		dataId: 'User Id',
		format: '#{User Id}',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
//		dataId: 'Full Name',
		format: '#{Full Name}',
		binding: 'text',
	}, {
		header: 'Country',
//		dataId: 'Country',
		format: '#{Country}',
		binding: 'text'
	}, {
		header: 'Email',
//		dataId: 'Email',
		format: '#{Email}',
		binding: 'text'
	}, {
		header: 'Created At',
//		dataId: 'Created At',
		format: '#{Created At}',
		binding: 'text'
	}],
	// mixins: ['loader'],
	// $loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data,
	$footer: {
		as: 'padding',
		$pagination: {
			etype: 'grid-pagination'
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


w.render('#sample');


w.opt('index', 1);
