
$context.section('Создание');
$context.section_begin('breadcrumbs-basic');
$context.section_end('breadcrumbs-basic');

var data = {history: ['Страна', 'Регион', 'Город'], current: 'Улица'};

var w = $.ergo({
	etype: 'breadcrumbs',
	data: data.history,
	$current: {
		text: data.current,
		binding: false
	}
});

w.render('#sample');

console.log('breadcrumbs', w);
