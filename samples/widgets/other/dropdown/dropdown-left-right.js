

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
	defaultItem: {
		layout: 'hbox',
		cls: '__gap',
		defaultItem: {
			etype: 'box',
			include: 'icon xicon dropdown',
			cls: 'button basic',
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
			{	state: 'left to-up' }, 
			{	state: 'right to-up'	}
		], [
			{	state: 'left to-down'	}, 
			{	state: 'right to-down'	}
		]
	]
});

w.render('#sample');

