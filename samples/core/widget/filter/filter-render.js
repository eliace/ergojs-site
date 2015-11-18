
var data = new Ergo.data.Collection({
	provider: ajaxProvider
});



// var text_filter = function(s, item) {
// 	var v = item.opt('value');
// 	return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
// };

var text_filter = function(item) {
	var s = this.opt('filterText');
	var v = item.opt('value');
	return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};



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

		renderFilter: text_filter,

		defaultItem: {
			binding: 'text',
			format: '#{full_name}'
		}
	},

	data: data,

	onInput: function(e) {

		var self = this;

		// Метод №1
		this.$content.opt('filterText', e.text);

		this.$content._rerender();

//		var criteria = text_filter.bind(this, e.text);
//		this.$content.filter( 'render', criteria );

	}

});



data.fetch();
