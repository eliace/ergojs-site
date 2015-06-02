

$context.section('Простой список');

var w = $.ergo({
	etype: 'list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w.render('#sample');


/*
var w2 = $.ergo({
	etype: 'o-list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w2.render('#sample');
*/


$context.section('С буллитами');

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











$context.section('С номерами');

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





$context.section('С иконкой');


var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	style: {'margin-top': 16},

	defaultItem: {
		etype: 'list',
		layout: 'stack',
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






$context.section('С изображением');

var w = $.ergo({
	etype: 'list',
	layout: 'stack',
	style: {'margin-top': 16},
	defaultItem: {
		layout: 'hbox',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
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





$context.section('С плавающим элементом');

var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
	width: 600,
	cls: 'divided',
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
			cls: 'fluid-right'
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






$context.section('Выделение');

var w = $.ergo({
	etype: 'list',
	style: {'margin-top': 16},
	width: 600,
	cls: 'divided hovered',
	defaultItem: {
		layout: 'hbox',
		cls: 'box-medium',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
		},
		$content: {
			etype: '&text'
		},
		set: {
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







