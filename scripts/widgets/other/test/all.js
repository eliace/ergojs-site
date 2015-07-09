
var n = 0;

var data = new Ergo.data.Collection({provider: {

	generator: {

		appconstant: {
		  letters : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
		  
		  avatars: {
		      'M': 'demo/blog/img/avatars/001.jpg', //http://howlstream.com/dist/images/icons/PNG/Dude.png',
		      'F': 'demo/blog/img/avatars/003.jpg', // 'http://howlstream.com/dist/images/icons/PNG/Girl.png'
		  },

		  ageColors: {
		      average: {},
		      minor: {
		          'background-color': 'red',
		          color: 'white'
		      },
		      senior: {
		          'background-color': 'brown',
		          color: 'yellow'
		      },
		  }
		},


	  randomGender: function() {
	      return (Math.floor(Math.random() * 2) % 2 === 0) ? 'M' : 'F';
	  },

	  randomAge: function() {
	      return Math.floor(Math.random() * 90) + 1;
	  },

	  randomName: function(length) {
	      var nome = "";
	      for (var i = 0; i < length; i++)
	          nome += this.appconstant.letters.charAt(Math.floor(Math.random() * this.appconstant.letters.length));
	      return nome;
	  },

	  randomUrl: function() {
	      return (Math.floor(Math.random() * 2) % 2 === 0) ? 'http://www.' + (this.randomName(20) + '.' + this.randomName(2)).toLowerCase() : '';
	  }

	},


	find_all: function() {

		var g = this.generator;

		var a = [];

		for(var i = 0; i < n; i++) {
			var v = {};
			a.push(v);

			v.id = i+1;
			v.gender = g.randomGender();
			v.avatar = g.appconstant.avatars[v.gender];
			v.first_name = g.randomName(10);
			v.last_name = g.randomName(10);
			v.middle_name = g.randomName(10);
			v.age = g.randomAge();
			v.url = g.randomUrl();
			v.email = g.randomName(8)+'@'+g.randomName(6)+'.'+g.randomName(2);
		}

		return $.when(a);
	}

}});



$context.section('Создание таблицы');
$context.section_begin('test-create');
$context.section_end('test-create');

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
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		cls: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		cls: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		cls: 'danger',
		text: '2000',
		cycles: 2000
	}],
	$result: {
		etype: 'text',
		cls: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');
		data.fetch();

		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);		
	}
});



var w = $.ergo({
	etype: 'table',
	cls: 'table grid single-line',
//	height: 400,
	width: 1200,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	// $content: {
	// 	autoHeight: false
	// },
	columns: [{
		header: '#',
		dataId: 'id',
		binding: 'text',
		width: 40
	}, {
		header: 'Avatar',
		dataId: 'avatar',
		width: 60,
		$content: {
			etype: 'html:img',
			binding: 'src',
			cls: 'rounded',
			width: 40
		}
	}, {
		header: 'First Name',
		dataId: 'first_name',
		binding: 'text'
	}, {
		header: 'Last Name',
		dataId: 'last_name',
		binding: 'text'
	}, {
		header: 'Middle Name',
		dataId: 'middle_name',
		binding: 'text'
	}, {
		header: 'Age',
		dataId: 'age',
		binding: 'text',
		width: 40
	}, {
		header: 'Gender',
		dataId: 'gender',
		binding: 'text',
		width: 60
	}/*, {
		header: 'Profile',
		$content: {
			etype: 'html:a',
			dataId: 'url',
			binding: function(v) {
				this.el.prop('href', v);
				this.content.opt('text', v ? 'link' : 'missing');
			},
			$content: {
				etype: 'html:spam'
			}
		}
//		dataId: 'profile',
//		binding: 'text'
	}*/, {
		header: 'Home page',
		dataId: 'url',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'email',
		binding: 'text'
	}],
	data: data
});


w.render('#sample');

$context.section('10000');
$context.section_begin('test-10000');
$context.section_end('test-10000');

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
