
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
	placeholder: 'Search...',
	include: 'dropdown',
	$dropdown: {
		include: 'list-navigator',
		items: COUNTRIES,
		renderFilter: f,
		defaultItem: {
			as: 'item',
			onClick: 'action:itemClick'
		}
	},

	onItemClick: function(e) {
		this.opt('value', e.target.opt('text'));
		this.states.unset('opened');
	},

	onKeyDown: function(e) {

		var keyCode = e.base.keyCode;

		var KEY_UP = 38;
		var KEY_DOWN = 40;
		var KEY_ENTER = 13;

//		console.log(keyCode);

		if(keyCode == KEY_DOWN) {
			this.$dropdown.navigator.next();
		}
		else if(keyCode == KEY_UP) {
			this.$dropdown.navigator.prev();
		}

	},
	onKeyUp: function(e) {

		var keyCode = e.base.keyCode;

// 		var KEY_UP = 38;
// 		var KEY_DOWN = 40;
 		var KEY_ENTER = 13;
//

		if(keyCode == KEY_ENTER) {
			this.rise('itemClick', {target: this.$dropdown.navigator.selected});
		//			this.$dropdown.events.fire('keyUp', {}, e.base);
		}
		else {

			if(e.text) {

				n = 0;

				this.$dropdown.opt('search', e.text);
				this.$dropdown._rerender();//filter('render');

				console.log('render');

				this.states.set('opened');

			}
			else {
				this.states.unset('opened');
			}
		}

	}
});



input.render('#sample');
