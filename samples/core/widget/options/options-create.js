
// Создаем виджет с помощью метода $.ergo
var w = $.ergo({
	etype: 'widget',				// псевдоним класса (widget - базовый виджет)
	renderTo: '#sample',			// куда добавляем созданный элемент (элемент или селектор jQuery)
	tag: 'div',					// widget не имеет разметки, поэтому необходимо ее задать
	cls: 'my-widget',				// добавим класс
});


// Виджеты Ergo как и DOM организованы в виде дерева.
// Вложенные (дочерние) виджеты доступны через свойство Widget.children

// Создадим вложенный (дочерний) виджет
w.children.add({
	tag: 'div',
	text: 'Вложенный виджет 1'		// текстовое содержимое виджета
});


// Добавим еще один вложенный (дочерний) виджет
var child2 = $.ergo({
	tag: 'div',
	text: 'Вложенный виджет 2',
});

w.children.add(child2);


// Виджеты можно создавать и более "классическим" способом, явно вызывая конструктор класса
var child3 = new Ergo.core.Widget({
	tag: 'div',
	text: 'Вложенный виджет 3'
});

w.children.add(child3);

// отрисовываем всю иерархию виджетов
w.render();
