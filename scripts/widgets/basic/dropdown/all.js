
var AVATARS_URL = 'demo/blog/img/avatars/';


$context.section('Базовый список');
$context.section_begin('dropdown-basic');
$context.section_end('dropdown-basic');

var w = $.ergo({
	etype: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Страны'
	},

	$dropdown: {
		as: '__hover',
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}

});


w.render('#sample');

$context.section('С группами');
$context.section_begin('dropdown-groups');
$context.section_end('dropdown-groups');




var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	onClose: function() {
		this.states.unset('opened');
	},

	$content: {
		etype: '.',
		text: 'Страны'
	},

	$dropdown: {
		as: 'hovered',
		events: {
			'jquery:click': function(e) {
				return false;
			}
		},
		items: [{
			etype: 'list',
			layout: 'inherited',
			autoRender: false,
			$header: {
				as: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 1',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: function() {
					this.rise('close');
				}
			},
			items: ['Испания', 'Германия', 'Франция'],
		}/*, {
			etype: 'box',
			cls: 'divider'
		}*/, {
			etype: 'list',
			layout: 'inherited',
			autoRender: false,
			$header: {
				as: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 2',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: function() {
					this.rise('close');
				}
			},
			items: ['Россия', 'Украина', 'Казахстан'],
		}]
	}


});


w.render('#sample');

$context.section('С полем ввода');
$context.section_begin('dropdown-filter');
$context.section_end('dropdown-filter');


var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	onClose: function() {
		this.states.unset('opened');
	},

	$content: {
		etype: '.',
		text: 'Страны'
	},

	$dropdown: {
		as: 'hovered',
		events: {
			'jquery:click': function(e) {
				return false;
			}
		},
		$filter: {
			as: 'border-bottom',
			weight: -1,
			$content: {
				etype: 'input',
				as: 'icon right',
				placeholder: 'Поиск...',
				$icon: {
					etype: 'icon',
					as: 'fa-search right',
					weight: 10
				}
			}
		},
		defaultItem: {
			as: 'item',
			onClick: 'action:close'
			// onClick: function() {
			// 	this.rise('close');
			// }
		},
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}


});


w.render('#sample');

$context.section('С иконками');
$context.section_begin('dropdown-icons');
$context.section_end('dropdown-icons');



var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Транспорт'
	},

	$dropdown: {
		as: '__hover',
		defaultItem: {
			include: 'icon:before'
		},
		items: [
			{icon: 'fa-cab', text: 'Такси'},
			{icon: 'fa-bus', text: 'Автобус'},
			{icon: 'fa-train', text: 'Поезд'},
			{icon: 'fa-plane', text: 'Самолет'}
		]
	}


});


w.render('#sample');

$context.section('С изображениями');
$context.section_begin('dropdown-images');
$context.section_end('dropdown-images');



var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Пользователь'
	},

	$dropdown: {
		as: '__hover',
		defaultItem: {
			include: '+image',
			$image: {
				width: 32,
				as: 'circular before'
			}
		},
		items: [
			{image: AVATARS_URL + '001.jpg', text: 'Волков А.Н.'},
			{image: AVATARS_URL + '002.jpg', text: 'Зайцев И.Д.'},
			{image: AVATARS_URL + '003.jpg', text: 'Лисицина О.Е.'},
			{image: AVATARS_URL + '004.jpg', text: 'Медведев К.Г.'}
		]
	}


});


w.render('#sample');

$context.section('Положение');
$context.section_begin('dropdown-up-down');
$context.section_end('dropdown-up-down');


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
	defaultItem: {
		layout: 'hbox',
		as: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			as: 'button basic',
			icon: 'fa-cog',
			xicon: 'caret',
			onClick: function(e) {
				this.states.toggle('opened');
				e.stop();
			},
			$dropdown: {
				items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
			}
		}
	},

	items: [
		[
			{	as: '+up +to-left' },
			{	as: '+up +to-right'	}
		], [
			{	as: '+down +to-left'	},
			{	as: '+down +to-right'	}
		]
	]
});

w.render('#sample');

$context.section('Положение');
$context.section_begin('dropdown-left-right');
$context.section_end('dropdown-left-right');


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
	defaultItem: {
		layout: 'hbox',
		as: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			as: 'button basic',
			icon: 'fa-cog',
			xicon: 'caret',
			onClick: function(e) {
				this.states.toggle('opened');
				e.stop();
			},
			$dropdown: {
				items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
			}
		}
	},

	items: [
		[
			{	as: '+left +to-up' },
			{	as: '+right +to-up'	}
		], [
			{	as: '+left +to-down'	},
			{	as: '+right +to-down'	}
		]
	]
});

w.render('#sample');



