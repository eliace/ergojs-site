
var data = new Ergo.data.Collection({
	provider: ajaxProvider
});



var text_filter = function(s, v) {
	return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
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

	data: data,

	onChangeText: function(e) {
		
		var self = this;
		
		// Метод №1

		var filter = text_filter.bind(this, e.text);
		
		this.content.items.each(function(item) {
//			var v = item.opt('value');
//			if(!(v && v.indexOf(e.text) > -1)) {
			if( !filter(item.opt('value')) ) {
				item.unrender();
			}
			else {
				if(!item._rendered) {
					item.render();
				}					
			}
		});
		
	}		

});



data.fetch();
