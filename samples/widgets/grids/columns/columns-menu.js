
var w = $.ergo({
	etype: 'table-grid',
	as: 'table grid box single-line celled',
	height: 300,
	column: {
//		cls: 'menu-header',
		$content: {
			etype: 'link',
			as: 'column-text',
		},
		$menu: {
			etype: 'box',
			include: 'dropdown',
			as: 'float-right',
			$icon: {
				etype: 'icon',
				as: 'fa-bars contextual action',
				weight: -100
			},
			$dropdown: {
				etype: 'dropdown-menu',
				as: 'global',
				renderTo: 'body',
				items: ['По возрастанию', 'По убыванию'],
				popup: {
					behaviour: 'global'
				}
			},
			onClick: function(e) {
				this.states.toggle('opened');
				e.stop();
			}
		},
		autoBind: false
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
//	mixins: ['loader'],
//	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.render('#sample');
