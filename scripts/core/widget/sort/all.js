
var ajaxProvider = new Ergo.data.AjaxProvider('data/mock-15.json');



$context.section('Сортировка элементов');
$context.section_begin('sort-items');
$context.section_end('sort-items');


var data = new Ergo.data.Collection({provider: ajaxProvider});



// сортировка по опции
var sort_opts = function(sort, sort_opt, a, b) {

	a = a[1];
	b = b[1];

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





var w = $.ergo({
	renderTo: '#sample',
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
				this.events.rise('changeValue', {value: this.opt('value')});
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
	},


	onChangeValue: function(e) {
		
		var sort = e.value;
		var sort_field = 'full_name';
		
		
		if( sort ) {

			var sorter = sort_opts.bind(this, sort, 'text');

			this.content.opt('sorter', sorter);
			this.content._rerender();


			
			// var items = [];
			// this.content.items.each(function(item) {
			// 	items.push(item);
			// });
			
			// items.sort( sort_opts.bind(this, sort, 'text') );
				
			
			// for(var i = 0; i < items.length; i++) {
			// 	this.content.items.remove( items[i] );
			// }

			// for(var i = 0; i < items.length; i++) {
			// 	this.content.items.add( items[i], i );
			// }

			
			// this.content.render();
			
		}
		
		
	}


});



data.fetch().then(function() {
	
	var v = this.get();
	
	var list = w.content;
	
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

$context.section('Серверная сортировка');
$context.section_begin('sort-datasource');
$context.section_end('sort-datasource');


// сортировка по полю
var sort_values = function(sort, sort_field, a, b) {
	
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
			v.sort( sort_values.bind(this, q.sort, q.sort_field) );
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
		layout: 'fluid',
		$button: {
			etype: 'select-box',
			$dropdown: {
				items: [
					{text: 'По возрастанию', name: 'asc'}, 
					{text: 'По убыванию', name: 'desc'}]
			},
			onDataChanged: function() {
				this.events.rise('changeValue', {value: this.opt('value')});
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

$context.section('Сортировка связывания');
$context.section_begin('sort-values');
$context.section_end('sort-values');


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
		layout: 'fluid',
		$button: {
			etype: 'select-box',
			$dropdown: {
				items: [
					{text: 'По возрастанию', name: 'asc'}, 
					{text: 'По убыванию', name: 'desc'}]
			},
			onDataChanged: function() {
				this.events.rise('changeValue', {value: this.opt('value')});
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
	},


	data: data3,
	
	onChangeValue: function(e) {
		
		var sorter = sort_values.curry(e.value, 'full_name');

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


