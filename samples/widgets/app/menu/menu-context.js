

var context_menu = $.ergo({
	etype: 'dropdown-menu',
	renderTo: 'body',
	cls: 'dropdown context __hover',
	popup: {
		behaviour: 'contextmenu',
		offset: [-2, -2]
	},
	effects: {
		'hide': {type: 'hide', delay: 0}
	},
	defaultItem: {
		include: 'icon',
 		$icon: {
 			cls: 'before'
 		}
	},
	items: [
		{icon: 'fa-copy', text: 'Копировать'}, 
		{icon: 'fa-cut', text: 'Вырезать'},
		{icon: 'fa-ban', text: 'Удалить'}
	]
//		'|',
//		{$icon: {autoRender: false}, $check: {etype: 'html:input', style: {'margin-right': 10}, weight: -10, type: 'checkbox'}, text: 'Вариант 1'}]
});




var w = $.ergo({
	etype: 'box',
	height: 400,
	style: {'background-color': '#eee'},

	events: {
		'jquery:contextmenu': function(e) {
	
			var x = e.pageX;
			var y = e.pageY;
				
			context_menu.open(x, y);
			
			e.preventDefault();
		}
	}

});

w.render('#sample');


