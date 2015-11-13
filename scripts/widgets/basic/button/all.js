
$context.section('Тип');
$context.section_begin('button-type');
$context.section_end('button-type');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});

$context.section('Цвет');
$context.section_begin('button-color');
$context.section_end('button-color');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Orange',
		as: 'orange'
	}, {
		text: 'Green',
		as: 'green'
	}, {
		text: 'Red',
		as: 'red'
	}, {
		text: 'Yellow',
		as: 'yellow'
	}, {
		text: 'Black',
		as: 'black'
	}, {
		text: 'Teal',
		as: 'teal'
	}, {
		text: 'Indigo',
		as: 'indigo'
	}, {
		text: 'Pink',
		as: 'pink'
	}, {
		text: 'Purple',
		as: 'purple'
	}]
});

$context.section('Размер');
$context.section_begin('button-size');
$context.section_end('button-size');

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Giant',
		as: 'giant'
	}, {
		text: 'Huge',
		as: 'huge'
	}, {
		text: 'Large',
		as: 'large'
	}, {
		text: 'Default',
		as: 'medium'
	}, {
		text: 'Small',
		as: 'small'
	}, {
		text: 'Tiny',
		as: 'tiny'
	}]
});

$context.section('Контурные');
$context.section_begin('button-outline');
$context.section_end('button-outline');

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'outlined'
//		outline: true
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});

$context.section('Прозрачные');
$context.section_begin('button-transparent');
$context.section_end('button-transparent');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'transparent'
//		flat: true
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});

$context.section('Flat');
$context.section_begin('button-flat');
$context.section_end('button-flat');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'flat'
//		outline: true
	},
	items: [{
		text: 'Default'
	}, {
		text: 'Basic', as: 'basic'
	}, {
		text: 'Primary', as: 'primary'
	}, {
		text: 'Info', as: 'info'
	}, {
		text: 'Success', as: 'success'
	}, {
		text: 'Warning', as: 'warning'
	}, {
		text: 'Danger',	as: 'danger'
	}]
});

$context.section('Rised');
$context.section_begin('button-rised');
$context.section_end('button-rised');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'rised'
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});

$context.section('С иконками');
$context.section_begin('button-with-icon');
$context.section_end('button-with-icon');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: -10,
			as: 'before'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		icon: 'fa-filter'
	}, {
		text: 'Basic',
		as: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		as: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		as: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		as: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		as: 'danger',
		icon: 'fa-unlock'
	}/*, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});



var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'after'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		icon: 'fa-filter'
	}, {
		text: 'Basic',
		as: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		as: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		as: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		as: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		as: 'danger',
		icon: 'fa-unlock'
	}/*, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});

$context.section('Иконка');
$context.section_begin('button-icon');
$context.section_end('button-icon');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		as: 'icon-button',
		include: 'icon'
		// $icon: {
		// 	etype: 'icon'
		// },
		// set: {
		// 	'icon': function(v) { this.icon.opt('icon', v); }
		// }
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		as: 'basic',
		icon: 'fa-edit'
	}, {
		as: 'primary',
		icon: 'fa-upload'
	}, {
		as: 'success',
		icon: 'fa-check'
	}, {
		as: 'warning',
		icon: 'fa-warning'
	}, {
		as: 'danger',
		icon: 'fa-unlock'
	}/*, {
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});

$context.section('Иконка с текстом');
$context.section_begin('button-icon-text');
$context.section_end('button-icon-text');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		// $icon: {
		// 	etype: 'icon'
		// },
		$content: {
			etype: '.'
		},
		// set: {
		// 	'icon': function(v) { this.icon.opt('icon', v); }
		// }
	},
	items: [{
		icon: 'fa-arrow-left',
		text: 'Назад',
		$icon: {
			weight: -10,
			as: 'before'
		}
	}, {
		icon: 'fa-arrow-right',
		text: 'Вперед',
		$icon: {
			weight: 10,
			as: 'after'
		}
	}]
});

$context.section('Боковая иконка');
$context.section_begin('button-icon-side');
$context.section_end('button-icon-side');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		as: 'has-icon at-right',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'right'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		icon: 'fa-filter'
	}, {
		text: 'Basic',
		as: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		as: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		as: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		as: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		as: 'danger',
		icon: 'fa-unlock'
	}]
});


w.render('#sample');

$context.section('Круглые');
$context.section_begin('button-circular');
$context.section_end('button-circular');

$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		as: 'circular'
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		type: 'basic',
		icon: 'fa-edit'
	}, {
		type: 'primary',
		icon: 'fa-upload'
	}, {
		type: 'success',
		icon: 'fa-check'
	}, {
		type: 'warning',
		icon: 'fa-warning'
	}, {
		type: 'danger',
		icon: 'fa-unlock'
	}]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		as: 'large circular'
//		size: 'large'
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		type: 'basic',
		icon: 'fa-edit'
	}, {
		type: 'primary',
		icon: 'fa-upload'
	}, {
		type: 'success',
		icon: 'fa-check'
	}, {
		type: 'warning',
		icon: 'fa-warning'
	}, {
		type: 'danger',
		icon: 'fa-unlock'
	}]
});

$context.section('Группа кнопок');
$context.section_begin('button-group');
$context.section_end('button-group');

var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	renderTo: '#sample',
	defaultItem: 'button',
	as: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	renderTo: '#sample',
	defaultItem: 'button',
	as: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	style: {'margin-top': 16}
});

$context.section('Со списком');
$context.section_begin('button-dropdown');
$context.section_end('button-dropdown');

$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$dropdown: {
			as: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		as: 'basic'
	}, {
		text: 'Primary',
		as: 'primary'
	}, {
		text: 'Success',
		as: 'success'
	}, {
		text: 'Warning',
		as: 'warning'
	}, {
		text: 'Danger',
		as: 'danger'
	}]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		drop: 'up',
		// $content: {
		// 	state: 'dropup'
		// },
		$dropdown: {
//			state: 'dropup',
			as: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		as: 'basic'
	}, {
		text: 'Primary',
		as: 'primary'
	}, {
		text: 'Success',
		as: 'success'
	}, {
		text: 'Warning',
		as: 'warning'
	}, {
		text: 'Danger',
		as: 'danger'
	}]
});

$context.section('Список с кнопкой');
$context.section_begin('button-split');
$context.section_end('button-split');

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'split-button',
		$dropdown_items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});

$context.section('Блок', 'Кнопка растягивается на всю ширину контейнера');
$context.section_begin('button-fit');
$context.section_end('button-fit');

var w = $.ergo({
	etype: 'button',
	as: 'block primary',
	text: 'Fluid button',
});

w.render('#sample');

$context.section('Переключатели');
$context.section_begin('button-group-toggle');
$context.section_end('button-group-toggle');

var w = $.ergo({
	etype: 'buttons',
	as: 'group',
	defaultItem: {
		onClick: 'action:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');

$context.section('Выбор');
$context.section_begin('button-group-select');
$context.section_end('button-group-select');

var w = $.ergo({
	etype: 'buttons',
	include: 'selectable',
	as: 'group',
	defaultItem: {
		onClick: 'action:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	selected: 0
});

w.render('#sample');

$context.section('Состояния');
$context.section_begin('button-state');
$context.section_end('button-state');

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		text: 'Selected',
		as: 'primary +selected'
	}, {
		etype: 'button',
		text: 'Disabled',
		as: 'primary +disabled'
	}]
});


