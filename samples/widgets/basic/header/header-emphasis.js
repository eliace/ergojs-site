

var w = $.ergo({
	etype: 'box',
	cls: 'block',
	items: [
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined strong' },
		LOREMIPSUM,
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined' },
		LOREMIPSUM_2,
		{ text: 'Заголовок', etype: 'title',	cls: 'underlined weak' },
		LOREMIPSUM_3
	]
})



w.render('#sample');

