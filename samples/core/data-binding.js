
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


$context.alert('Иерархическое связывание с данными с использованием простых и составных ключей');


var w = $.ergo({
	etype: 'box',
	// элементы располагаются вертикально
	layout: 'band',
	// источником данных является объект data
	data: data,
	// виджет text по умолчанию преобразует связанные данные в innerText
	defaultItem: {
		etype: 'box',
		binding: 'text',
		mixins: ['label'],
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
