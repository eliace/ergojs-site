
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
