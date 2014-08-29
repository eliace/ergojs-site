
var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'alert',
		$icon: {
			cls: 'fa rounded'
		}
	},
	items: [{
		icon: 'fa-info',
		title: 'Информация!',
		text: 'Полезная информация',
		state: 'info'
	}, {
		icon: 'fa-check',
		title: 'Готово!',
		text: 'Процесс завершен',
		state: 'success'		
	}, {
		icon: 'fa-bell-o',
		title: 'Педупреждение!',
		text: 'Последующие действия пользователя могут повредить данные.',
		state: 'warning'
	}, {
		icon: 'fa-times',
		title: 'Ошибка!',
		text: 'Действия пользователя привели к исключительной ситуации',
		state: 'error'		
	}]
});

w.$render('#sample');
