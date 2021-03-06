

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





var w = $.ergo({
	etype: 'navigation',
	$content: {
		items: [{
			etype: 'list',
			cls: 'nav-menu',
			data: data,
			defaultItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: '.',
						format: '#{title}'
					},
					$caret: {
						etype: 'icon',
						state: 'caret'
					},
					onClick: function(e) {
						this.parent.subtree.open();
						this.parent.subtree.states.set('opened');
						e.base.stopPropagation();
					},
				},
				$sub: {
					etype: 'nested-list',
					dataId: 'children',
					cls: 'dropdown-menu',
					mixins: ['popup'],
					include: 'effects',
					popup: {
						at: 'left bottom',
						exclusive: true
					},
					effects: {
						show: {type: 'slideDown', delay: 200},
						hide: 'hide',
						delay: 0
					},
					onClosed: function() {
						this.parent.states.unset('opened');
					},
					nestedItem: {
						$content: {
							etype: 'link',
							$content: {
								etype: '&text',
								format: '#{title}'
							},
							$caret: {
								etype: 'caret',
								state: 'right'
							},
							events: {
								'jquery:mouseenter': function(e) {
									
									var current = this.parent;
									
									this.parent.parent.items.each(function(item){
										if( item != current && item.states.is('opened') ) {
											item.$sub.close();
											item.states.unset('opened');
										}
									});
									
									if(this.parent.states.is('has-subtree') & !this.parent.states.is('opened')) {
										this.parent.$sub.open();
										this.parent.states.set('opened');
									}
									
									e.stopPropagation();							
								}
							}
						},
						$subtree: {
							cls: 'dropdown-menu',
							mixins: ['popup', 'effects'],
							popup: {
								at: 'right top',
								exclusive: false
							},
							effects: {
								show: {type: 'slideDown', delay: 200},
								hide: 'hide',
								delay: 0
							},
							onClosed: function() {
								this.parent.states.unset('opened');
							}
						},
						binding: function(v) {
							if(v.children) this.states.set('has-subtree');
						},
						
					}
				},
				binding: function(v) {
					if(v.children) this.states.set('has-subtree');
				}
			},
		}]
	}
});





/*
var w = $.ergo({
	etype: 'navigation',
	$content: {
		items: [{
			etype: 'nested-list',
			cls: 'nav-menu',
			defaultItem: {
				$content: {
					$caret: {
						'!state': 'down'
					}
				},
				$subtree: {
					popup: {
						at: 'left bottom',
						exclusive: true
					}					
				},
				showSubtreeOn: 'click',
//				binding: false
			},
			nestedItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: 'text',
						format: '#{title}'
					},
					$caret: {
						etype: 'caret',
						state: 'right'
					},
					onClick: function(e) {
						if(this.parent.options.showSubtreeOn == 'click') {
							this.parent.subtree.open();
							this.parent.subtree.states.set('opened');
						}
						e.baseEvent.stopPropagation();
					},
					events: {
						'jquery:mouseenter': function(e) {
							
							var current = this.parent;
							
							if(this.parent.options.showSubtreeOn == 'hover') {
								this.parent.parent.items.each(function(item){
									if( item != current && item.states.is('opened') ) {
										item.subtree.close();
										item.states.unset('opened');
									}
								});
							}
							
							if(this.parent.states.is('has-subtree') & !this.parent.states.is('opened') && this.parent.options.showSubtreeOn == 'hover') {
								this.parent.subtree.open();
								this.parent.states.set('opened');
							}
							e.stopPropagation();							
						}
					}
				},
				$subtree: {
					cls: 'dropdown-menu',
					mixins: ['popup', 'effects'],
					popup: {
						at: 'right top',
						exclusive: false
					},
					effects: {
						show: {type: 'slideDown', delay: 200},
						hide: 'hide',
						delay: 0
					},
					onClosed: function() {
						this.parent.states.unset('opened');
					}
				},
				showSubtreeOn: 'hover',
				binding: function(v) {
					if(v.children) this.states.set('has-subtree');
				},
				// states: {
					// 'opened': function(on) {
						// on ? this.subtree.open() : this.subtree.close();
					// }
				// }
			},
			data: data
		}]
	}	
});

*/

w.render('#sample');






var data = [{
	title: 'Главная',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Товары',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Организации',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Личный кабинет',
	icon: 'fa-dashboard',
	name: 'dashboard'
}];



var w = $.ergo({
	etype: 'navigation',
	style: {'margin-top': 32},
	$content: {
		items: [{
			etype: 'list',
			cls: 'nav-menu',
			include: 'selectable',
			data: data,
			defaultItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: '&text',
						format: '#{title}'
					}
				},
				actions: {
					'jquery:click': 'select'
				}				
			}
		}]
	}
});


w.render('#sample');
