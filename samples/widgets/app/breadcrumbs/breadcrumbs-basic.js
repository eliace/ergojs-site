
var data = {history: ['Страна', 'Регион', 'Город'], current: 'Улица'}; 

var w = $.ergo({
	etype: 'breadcrumbs',
	data: data.history,
	$current: {
		data: data.current
	} 
});

w.render('#sample');
