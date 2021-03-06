

JsonAjaxProvider = {
	url: 'data/grid.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.PagedCollection({
	provider: JsonAjaxProvider,
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
	// totalCount: 0,
	// pageSize: 30,
	// index: 0,
	// get: {
		// 'count': function() {
			// return Math.ceil(this.options.totalCount / this.options.pageSize);
		// }
	// }
});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
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
		binding: 'prop:text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'prop:text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'prop:text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'prop:text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'prop:text'
	}],
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data,
	components: {
		footer: {
			$toolbar: {
				etype: 'tool-bar',
				items: [{
					etype: 'grid-pagination',
/*
					defaultComponent: {
						cls: 'flat',
						set: {
							'text': function() {}
						},
						style: {width: 24}
					},
					components: {
						firstButton: {etype: 'icon-button', icon: 'fa-angle-double-left'},
						prevButton: {etype: 'icon-button', icon: 'fa-angle-left'},
						nextButton: {etype: 'icon-button', icon: 'fa-angle-right'},
						lastButton: {etype: 'icon-button', icon: 'fa-angle-double-right'},
					},
					binding: function(v) {
						this.item(1).opt('value', this.data.opt('index')+1);
						this.item(3).opt('value', this.data.opt('count'));
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
*/
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
