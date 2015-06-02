

$context.section('Простой список');
$context.section_begin('list-basic');
$context.section_end('list-basic');

var w = $.ergo({
	etype: 'list',
	items: ['Африка', 'Азия', 'Европа', 'Австралия']
});

w.render('#sample');



//$context.section('С буллитами');
// require list-bullets
//$context.section('С номерами');
// require list-numbers

$context.section('С иконкой');
$context.section_begin('list-icons');
$context.section_end('list-icons');


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



$context.section('С изображением');
$context.section_begin('list-images');
$context.section_end('list-images');

var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'indented',
//	style: {'margin-top': 16},
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


$context.section('С активной иконкой');
$context.section_begin('list-remove');
$context.section_end('list-remove');


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
		cls: 'box',
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






