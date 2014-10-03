
var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Простая кнопка'
	}, {
		etype: 'link-button',
		text: 'Ссылка'		
	}, {
		etype: 'icon-button',
		icon: 'fa-cogs'
	}, {
		etype: 'image-button',
		src: 'img/Lil_cr.png',
		state: 'x128 circle'
	}, {
		etype: 'dropdown-button',
		text: 'Dropdown ',
		components: {
			dropdown: {
				items: ['Action', 'Another action', 'Something else here', '|', 'Separated link'],
				// popup: {
					// at: 'left bottom'
				// }
			}
		}
	}, {
		etype: 'split-button',
		text: 'Dropdown',
		$dropdown: {
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link'],
			popup: {
				at: 'left bottom'
			}			
		}
	}]
});

w.$render('#sample');




var w2 = $.ergo({
	etype: 'box',
	layout: 'bar',
	defaultItem: {
		cls: 'flat'
	},
	items: [{
		etype: 'button',
		text: 'Простая кнопка'
	}, {
		etype: 'link-button',
		text: 'Ссылка'		
	}, {
		etype: 'icon-button',
		icon: 'fa-cogs'
	}, {
		etype: 'dropdown-button',
		text: 'Dropdown ',
		components: {
			dropdown: {
				items: ['Action', 'Another action', 'Something else here', '|', 'Separated link'],
				// popup: {
					// at: 'left bottom'
				// }
			}
		}
	}, {
		etype: 'split-button',
		text: 'Dropdown',
		$dropdown: {
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link'],
			popup: {
				at: 'left bottom'
			}			
		}
	}]
});

w2.$render('#sample');


