

var data3 = new Ergo.data.Collection({
	provider: ajaxProvider,
	parser: function(v) {

		var r = [];
		var q = this.options.query;
		
		for(var i in v) {
			if(!q.filter || (v[i].full_name.toLowerCase().indexOf(q.filter) > -1))
				r.push(v[i]);
		}
		
		return r;
	}
});




$.ergo({
	etype: 'box',
	renderTo: '#sample',
	$filter: {
		etype: 'input',
		include: 'icon:at-right',
		icon: 'fa-search',
		autoBind: false,
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

	data: data3,
	
	onChangeText: function(e) {
		
		// Метод №3

		this.data.opt('query', {filter: e.text});			
		this.data.fetch();
		
	}		

});



data3.fetch();
