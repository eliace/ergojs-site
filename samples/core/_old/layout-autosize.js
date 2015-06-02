
$context.alert('Не всегда средствами HTML и CSS можно задать автоматические размеры виджета. В сложных случаях на помощь придут autoWidth, autoHeight и autoFit');


$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Авто-высота вертикальных элементов (autoHeight = true)',
	renderTo: '#sample'
});



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




$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Авто-высота горизонтальных элементов (autoHeight = "ignore-siblings")',
	renderTo: '#sample'
});




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






$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Авто-ширина (autoWidth = true)',
	renderTo: '#sample'
});



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





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Авто-размер (autoFit = true)',
	renderTo: '#sample'
});



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



