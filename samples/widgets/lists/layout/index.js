
//= include data



$context.section('Float', 'Выравнивание только по верхнему краю. Можно привязывать элементы к разным сторонам', ['data.js']);
//= require layout-fluid
$context.section('HBox', 'Выравнивание произвольное. К разным сторонам элементы не привязываются', ['data.js']);
//= require layout-hbox
$context.section('Flex', 'Выравнивание произвольное. К разным сторонам элементы не привязываются, но можно растянуть их на всю ширину контейнера', ['data.js']);
//= require layout-flex
