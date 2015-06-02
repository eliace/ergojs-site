
$context.section('Basic');
$context.section_begin('steps-basic');
$context.section_end('steps-basic');


var w = $.ergo({
	etype: 'list',
//	layout: 'hbox',
	cls: 'steps bordered',
//	width: 800,
	defaultItem: {
		cls: 'step-item',
		$content: {
			etype: 'text'
		}
	},
	items: ['Регистрация', 'Вход', 'Начало работы']
});

w.render('#sample');

w.item(0).states.set('active');




var w = $.ergo({
	etype: 'list',
//	layout: 'hbox',
	cls: 'steps bordered',
//	width: 800,
	style: {'display': 'table'},
	defaultItem: {
		cls: 'step-item',
		$content: {
			etype: 'box',
			$content: {
				etype: 'text',
				cls: 'item-title'
			},
			$description: {
				etype: 'box'
			}
		},
		set: {
			'desc': function(v) { this.content.description.opt('text', v); }
		}
	},
	items: [{
		text: 'Регистрация',
		desc: 'Получите логин и пароль'
	}, {
		text: 'Вход',
		desc: 'Авторизуйтесь на сайте'
	}, {
		text: 'Обучение',
		desc: 'Начало работы'
	}]
});

w.render('#sample');

w.item(0).states.set('active');

