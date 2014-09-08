

JsonAjaxProvider = {
	get: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({
	provider: JsonAjaxProvider, 
	url: 'data/grid.json', 
	parser: function(data){
		// эмуляция страницы данных
		var from = this.options.index*this.options.pageSize;
		var to = (this.options.index+1)*this.options.pageSize;
		
		var v = [];
		
		for(var i = from; i < to; i++) {
			v.push(data[i]);
		}
		
		this.options.totalCount = data.length;
		
		return v;
	},
//	from: 0,
//	to: 30,
	totalCount: 0,
	pageSize: 30,
	index: 0,
	get: {
		'count': function() {
			return Math.ceil(this.options.totalCount / this.options.pageSize);		
		}
	}
});





var w = $.ergo({
	etype: 'table-grid',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'line',
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
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data,
	components: {
		footer: {
			items: [{
				etype: 'grid-pagination',
				binding: function(v) {
					this.item(3).opt('value', this.data.opt('index')+1);
					this.item(5).opt('value', this.data.opt('count'));
				},
				events: {
					'next': function() {
						this.data.opt('index', this.data.opt('index')+1).fetch();
					},
					'previous': function() {
						this.data.opt('index', this.data.opt('index')-1).fetch();
					},
					'last': function() {
						this.data.opt('index', this.data.opt('count')-1).fetch();
					},
					'first': function() {
						this.data.opt('index', 0).fetch();
					},
				}
				// set: {
					// 'index': function(v) {
						// console.log(v);
						// // this.data.opt({
							// // from: this.data.opt('pageSize')*v,
							// // to: this.data.opt('pageSize')*(v+1)
						// // });
						// this.data.fetch();
// //						this._index = v;
					// }
				// }
			}]
		}
	}
	// set: {
		// 'index': function(v) {
			// this.footer.item(0).opt('index', v);
		// }
	// }
});


w.$render('#sample');

data.fetch();

