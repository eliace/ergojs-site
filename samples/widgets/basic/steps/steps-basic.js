

var w = $.ergo({
	etype: 'list',
//	layout: 'hbox',
	as: 'steps bordered',
//	width: 800,
	defaultItem: {
		as: 'step-item',
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
	as: 'steps bordered',
//	width: 800,
	style: {'display': 'table'},
	defaultItem: {
		as: 'step-item',
		$content: {
			etype: 'box',
			$content: {
				etype: 'text',
				as: 'item-title'
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
