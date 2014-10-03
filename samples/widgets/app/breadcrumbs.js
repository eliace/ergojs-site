

var data = {history: ['Страна', 'Регион', 'Город'], current: 'Улица'}; 

var w = $.ergo({
	etype: 'list',
	cls: 'breadcrumbs',
	data: data.history,
	defaultItem: {
		$content: {
			etype: 'link'
		},
		binding: function(v) {
			this.content.opt('text', v);
		}
	},
	$current: {
		weight: 100,
		etype: 'html:li',
		data: data.current,
		binding: 'text'
	} 
});

w.$render('#sample');
