

var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Item Box (fluid layout)',
	renderTo: '#sample',
	
	width: 700,
	
	$content: {
		cls: 'list-box',
		dynamic: true,
		height: 300,
		style: {
			'overflow-y': 'auto'
		},
		data: data,
		defaultItem: {
			etype: 'item-box',
			layout: 'fluid',
			items: [{
				etype: 'check',
				autoBind: false,
				style: {
					'margin-right': 8
				}
			}, {
				binding: 'text',
				dataId: 'full_name',
				width: 140
			}, {
				etype: 'link',
				binding: 'text',
				dataId: 'email',
				width: 160,
				style: {
					'text-overflow': 'ellipsis',
					'overflow': 'hidden'
				},
				$icon: {
					etype: 'icon',
					icon: 'fa-envelope',
					style: {
						'display': 'inline',
						'margin-right': 4
					}
				},
				$content: {
					etype: '&text'
				}
			}, {
				binding: 'text',
				dataId: 'country'
			}],
			$after: {
				etype: 'icon-button',
				icon: 'fa-close',
				cls: 'remove-btn',
				state: 'line tool primary tiny',
				binding: false,
				autoRender: true
			}
		}
	}
	
	
});
