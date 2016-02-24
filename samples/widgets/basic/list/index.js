
//= include items
//= include data




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
$context.section('С плавающим элементом', '', ['items.js']);
//= require list-floats
$context.section('С боковой иконкой', '', ['items.js']);
//= require list-side
$context.section('С активной иконкой', '', ['items.js']);
//= require list-action
$context.section('Hovered', '', ['items.js']);
//= require list-hover
$context.section('Striped', '', ['items.js']);
//= require list-striped
$context.section('Selected', '', ['items.js']);
//= require list-select



//data.fetch();
