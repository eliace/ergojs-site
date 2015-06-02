

var items = [{
	text: 'Волков А.Н.',
	description: 'Java-разработчик',
	avatar: '001'
}, {
	text: 'Зайцев И.Д.',
	description: 'Руководитель группы',
	avatar: '002'
}, {
	text: 'Медведев К.Г.',
	description: 'Веб-разработчик',
	avatar: '004'
}, {
	text: 'Лисицина О.Е.',
	description: 'Дизайнер',
	avatar: '003'
}];





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
	width: 600,
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'xicon',
		cls: 'item icon',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			cls: 'content',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'html:small',
				cls: 'item-description'
			}
		},
		$xicon: {
			cls: 'contextual action fa-remove'
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: items
});

w.render('#sample');

