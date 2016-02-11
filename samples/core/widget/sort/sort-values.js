

var data3 = new Ergo.data.Collection({
	provider: ajaxProvider
});



// сортировка по полю
var sort_values = function(sort, sort_field, a, b) {

	a = a[1];
	b = b[1];

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


	data: data3,

	onChangeValue: function(e) {

		var sorter = sort_values.bind(this, e.value, 'full_name');

		if(e.value) {
			this.$content.opt('dynamicSorter', sorter);
			this.$content._rebind();
		}


		// var v = this.data.get();

		// if(e.value) {
		// 	v.sort( sort_values.curry(e.value, 'full_name') );
		// }

		// this.data.events.fire('value:changed');

	}


});



data3.fetch();
