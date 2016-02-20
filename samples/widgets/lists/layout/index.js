

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});



$context.section('Float', 'Выравнивание только по верхнему краю. Можно привязывать элементы к разным сторонам');
//= require layout-fluid
$context.section('HBox', 'Выравнивание произвольное. К разным сторонам элементы не привязываются');
//= require layout-hbox
$context.section('Flex', 'Выравнивание произвольное. К разным сторонам элементы не привязываются, но можно растянуть их на всю ширину контейнера');
//= require layout-flex


data.fetch();
