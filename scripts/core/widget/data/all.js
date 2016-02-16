

$context.section('Простое связывание', 'Иерархическое связывание с данными с использованием простых и составных ключей');
$context.section_begin('data-basic');
$context.section_end('data-basic');

var data = {
	firstName: 'Иван',
	middleName: 'Иванович',
	lastName: 'Иванов',
	age: 24,
	gender: 'м',
	address: {
		country: 'Россия',
		region: 'Краснодарский край',
		settlement: 'Сочи'
	}
};


var w = $.ergo({
	etype: 'box',
	// элементы располагаются вертикально
	layout: 'form',
	// источником данных является объект data
	data: data,
	// виджет text по умолчанию преобразует связанные данные в innerText
	defaultItem: {
		etype: 'text',
		binding: 'prop:text',
		include: 'label',
	},

	items: [{
		label: 'Имя',
		// связываем виджет с полем dataId
		dataId: 'firstName'
	}, {
		label: 'Отчество',
		// связываем виджет с полем middleName
		dataId: 'middleName'
	}, {
		label: 'Фамилия',
		// связываем виджет с полем lastName
		dataId: 'lastName'
	}, {
		label: 'Возраст',
		// связываем виджет с полем age
		dataId: 'age'
	}, {
		label: 'Пол',
		// связываем виджет с полем gender
		dataId: 'gender'
	}, {
		label: 'Город',
		// используем составной ключ
		dataId: 'address.settlement'
	}]

});


w.render('#sample');

$context.section('Форматирование', 'Механизм одностороннего связывания (one-way-binding)');
$context.section_begin('data-format');
$context.section_end('data-format');


var data = {
	firstName: 'Иван',
	middleName: 'Иванович',
	lastName: 'Иванов',
	age: 24,
	gender: 'м'
};


Ergo.alias('formats:maleOrFemale', function(v) {
	return {'м': 'муж.', 'ж': 'жен.'}[v];
});


var w = $.ergo({
	etype: 'box',
	// элементы располагаются вертикально
	layout: 'band',
	// источником данных является объект data
	data: data,
	// видеж text по умолчанию преобразует связанные данные в innerText
	defaultItem: {
		etype: 'text',
		binding: 'prop:text',
		include: 'label'
	},

	items: [{
		label: 'ФИО',
		// базовый способ форматирования с помощью функции
		format: function(v) { return ''+v.lastName+' '+v.firstName+' '+v.middleName; }
	}, {
		label: 'Возраст',
		// использование встроенного форматирования
		format: '#{age} года'
	}, {
		label: 'Отношение к воинской службе',
		format: function(v){
			return (v.gender == 'м' && v.age >=18 && v.age < 27) ? 'военнообязанный' : 'не военнообязанный';
		}
	}, {
		label: 'Пол',
		// используем формат, зарегистрированный глобально
		format: '#{gender|maleOrFemale}'
	}]


});

w.render('#sample');

$context.section('Настройка', 'Управление изменением виджета при обновлении данных');
$context.section_begin('data-binding');
$context.section_end('data-binding');


var data = {
	firstName: 'Иван',
	middleName: 'Иванович',
	lastName: 'Иванов',
	age: 24,
	gender: 'м'
};

var w = $.ergo({
	etype: 'box',
	// элементы располагаются вертикально
	layout: 'band',
	// источником данных является объект data
	data: data,
	// видеж text по умолчанию преобразует связанные данные в innerText
	defaultItem: {
		etype: 'text',
		binding: 'prop:text',
		include: 'label'
	},

	items: [{
		label: 'ФИО',
		format: '#{lastName} #{firstName} #{middleName}'
	}, {
		label: 'Возраст',
		format: '#{age} года'
	}, {
		label: 'Отношение к воинской службе',
		format: function(v){
			return (v.gender == 'м' && v.age >=18 && v.age < 27) ? 'военнообязанный' : 'не военнообязанный';
		}
	}, {
		label: 'Пол',
		dataId: 'gender',
		// перегружаем тип виджета, теперь здесь будет пиктограмма
		etype: 'icon',
//		cls: 'fa',
		// при обновлении данных вызвается функция binding
		binding: function(v) {
			// при изменении данных добавляем класс пиктограммы
			this.el.addClass((v == 'м') ? 'fa-male' : 'fa-female');
		}
	}]


});

w.render('#sample');

$context.section('Динамическое связывание', 'Управление коллекцией элементов виджета через источник данных');
$context.section_begin('data-dynamic');
$context.section_end('data-dynamic');

var data = ['Африка', 'Азия', 'Европа', 'Америка', 'Австралия', 'Арктика', 'Антарктика'];


var w = $.ergo({
	etype: 'button',
	text: 'Удалить последний элемент ',
	$icon: {
		etype: 'icon',
		cls: 'fa fa-times',
		weight: 10
	},
	onClick: function() {
		if( !d.data.entries.isEmpty() )
			d.data.entries.last().del();
	}
});


w.render('#sample');



var d = $.ergo({
	etype: 'list',	// простой список,
	data: data,			// источником данных для которого является массив data
	dynamic: true		// и включено динамическое связвание - теперь количество элементов будет определяться данными
});

d.render('#sample');

$context.section('Общие данные');
$context.section_begin('data-share');
$context.section_end('data-share');


var w = $.ergo({
	etype: 'box',

	// за счет иерархического связывания оба дочерних виджета будут
	// иметь один и тот же источник данных
	data: new Ergo.core.DataSource(''),

	// задаем отступы для дочерних элементов
	defaultItem: {
		style: {'margin-right': 20}
	},

	items: [{
		etype: 'html:input'
//		onInput: 'prop:value'
		// onChange: function(e) {
		// 	this.opt('value', e.value);
		// }
	}, {
		etype: 'text',
		$title: {
			etype: 'html:b',
			text: 'Данные: '
		},
		$content: {
			etype: '.',
			binding: 'prop:text'
		}
	}]


});

$context.alert('Введенный текст изменяет содержимое источника данных, который обновляет текст другого связанного с ним виджета.');

w.render('#sample');

$context.section('"Грязные" данные', 'Уведомление родительских источников данных о том, что значение изменилось');
$context.section_begin('data-dirty');
$context.section_end('data-dirty');

var w = $.ergo({
	etype: 'box',
	data: {qty: 1, cost: 2},
	layout: 'form',
	items: [{
		etype: 'html:text-input',
		type: 'number',
		dataId: 'qty',
		label: 'Количество'
	}, {
		etype: 'html:text-input',
		type: 'number',
		dataId: 'cost',
		label: 'Цена'
	}, {
		$label: {
			etype: 'html:b',
			text: 'Итог: '
		},
		$content: {
			etype: '.',
			binding: function(v) {
				this.opt('text', "$" + (v.qty * v.cost));
			}
		}
	}]

});


w.render('#sample');

