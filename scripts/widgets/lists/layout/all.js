

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});



$context.section('Float', 'Выравнивание только по верхнему краю. Можно привязывать элементы к разным сторонам');
$context.section_begin('layout-fluid');
$context.section_end('layout-fluid');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',
//		html: '<li/>',

		layout: 'float',  // ITEM LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				as: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'prop:text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			as: 'fluid-right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}

});


w.render('#sample');

$context.section('HBox', 'Выравнивание произвольное. К разным сторонам элементы не привязываются');
$context.section_begin('layout-hbox');
$context.section_end('layout-hbox');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',
		html: '<li/>',

		layout: 'hbox',  // ITEM LAYOUT

		as: '__gap padding has-icon at-right',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				as: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'prop:text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			as: 'right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}

});



w.render('#sample');

$context.section('Flex', 'Выравнивание произвольное. К разным сторонам элементы не привязываются, но можно растянуть их на всю ширину контейнера');
$context.section_begin('layout-flex');
$context.section_end('layout-flex');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',
		tag: 'li',

		layout: 'flex',  // ITEM LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				as: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'prop:text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			style: {'flex-grow': 2},
			as: 'contextual action fa-close text-right',
			binding: false,
			weight: 10
		}
	}

});


w.render('#sample');



data.fetch();
