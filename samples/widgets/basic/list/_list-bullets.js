

var w = $.ergo({
	etype: 'list',
	cls: 'bulleted',
	items: ['Африка', 'Азия', {text: 'Европа', $list: {etype: 'list', items: ['Германия', 'Франция']}}, 'Австралия']
});

w.render('#sample');


var w = $.ergo({
	etype: 'box',
	cls: 'list bulleted',
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
			'-cls': 'list-item',
			$content: {
				etype: 'link',
				cls: 'list-item'
			},
			$list: {
				cls: 'list bulleted',
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


