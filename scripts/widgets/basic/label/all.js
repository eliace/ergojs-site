



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
	include: 'icon:before',
	text: '42',
	icon: 'fa-envelope'
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
		as: 'after'
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
		as: 'contextual action fa-remove after'
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
		as: 'after',
		text: '37',
		$content: {
			etype: '.'
		},
		$icon: {
			etype: 'icon',
			weight: -10,
			as: 'fa-envelope before'
		}
	}
});

w.render('#sample');

$context.section('С указателем');
$context.section_begin('label-pointer');
$context.section_end('label-pointer');

var w = $.ergo({
	etype: 'html:form',
//	width: 800,
	as: '__gap-x2 divided',
	layout: {
		etype: 'vbox',
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
		etype: 'input',
		placeholder: 'Фамилия',
		as: 'block',
		$label: {
			etype: 'label',
			as: 'pointing-above',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Имя',
		as: 'block',
		$label: {
			etype: 'label',
			as: 'pointing-below',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Отчество',
		$label: {
			etype: 'label',
			as: 'pointing-left',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Место рождения',
		$label: {
			etype: 'label',
			as: 'pointing-right',
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
	as: 'bordered rounded paper padding-x2',
//	style: {'margin-top': 16},
	$ribbon: {
		etype: 'label',
		as: 'ribbon left',
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
		as: 'width-small',
		$label: {
			etype: 'label',
			as: 'ribbon primary left',
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
	as: 'items __gap',
//	layout: 'bar',
	defaultItem: 'label',
	items: [
		{	text: 'default' },
		{	text: 'basic', as: 'basic' },
		{	text: 'primary', as: 'primary' },
		{	text: 'success', as: 'success' },
		{ text: 'info',	as: 'info' },
		{	text: 'warning', as: 'warning' },
		{	text: 'danger',	as: 'danger' }
	]
});


w.render('#sample');

$context.section('Круглые');
$context.section_begin('label-circular');
$context.section_end('label-circular');


var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
//	layout: 'bar',
	defaultItem: {
		etype: 'label',
		as: 'circular'
	},
	items: [
		{	text: 'default', as: 'default' },
		{	text: 'primary', as: 'primary' },
		{	text: 'success', as: 'success' },
		{	text: 'info', as: 'info' },
		{	text: 'warning', as: 'warning' },
		{	text: 'danger',	as: 'danger' }
	]
});

w.render('#sample');


$.ergo({etype: 'html:br', renderTo: '#sample'});


var w = $.ergo({
	etype: 'box',
//	layout: 'bar',
	as: 'items __gap',
//	style: {'margin-top': 16},
	defaultItem: {
		etype: 'label',
		as: 'circular'
	},
	items: [
		{	text: '1', as: 'default' },
		{	text: '-3', as: 'basic'	},
		{	text: '2', as: 'primary' },
		{	text: '30',	as: 'success' },
		{	text: '40',	as: 'info' },
		{	text: '500', as: 'warning' },
		{	text: '600', as: 'danger' }
	]
});




w.render('#sample');


