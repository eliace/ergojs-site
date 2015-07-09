

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
			{	state: 'up to-left' }, 
			{	state: 'up to-right'	}
		], [
			{	state: 'down to-left'	}, 
			{	state: 'down to-right'	}
		]
	]
});

w.render('#sample');



