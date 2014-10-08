

var w = $.ergo({
	etype: 'box',
	cls: 'tab-box',
	mixins: ['selectable'],
	components: {
		tabs: {
			etype: 'list',
			cls: 'tabs',
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
			mixins: ['stackable'],
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
	
	selectionFinder: function(i) {
		return this.tabs.item(i);
	},
	onSelected: function(e) {
		this.content.opt('active', e.key);
		this.events.fire('selectTab', {key: e.key});
		e.stop();
	},
	
	selected: 0
});


w.$render('#sample');