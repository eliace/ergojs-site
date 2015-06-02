

var data3 = new Ergo.data.Collection({
	provider: ajaxProvider
});



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
		
		var v = this.data.get();
		
		if(e.value) {
			v.sort( sort_values.curry(e.value, 'full_name') );
		}
		
		this.data.events.fire('value:changed');
		
	}		


});



data3.fetch();