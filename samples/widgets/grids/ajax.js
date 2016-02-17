

JsonAjaxProvider = {
	findAll: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/grid.json'});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	columns: [{
		header: 'ID',
		dataId: 'User Id',
		binding: 'prop:text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'prop:text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'prop:text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'prop:text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'prop:text'
	}],
//	mixins: ['loader'],
//	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	// $toolbar: {
		// weight: -100,
		// etype: 'tool-bar',
		// state: 'right',
		// items: [{
			// etype: 'icon',
			// cls: 'lock-icon fa-refresh fa-spin'
		// }]
	// },
	// onFetch: function() {
		// this.states.set('locked');
	// },
	// onFetched: function() {
		// this.states.unset('locked');
	// },
	data: data
});


w.render('#sample');

data.fetch();
