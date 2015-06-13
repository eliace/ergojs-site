

var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	style: {'margin-top': 16},

	defaultItem: {
		etype: 'list',
		cls: 'indented',
//		layout: 'stack',
		items: [{
			text: 'Волков А.Н.',
			description: 'Java-разработчик'
		}, {
			text: 'Зайцев И.Д.',
			description: 'Руководитель группы'
		}, {
			text: 'Медведев К.Г.',
			description: 'Веб-разработчик'
		}, {
			text: 'Лисицина О.Е.',
			description: 'Дизайнер'
		}]
	},


	items: [{
		// простой список
		defaultItem: {
			$icon: {
				etype: 'icon',
				cls: 'fa-user before'
			},
			$content: {
				etype: '&text'
			}
		}
	}, {
		// список с описанием
		defaultItem: {
			layout: 'hbox',
			$icon: {
				etype: 'icon',
				cls: 'fa-user before'
			},
			$content: {
				etype: 'box',
				layout: 'vbox',
				$content: {
					etype: '&text',
				},
				$description: {
					etype: 'text',
					cls: 'item-description'
				}
			},
			set: {
				'description': function(v) { this.content.description.opt('text', v); }
			}
		}
	}, {
		// список со ссылкой
		defaultItem: {
			layout: 'hbox',
			$icon: {
				etype: 'icon',
				cls: 'fa-user before'
			},
			$content: {
				etype: 'box',
				layout: 'vbox',
				$content: {
					etype: 'link',
					cls: 'item-title'
				},
				$description: {
					etype: 'text'
				}
			},
			set: {
				'description': function(v) { this.content.description.opt('text', v); }
			}
		}
	}]


});



// var w = $.ergo({
// });


// c.items.add(c);

// w.render();//'#sample');



// var w = $.ergo({
// });

w.render('#sample');


