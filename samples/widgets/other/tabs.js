

var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	mixins: ['selectable'],
	renderTo: '#sample',
	components: {
		tabs: {
			etype: 'list',
			cls: 'tab-bar default',
			defaultItem: {
				onClick: function() {
					this.events.rise('select', {key: this._index});
				}
			},
			items: ['Закладка 1', 'Закладка 2', 'Закладка 3']
		},
		content: {
			cls: 'content',
			height: 200,
			mixins: ['pageable'],
			defaultItem: {
				mixins: ['effects'],
				effects: {
					show: {type: 'fadeIn', delay: 500}
				},
				style: {'padding': 10},
				// states: {
					// 'selected': function(on) {
						// if(on) this.parent.opt('visible', this);
					// }
				// }
			},
			items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3]
		}
	},
	
	selector: function(i) {
		return this.tabs.item(i);
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});





var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	mixins: ['selectable'],
	renderTo: '#sample',
	components: {
		tabs: {
			etype: 'list',
			cls: 'tab-bar single',
			defaultItem: {
				onClick: function() {
					this.events.rise('select', {key: this._index});
				}
			},
			items: ['Закладка 1', 'Закладка 2', 'Закладка 3']
		},
		content: {
			cls: 'content',
			height: 200,
			mixins: ['pageable'],
			defaultItem: {
				mixins: ['effects'],
				effects: {
					show: {type: 'fadeIn', delay: 500}
				},
				style: {'padding': 10},
				// states: {
					// 'selected': function(on) {
						// if(on) this.parent.opt('visible', this);
					// }
				// }
			},
			items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3]
		}
	},
	
	selector: function(i) {
		return this.tabs.item(i);
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});






var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	mixins: ['selectable'],
	renderTo: '#sample',
	components: {
		tabs: {
			etype: 'list',
			cls: 'tab-bar simple',
			defaultItem: {
				onClick: function() {
					this.events.rise('select', {key: this._index});
				}
			},
			items: ['Закладка 1', 'Закладка 2', 'Закладка 3']
		},
		content: {
			cls: 'content',
			height: 200,
			mixins: ['pageable'],
			defaultItem: {
				mixins: ['effects'],
				effects: {
					show: {type: 'fadeIn', delay: 500}
				},
				style: {'padding': 10},
				// states: {
					// 'selected': function(on) {
						// if(on) this.parent.opt('visible', this);
					// }
				// }
			},
			items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3]
		}
	},
	
	selector: function(i) {
		return this.tabs.item(i);
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});






$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Закладки в панели',
	renderTo: '#sample'
});



var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'panel',
		cls: 'widget',
		mixins: ['selectable'],
		renderTo: '#sample',
		title: 'Панель с закладками',
		components: {
			header: {
				$tabbar: {
					etype: 'tab-bar',
//					cls: 'simple',
					defaultItem: {
						onClick: function() {
							this.events.rise('select', {key: this._index});
						}
					},
					items: ['Закладка 1', 'Закладка 2', 'Закладка 3']
				}
			},
			content: {
				cls: 'content',
				height: 200,
				mixins: ['pageable'],
				defaultItem: {
					mixins: ['effects'],
					effects: {
						show: {type: 'fadeIn', delay: 500}
					},
					style: {'padding': 10},
					// states: {
						// 'selected': function(on) {
							// if(on) this.parent.opt('visible', this);
						// }
					// }
				},
				items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3]
			}
		},
		
		selector: function(i) {
			return this.header.tabbar.item(i);
		},
		onSelected: function(e) {
			this.content.opt('active', e.key);
			this.events.fire('selectTab', {key: e.key});
			e.stop();
		},
		
		selected: 0
	},
	items: [{
		$header: {
			$tabbar_cls: 'simple no-border'
		}
	}, {
		$header: {
			$title_cls: 'small',
			$tabbar_cls: 'single small no-border'
		}		
	}, {
		$header: {
			$title_cls: 'tiny',
			$tabbar_cls: 'default tiny no-border'
		}		
	}]
});







