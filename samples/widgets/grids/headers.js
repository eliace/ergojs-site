


JsonAjaxProvider = {
	url: 'data/grid-30.json',
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider});





var w = $.ergo({
	etype: 'table-grid',
	height: 400,
	column: {
		cls: 'menu-header',
		components: {
			content: {
				etype: 'link',
				cls: 'column-text',
			},
			menu: {
				etype: 'dropdown-box',
				cls: 'column-dropdown',
				$content: {
					etype: 'icon',
					state: 'fa-angle-down'
//					etype: 'html:span',
//					cls: 'caret'
				},
				$dropdown_items: ['По возрастанию', 'По убыванию']
			}
			
		},
		autoBind: false,
		set: {
			'text': function(v) {this.content.opt('text', v);}
		}		
	},
	columns: [{
		header: {
			text: 'ID',
		},
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
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.$render('#sample');

data.fetch();
