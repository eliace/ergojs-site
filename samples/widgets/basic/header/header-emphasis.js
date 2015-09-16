

var w = $.ergo({
	etype: 'box',
	as: 'block',
	items: [
		{ text: 'Заголовок', etype: 'title',	as: 'underlined strong' },
		LOREMIPSUM,
		{ text: 'Заголовок', etype: 'title',	as: 'underlined' },
		LOREMIPSUM_2,
		{ text: 'Заголовок', etype: 'title',	as: 'underlined weak' },
		LOREMIPSUM_3
	]
})



w.render('#sample');
