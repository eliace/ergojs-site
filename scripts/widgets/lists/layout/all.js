




$context.section('Float', 'Выравнивание только по верхнему краю. Можно привязывать элементы к разным сторонам', ['data.js']);
$context.section_begin('layout-fluid');
$context.section_end('layout-fluid');


var w = $.ergo({
	etype: 'list',
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
 		etype: 'box',
// //		html: '<li/>',

		layout: 'float',  // ITEM LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			include: ['icon:before'],
			icon: 'fa-envelope',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
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

$context.section('HBox', 'Выравнивание произвольное. К разным сторонам элементы не привязываются', ['data.js']);
$context.section_begin('layout-hbox');
$context.section_end('layout-hbox');


var w = $.ergo({
	etype: 'list',
	height: 300,
	css: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',

		layout: 'hbox',  // LAYOUT

		as: '__gap padding has-icon at-right',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			include: ['icon:before'],
			icon: 'fa-envelope',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			css: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
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

$context.section('Flex', 'Выравнивание произвольное. К разным сторонам элементы не привязываются, но можно растянуть их на всю ширину контейнера', ['data.js']);
$context.section_begin('layout-flex');
$context.section_end('layout-flex');


var w = $.ergo({
	etype: 'list',
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',

		layout: 'flex',  // LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			include: ['icon:before'],
			icon: 'fa-envelope',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
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

