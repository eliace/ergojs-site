

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