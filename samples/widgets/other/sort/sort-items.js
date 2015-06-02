

var data = new Ergo.data.Collection({provider: ajaxProvider});



// сортировка по опции
var sort_opts = function(sort, sort_opt, a, b) {
	
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
			
			var items = [];
			this.content.items.each(function(item) {
				items.push(item);
			});
			
			items.sort( sort_opts.bind(this, sort, 'text') );
				
			
			for(var i = 0; i < items.length; i++) {
				this.content.items.remove( items[i] );
			}

			for(var i = 0; i < items.length; i++) {
				this.content.items.add( items[i], i );
			}

			
			this.content.render();
			
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
