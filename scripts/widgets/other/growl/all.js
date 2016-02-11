
$context.section('Basic');
$context.section_begin('growl-basic');
$context.section_end('growl-basic');


var alerts = {
	'success': {
		icon: 'fa-check',
		title: 'Готово!',
		text: 'Процесс завершен',
		as: 'success'
	},
	'info': {
		icon: 'fa-info',
		title: 'Информация!',
		text: 'Помощь при работе с приложением',
		as: 'info'
	},
	'warning': {
		icon: 'fa-bell-o',
		title: 'Предупреждение!',
		text: 'Автоматическая проверка отключена',
		as: 'warning'
	},
	'danger': {
		icon: 'fa-times',
		title: 'Ошибка!',
		text: 'Сервер не отвечает на запросы',
		as: 'danger'
	}
};




var Growls = $.ergo({
	etype: 'growls',
	renderTo: 'body',
	as: 'top right',
	defaultItem: {
		$content: {
			etype: 'alert',
			as: 'box inverted minor',
			width: 300,
			$icon: {
				as: 'fa circular'
			}
		}
	}
});





var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		onClick: function() {

			var name = this.opt('name');

			Growls.addGrowl( alerts[name] );

		}
	},
	items: [
		{text: 'Success', as: 'success', name: 'success'},
		{text: 'Info', as: 'info', name: 'info'},
		{text: 'Warning', as: 'warning', name: 'warning'},
		{text: 'Danger', as: 'danger', name: 'danger'}
	]
});

w.render('#sample');
