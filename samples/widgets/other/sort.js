
var provider = new Ergo.data.AjaxProvider('data/mock-15.json');


//var sort_fn = ;



var data = new Ergo.data.Collection({
	provider: provider
});

var data2 = new Ergo.data.Collection({
	provider: provider,
	parser: function(v) {
		// эмулируем серверную сортировку
		
		var q = this.options.query;
		
		if(q.sort) {
			v.sort(function(a, b) {
				
				if(q.sort == 'asc') {
					a = a[q.sort_field];
					b = b[q.sort_field];				
				}
				else {
					var c = a;
					a = b[q.sort_field];
					b = c[q.sort_field];					
				}
				
				if( a < b ) return -1;
				if( a > b ) return 1;
				return 0;
			});
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
					// defaultItem: {
						// get: {
							// 'key': function() {
								// return this.opt('name');
							// }
						// }
					// },
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
				
				items.sort(function(a, b) {
					
					if(sort == 'asc') {
						a = a.opt('text');
						b = b.opt('text');
					}
					else {
						var c = a;
						a = b.opt('text');
						b = c.opt('text');			
					}
					
					if( a < b ) return -1;
					if( a > b ) return 1;
					return 0;
				});


//				console.log(items.length);
				
				for(var i = 0; i < items.length; i++) {
//					console.log( items[i].opt('text') );
					this.content.items.remove( items[i] );
//					console.log(this.content.items.size());
				}

				for(var i = 0; i < items.length; i++) {
//					console.log(items[i]._index);
					this.content.items.add( items[i], i );
//					console.log(items[i]._index);
				}

//				for(var i = 0; i < 3; i++) {
//					console.log( items[i].opt('text') );
//					console.log(this.content.children.get(i)._index);
//					console.log(this.content.items.size());
//				}

				
//				console.log(this.content.items.size());
				
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
			
			var sort = e.value;
			var sort_field = 'full_name';
			
			if(sort) {
				v.sort(function(a, b) {
					
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
				});
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
			text: v[i].full_name
		});
	}
	
	list.render();
	
}.bind(data));


data2.fetch();

data3.fetch();
