
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});



$context.section('Динамический расчет отступа');
//= require nested-basic


data.fetch();