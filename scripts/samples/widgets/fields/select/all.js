

$context.section('Выпадающий список');
$context.section_begin('select-dropdown');
$context.section_end('select-dropdown');



var data = {
	country: 2,
	countries: ['Югославия', 'Болгария', 'Венгрия', 'Польша', 'Чехия', 'Словакия', 'Словения']
};


var data2 = {
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
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	
	items: [{
		etype: 'select-box',
		
		width: 160,
			
		$dropdown: {
			items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
		},
		
		value: 1		
	}, {
		etype: 'select-box',
		
		width: 160,
			
		$dropdown: {
			defaultItem: {
				get: {
					'name': function() {
						return this.opt('text');
					}
				}
			},
			items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
		},
		
		value: 'Австралия'		
	}, {
		etype: 'select-box',
		
		width: 160,
		
		$dropdown: {
			data: data,
			dataId: 'countries'
		},
		
		data: data,
		
		dataId: 'country'
		
	}, {
		etype: 'select-box',
		
		width: 160,
		
		$dropdown: {
			data: data2,
			dataId: 'countries',
			defaultItem: {
				binding: function(v) {
					this.opt('text', v.name);
					this.opt('name', v.iso);
				},
				get: {
					'name': function() {
						return this.options.name; //this.data.get('iso');
					}
				}
			}
		},
		
		data: data2,
		dataId: 'country'		
	}]
});





