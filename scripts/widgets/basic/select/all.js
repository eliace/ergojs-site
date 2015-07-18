

$context.section('Простой список');
$context.section_begin('select-basic');
$context.section_end('select-basic');


var w = $.ergo({
	etype: 'select',
	text: 'Варианты...',
	state: 'placeholder',
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
$context.section('Связывание с данными');
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



var select1 = $.ergo({
	etype: 'select',

	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	},	

	value: 1		
});


var select2 = $.ergo({
	etype: 'select',
	
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
});



var select3 = $.ergo({
	etype: 'select',
	
	$dropdown: {
		data: data,
		dataId: 'countries'
	},
	
	data: data,	
	dataId: 'country'
});



var select4 = $.ergo({
	etype: 'select',
	
	$dropdown: {
		data: data2,
		dataId: 'countries',
		defaultItem: {
			binding: function(v) {
				this.opt('text', v.name);
				this.opt('name', v.iso);
			}
		}
	},
	
	data: data2,
	dataId: 'country'		

});





var w = $.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	items: [ select1, select2, select3, select4 ]
});

w.render('#sample');







$context.section('С полем ввода');
$context.section_begin('select-input');
$context.section_end('select-input');


var w = $.ergo({
	etype: 'select',

	$content: {
		etype: 'html:input',
		placeholder: 'Сторона света',
	},

	$dropdown_items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

});


w.render('#sample');

