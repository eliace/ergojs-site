
$context.section('Basic');
$context.section_begin('alert-basic');
$context.section_end('alert-basic');

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

$context.section('Simple');
$context.section_begin('alert-simple');
$context.section_end('alert-simple');

var w = $.ergo({
	etype: 'box',
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


