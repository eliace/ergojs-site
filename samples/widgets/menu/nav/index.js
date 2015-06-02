
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
		name: 'my',
		children: [{
			title: 'Новые',
			name: 'new'
		}, {
			title: 'В работе',
			name: 'in_progress'
		}, {
			title: 'Решенные',
			name: 'done'
		}]
	}, {
		title: 'Назначенные',
		name: 'assigned',
	}, {
		title: 'Действия',
		name: 'actions',
		children: [{
			title: 'Новая подзадача',
			name: 'new'
		}, {
			title: 'Переназначить',
			name: 'show'
		}, {
			title: 'Закрыть',
			name: 'remove'
		}]
	}]
}, {
	title: 'Календарь',
	icon: 'fa-calendar',
	name: 'calendar'
}];




$context.section('Создание');
//= require nav-basic
$context.section('Выбор элемента');
//= require nav-select

