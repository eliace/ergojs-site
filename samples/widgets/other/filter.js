

JsonAjaxProvider = {
	url: 'data/mock-300.json',
	find_all: function(source) {
		return $.ajax(this.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({
	provider: JsonAjaxProvider
});

var data2 = new Ergo.data.Collection({
	provider: JsonAjaxProvider
});

var data3 = new Ergo.data.Collection({
	provider: JsonAjaxProvider,
	parser: function(v) {
		
		var r = [];
		var q = this.options.query;
		
//		console.log(q);
		
		for(var i in v) {
			if(!q.filter || (v[i].full_name.indexOf(q.filter) > -1))
				r.push(v[i]);
		}
		
		console.log(r.length);
		
		return r;
	}
});




$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'grid',
	defaultItem: {
		$toolbar: {
			etype: 'tool-bar',
			$form: {
				$filter: {
					etype: 'text-box',
					width: 200,
					$addon: {
						etype: 'icon',
						cls: 'fa-search addon'
					}
				}			
			}
		},
		$content: {
			etype: 'list',
			height: 300,
			style: {'overflow': 'auto'},
			defaultItem: {
				binding: 'text',
//				format: '#{full_name}'
				dataId: 'full_name'
			}
		}		
	},
	items: [{
		data: data,
		onChangeText: function(e) {
			
			var self = this;
			
			// Метод №1
			
			this.content.items.each(function(item) {
				var v = item.opt('value');
				if(!(v && v.indexOf(e.text) > -1)) {
					item.unrender();
				}
				else {
					if(!item._rendered) {
						item.render();
					}					
				}
			});
			
		}		
	}, {
		data: data2,
		onChangeText: function(e) {
			
			var self = this;
			
			// Метод №2
			
			this.content.opt('dynamicFilter', function(v, i) {
				return v && (v.full_name.indexOf(e.text) > -1);
			});
			this.data.events.fire('value:changed'); //FIXME
			
		}		
		
	}, {
		data: data3,
		onChangeText: function(e) {
			
			// Метод №3
			
			this.data.opt('query', {filter: e.text});			
			this.data.fetch();
			
		}		
		
	}]
	
});


data.fetch();
data2.fetch();
data3.fetch();
