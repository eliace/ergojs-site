
var data = ['Африка', 'Азия', 'Европа', 'Америка', 'Австралия', 'Арктика', 'Антарктика'];


var w = $.ergo({
	etype: 'button',
	text: 'Удалить последний элемент ',
	$icon: {
		etype: 'icon',
		cls: 'fa fa-times',
		weight: 10
	},
	onClick: function() {
		if( !d.data.entries.isEmpty() )
			d.data.entries.last().del();
	}
});


w.render('#sample');



var d = $.ergo({
	etype: 'list',	// простой список,
	data: data,			// источником данных для которого является массив data
	dynamic: true		// и включено динамическое связвание - теперь количество элементов будет определяться данными
});

d.render('#sample');
