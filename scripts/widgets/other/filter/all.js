

ajaxProvider = {
	url: 'data/mock-300.json',
	find_all: function(source) {
		return $.ajax(this.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



$context.section('Метод #1', 'Видимость определяется вызовом методов render/unrender, структура и данные списка при этом не меняются');
$context.section_begin('filter-render');
$context.section_end('filter-render');

var data = new Ergo.data.Collection({
	provider: ajaxProvider
});



var text_filter = function(s, item) {
	var v = item.opt('value');
	return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};



$.ergo({
	etype: 'box',
	renderTo: '#sample',
	$toolbar: {
		etype: 'tool-bar',
		$form: {
			$filter: {
				etype: 'input',
				include: 'icon:at-right',
				icon: 'fa-search',
//				width: 200,
				autoBind: false,
				// $addon: {
				// 	etype: 'icon',
				// 	cls: 'fa-search addon'
				// }
			}			
		}
	},
	$content: {
		etype: 'list',
		height: 300,
		style: {'overflow': 'auto'},
		defaultItem: {
			binding: 'text',
			dataId: 'full_name'
		}
	},

	data: data,

	onChangeText: function(e) {
		
		var self = this;
		
		// Метод №1

		var filter = text_filter.bind(this, e.text);

		this.content.opt('filter', filter);
		this.content._rerender();

//		this.content.filter( criteria, 'value' );

	}		

});



data.fetch();

$context.section('Метод #2', 'Видимость определяется dynamicFilter, изменяется структура, но не данные');
$context.section_begin('filter-dynamic');
$context.section_end('filter-dynamic');


var data2 = new Ergo.data.Collection({
	provider: ajaxProvider
});



var prop_text_filter = function(s, key, v) {
	return v && v[key].toLowerCase().indexOf(s.toLowerCase()) > -1;
};



$.ergo({
	etype: 'box',
	renderTo: '#sample',
	$toolbar: {
		etype: 'tool-bar',
		$form: {
			$filter: {
				etype: 'text-box',
				width: 200,
				autoBind: false,
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
			dataId: 'full_name'
		}
	},

	data: data2,

	onChangeText: function(e) {
		
		// Метод №2
		
		// this.content.opt('dynamicFilter', function(v, i) {
		// 	return v && (v.full_name.indexOf(e.text) > -1);
		// });

		var filter = prop_text_filter.bind(this, e.text, 'full_name');

		this.content.opt('dynamicFilter', filter);
		this.content._rebind();
		
	}		

	
});


data2.fetch();

$context.section('Метод #3', 'Видимость определяется параметрами запроса к бэкенду, обновляются данные');
$context.section_begin('filter-datasource');
$context.section_end('filter-datasource');


var data3 = new Ergo.data.Collection({
	provider: ajaxProvider,
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
	$toolbar: {
		etype: 'tool-bar',
		$form: {
			$filter: {
				etype: 'text-box',
				width: 200,
				autoBind: false,
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
			dataId: 'full_name'
		}
	},

	data: data,
	
	onChangeText: function(e) {
		
		// Метод №3
		
		this.data.opt('query', {filter: e.text});			
		this.data.fetch();
		
	}		

});



data3.fetch();



