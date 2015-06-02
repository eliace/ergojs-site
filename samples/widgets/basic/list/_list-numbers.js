

var w = $.ergo({
	etype: 'o-list',
	cls: 'ordered',
	items: ['Африка', 'Азия', {text: 'Европа', $list: {etype: 'o-list', cls: 'ordered', items: ['Германия', 'Франция']}}, 'Австралия']
});

w.render('#sample');


var w = $.ergo({
	etype: 'box',
	cls: 'list ordered',
	layout: 'vbox',
	style: {'margin-top': 16},
	defaultItem: {
		etype: 'link',
		cls: 'list-item'
	},
	items: [
		'Африка', 
		'Азия', 
		{
			etype: 'box',
			text: 'Европа',
			$content: {
				etype: 'link'
			},
			$list: {
				etype: 'list',
				cls: 'ordered',
				layout: 'vbox',
				defaultItem: {
					etype: 'link',
					cls: 'list-item'
				}, 
				items: ['Германия', 'Франция']
			}
		}, 
		'Австралия'
	]
});

w.render('#sample');

