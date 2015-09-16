

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
	defaultItem: {
		layout: 'hbox',
		as: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			as: 'button basic',
			icon: 'fa-cog',
			xicon: 'caret',
			onClick: function(e) {
				this.states.toggle('opened');
				e.stop();
			},
			$dropdown: {
				items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
			}
		}
	},

	items: [
		[
			{	as: '+up +to-left' },
			{	as: '+up +to-right'	}
		], [
			{	as: '+down +to-left'	},
			{	as: '+down +to-right'	}
		]
	]
});

w.render('#sample');
