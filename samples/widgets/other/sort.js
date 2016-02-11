
var provider = new Ergo.data.AjaxProvider('data/mock-15.json');

// сортировка по полю
var sort_values = function(a, b, sort, sort_field) {

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

// сортировка по опции
var sort_opts = function(a, b, sort, sort_opt) {

	if(sort == 'asc') {
		a = a.opt(sort_opt);
		b = b.opt(sort_opt);
	}
	else {
		var c = a;
		a = b.opt(sort_opt);
		b = c.opt(sort_opt);
	}

	if( a < b ) return -1;
	if( a > b ) return 1;
	return 0;
};





var data = new Ergo.data.Collection({
	provider: provider
});

var data2 = new Ergo.data.Collection({
	provider: provider,
	parser: function(v) {
		// эмулируем серверную сортировку

		var q = this.options.query;

		if(q.sort) {
			v.sort( $ergo.rcurry(sort_values, q.sort, q.sort_field) );
		}

		return v;
	}
});


var data3 = new Ergo.data.Collection({
	provider: provider
});





var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'grid',
	defaultItem: {
		etype: 'panel',
		cls: 'widget',
		$toolbar: {
			weight: -5,
			cls: 'tool-box',
			layout: 'fluid',
			$button: {
				etype: 'select-box',
				$dropdown: {
					items: [
						{text: 'По возрастанию', name: 'asc'},
						{text: 'По убыванию', name: 'desc'}]
				},
				onDataChanged: function() {
					this.rise('changeValue', {value: this.opt('value')});
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
				etype: 'item-box',
				$content: {
					binding: 'text',
					dataId: 'full_name',
				},
				$after: {
//					etype: 'inline',
					autoRender: true,
					binding: 'text',
					cls: 'tag warning',
					dataId: 'country'
				}

			}
		}
	},
	items: [{
		title: 'Сортировка элементов',
//		autoBind: false,
//		data: data,
		onChangeValue: function(e) {

			var sort = e.value;
			var sort_field = 'full_name';


			if( sort ) {

				var items = [];
				this.content.items.each(function(item) {
					items.push(item);
				});

				items.sort( $ergo.rcurry(sort_opts, sort, 'text') );


				for(var i = 0; i < items.length; i++) {
					this.content.items.remove( items[i] );
				}

				for(var i = 0; i < items.length; i++) {
					this.content.items.add( items[i], i );
				}


				this.content.render();

			}


		}
	}, {
		title: 'Серверная сортировка',

		data: data2,

		onChangeValue: function(e) {

			this.data.opt({
				query: {sort: e.value, sort_field: 'full_name'}
			});

			this.data.fetch();

		}

	}, {

		title: 'Сортировка связывания',

		data: data3,

		onChangeValue: function(e) {

			var v = this.data.get();

			if(e.value) {
				v.sort( $ergo.rcurry(sort_values, e.value, 'full_name') );
			}

			this.data.events.fire('value:changed');

		}

	}]

});


data.fetch().then(function() {

	var v = this.get();

	var list = w.item(0).content;

	for(var i = 0; i < v.length; i++) {
		list.items.add({
			text: v[i].full_name,
			$after: {
				text: v[i].country
			}
		});
	}

	list.render();

}.bind(data));


data2.fetch();

data3.fetch();
