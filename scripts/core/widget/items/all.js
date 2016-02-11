
$context.section('Элементы');
$context.section_begin('items-items');
$context.section_end('items-items');


var w = $.ergo({
	etype: 'box',

	// расположим элементы горизонтально
	layout: 'hbox',
	// с отступами
	as: '__gap',

	// этот параметр содержит параметры общие для всех элементов
	defaultItem: {
		etype: 'button'
	},

	// элементы создаются по порядку
	items: [{
		state: 'primary',
		text: ''
	}, {
		cls: 'success',
		text: '',
		name: 'mybutton'    // опция tag задает значение свойства tag
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
	text: 'Этого элемента не должно быть видно'
});


// Добавим еще один элемент и сделаем его вторым по счету
w.items.add({
	text: 'Элемент 3'
}, 1);



w.render('#sample');


// Удалим последний элемент
w.items.removeAt(3).unrender();

// Поменяем текст у первой кнопки
w.items.get(0).opt('text', 'Элемент 1');

// Поменяем текст у второй кнопки, используя метод item()
w.item(2).opt('text', 'Элемент 2');

$context.section('Компоненты');
$context.section_begin('items-components');
$context.section_end('items-components');

/**
 * Компоненты - именованные элементы виджета.
 */
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',

	// расположим элементы горизонтально
	layout: 'hbox',
	// с отступами
	as: '__gap',

	// этот параметр применяется фабрикой для всех компонентов
	defaultComponent: {
		etype: 'button',
	},

	// порядок компонентов определяется параметром weight
	components: {
		first: {
			text: '',
			weight: 2			// весовые коэффициенты позволяют жестко определить порядок добавления
		},
		second: {
			text: '',
			weight: 3
		},
		third: {
			text: 'Компонент 1',
			weight: 1
		},
		fourth: {
			text: '',
			weight: 4,
			// отобразим элемент в виде кнопки с пиктограммой
			etype: 'button',
			$icon: {
				etype: 'icon',
				cls: 'fa',
				stt: 'fa-search'
			},
			$content: {
				etype: '.'
			},
			// !!! Если в виджете присутствуют дочерние элементы, то значение будет передано
			// параметру 'text' компонента 'content'
			text: ' Компонент 4'
		}
	}
});


// обратимся к компоненту по имени и зададим текст
w.component('first').opt('text', 'Компонент 2');
// обратимся к компоненту с использованием фильтра по классу
//w.component(Ergo.widgets.ButtonItem).opt('text', 'Компонент 4');
// обратимся к компоненту с использованием аксессора
w.$second.opt('text', 'Компонент 3');

$context.section('Фабрика');
$context.section_begin('items-factory');
$context.section_end('items-factory');

/**
 *
 * Зададим элементы виджета в произвольном виде, например, определим их текстовое содержимое
 *
 * При создании нового виджета будет вызвана фабрика, соответствующая его роли
 *
 */
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',

	// расположим элементы горизонтально
	layout: 'hbox',
	// с отступами
	as: '__gap',

	/**
	 * Данный метод создает новые виджеты-кнопки и задает их содержимое на основе строки,
	 * передавамой в качестве аргумента.
	 * Однако, если аргумент равен "|", то создаем вместо кнопки элемент-разделитель
	 *
	 */
	itemFactory: function(o) {

		if(o == '|')
			o = {etype: 'box', as: 'divider'};
		else
			o = {etype: 'button', text: o};

		return $.ergo(o);
	},

	items: ['Африка', 'Америка', '|', 'Европа', 'Азия']

});



