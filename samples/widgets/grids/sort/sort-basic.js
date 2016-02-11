



JsonAjaxProvider = {
	url: 'data/grid-30.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};


var SortableCollection = Ergo.data.Collection.extend({

	sort2: function() {

		var entries = this.entries.copy();

		var field = this.options.sortField;
		var order = this.options.sortOrder;



		entries.sort(function(x, y){
			a = x.get();
			b = y.get();

			if(order == 'asc') {
				var c = b[field];
				b = a[field];
				a = c;
			}
			else if(order == 'desc') {
				a = a[field];
				b = b[field];
			}
			else {
				b = x.id;
				a = y.id;
			}

			return this.options.sort.call(this, a, b);
		}.bind(this));


		var ids = [];
		for(var i = 0; i < entries.count(); i++) {
			ids.push(entries.get(i).id);
		}

		for(var i = 0; i < entries.count(); i++) {
			this.entries.get(i).id = ids[i];
		}


	},


	sort: function() {

		var field = this.options.sortField;
		var order = this.options.sortOrder;

		this.entries.sort(function(x, y){
			a = x.get();
			b = y.get();

			if(order == 'asc') {
				var c = b[field];
				b = a[field];
				a = c;
			}
			else if(order == 'desc') {
				a = a[field];
				b = b[field];
			}
			else {
				b = x.id;
				a = y.id;
			}

			return this.options.sort.call(this, a, b);
		}.bind(this));

	},

/*
	each: function(callback) {

		var v = this.get();

		v.sort(this.options.sort);

		for(var i = 0; i < v.length; i++) {
			callback.call(this, this.entry(i), i, v[i]);
		}

//		Ergo.each(v, callback.bind(this));

	}
*/
});


var data = new SortableCollection({
	provider: JsonAjaxProvider,
	sort: function(a, b) {
		if(a > b) return -1;
		else if(a < b) return 1;
		return 0;
	}
});



var w = $.ergo({
	etype: 'table-grid',
	as: 'table grid box single-line celled',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'link',
				as: 'column-text',
				components: {
					caret: {
						etype: 'html:span',
						as: 'caret',
						weight: 100
					},
					content: {
						etype: '.'
					}
				},
				states: {
					'asc:sort': 'asc',
					'desc:sort': 'desc',
					'natural:sort': ''
				},
				state: 'off',
				onClick: function() {
					if(this.states.is('asc'))
						this.states.set('desc');
					else if(this.states.is('desc'))
						this.states.set('natural');
					else
						this.states.set('asc');
				},
				onStateChanged: function(e) {
					if(e.op == 'on')
						this.rise('sort', {type: e.state, column: this.parent});
				}
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
		header: {
			text: 'Full Name',
			state: 'sortable'
		},
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: {
			text: 'Country',
			state: 'sortable'
		},
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
	data: data,
	onSort: function(e) {
		console.log(e);
		data.opt('sortField', this.columns.get(e.column._index).dataId);
		data.opt('sortOrder', e.type);
		data.sort2();
//		data.sort();
//		this.$rebind(true);
//		this.content.content.body.rows.$rebind(true);
//		this.data.events.fire('value:changed');
		this._dataChanged();
	}
});


w.render('#sample');

data.fetch();
