

Ergo.defineClass('Ergo.widgets.Media', 'Ergo.widgets.Box', {

	defaults: {

		cls: 'media',

		components: {
			before: {
				components: {
					content: {
						etype: 'html:img',
						as: 'before'
					}
				}
			},
			content: {
			}
		}

	}



}, 'widgets:media');
