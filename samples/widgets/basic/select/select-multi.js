
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