


JsonAjaxProvider = {
	find_all: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/mock-1500.json'});





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
		dataId: 'id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'full_name',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'email',
		binding: 'text'
	}, {
		header: 'Country',
		dataId: 'country',
		binding: 'text'
	}, {
		header: 'IP Address',
		dataId: 'ip_address',
		binding: 'text'
	}],
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.render('#sample');

data.fetch();
