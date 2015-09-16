
var w = $.ergo({
	etype: 'table-grid',
	as: 'table box grid single-line celled',
	height: 300,

	column: {
		// обычный заголовок
		components: {
			content: {
				etype: 'link',
				as: 'column-text',
			}
		},
		autoBind: false
	},
	columns: [{
		// header: {
			// text: 'ID',
			// sorted: true
		// },
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
	data: data  // static data
});


w.render('#sample');
