

// создаем виджет
var w = $.ergo({
	etype: 'html:div',
	cls: 'my-widget',
	text: 'Виджет с отложенной отрисовкой'
});

// отрисовываем виджет в элемент DOM-дерева, который предназначен для примеров
w.render('#sample');



// создаем виджет и сразу его отрисовываем
$.ergo({
	etype: 'html:div',
	cls: 'my-widget',
	renderTo: '#sample',
	text: 'Виджет с автоматической отрисовкой'
});




// создаем виджет и сразу его отрисовываем
w = $.ergo({
	etype: 'html:div',
	cls: 'my-widget',
	renderTo: '#sample'
});

// добавляем элемент (он не отрисовывается, поскольку добавляется только в виртуальное дерево)
w.children.add({etype: 'html:div', text: 'Hello'});


$.ergo({
	etype: 'html:button',
	text: 'Отобразить элемент',
	renderTo: '#sample',
	onClick: function() {
		// поскольку виджет уже встроен в виртуальное дерево, то при вызове метода render
		// без параметров, он будет автоматически добавлен в компоновку родителя
		w.children.get(0).render();
	}
});





/*
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	$button: {
		etype: 'html:button',
		text: 'Добавить элемент',
		onClick: function() {
			this.events.rise('action');
		}
	},
	$content: {
		data: [],
		dynamic: true,
		defaultItem: {
//			hidden: true,
			mixins: ['effects'],
			effects: {
				'show': {type: 'fadeIn', delay: 400},
				'hide': {type: 'fadeOut', delay: 400},
			},
//			showOnRender: true,
			binding: 'text'
		}
	},
	onAction: function() {
		this.content.data.add('Item');
	}
});

*/





