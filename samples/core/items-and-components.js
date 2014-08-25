
var w = $.ergo({
	etype: 'widget',
	html: '<div>',
	render: '#sample',
	
	// этот параметр содержит параметры общие для всех элементов
	defaultItem: {
		etype: 'button'
	},
	
	// элементы создаются по порядку
	items: [{
		state: 'primary',
		text: ''
	}, {
		cls: 'green',
		text: '',
		tag: 'mytag'    // опция tag задает значение свойства tag
	}]
	
});


/*
 * создадим элемент с помощью свойства items
 * 
 * Свойство items определяет набор групповых операций с подмножеством
 * дочерних виджетов, имеющих группу 'item'
 * 
 * элемент будет добавлен в конец списка
 */
w.items.add({
	cls: 'gray',
	text: 'Этого элемента не должно быть видно'
});


// Добавим еще один элемент и сделаем его вторым по счету
w.items.add({
	cls: 'gray',
	text: 'Элемент 3'
}, 1);



w.$render();


// Удалим последний элемент
w.items.remove_at(3);

// Поменяем текст у первой кнопки
w.items.get(0).opt('text', 'Элемент 1');

// Поменяем текст у второй кнопки, используя метод item() 
w.item(2).opt('text', 'Элемент 2');



