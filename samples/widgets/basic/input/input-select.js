
var n = 0;

var f = function(item) {
	var s = this.opt('search') || '';
	var out = n < 10 && item.opt('text').toLowerCase().indexOf(s.toLowerCase()) == 0;
	if(out)
		n++;
	return out;
};



var input = $.ergo({
	etype: 'input',
	text: 'Search...',
	include: 'dropdown',
	$dropdown: {
		items: COUNTRIES,
		renderFilter: f,
//		style: {'max-height': 200}
	},
	onChangeText: function(e) {
		if(e.text) {

			n = 0;

			this.$dropdown.opt('search', e.text);
			this.$dropdown.filter('render');

			this.states.set('opened');
		}
		else {
			this.states.unset('opened');
		}
	}
});



input.render('#sample');

