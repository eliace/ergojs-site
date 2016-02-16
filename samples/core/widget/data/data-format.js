

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
