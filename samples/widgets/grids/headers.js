


JsonAjaxProvider = {
	url: 'data/grid-30.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
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
					components: {
						caret: {
							etype: 'icon',
							state: 'fa-angle-down'
						}
					}
				},
				$dropdown: {
					etype: 'dropdown-menu',
					renderTo: 'body',
					popup: {
						behaviour: 'global'
					},
					items: ['По возрастанию', 'По убыванию']
				}
			}

		},
		autoBind: false
	},
	columns: [{
		header: {
			text: 'ID',
		},
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
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.render('#sample');

data.fetch();
