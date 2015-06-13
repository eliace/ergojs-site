
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});




$context.section('Hbox', 'Сдвиг осуществляется с помощью padding-left');
//= require layout-hbox
$context.section('Columns', 'Сдвиг за счет первой колонки. Первая колонка выровнена по верхнему краю');
//= require layout-column


data.fetch();