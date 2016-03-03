

JsonAjaxProvider = {
	findAll: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/mock-1500.json'});

data.fetch();




var w = $.ergo({
	etype: 'table-grid',
  as: 'table box grid single-line celled',
	height: 400,

	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
			}
		},
		autoBind: false
	},
	columns: [{
		header: 'ID',
		dataId: 'id',
		binding: 'prop:text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'full_name',
		binding: 'prop:text'
	}, {
		header: 'Email',
		dataId: 'email',
		binding: 'prop:text'
	}, {
		header: 'Country',
		dataId: 'country',
		binding: 'prop:text'
	}, {
		header: 'IP Address',
		dataId: 'ip_address',
		binding: 'prop:text'
	}],
	// mixins: ['loader'],
	// $loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.render('#sample');
