



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
		data: CountryData,
		dataId: 'countries'
	},

	data: CountryData,
	dataId: 'country'
});



var select4 = $.ergo({
	etype: 'select',

	$dropdown: {
		data: CountryData2,
		dataId: 'countries',
		defaultItem: {
			binding: function(v) {
				this.opt('text', v.name);
				this.opt('name', v.iso);
			}
		}
	},

	data: CountryData2,
	dataId: 'country'

});





var select5 = $.ergo({
	etype: 'select',

	$content: {
		format: '#{name}',
		binding: 'prop:text'
	},

	$dropdown: {
		data: IsoCountries,
		defaultItem: {
			binding: function(v) {
				this.prop('text', v.name);
			},
			get: {
				'name': function() {
					return this.prop('value');
				}
			}
		}
	},

	data: FormData,
	dataId: ['iso', 'name']

});





var w = $.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	items: [ select1, select2, select3, select4, select5 ]
});

w.render('#sample');
