
$.ergo({
	etype: 'box',
	layout: 'hbox',
	as: '__gap',
	renderTo: '#sample',
	defaultItem: {
		onClick: 'action:run'
	},
	items: [{
		etype: 'button',
		as: 'primary',
		text: 'Reset',
		cycles: 0
	}, {
		etype: 'button',
		as: 'warning',
		text: 'Render'
	}, {
		etype: 'button',
		as: 'success',
		text: 'Binding'
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' сек.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		var test = e.target.opt('text');

		if(test == 'Reset') {
			// while( !box.items.is_empty() )
			// 	box.items.first()._destroy();
			while( !box.children.isEmpty() )
				box.children.first()._destroy();
			// box.children.each(function(item) {
			// 	console.log('item');
			// });

//			box.items.apply_all('_destroy');
//			box.children.apply_all('unrender');
		}
		else if(test == 'Render') {

			for(var i = 0; i < 10000; i++) {
				box.items.add({text: ''+i});
			}

			box.render();

		}
		else if(test == 'Binding') {

			var v = [];

			for(var i = 0; i < 10000; i++) {
				v.push(i);
			}

			box.bind(v);

		}

		var t1 = Ergo.timestamp();

		this.$result.opt('value', (t1 - t0)/1000.0);
	}
});



var box = $.ergo({
	etype: 'box',
	dynamic: true,
	defaultItem: {
		binding: 'prop:text'
	}
});

box.render('#sample');
