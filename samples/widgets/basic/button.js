


$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Типы',
	renderTo: '#sample'
});


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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Размеры',
	renderTo: '#sample'
});


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





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Контурные',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		outline: true
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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Плоские',
	renderTo: '#sample'
});


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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});




$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Линейные',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		line: true
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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'С иконками',
	renderTo: '#sample'
});


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
	}, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}]
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
	}, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}]
});







$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Иконки',
	renderTo: '#sample'
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
	}, {
		type: 'tool',
		icon: 'fa-copy'
	}]
});




$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Круглые',
	renderTo: '#sample'
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
	}, {
		type: 'tool',
		icon: 'fa-copy'
	}]
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
	}, {
		type: 'tool',
		icon: 'fa-copy'
	}]
});










$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Со списком',
	renderTo: '#sample'
});


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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});




$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Список с кнопкой',
	renderTo: '#sample'
});



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
	}, {
		text: 'Tool',
		type: 'tool'
	}]
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Группа кнопок',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button-box',
		items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
	}]
});



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Переключатели',
	renderTo: '#sample'
});


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



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Выбор',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button-box',
		defaultItem: {
			onClick: function() {
				this.events.rise('select');
			}
		},
		items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
		mixins: ['selectable'],
		selected: 0
	}],
});





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Состояния',
	renderTo: '#sample'
});


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



