

var usersProvider = {

	url: 'data/mock-30.json',

	findAll: function() {
		return $.ajax(this.url, {
			method: 'get',
			dataType: 'json'
		});
	}
}



$context.alert('Поскольку `select` использует стиль `display-table`, его не следует применять с компоновками типа `hbox` или `vbox`');

$context.section('Простой список');
//= require select-basic
$context.section('Связывание с данными');
//= require select-dropdown
$context.section('С полем ввода');
//= require select-input
$context.section('С фильтрацией');
//= require select-filter
$context.section('Множественный выбор');
//= require select-multi
$context.section('Множественный выбор (dynamic)');
//= require select-multi-dynamic
$context.section('Ajax');
//= require select-data
