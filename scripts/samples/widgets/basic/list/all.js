

$context.section('Простой список');
$context.section_begin('list-basic');
$context.section_end('list-basic');

var w = $.ergo({
	etype: 'list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w.render('#sample');


$context.section('С буллитами');
$context.section_begin('list-bullets');
$context.section_end('list-bullets');


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
$context.section_begin('list-numbers');
$context.section_end('list-numbers');


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
$context.section_begin('list-icons');
$context.section_end('list-icons');


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
$context.section_begin('list-images');
$context.section_end('list-images');

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
$context.section_begin('list-floats');
$context.section_end('list-floats');

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
$context.section_begin('list-hover');
$context.section_end('list-hover');

var w = $.ergo({
	etype: 'list',
	style: {'margin-top': 16},
	width: 600,
	cls: 'hovered',
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






