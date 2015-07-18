


var box = $.ergo({
	etype: 'box',
	layout: 'hbox',
	defaultItem: {
		cls: 'lite padding box',
//		width: 80
	},
	items: [
		{cls: 'red', text: 'red'},
		{cls: 'pink', text: 'pink'},
		{cls: 'purple', text: 'purple'},
		{cls: 'deep-purple', text: 'deep-purple'},
		{cls: 'indigo', text: 'indigo'},
		{cls: 'blue', text: 'blue'},
		{cls: 'light-blue', text: 'light-blue'},
		{cls: 'cyan', text: 'cyan'},
		{cls: 'teal', text: 'teal'},
		{cls: 'green', text: 'green'},
		{cls: 'light-green', text: 'light-green'},
		{cls: 'lime', text: 'lime'},
		{cls: 'yellow', text: 'yellow'},
		{cls: 'amber', text: 'amber'},
		{cls: 'orange', text: 'orange'},
		{cls: 'deep-orange', text: 'deep-orange'},
		{cls: 'brown', text: 'brown'},
		{text: 'default'},
		{cls: 'grey', text: 'grey'},
		{cls: 'blue-grey', text: 'blue-grey'},
		{cls: 'black', text: 'black'}
	]
});


box.render('#sample');

