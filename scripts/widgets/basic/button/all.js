
$context.section('Тип');
$context.section_begin('button-type');
$context.section_end('button-type');


var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'		
	},
	items: [{
		text: 'Default',
	}, {
		text: 'Basic',
		type: 'basic'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Info',
		type: 'info'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}]
});






$context.section('Цвет');
$context.section_begin('button-color');
$context.section_end('button-color');


var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'		
	},
	items: [{
		text: 'Orange',
		cls: 'orange'
	}, {
		text: 'Green',
		cls: 'green'
	}, {
		text: 'Red',
		cls: 'red'
	}, {
		text: 'Yellow',
		cls: 'yellow'
	}, {
		text: 'Black',
		type: 'black'
	}, {
		text: 'Teal',
		type: 'teal'
	}, {
		text: 'Indigo',
		type: 'indigo'
	}, {
		text: 'Pink',
		type: 'pink'
	}, {
		text: 'Purple',
		type: 'purple'
	}]
});



$context.section('Размер');
$context.section_begin('button-size');
$context.section_end('button-size');

var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Large',
		size: 'large'
	}, {
		text: 'Default',
	}, {
		text: 'Small',
		size: 'small'
	}, {
		text: 'Tiny',
		size: 'tiny'
	}]
});


$context.section('Контурные');
$context.section_begin('button-outline');
$context.section_end('button-outline');

var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'outlined'
//		outline: true
	},
	items: [{
		text: 'Default'//, type: 'default'
	}, {
		text: 'Basic', type: 'basic'
	}, {
		text: 'Primary', type: 'primary'
	}, {
		text: 'Success', type: 'success'
	}, {
		text: 'Warning', type: 'warning'
	}, {
		text: 'Danger',	type: 'danger'
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});


$context.section('Прозрачные');
$context.section_begin('button-transparent');
$context.section_end('button-transparent');


var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'transparent'
//		flat: true
	},
	items: [{
		text: 'Default',
	}, {
		text: 'Basic',
		type: 'basic'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}]
});



$context.section('Flat');
$context.section_begin('button-flat');
$context.section_end('button-flat');


var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'flat'
//		outline: true
	},
	items: [{
		text: 'Default'
	}, {
		text: 'Basic', type: 'basic'
	}, {
		text: 'Primary', type: 'primary'
	}, {
		text: 'Info', type: 'info'
	}, {
		text: 'Success', type: 'success'
	}, {
		text: 'Warning', type: 'warning'
	}, {
		text: 'Danger',	type: 'danger'
	}]
});


$context.section('Rised');
$context.section_begin('button-rised');
$context.section_end('button-rised');




var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'rised'
//		outline: true
	},
	items: [{
		text: 'Default'
	}, {
		text: 'Basic', type: 'basic'
	}, {
		text: 'Primary', type: 'primary'
	}, {
		text: 'Info', type: 'info'
	}, {
		text: 'Success', type: 'success'
	}, {
		text: 'Warning', type: 'warning'
	}, {
		text: 'Danger',	type: 'danger'
	}]
});


$context.section('С иконками');
$context.section_begin('button-with-icon');
$context.section_end('button-with-icon');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: -10,
			cls: 'before'
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
		type: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		type: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		type: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		type: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		type: 'danger',
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
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: 10,
			cls: 'after'
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
		type: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		type: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		type: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		type: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		type: 'danger',
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
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		cls: 'icon-button',
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
	cls: 'items __gap',
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
			cls: 'before'
		}
	}, {
		icon: 'fa-arrow-right',
		text: 'Вперед',
		$icon: {
			weight: 10,
			cls: 'after'
		}
	}]
});


$context.section('Боковая иконка');
$context.section_begin('button-icon-side');
$context.section_end('button-icon-side');


var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		cls: 'has-icon at-right',
		$icon: {
			etype: 'icon',
			weight: 10,
			cls: 'right'
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
		type: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		type: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		type: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		type: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		type: 'danger',
		icon: 'fa-unlock'
	}]
});


w.render('#sample');

$context.section('Круглые');
$context.section_begin('button-circular');
$context.section_end('button-circular');

$.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		cls: 'circular'
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
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		cls: 'large circular'
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
	cls: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	renderTo: '#sample',
	defaultItem: 'button',
	cls: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	style: {'margin-top': 16}
});


$context.section('Со списком');
$context.section_begin('button-dropdown');
$context.section_end('button-dropdown');

$.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$dropdown: {
			cls: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		type: 'basic'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


$.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		drop: 'up',
		// $content: {
		// 	state: 'dropup'
		// },
		$dropdown: {
//			state: 'dropup',
			cls: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		type: 'basic'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}]
});


$context.section('Список с кнопкой');
$context.section_begin('button-split');
$context.section_end('button-split');

var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'split-button',
		$dropdown_items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
	},
	items: [{
		text: 'Default',
		type: 'default'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});


$context.section('Блок', 'Кнопка растягивается на всю ширину контейнера');
$context.section_begin('button-fit');
$context.section_end('button-fit');

var w = $.ergo({
	etype: 'button',
	cls: 'block primary',
	text: 'Fit block button',
});

w.render('#sample');


$context.section('Переключатели');
$context.section_begin('button-group-toggle');
$context.section_end('button-group-toggle');

var w = $.ergo({
	etype: 'button-box',
	cls: 'group',
	defaultItem: {
		onClick: function() {
			this.states.toggle('selected');
		}
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');
$context.section('Выбор');
$context.section_begin('button-group-select');
$context.section_end('button-group-select');

var w = $.ergo({
	etype: 'button-box',
	include: 'selectable',
	cls: 'group',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
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
	cls: 'items __gap',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		text: 'Selected',
		state: 'primary selected'
	}, {
		etype: 'button',
		text: 'Disabled',
		state: 'primary disabled'
	}]
});



