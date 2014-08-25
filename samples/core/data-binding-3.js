var data = {
	firstName: 'Иван',
	middleName: 'Иванович',
	lastName: 'Иванов',
	age: 24,
	sex: 'м'
};

var w = $.ergo({
	etype: 'box',
	// элементы располагаются вертикально
	layout: 'band',
	// источником данных является объект data
	data: data,
	// видеж text по умолчанию преобразует связанные данные в innerText
	defaultItem: {
		etype: 'line',
		mixins: ['labelable']
	},
	
	items: [{
		label: 'ФИО',
		format: '#{lastName} #{firstName} #{middleName}'
	}, {
		label: 'Возраст',
		format: '#{age} года'
	}, {
		label: 'Отношение к военной службе',
		format: function(v){
			return (v.sex == 'м' && v.age >=18 && v.age < 27) ? 'военнообязанный' : 'не военнообязанный';
		}
	}, {
		label: 'Пол',
		dataId: 'sex',
		// перегружаем тип виджета, теперь здесь будет пиктограмма
		etype: 'icon',
		cls: 'fa',
		// при обновлении данных вызвается функция binding
		binding: function(v) {
			// при изменении данных добавляем класс пиктограммы
			this.el.addClass((v == 'м') ? 'fa-male' : 'fa-female');
		}
	}]
	
	
});

w.$render('#sample');

