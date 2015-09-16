

var context_menu = $.ergo({
	etype: 'dropdown-list',
	renderTo: 'body',
	as: 'context-menu',
	popup: {
		behaviour: 'contextmenu'
	},
	defaultItem: {
		components: {
			icon: {
				etype: 'icon',
//				as: 'fa fa-fw',
				style: {'margin-right': 10}
			},
			content: {
				etype: '.'
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



var w = $.ergo({
	etype: 'box',
	height: 200,
	style: {'background-color': '#eee'}
});

w.render('#sample');


w.el.on('contextmenu', function(e) {

	var x = e.pageX;
	var y = e.pageY;

	context_menu.open(x, y);

	e.preventDefault();
});
