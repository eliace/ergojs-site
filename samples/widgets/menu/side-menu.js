

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
				etype: 'nested-list',
				cls: 'side-menu',
				data: data,
				nestedItem: {
					$content: {
						etype: 'link',
//						dataId: 'title',
						$icon: {
							etype: 'icon',
							cls: 'before',
							weight: -100,
							dataId: 'icon',
							binding: function(v) {
								this.states.set(v);
							}
						},
						$text: {
							etype: 'text',
							dataId: 'title'
						},
						$caret: {
							etype: 'html:span',
							cls: 'caret',
							state: 'closed',
							states: {
								'opened:g': 'down',
								'closed:g': 'right'
							},
							binding: function(v) {
								if(!v.children) this.hide();
							}
						},
						binding: false,
						onClick: function() {
							
							if( !this.data.get('children') ) {
								// строим путь
								var path = [];
								var w = this.parent;
								while(w._name) {
									path.push(w._name);
									w = w.parent.parent;
								}
								this.events.rise('select', {key: path.reverse().join(':')});
							}
							else {
								this.parent.states.toggle('expanded');							
							}
						}
					},
					binding: function(v) {
						this._name = v.name;
					},
					states: {
						'expanded': function(on) {
							this.content.caret.states.set(on ? 'opened' : 'closed');
							if(on)
								this.events.rise('expandItem');
						}
					}
				},
				onExpandItem: function(e) {
					this.items.each(function(item){
//						console.log( item.states.is('expanded') );
						if(e.target != item && item.states.is('expanded'))
							item.states.unset('expanded');
					});					
				}
				// onBound: function() {
					// this.opt('selected', 'dashboard');
				// }
//				selected: 'dashboard'
			}
		},
		$content: {
			mixins: ['stackable'],
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
		selectionFinder: function(key) {
//					console.log(key);
			var path = key.split(':');
			var w = this.sidebox.menu;
			var found = null;
			for(var i = 0; i < path.length; i++) {
//						console.log(path[i]);
				w = w.item({_name: path[i]});
				found = w;
				w = w.subtree;
			}
			return found;
		},
		onSelected: function(e) {
			this.content.opt('active', {_name: e.key.split(':').join('_')});
			
		}
	}
});

w.$render('#sample');

w.content.opt('selected', 'dashboard');

