

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



var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});




$context.section('Простой список');
//= require list-basic

//$context.section('С буллитами');
// require list-bullets
//$context.section('С номерами');
// require list-numbers

//$context.section('С иконкой');
// require list-icons
//$context.section('С изображением');
// require list-images
$context.section('С плавающим элементом');
//= require list-floats
$context.section('С боковой иконкой');
//= require list-stick
$context.section('С активной иконкой');
//= require list-action
$context.section('Hovered');
//= require list-hover
$context.section('Striped');
//= require list-striped
$context.section('Selected');
//= require list-select



data.fetch();