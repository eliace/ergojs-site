

$context.section('Типы');


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




$context.section('Размеры');


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


/*
$context.section('Цвета');


var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Black',
		cls: 'black'
	}, {
		text: 'Yellow',
		cls: 'yellow'
	}, {
		text: 'Green',
		cls: 'green'
	}, {
		text: 'Blue',
		cls: 'blue'
	}, {
		text: 'Orange',
		cls: 'orange'
	}, {
		text: 'Purple',
		cls: 'purple'
	}, {
		text: 'Red',
		cls: 'red'
	}, {
		text: 'Pink',
		cls: 'pink'
	}, {
		text: 'Teal',
		cls: 'teal'
	}]
});

*/


$context.section('Контурные');


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
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});




$context.section('Плоские');



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


/*
$context.section('Линейные');


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

*/


$context.section('Инструменты');


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






$context.section('Иконки');


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




$context.section('Иконки с текстом');


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




$context.section('Группа кнопок');


// var w = $.ergo({
// 	etype: 'tool-bar',
// 	renderTo: '#sample',
// 	items: [{
// 		etype: 'button-box',
// 		items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
// 	}]
// });

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





$context.section('Во всю ширину контейнера');


var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		cls: 'btn-block primary',
		text: 'Fit block button',
	}]
});




$context.section('Переключатели');


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



