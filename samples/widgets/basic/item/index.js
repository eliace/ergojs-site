

var ITEMS = [{
	text: 'Волков А.Н.',
	description: 'Java-разработчик',
	avatar: '001'
}, {
	text: 'Зайцев И.Д.',
	description: 'Руководитель группы',
	avatar: '002'
}, {
	text: 'Медведев К.Г.',
	description: 'Веб-разработчик',
	avatar: '004'
}, {
	text: 'Лисицина О.Е.',
	description: 'Дизайнер',
	avatar: '003'
}];


var AVATARS_URL = 'demo/blog/img/avatars/';







$context.section('Текст');
//= require item-text
$context.section('Иконка');
//= require item-icon
$context.section('Картинка');
//= require item-image
$context.section('Описание', 'Добавляем компонент с описанием');
//= require item-desc
$context.section('Заголовок', 'Добавляем компонент с заголовком');
//= require item-title
$context.section('Колоночная компоновка');
//= require item-columns
//$context.section('Иконка справа');
// require item-xicon
