

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
				etype: 'input',
				include: 'icon:at-right',
				icon: 'fa-search',
				autoBind: false,
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

		var criteria = prop_text_filter.bind(this, e.text, 'full_name');

		this.$content.filter( 'compose', criteria );

		// this.content.opt('dynamicFilter', filter);
		// this.content._rebind();
		
	}		

	
});


data2.fetch();
