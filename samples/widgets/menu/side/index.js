
var data = [{
	title: 'Dashboard',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Почта',
	icon: 'fa-envelope',
	name: 'mail',
	children: [{
		title: 'Входящие',
		name: 'inbox'
	}, {
		title: 'Отправленные',
		name: 'sent'
	}, {
		title: 'Черновики',
		name: 'drafts'
	}]
}, {
	title: 'Задачи',
	icon: 'fa-tasks',
	name: 'tasks',
	children: [{
		title: 'Мои',
		name: 'my'
	}, {
		title: 'Назначенные',
		name: 'assigned'
	}]
}, {
	title: 'Календарь',
	icon: 'fa-calendar',
	name: 'calendar'
}];



$context.section('Создание');
//= require side-basic