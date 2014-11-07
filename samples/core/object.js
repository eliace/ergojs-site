

var obj = new Ergo.core.Object({
	
	color: 'Зеленый',								// задаем параметр color
	
	title: 'Некоторый текст',				// задаем параметр title
	
	// Блок сеттеров
	set: {
		'color': function(v) {				// определяем собственный сеттер для color
			this._color = v;
		}
	},
	
	// Блок геттеров
	get: {
		'color': function() {					// определяем собственный геттер для color
			return this._color;
		}
	}
	
});


// выводим параметр color, используя метод Object.opt
$context.alert( 'Цвет: ' + obj.opt('color') );
// выводим параметр title
$context.alert( 'Заголовок: ' + obj.opt('title') );
// К установленным параметрам можно получить доступ через свойство Object.options
$context.alert( obj.options.title + ' + ' + obj.options.color );
