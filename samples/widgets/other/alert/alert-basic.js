
var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'alert',
		$icon: {
			as: 'circular'
		}
	},
	items: [{
		icon: 'fa-cog',
		title: 'Заголовок',
		text: 'Текст сообщения',
		as: 'basic'
	}, {
		icon: 'fa-info',
		title: 'Информация!',
		text: 'Полезная информация',
		as: 'primary'
	}, {
		icon: 'fa-check',
		title: 'Готово!',
		text: 'Процесс завершен',
		as: 'success'
	}, {
		icon: 'fa-bell-o',
		title: 'Предупреждение!',
		text: 'Последующие действия пользователя могут повредить данные.',
		as: 'warning'
	}, {
		icon: 'fa-times',
		title: 'Ошибка!',
		text: 'Действия пользователя привели к исключительной ситуации',
		as: 'danger'		
	}]
});

w.render('#sample');
