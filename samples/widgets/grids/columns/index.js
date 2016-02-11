

ajaxProvider = {
	url: 'data/grid-30.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: ajaxProvider});



$context.section('Ширина');
//= require columns-resize
$context.section('Меню');
//= require columns-menu
$context.section('Включение/отключение');
//= require columns-hide


data.fetch();