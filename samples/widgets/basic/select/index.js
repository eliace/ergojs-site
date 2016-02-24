
//= include provider
//= include data


$context.alert('Поскольку `select` использует стиль `display-table`, его не следует применять с компоновками типа `hbox` или `vbox`');

$context.section('Простой список');
//= require select-basic
$context.section('Связывание с данными', '', ['data.js']);
//= require select-dropdown
$context.section('С полем ввода');
//= require select-input
$context.section('С фильтрацией', '', ['provider.js']);
//= require select-filter
$context.section('Множественный выбор');
//= require select-multi
$context.section('Множественный выбор (dynamic)');
//= require select-multi-dynamic
$context.section('Ajax', '', ['provider.js']);
//= require select-data
$context.section('Состояния');
//= require select-states
