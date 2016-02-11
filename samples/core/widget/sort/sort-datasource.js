

// сортировка по полю
var sort_data = function(sort, sort_field, a, b) {

	if(sort == 'asc') {
		a = a[sort_field];
		b = b[sort_field];
	}
	else {
		var c = a;
		a = b[sort_field];
		b = c[sort_field];
	}

	if( a < b ) return -1;
	if( a > b ) return 1;
	return 0;
};




var data2 = new Ergo.data.Collection({
	provider: ajaxProvider,
	parser: function(v) {
		// эмулируем серверную сортировку

		var q = this.options.query;

		if(q.sort) {
			v.sort( sort_data.bind(this, q.sort, q.sort_field) );
		}

		return v;
	}
});




$.ergo({
	renderTo: '#sample',
	etype: 'panel',
	cls: 'widget',
	$toolbar: {
		weight: -5,
		cls: 'tool-box',
		layout: 'float',
		$button: {
			etype: 'select',
			$dropdown: {
				items: [
					{text: 'По возрастанию', name: 'asc'},
					{text: 'По убыванию', name: 'desc'}]
			},
			onDataChanged: function() {
				this.rise('changeValue', {value: this.value});
			}
		},
		autoBind: false
	},
	$content: {
//			etype: 'list',
		height: 300,
		dynamic: true,
		cls: 'list-box',
		style: {'overflow': 'auto'},
		defaultItem: {
			etype: 'box',
			layout: 'float',
			$content: {
				binding: 'text',
				dataId: 'full_name',
			},
			$after: {
//					etype: 'inline',
				autoRender: true,
				binding: 'text',
				cls: 'label small warning right',
				dataId: 'country'
			}

		}
	},


	data: data2,

	onChangeValue: function(e) {

		this.data.opt({
			query: {sort: e.value, sort_field: 'full_name'}
		});

		this.data.fetch();

	}

});



data2.fetch();
