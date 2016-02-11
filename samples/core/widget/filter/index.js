

ajaxProvider = {
	url: 'data/mock-300.json',
	findAll: function(source) {
		return $.ajax(this.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



$context.section('Метод #1', 'Видимость определяется renderFilter, структура и данные списка при этом не меняются');
//= require filter-render
$context.section('Метод #2', 'Видимость определяется dynamicFilter, изменяется структура, но не данные');
//= require filter-dynamic
$context.section('Метод #3', 'Видимость определяется параметрами запроса к бэкенду, обновляются данные');
//= require filter-datasource


