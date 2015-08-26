
$context.section('Default');
$context.section_begin('tabs-default');
$context.section_end('tabs-default');


var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	include: 'selectable',
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
			height: 100,
			include: 'pageable',
			defaultItem: {
				include: 'effects',
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
	
	selection: {
		lookup: function(i) {
			return this.tabs.item(i);
		}
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});

$context.section('Single');
$context.section_begin('tabs-single');
$context.section_end('tabs-single');

var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	include: 'selectable',
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
			include: 'pageable',
			cls: 'content',
			height: 100,
			defaultItem: {
				include: 'effects',
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
	
	selection: {
		lookup: function(i) {
			return this.tabs.item(i);
		}
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});

$context.section('Simple');
$context.section_begin('tabs-simple');
$context.section_end('tabs-simple');

var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	include: 'selectable',
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
			include: 'pageable',
			cls: 'content',
			height: 100,
			defaultItem: {
				include: 'effects',
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
	
	selection: {
		lookup: function(i) {
			return this.tabs.item(i);
		}
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});


$context.section('В панели');
$context.section_begin('tabs-panel');
$context.section_end('tabs-panel');


var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: 'panel',
		cls: 'widget',
		include: 'selectable',
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
				include: 'pageable',
				defaultItem: {
					include: 'effects',
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
		
		selection: {
			lookup: function(i) {
				return this.header.tabbar.item(i);
			}
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



