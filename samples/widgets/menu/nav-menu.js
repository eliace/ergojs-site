

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




var w = $.ergo({
	etype: 'navigation',
	$content: {
		items: [{
			etype: 'nested-list',
			cls: 'nav-menu',
			nestedItem: {
				$content: {
					etype: 'link',
					onClick: function(e) {
						this.parent.subtree.open();
						e.baseEvent.stopPropagation();
					},
					format: '#{title}'
				},
				$subtree: {
					cls: 'dropdown-menu',
					mixins: ['popup', 'effects'],
					popup: {
						at: 'left bottom'
					},
					effects: {
						show: {type: 'slideDown', delay: 300},
						hide: 'hide',
//						hide: 'slideUp',
						delay: 0
					}
				}
			},
//			items: ['Услуги', 'Продукты', 'Обучение', 'О компании'],
//			dynamic: false,
			data: data
		}]
	}	
});

w.$render('#sample');
