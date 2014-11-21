

var w = $.ergo({	
	etype: 'select-box',
	renderTo: '#sample',
	
	width: 160,
		
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	},
	
	value: 1
	
});




var w = $.ergo({	
	etype: 'select-box',
	renderTo: '#sample',
	
	width: 160,
		
	$dropdown: {
		defaultItem: {
			get: {
				'key': function() {
					return this.opt('text');
				}
			}
		},
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	},
	
	value: 'Австралия'
	
});



var data = {
	country: 2,
	countries: ['Югославия', 'Болгария', 'Венгрия', 'Польша', 'Чехия', 'Словакия', 'Словения']
};



var w = $.ergo({	
	etype: 'select-box',
	renderTo: '#sample',
	
	width: 160,
		
	$dropdown: {
		data: data,
		dataId: 'countries'
	},
	
	data: data,
	
	dataId: 'country'
	
});






var data = {
	country: 'CZ',
	countries: [
		{iso: 'HR', name: 'Хорватия'}, 
		{iso: 'BG', name: 'Болгария'}, 
		{iso: 'HU', name: 'Венгрия'}, 
		{iso: 'PL', name: 'Польша'}, 
		{iso: 'CZ', name: 'Чехия'}, 
		{iso: 'SK', name: 'Словакия'}, 
		{iso: 'SI', name: 'Словения'}]
};



var w = $.ergo({	
	etype: 'select-box',
	renderTo: '#sample',
	
	width: 160,
	
	
	$dropdown: {
		data: data,
		dataId: 'countries',
		defaultItem: {
			binding: function(v) {
				this.opt('text', v.name);
			},
			get: {
				'key': function() {
					return this.data.get('iso');
				}
			}
		}
	},
	
	data: data,
	dataId: 'country'
	
});










