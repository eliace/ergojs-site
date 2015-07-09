
var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'alert',
		$icon: {
			cls: 'circular'
		}
	},
	items: [{
		icon: 'fa-cog',
		title: 'Заголовок',
		text: 'Текст сообщения',
		state: 'basic'
	}, {
		icon: 'fa-info',
		title: 'Информация!',
		text: 'Полезная информация',
		state: 'primary'
	}, {
		icon: 'fa-check',
		title: 'Готово!',
		text: 'Процесс завершен',
		state: 'success'		
	}, {
		icon: 'fa-bell-o',
		title: 'Предупреждение!',
		text: 'Последующие действия пользователя могут повредить данные.',
		state: 'warning'
	}, {
		icon: 'fa-times',
		title: 'Ошибка!',
		text: 'Действия пользователя привели к исключительной ситуации',
		state: 'danger'		
	}]
});

w.render('#sample');
