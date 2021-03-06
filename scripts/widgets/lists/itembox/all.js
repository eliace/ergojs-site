

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});



$context.section('Fluid', 'Выравнивание только по верхнему краю. Можно привязывать элементы к разным сторонам');
$context.section_begin('string-fluid');
$context.section_end('string-fluid');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	cls: 'box bordered items-padding',
	data: data,
	defaultItem: {
		etype: 'box',
		html: '<li/>',

		layout: 'fluid',  // ITEM LAYOUT

		cls: 'box items-indent',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				cls: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			cls: 'fluid-right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}
	
});


w.render('#sample');

$context.section('HBox', 'Выравнивание произвольное. К разным сторонам элементы не привязываются');
$context.section_begin('string-hbox');
$context.section_end('string-hbox');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	cls: 'box bordered items-padding',
	data: data,
	defaultItem: {
		etype: 'box',
		html: '<li/>',

		layout: 'hbox',  // ITEM LAYOUT

		cls: 'box has-stick right items-indent',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				cls: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			cls: 'stick right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}
	
});



w.render('#sample');

$context.section('Flex', 'Выравнивание произвольное. К разным сторонам элементы не привязываются, но можно растянуть их на всю ширину контейнера');
$context.section_begin('string-flex');
$context.section_end('string-flex');


var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	cls: 'box bordered items-padding',
	data: data,
	defaultItem: {
		etype: 'box',
		html: '<li/>',

		layout: 'flex',  // ITEM LAYOUT

		cls: 'box items-indent items-middle',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				cls: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			style: {'flex-grow': 2},
			cls: 'contextual action fa-close text-right',
			binding: false,
			weight: 10
		}
	}
	
});


w.render('#sample');



data.fetch();
