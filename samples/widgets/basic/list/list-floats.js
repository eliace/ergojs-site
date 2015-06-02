
var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
	width: 600,
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'box-medium',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'text',
				cls: 'item-description'
			}
		},
		$button: {
			etype: 'button',
			text: 'Добавить',
			cls: 'fluid-right basic'
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: [{
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
	}]
});

w.render('#sample');

