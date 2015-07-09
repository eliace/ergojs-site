
$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		onClick: function() {
			this.events.rise('run');
		}
	},
	items: [{
		etype: 'button',
		cls: 'primary',
		text: 'Reset',
		cycles: 0
	}, {
		etype: 'button',
		cls: 'warning',
		text: 'Render'
	}, {
		etype: 'button',
		cls: 'success',
		text: 'Binding'
	}],
	$result: {
		etype: 'text',
		cls: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' сек.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		var test = e.target.opt('text');

		if(test == 'Reset') {
			box.items.apply_all('_destroy');
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
		binding: 'text'
	}
});

box.render('#sample');
