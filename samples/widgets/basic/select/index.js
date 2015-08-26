

var usersProvider = {

	url: 'data/mock-30.json',

	find_all: function() {
		return $.ajax(this.url, {
			method: 'get',
			dataType: 'json'
		});
	}
}





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
$context.section('Ajax');
//= require select-data

