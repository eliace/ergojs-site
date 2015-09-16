

$context.section('Горизонтальный и вертикальный');
$context.section_begin('divider-basic');
$context.section_end('divider-basic');


var CustomFactory = function(o) {
	if($.isString(o)) {
		if(o == '-')
			o = {etype: 'box', cls: 'divider horizontal', divider: true};
		else if(o == '|')
			o = {etype: 'box', cls: 'divider vertical', divider: true};
		else if(o[0] == '-')
			o = {etype: 'box', text: o.substr(1), as: 'x-divider horizontal', divider: true};
		else if(o[0] == '|')
			o = {etype: 'box', text: o.substr(1), as: 'x-divider vertical', divider: true};
		else
			o = {etype: 'text', text: o};
	}
	else {
		o.etype = o.etype || 'box';
	}
	return $.ergo(o);
};


w = $.ergo({
	etype: 'panel',
	title: 'Divider',
	as: 'light',
	width: 600,
	$content: {
		itemFactory: CustomFactory,
		layout: 'vbox',
		items: [
			LOREMIPSUM,
			'-',
			LOREMIPSUM_2,
			'-ТЕКСТ',
			LOREMIPSUM_3,
			{
				layout: 'columns',
				itemFactory: CustomFactory,
				items: [
					LOREMIPSUM_4,
					'|',
					LOREMIPSUM_5,
				]
			},
			{
				layout: 'columns',
				itemFactory: CustomFactory,
				items: [
					LOREMIPSUM,
					'|ИЛИ',
					LOREMIPSUM_2,
				]
			}

		]
	}
});

w.render('#sample');
