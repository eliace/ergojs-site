
var data = ['Африка', 'Азия', 'Европа', 'Америка', 'Австралия', 'Арктика', 'Антарктика'];

var w = $.ergo({
	etype: 'list',	// простой список,
	data: data,			// источником данных для которого является массив data
	dynamic: true		// и включено динамическое связвание - теперь количество элементов будет определяться данными
});


var w2 = $.ergo({
	etype: 'button',
	text: 'Удалить последний элемент ',
	$icon: {
		etype: 'icon',
		cls: 'fa fa-times',
		weight: 10
	},
	onClick: function() {
		if( !w.data.entries.is_empty() )
			w.data.entries.last().del();
	}
});


w2.$render('#sample');

w.$render('#sample');
