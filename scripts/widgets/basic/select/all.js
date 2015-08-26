

var usersProvider = {

	url: 'data/mock-30.json',

	find_all: function() {
		return $.ajax(this.url, {
			method: 'get',
			dataType: 'json'
		});
	}
}





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
$context.section('С фильтрацией');
$context.section_begin('select-filter');
$context.section_end('select-filter');


var textFilter = function(s, item) {
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var w = $.ergo({
	etype: 'select',

	$content: {
		etype: 'html:input',
		placeholder: 'Country',
		autoBind: false,
		events: {
			'jquery:keyup': function() {
				this.events.rise('input', {value: this.el.val()});
			},
			// 'jquery:focus': function() {
			// 	this.events.rise('focus', {focus: true});
			// },
			// 'jquery:blur': function() {
			// 	this.events.rise('focus', {focus: false});
			// },
			'jquery:change': function() {
				this.events.rise('change', {text: this.el.val()});
			}
		}
	},

	$dropdown: {
		style: {'max-height': 200, 'overflow-y': 'auto', 'overflow-x': 'hidden'},
		items: COUNTRIES
	},


	onInput: function(e) {

		this.$dropdown.filter( 'render', textFilter.curry(e.value) );

		// this.$dropdown.opt('filter', textFilter.curry(e.value));
		// this.$dropdown._rerender();

	}

});


w.render('#sample');
$context.section('Множественный выбор');
$context.section_begin('select-multi');
$context.section_end('select-multi');

var textFilter = function(s, item) {
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var select = $.ergo({
	etype: 'select',
	as: 'multi',
//	$labels: {
	defaultItem: {
//		style: {'display': 'inline-block', 'vertical-align': 'middle', 'margin-left': 4, 'float': 'left', 'margin-top': 3, 'margin-bottom': 3},
//		etype: 'label',
		as: 'label',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'contextual action after +close',
			onClick: 'action:delete'
		},
		onDelete: function() {
			this._destroy();
		}
	},
//	items: ['hello', 'goodbye'],
//	},
	$content: {
		etype: 'edit',
//		html: '<div contenteditable="true"></div>',
//		style: {'display': 'inline-block', 'vertical-align': 'middle', 'overflow': 'visible', 'min-width': 20, 'float': 'left', 'font': 'inherit', 'width': 'auto'},
		weight: 5,
		events: {
			// 'jquery:change': function() {
			// 	this.events.rise('input', {text: this.el.val()});
			// },
			'jquery:keyup': function(e) {
				this.events.rise('input', {text: this.opt('text')});
			}
			// 'jquery:keydown': function(e) {
			// 	if(e.keyCode == 13) {
			// 		this.events.rise('change', {text: this.opt('text')});
			// 		e.preventDefault();
			// 	}
			// }
		}
	},
	$dropdown: {
		style: {'max-height': 200, 'overflow-y': 'auto', 'overflow-x': 'hidden'},
		items: COUNTRIES
	},


	binding: function(v) {

		this.opt('selected', v);
		
		var selected = this.selected;

		if(selected) {
			this.items.add(selected.opt('text')).render();
			this.$content.opt('text', '');
			this.$dropdown.options.renderFilter = textFilter.curry('');
//			this.$content.events.rise('input', {text: ''});
		}

	},

	onClick: 'action:dropdown',

	// onChange: function(e) {
	// 	this.items.add(e.text).render();
	// 	this.$content.opt('text', '');
	// },
	onSelect: function(e) {
		this.$content.el.focus();
		// this.opt('value', e.target.opt('name'));
		// e.stop(true);
	},
	onInput: function(e) {
		this.$dropdown.filter( 'render', textFilter.curry(e.text) );
		this.states.toggle('opened', !(!e.text));
	}.debounce(300),
	onDropdown: function(e) {
		this.$content.el.focus();
		// this.$dropdown._rerender();
		// this.states.set('opened');
		e.stop(true);
	},
	// set: {
	// 	'text': function(v) {
	// 		this.$content.el.attr('data-placeholder', v);
	// 	}
	// }
});


select.render('#sample');
$context.section('Ajax');
$context.section_begin('select-data');
$context.section_end('select-data');


var userData = {
	user_id: -1,
	user_title: '---'
};

var users = new Ergo.data.Collection({provider: usersProvider});


var w = $.ergo({
	etype: 'select',
	text: 'Варианты...',
	state: 'placeholder',
	$content: {
		format: '#{user_title}',
		binding: 'text'
	},
	$dropdown: {
		defaultItem: {
			format: '#{full_name}',
			get: {
				'name': function() {
					return {user_id: this.data.get('id'), user_title: this.opt('text')}
				}
			}
		},
		data: users
	},
	data: userData,
	dataId: ['user_id', 'user_title'],
	selection: {
		lookup: function(v) {
			return this.$dropdown.items.find(function(item) { return item.opt('name').user_id == v.user_id; } );
		}
	}
});


users.fetch();



w.render('#sample');

