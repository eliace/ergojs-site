
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});









var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Item Box (float layout)',
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
			layout: 'float',
			items: [{
				etype: 'check',
				autoBind: false,
				style: {
					'margin-right': 8
				}
			}, {
				binding: 'prop:text',
				dataId: 'full_name',
				width: 140
			}, {
				etype: 'link',
				binding: 'prop:text',
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
					etype: '.'
				}
			}, {
				binding: 'prop:text',
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





var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Item Box (hbox layout)',
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
			layout: 'hbox',
			etype: 'item-box',
			items: [{
				etype: 'check',
				autoBind: false,
				style: {
					'margin-right': 8
				}
			}, {
				binding: 'prop:text',
				dataId: 'full_name',
				width: 140
			}, {
				etype: 'link',
				binding: 'prop:text',
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
					etype: '.'
				}
			}, {
				binding: 'prop:text',
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




var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Item Box (stack layout)',
	renderTo: '#sample',

	width: 500,

	$content: {
		cls: 'list-box',
		dynamic: true,
		height: 300,
		style: {
			'overflow-y': 'auto'
		},
		data: data,
		defaultItem: {
			layout: 'stack',
			etype: 'item-box',
			items: [{
				cls: 'check',
				$content: {
					etype: 'html:i',
					cls: 'fa'
				},
				// etype: 'check',
				// autoBind: false,
				style: {
					'margin-right': 8,
					'float': 'left'
				},
				states: {
					'checked': function(on) {
						this.content.states.toggle('fa-check', on);
					}
				},
				onClick: function() {
					this.states.toggle('checked');
				}
			}, {
				binding: 'prop:text',
				dataId: 'full_name',
			}, {
				etype: 'link',
				binding: 'prop:text',
				dataId: 'email',
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
				binding: 'prop:text',
				dataId: 'country'
			}],
			$after: {
				etype: 'icon-button',
				icon: 'fa-close',
				cls: 'remove-btn',
				state: 'line tool primary tiny',
				binding: false,
				autoRender: true

				// state: 'warning',
				// autoRender: true,
				// cls: 'icon-box',

				// $content: {
				// 	etype: 'icon',
				// 	icon: 'fa-bar-chart',
				// 	binding: false
				// }
			}
		}
	}


});









data.fetch();
