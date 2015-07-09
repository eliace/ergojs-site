
$context.section('Basic');
$context.section_begin('alert-basic');
$context.section_end('alert-basic');

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



