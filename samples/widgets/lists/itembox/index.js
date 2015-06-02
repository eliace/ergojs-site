

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/mock-15.json')
});



$context.section('Item Box (fluid layout)');
//= require itembox-fluid
$context.section('Item Box (hbox layout)');
//= require itembox-hbox
$context.section('Item Box (stack layout)');
//= require itembox-stack


data.fetch();
