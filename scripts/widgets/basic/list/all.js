

var ITEMS = [{
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



var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});




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

//$context.section('С иконкой');
// require list-icons
//$context.section('С изображением');
// require list-images
$context.section('С плавающим элементом');
$context.section_begin('list-floats');
$context.section_end('list-floats');

var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
//	width: 600,
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'box-medium',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'text',
				cls: 'description'
			}
		},
		$button: {
			etype: 'label',
			text: 'online',
			cls: 'fluid-right success small'
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');


$context.section('С боковой иконкой');
$context.section_begin('list-side');
$context.section_end('list-side');






var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'xicon',
		cls: 'item has-icon at-right',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40,
			weight: -10
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
				cls: 'description'
			}
		},
		$xicon: {
			cls: 'right contextual action fa-remove'
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'icon',
		cls: 'item has-icon at-left',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			cls: 'content',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		$icon: {
			cls: 'left contextual action fa-remove',
			weight: -20
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');





$context.section('С активной иконкой');
$context.section_begin('list-action');
$context.section_end('list-action');





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: '__divide __indent',
	defaultItem: {
		layout: 'hbox',
		include: 'icon',
		cls: 'item',
		$icon: {
			cls: 'contextual action fa-angle-right fa-2x'
		},
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
//			cls: 'content',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');





$context.section('Hovered');
$context.section_begin('list-hover');
$context.section_end('list-hover');

var w = $.ergo({
	etype: 'list',
	cls: 'hovered padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'item box padding',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: '&text'
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');



$context.section('Striped');
$context.section_begin('list-striped');
$context.section_end('list-striped');


var w = $.ergo({
	etype: 'list',
	cls: 'striped padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'item box padding',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: '&text'
		},
		set: {
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');



$context.section('Selected');
$context.section_begin('list-select');
$context.section_end('list-select');


var w = $.ergo({
	etype: 'list',
	include: 'selectable',
	cls: 'divided',
	defaultItem: {
		layout: 'hbox',
		cls: 'item padding',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		},
		onClick: function() {
			this.events.rise('select');
		}
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	},
	items: ITEMS
});


w.opt('index', 1);


w.render('#sample');






data.fetch();