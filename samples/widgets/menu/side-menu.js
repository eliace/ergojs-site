

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
	etype: 'panel',
	cls: 'widget',
	title: 'Тестовое приложение',
	$content: {
		height: 400,
		$sidebox: {
			etype: 'html:aside',
			cls: 'side-box',
			width: 250,
			$menu: {
				etype: 'side-menu',
				data: data,
				nestedItem: {
					$content: {
						$icon: {
							dataId: 'icon',
						},
						$content: {
							dataId: 'title'
						},
					},
					binding: function(v) {
						this.opt('name', v.name);
						if(v.children) this.states.set('has-subtree');
					},
					onItemExpanded: function(e) {
						this.parent.items.each(function(item){
							if(e.target != item && item.states.is('expanded'))
								item.states.unset('expanded');
						}.bind(this));					
					}
				}
			}
		},
		$content: {
			mixins: ['pageable'],
			style: {'margin-left': 250},
			cls: 'panel-content',
			items: [
				{	text: LOREMIPSUM, name: 'dashboard' },
				{	text: LOREMIPSUM_2, name: 'mail_inbox' },
				{	text: LOREMIPSUM_3, name: 'mail_sent' },
				{	text: LOREMIPSUM_4, name: 'mail_drafts' },
				{	text: LOREMIPSUM_5, name: 'tasks_my' },
				{	text: LOREMIPSUM, name: 'tasks_assigned' }
			]
		},
		mixins: ['selectable'],
		onMenuAction: function(e) {
			this.opt('selected', e.target);
		},
		selectionFinder: function(key) {
			return this.sidebox.menu.find_path(key); // в выборку добавляем только элемент меню
		},
		onSelected: function(e) {
			this.content.opt('active', {_name: e.selection.path().split(':').join('_')});
			
		}
	}
});

w.$render('#sample');

w.content.opt('selected', 'dashboard');

