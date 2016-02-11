
$context.section('Параметры виджета');
$context.section_begin('options-basic');
$context.section_end('options-basic');

var w = $.ergo({
	renderTo: '#sample',				// куда добавляем созданный виджет (элемент или селектор jQuery)
	etype: 'widget',						// псевдоним класса виджета
	tag: 'div',							// html-тэг виджета, который будет использован для рендеринга
	width: 600,									// ширина
	height: 200,								// высота
	id: 'my-widget-id',					// атрибут DOM-элемента id
	cls: 'my-widget',						// css-класс (или список классов, разделенные пробелами)
	style: {'color': 'red'},		// стили DOM-элемента
	tooltip: 'Я виджет',				// атрибут DOM-элемента title
	name: 'ярлык',							// уникальное имя виджета среди соседних виджетов
	innerText: 'Текст',
	innerHtml: '<span/>',
	text: 'Тестовый текст',
	hidden: false,
	value: 'Мужчина',
	format: function(v) { return {'male': 'Муж.', 'female': 'Жен.'}[v]; },
	unformat: function(v) { return {'Муж': 'male', 'Жен': 'female'}[v.substring(0, 3)]; }
});

// пользуемся опциями
w.opt('width', 500);
w.opt('height', 100);
$context.alert( w.opt('value') );

// пользуемся свойствами
w.prop('width', 10);
w.prop('height', 10);
w.prop('value', 'Женщина');
$context.alert( w.prop('value') );

// пользуемся сеттерами/геттерами
w.width = 500;
w.height = 100;
$context.alert( w.value );

$context.section('Создание виджета');
$context.section_begin('options-create');
$context.section_end('options-create');

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

$context.section('HTML', 'Пространство имен для упрощенной работы с HTML-тегами как виджетами');
$context.section_begin('options-html');
$context.section_end('options-html');

var w = $.ergo({
	etype: 'html:div',
	items: [{
		etype: 'html:h1',
		text: 'Heading text 1'
	}, {
		etype: 'html:h2',
		text: 'Heading text 2'
	}, {
		etype: 'html:h3',
		text: 'Heading text 3'
	}, {
		etype: 'html:h4',
		text: 'Heading text 4'
	}, {
		etype: 'html:h5',
		text: 'Heading text 5'
	}]
});

w.render('#sample');

$context.section('jQuery-плагин', 'Подключаем jquery-плагин через примесь');
$context.section_begin('options-jquery');
$context.section_end('options-jquery');


Ergo.alias('includes:input-mask', {

	_postConstruct: function(o) {
		this.$content.el.mask(o.mask);
	}

});


Ergo.alias('includes:input-mask-2', {

	props: {
		set: {
			mask: function(v) {
				this.$content.el.mask(v);
			}
		}
	}

});




var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',

	items: [{
		etype: 'input',
		include: 'input-mask icon:at-right',
		icon: 'fa-search',
		mask: '+7 (000) 000 00 00',
		placeholder: '+7 (___) _______',
		width: 180
	}, {
		etype: 'input',
		include: 'icon:at-right input-mask-2',
		icon: 'fa-calendar',
		mask: '00/00/00',
		placeholder: 'дд/мм/гг',
		width: 180
	}]

});


w.render('#sample');



