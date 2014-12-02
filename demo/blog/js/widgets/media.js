

Ergo.defineClass('Ergo.widgets.Media', 'Ergo.widgets.Box', {
	
	defaults: {
		
		baseCls: 'media',
		
		components: {
			before: {
				components: {
					content: {
						etype: 'html:img',
						cls: 'before'
					}
				}
			},
			content: {
			}
		}
		
	}
	
	
	
}, 'widgets:media');
