
var w = $.ergo({
	etype: 'tree',
	node: {
		components: {
			caret: {
				weight: -10,
				etype: 'icon',
				cls: 'toggle',
				state: 'closed',
				onClick: function() {
					this.parent.states.toggle('expanded');
				},
				states: {
					'opened:type': 'fa-caret-down',
					'closed:type': 'fa-caret-right'
				}
			},
			// icon: {
				// etype: 'icon',
				// weight: -5,
				// cls: 'fa fa-fw',
				// state: 'file',
				// states: {
					// 'folder:type': 'fa-folder-o',
					// 'file:type': 'fa-map-marker',
					// 'opened:type': 'fa-folder-open-o'
				// }
			// },
			content: {
				etype: 'link'
			}
		},
		states: {
			'branch': 'branch',
			// 'branch': function(on) {
				// if(on)
					// this.icon.states.set('folder');
				// else
					// this.icon.states.set('file');
			// },
			'expanded': function(on) {
				if(on) {
//					this.icon.states.set('opened');
					this.caret.states.set('opened');
				}
				else {
//					this.icon.states.set('folder');
					this.caret.states.set('closed');					
				}
			}
		}
	},
	items: [{
		text: 'Африка',
		branch: true,
		$subtree_items: ['Египет', 'Марокко', 'Кения', 'Ангола']
	}, {
		text: 'Азия',
		branch: true,	
		$subtree_items: ['Китай', 'Индия', 'Иран', 'Индонезия', 'Ливия', 'Непал']
	}, {
		text: 'Европа',
		branch: true,	
		$subtree_items: ['Великобритания', 'Германия', 'Италия']
	}]
});

w.$render('#sample');

