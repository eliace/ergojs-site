
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
	data: data  // static data
});


w.render('#sample');
