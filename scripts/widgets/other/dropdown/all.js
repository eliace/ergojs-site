
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
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}

});


w.render('#sample');
$context.section('С группами');
$context.section_begin('dropdown-groups');
$context.section_end('dropdown-groups');




var w = $.ergo({
	etype: 'box',

	cls: 'button',

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
		cls: 'hovered',
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
				cls: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 1'
			},
			defaultItem: {
				cls: 'item',
				onClick: function() {
					this.events.rise('close');
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
				cls: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 2'
			},
			defaultItem: {
				cls: 'item',
				onClick: function() {
					this.events.rise('close');
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

	cls: 'button',

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
		cls: 'hovered',
		events: {
			'jquery:click': function(e) {
				return false;
			}
		},
		$filter: {
			cls: 'border-bottom',
			$content: {
				etype: 'input',
				cls: 'icon right',
				placeholder: 'Поиск...',
				$icon: {
					etype: 'icon',
					cls: 'fa-search right',
					weight: 10
				}
			}
		},
		defaultItem: {
			cls: 'item',
			onClick: function() {
				this.events.rise('close');
			}
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

	cls: 'button',

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
		cls: '__hover',
		defaultItem: {
			include: 'icon',
			$icon: {
				cls: 'before'
			}
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

	cls: 'button',

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
		cls: '__hover',
		defaultItem: {
			include: '+image',
			$image: {
				width: 32,
				cls: 'circular before'
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
	cls: '__gap',
	defaultItem: {
		layout: 'hbox',
		cls: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			cls: 'button basic',
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
			{	state: 'up to-left' }, 
			{	state: 'up to-right'	}
		], [
			{	state: 'down to-left'	}, 
			{	state: 'down to-right'	}
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
	cls: '__gap',
	defaultItem: {
		layout: 'hbox',
		cls: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			cls: 'button basic',
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
			{	state: 'left to-up' }, 
			{	state: 'right to-up'	}
		], [
			{	state: 'left to-down'	}, 
			{	state: 'right to-down'	}
		]
	]
});

w.render('#sample');




