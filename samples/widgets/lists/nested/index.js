
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});


Ergo.alias('formats:avatarUrl', function(v) {
	var s = v;
	if(v < 10) s = '0'+s;
	if(v < 100) s = '0'+s;
	return 'demo/blog/img/avatars/'+s+'.jpg';
});



$context.section('Динамический расчет отступа');
//= require nested-basic
$context.section('Слайдер');
//= require nested-slide


data.fetch();