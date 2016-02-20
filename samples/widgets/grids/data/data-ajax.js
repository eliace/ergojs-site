
JsonAjaxProvider = {
	findAll: function(ds) {
		return $.ajax(ds.options.url, {
			data: ds.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/grid.json'});





var w = $.ergo({
	etype: 'table-grid',
	as: 'table grid box single-line celled',
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
	data: data
});


w.render('#sample');

data.fetch();
