
var w = $.ergo({
	etype: 'box',
	as: 'box vertical __gap',
	defaultItem: {
		etype: 'simple-alert',
	},
	items: [{
		title: 'Заголовок!',
		text: 'Текстовое сообщение',
		as: 'basic'
	}, {
		title: 'Информация!',
		text: 'Полезная информация',
		as: 'primary'
	}, {
		title: 'Готово!',
		text: 'Процесс завершен',
		as: 'success'
	}, {
		title: 'Предупреждение!',
		text: 'Последующие действия пользователя могут повредить данные.',
		as: 'warning'
	}, {
		title: 'Ошибка!',
		text: 'Действия пользователя привели к исключительной ситуации',
		as: 'danger'
	}]
});

w.render('#sample');
