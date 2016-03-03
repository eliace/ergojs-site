

var COLUMNS = [{
  header: 'User',
  binding: 'prop:text',
  format: '#{full_name}',
  width: 180
}];

for(var i = 1; i < 31; i++) {
  COLUMNS[i] = {
    header: ''+i,
//		dataId,
//		binding: 'prop:text'
  }
}

JsonAjaxProvider = {
	findAll: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/mock-100.json'});

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
  columns: COLUMNS,
	data: data,

  $frozen: {
    as: 'frozen-grid',
    etype: 'table-grid',
    columns: [COLUMNS[0]]
  }

});


w.render('#sample');
