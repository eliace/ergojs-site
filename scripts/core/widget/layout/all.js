

// нарисуем модель основной компоновки
var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'my-widget',
	items: [{
		text: 'Group A',
		$box: {
			layout: 'hbox',
			items: [{
				text: 'Weight = -1',
				$box: {
					style: {'visibility': 'hidden'},
					items: ['.']					
				}
			}, {
				text: 'Weight = 0',
				$box: {
					layout: 'hbox',
					items: ['Item 0', 'Item 1', 'Item 2']
				}
			}, {
				text: 'Weight = 1',			
				$box: {
					style: {'visibility': 'hidden'},
					items: ['.']					
				}
			}]
		}
	}, {
		text: 'Group B',
		$box: {
			style: {'visibility': 'hidden'},
			items: [{
				text: 'Weight = 0',
				$box: {
					items: ['.']
				}
			}]
		}
	}]
});


w.render('#sample');




$context.section('Основные параметры', 'Вес, индекс, группа');
$context.section_begin('layout-base');
$context.section_end('layout-base');

var w2 = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'my-widget',
	items: [{
		text: 'Weight 0, Item 0 (A)',
		group: 'a'
	}, {
		text: 'Weight 0, Item 1 (B)',
		group: 'b'
	}, {
		text: 'Weight 0, Item 2 (A)',
		group: 'a'
	}],
	$box1: {
		text: 'Weight -1 (A)',
		weight: -1,
		group: 'a'
	},
	$box2: {
		text: 'Weight 1 (A)',
		weight: 1,
		group: 'a'
	},
	$box3: {
		text: 'Weight -1 (B)',
		weight: -1,
		group: 'b'
	}
});


w2.render('#sample');

$context.section('Элементы', 'Элементы упорядочиваются по индексу');
$context.section_begin('layout-items');
$context.section_end('layout-items');

// элементы компонуются по значению индекса
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',  // расположим элементы горизонтально
	items: ['Item 0', 'Item 1', 'Item 2', 'Item 3']
});

$context.section('Компоненты', 'Порядок компонентов по умолчанию не определен (особенность обхода свойств в Hash/Object). Для того, чтобы задать порядок, используются числовые веса');
$context.section_begin('layout-components');
$context.section_end('layout-components');

// Порядок компонентов по умолчанию не определен (особенность обхода свойств в Hash/Object).
// Для того, чтобы задать порядок, используются числовые веса
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',
	components: {
		c1: {
			text: 'Component 1',
			weight: 10
		},
		c2: {
			text: 'Component 2'			
		},
		c3: {
			text: 'Component 3',			
			weight: -3
		}
	}
});

$context.section('Вес и индекс', 'Вес элементов равен 0, поэтому, если вес компонента меньше 0, то он окажется до элементов, а если вес больше 0 - то после');
$context.section_begin('layout-weight-index');
$context.section_end('layout-weight-index');

// Вес элементов равен 0, поэтому, если вес компонента меньше 0,
// то он окажется до элементов, а если вес больше 0 - то после
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'my-widget',
	layout: 'hbox',
	components: {
		c1: {
			text: 'Before component',
			weight: -10
		},
		c2: {
			text: 'After component',			
			weight: 10
		}
	},
	items: ['Item 0', 'Item 1', 'Item 2', 'Item 3']
});


$context.section('Обертка компоновки', 'Элементы можно обернуть вспомогательным тегом');
$context.section_begin('layout-wrapper');
$context.section_end('layout-wrapper');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: {
		wrapper: function(item) {
			var w = $('<div class="my-widget">');
			w.append(item.el);
			return w;
		}
	},
	items: ['Item 0', 'Item 1', 'Item 2']
});

$context.section('Обертка виджета', 'Необходимость "обертки" и ее настройки могут задаваться дочерним виджетом');
$context.section_begin('layout-item-wrapper');
$context.section_end('layout-item-wrapper');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	items: [
		'Item 0', 
		'Item 1', 
		{
			text: 'Item 2',
			wrapper: {
				cls: 'my-widget'
			}
		}
	]
});


$context.section('Селектор обертки', 'Если виджет состоит из нескольких тегов, можно добиться нужного результата, настраивая компоновку');
$context.section_begin('layout-selector');
$context.section_end('layout-selector');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	html: '<div><h4/></div>',
	layout: {
		selector: function(item) {
			// дочерний виджет с ключом 'title' добавляется во вложенный тег <h4/>
			if(item._key == 'title')
				return $('h4', this.el);
			return this.el;
		}
	},
	$title: {
		text: 'Заголовок'
	},
	$content: {
		text: LOREMIPSUM
	}
});

$context.section('Авто-высота вертикальных элементов', 'autoHeight = true');
$context.section_begin('layout-autoheight-v');
$context.section_end('layout-autoheight-v');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',


	defaultItem: {
		$title: {
		},
		$content: {
			height: 200,
			cls: 'my-widget',
			items: [{
				text: '1'
			}, {
				text: '2'
			}]
		},
		set: {
			'text': function(v) { this.title.opt('text', v); }
		}
	},

	items: [{
		text: 'До:'
	}, {
		text: 'После:',
		$content: {
			defaultItem: {
				autoHeight: true
			}
		}
	}]

});


// обновляем компоновку
w._layoutChanged();

$context.section('Авто-высота горизонтальных элементов', 'autoHeight = "ignore-siblings"');
$context.section_begin('layout-autoheight-h');
$context.section_end('layout-autoheight-h');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	defaultItem: {
		$title: {
		},
		$content: {
			cls: 'my-widget',
			etype: 'box',
			height: 200,
			items: [{
				style: { 'float': 'left'},
				width: '56%',
				text: 'Left'
			}, {
				style: { 'float': 'right'},
				width: '38%',
				text: 'Right'
			}]
			
		},
		set: {
			'text': function(v) { this.title.opt('text', v); }
		}		
	},
	
	items: [{
		text: 'До:'
	}, {
		text: 'После:',
		$content: {
			defaultItem: {
				autoHeight: 'ignore-siblings'    // игнорируем высоту соседних элементов
			}
		}
	}]
});

// обновляем компоновку
w._layoutChanged();



$context.section('Авто-ширина', 'autoWidth = true');
$context.section_begin('layout-autowidth');
$context.section_end('layout-autowidth');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	
	defaultItem: {
		$title: {
		},
		$content: {
			cls: 'my-widget',
			$content: {
				etype: 'html:input',
				text: 'Text'
			}
		},
		set: {
			'text': function(v) { this.title.opt('text', v); }
		}
	},
	
	items: [{
		text: 'До:'
	}, {		
		text: 'После:',
		$content: {
			$content: {
				autoWidth: true
			}
		}
	}]	
	
});


// обновляем компоновку
w._layoutChanged();

$context.section('Авто-размер', 'autoFit = true');
$context.section_begin('layout-autofit');
$context.section_end('layout-autofit');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	
	defaultItem: {
		$title: {
		},
		$content: {
			height: 80,
			cls: 'my-widget',
//			layout: 'hbox',
			$content: {
				etype: 'html:input',
				text: 'Text'
			}
		},
		set: {
			'text': function(v) { this.title.opt('text', v); }
		}
	},
	
	items: [{
		text: 'До:'
	}, {		
		text: 'После:',
		$content: {
			$content: {
				autoFit: true
			}
		}
	}]	
	
});


// обновляем компоновку
w._layoutChanged();




