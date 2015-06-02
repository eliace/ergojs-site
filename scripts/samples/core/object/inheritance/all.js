
$context.section('Создание класса');
$context.section_begin('inheritance-basic');
$context.section_end('inheritance-basic');

// Новый класс создается с помощью метода Ergo.declare
// У него есть синоним Ergo.defineClass
Ergo.defineClass(
	'Samples.foo.MyClass', 			// полное имя нового класса
	'Ergo.core.Object', 				// полное имя базового класса
	{
		// блок параметров по-умолчанию
		defaults: {
			color: 'Синий',
			size: 0
		}	
	},
	'my-class'									// псевдоним класса
);


// Создаем экземпляр класса с параметрами по-умолчанию
var obj = new Samples.foo.MyClass();

$context.alert( Ergo.format('Цвет: %s, Размер: %s', obj.opt('color'), obj.opt('size')) );

// Создаем экземпляр класса и переопределяем color и size
obj = new Samples.foo.MyClass({
	color: 'Зеленый',
	size: 12
});

$context.alert( Ergo.format('Цвет: %s, Размер: %s', obj.options.color, obj.options.size) );

// Создаем экземпляр класса , испольуя метод Ergo.object
obj = Ergo.object({
	color: 'Белый',
	size: 1,
	weight: 5.4
}, 'my-class');

$context.alert( Ergo.format_obj('Цвет: #{color}, Размер: #{size}, Вес: #{weight}', obj.options) );



// Определяем расширенный класс
var AnotherClass = Samples.foo.MyClass.extend({
	
	defaults: {
		color: 'Серый'
	}
	
});

// Создаем экземпляр рпсширенного класса
obj = new AnotherClass();

$context.alert( Ergo.format('Цвет: %s, Размер: %s', obj.options.color, obj.options.size) );
