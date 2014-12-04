

var w = $.ergo({
	etype: 'box',
	height: 400,
	style: {'background-color': '#eee'}
});

w.render('#sample');




var context_menu = $.ergo({
	etype: 'dropdown-list',
	renderTo: 'body',
	cls: 'context-menu',
	popup: {
		behaviour: 'contextmenu'
	},
	defaultItem: {
		components: {
			icon: {
				etype: 'icon',
				cls: 'fa fa-fw',
				style: {'margin-right': 10}
			},
			content: {
				etype: '&text'
			}
		},
		set: {
//			'text': function(v) {this.content.opt('text', v);},
			'icon': function(v) {this.icon.states.set(v);}
		}
	},
	items: [
		{icon: 'fa-copy', text: 'Копировать'}, 
		{icon: 'fa-cut', text: 'Вырезать'},
		{icon: 'fa-ban', text: 'Удалить'},
		'|',
		{$icon: {autoRender: false}, $check: {etype: 'html:input', style: {'margin-right': 10}, weight: -10, type: 'checkbox'}, text: 'Вариант 1'}]
});

//context_menu.render('body');


w.el.on('contextmenu', function(e) {
	
	var x = e.pageX;
	var y = e.pageY;
		
	context_menu.open(x, y);
	
	e.preventDefault();
});
