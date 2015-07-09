
var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'simple-alert',
	},
	items: [{
		title: 'Заголовок!',
		text: 'Текстовое сообщение',
		state: 'basic'
	}, {
		title: 'Информация!',
		text: 'Полезная информация',
		state: 'primary'
	}, {
		title: 'Готово!',
		text: 'Процесс завершен',
		state: 'success'		
	}, {
		title: 'Предупреждение!',
		text: 'Последующие действия пользователя могут повредить данные.',
		state: 'warning'
	}, {
		title: 'Ошибка!',
		text: 'Действия пользователя привели к исключительной ситуации',
		state: 'danger'		
	}]
});

w.render('#sample');

