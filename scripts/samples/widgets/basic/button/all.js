
$context.section('Тип');
$context.section_begin('button-type');
$context.section_end('button-type');


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'		
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


$context.section('Размер');
$context.section_begin('button-size');
$context.section_end('button-size');

var w = $.ergo({
	etype: 'tool-bar',
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
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		outline: true
	},
	items: [{
		text: 'Default', type: 'default'
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


$context.section('Плоские');
$context.section_begin('button-flat');
$context.section_end('button-flat');


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		flat: true
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



$context.section('Инструментальные');
$context.section_begin('button-tool');
$context.section_end('button-tool');


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'tool'
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



$context.section('С иконками');
$context.section_begin('button-with-icon');
$context.section_end('button-with-icon');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: -10,
			cls: 'before'
		},
		$content: {
			etype: '&text'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		type: 'default',
		icon: 'fa-filter'
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


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: 10,
			cls: 'after'
		},
		$content: {
			etype: '&text'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		type: 'default',
		icon: 'fa-filter'
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
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'icon-btn',
		$icon: {
			etype: 'icon'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		type: 'default',
		icon: 'fa-filter'
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


$context.section('Иконка с тектом');
$context.section_begin('button-icon-text');
$context.section_end('button-icon-text');


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'icon-btn',
		$icon: {
			etype: 'icon'
		},
		$content: {
			etype: '&text'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
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


$context.section('Круглые');
$context.section_begin('button-circular');
$context.section_end('button-circular');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'icon-btn',
		$icon: {
			etype: 'icon'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		},
		round: true
	},
	items: [{
		type: 'default',
		icon: 'fa-filter'
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



var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'icon-btn',
		$icon: {
			etype: 'icon'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		},
		round: true,
		size: 'large'
	},
	items: [{
		type: 'default',
		icon: 'fa-filter'
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



$context.section('Со списком');
$context.section_begin('button-dropdown');
$context.section_end('button-dropdown');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
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




var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$content: {
			state: 'dropup'
		},
		$dropdown: {
			state: 'dropup',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
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


$context.section('Список с кнопкой');
$context.section_begin('button-split');
$context.section_end('button-split');

var w = $.ergo({
	etype: 'tool-bar',
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
$context.section_begin('button-block');
$context.section_end('button-block');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		cls: 'btn-block primary',
		text: 'Fit block button',
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
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	renderTo: '#sample',
	defaultItem: 'button',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	style: {'margin-top': 16}
});


$context.section('Переключатели');
$context.section_begin('button-group-toggle');
$context.section_end('button-group-toggle');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button-box',
		defaultItem: {
			onClick: function() {
				this.states.toggle('selected');
			}
		},
		items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
	}]
});


$context.section('Выбор');
$context.section_begin('button-group-select');
$context.section_end('button-group-select');

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button-box',
		include: 'selectable',
		defaultItem: {
			onClick: function() {
				this.events.rise('select');
			}
		},
		items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
		selected: 0
	}],
});


$context.section('Состояния');
$context.section_begin('button-state');
$context.section_end('button-state');

var w = $.ergo({
	etype: 'tool-bar',
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



