
Ergo.defineClass('Ergo.widgets.Label', 'Ergo.widgets.Text', {

	defaults: {
		cls: 'label',
		components: {
			content: {
				etype: '&text'
			}
		}
	}

}, 'widgets:label');



$context.section('Текстовая метка');
$context.section_begin('label-basic');
$context.section_end('label-basic');

var w = $.ergo({
	etype: 'label',
	text: 'Метка'
});

w.render('#sample');

$context.section('С иконкой');
$context.section_begin('label-icon');
$context.section_end('label-icon');

var w = $.ergo({
	etype: 'label',
	text: '42',
	$icon: {
		etype: 'icon',
		weight: -10,
		cls: 'fa-envelope before'
	}
});

w.render('#sample');


$context.section('С вложенным компонентом');
$context.section_begin('label-content');
$context.section_end('label-content');

var w = $.ergo({
	etype: 'label',
	text: 'Новые',
	$details: {
		etype: 'text',
		text: '15',
		weight: 10,
		cls: 'after'
	}
});

w.render('#sample');


$context.section('С действием');
$context.section_begin('label-action');
$context.section_end('label-action');

var w = $.ergo({
	etype: 'label',
	text: 'UI',
	$close: {
		etype: 'icon',
		weight: 10,
		cls: 'contextual action fa-remove after'
	}
});

w.render('#sample');


$context.section('Со ссылкой');
$context.section_begin('label-link');
$context.section_end('label-link');


var w = $.ergo({
	etype: 'label',
	text: 'Входящие',
	$link: {
		etype: 'link',
		weight: 10,
		cls: 'after',
		text: '37',
		$content: {
			etype: '&text'
		},
		$icon: {
			etype: 'icon',
			weight: -10,
			cls: 'fa-envelope before'				
		}
	}
});

w.render('#sample');


$context.section('С указателем');
$context.section_begin('label-pointer');
$context.section_end('label-pointer');

var w = $.ergo({
	etype: 'html:form',
	width: 800,
	layout: {
		etype: 'stack',
		wrapper: function(item) {
			var w = $('<div/>');
			w.append(item.el);
			if(item.label) {
				item.label.options.autoRender = false;
				if(item.label.el.hasClass('pointing-above') || item.label.el.hasClass('pointing-left'))
					w.append(item.label.el);
				else if(item.label.el.hasClass('pointing-below') || item.label.el.hasClass('pointing-right'))
					w.prepend(item.label.el);
			}
			return w;
		}
	},
	items: [{
		etype: 'text-box',
		placeholder: 'Фамилия',
		cls: 'box-block',
		$label: {
			etype: 'label',
			cls: 'pointing-above',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Имя',
		cls: 'box-block',
		$label: {
			etype: 'label',
			cls: 'pointing-below',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Отчество',
		$label: {
			etype: 'label',
			cls: 'pointing-left',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Место рождения',
		$label: {
			etype: 'label',
			cls: 'pointing-right',
			text: 'Введите значение'
		}
	}]
});

w.render('#sample');


$context.section('Лента');
$context.section_begin('label-ribbon');
$context.section_end('label-ribbon');


var w = $.ergo({
	etype: 'box',
	width: 600,
	cls: 'bordered rounded paper box-large',
	style: {'margin-top': 16},
	$ribbon: {
		etype: 'label',
		cls: 'ribbon left',
		text: 'Метка'
	},
	$title: {
		etype: 'text',
		style: {'display': 'inline-block'},
		text: 'Заголовок'
	},
	$content: {
		text: LOREMIPSUM,
		style: {'margin-top': 12}
	}
});

w.render('#sample');




var w = $.ergo({
	etype: 'box',
	style: {'margin-top': 16, 'position': 'relative'},
	layout: {
		wrapper: function(item) {
			var w = $('<div/>');
			w.append(item.el);
			if(item.label) {
				item.label.options.autoRender = false;
				if(item.label.el.hasClass('ribbon'))
					w.prepend(item.label.el);
			}
			return w;
		}
	},	
	$content: {
		etype: 'html:img',
		src: 'img/galleries/space/preview/solar_2-wallpaper-1366x768.jpg',
		cls: 'width-small',
		$label: {
			etype: 'label',
			cls: 'ribbon primary left',
			text: 'Изображение',
			style: {'position': 'absolute', 'left': 'calc(-16px)', 'top': 16}
		}		
	}
});

w.render('#sample');


$context.section('Цвета');
$context.section_begin('label-color');
$context.section_end('label-color');

var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	defaultItem: 'label',
	items: [{
		text: 'default',
		cls: 'default'
	}, {
		text: 'primary',
		cls: 'primary'
	}, {
		text: 'success',
		cls: 'success'
	}, {
		text: 'info',
		cls: 'info'
	}, {
		text: 'warning',
		cls: 'warning'
	}, {
		text: 'danger',
		cls: 'danger'
	}]
});


w.render('#sample');


$context.section('Круглые');
$context.section_begin('label-circular');
$context.section_end('label-circular');


var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	defaultItem: {
		etype: 'label',
		cls: 'circular'
	},
	items: [{
		text: 'default',
		cls: 'default'
	}, {
		text: 'primary',
		cls: 'primary'
	}, {
		text: 'success',
		cls: 'success'
	}, {
		text: 'info',
		cls: 'info'
	}, {
		text: 'warning',
		cls: 'warning'
	}, {
		text: 'danger',
		cls: 'danger'
	}]
});

w.render('#sample');


var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	style: {'margin-top': 16},
	defaultItem: {
		etype: 'label',
		cls: 'circular'
	},
	items: [{
		text: '10',
		cls: 'default'
	}, {
		text: '20',
		cls: 'primary'
	}, {
		text: '30',
		cls: 'success'
	}, {
		text: '40',
		cls: 'info'
	}, {
		text: '50',
		cls: 'warning'
	}, {
		text: '60',
		cls: 'danger'
	}]
});




w.render('#sample');



