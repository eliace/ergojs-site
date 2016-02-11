
var n = 0;


var provider = {

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


	findAll: function() {

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

};








var data1wb = new Ergo.data.Collection({provider: provider});
var data2wb = new Ergo.data.Collection({provider: provider});



$context.section('Таблица (One-way binding)');
$context.section_begin('test-create');
$context.section_end('test-create');

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
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		as: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		as: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		as: 'danger',
		text: '2000',
		cycles: 2000
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');
		data1wb.fetch();

		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);
	}
});



var w = $.ergo({
	etype: 'table',
	as: 'table grid single-line',
//	height: 400,
	width: 1200,
	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
			}
		},
		autoBind: false
	},
	// $content: {
	// 	autoHeight: false
	// },
	columns: [{
		header: '#',
//		dataId: 'id',
		format: '#{id}',
		binding: 'text',
		width: 40
	}, {
		header: 'Avatar',
		width: 60,
		$content: {
			etype: 'html:img',
			format: '#{avatar}',
//			dataId: 'avatar',
			binding: 'src',
			as: 'rounded',
			width: 40
		}
	}, {
		header: 'First Name',
//		dataId: 'first_name',
		format: '#{first_name}',
		binding: 'text'
	}, {
		header: 'Last Name',
//		dataId: 'last_name',
		format: '#{last_name}',
		binding: 'text'
	}, {
		header: 'Middle Name',
//		dataId: 'middle_name',
		format: '#{middle_name}',
		binding: 'text'
	}, {
		header: 'Age',
//		dataId: 'age',
		format: '#{age}',
		binding: 'text',
		width: 40
	}, {
		header: 'Gender',
//		dataId: 'gender',
		format: '#{gender}',
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
//		dataId: 'url',
		format: '#{url}',
		binding: 'text'
	}, {
		header: 'Email',
//		dataId: 'email',
		format: '#{email}',
		binding: 'text'
	}],
	data: data1wb
});


w.render('#sample');

$context.section('Таблица (Two-way binding)');
$context.section_begin('test-2wb');
$context.section_end('test-2wb');


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
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		as: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		as: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		as: 'danger',
		text: '2000',
		cycles: 2000
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: 'Итог: #{*} с.'
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');
		data2wb.fetch();

		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);
	}
});



var w = $.ergo({
	etype: 'table',
	as: 'table grid single-line',
//	height: 400,
	width: 1200,
	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
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
//		format: '#{id}',
		binding: 'text',
		width: 40
	}, {
		header: 'Avatar',
		width: 60,
		$content: {
			etype: 'html:img',
//			format: '#{avatar}',
			dataId: 'avatar',
			binding: 'src',
			as: 'rounded',
			width: 40
		}
	}, {
		header: 'First Name',
		dataId: 'first_name',
//		format: '#{first_name}',
		binding: 'text'
	}, {
		header: 'Last Name',
		dataId: 'last_name',
//		format: '#{last_name}',
		binding: 'text'
	}, {
		header: 'Middle Name',
		dataId: 'middle_name',
//		format: '#{middle_name}',
		binding: 'text'
	}, {
		header: 'Age',
		dataId: 'age',
//		format: '#{age}',
		binding: 'text',
		width: 40
	}, {
		header: 'Gender',
		dataId: 'gender',
//		format: '#{gender}',
		binding: 'text',
		width: 60
	},
// 	{
// 		header: 'Profile',
// 		$content: {
// 			etype: 'html:a',
// 			dataId: 'url',
// 			binding: function(v) {
// 				this.el.prop('href', v);
// 				this.content.opt('text', v ? 'link' : 'missing');
// 			},
// 			$content: {
// 				etype: 'html:spam'
// 			}
// 		}
// //		dataId: 'profile',
// //		binding: 'text'
// 	},
	{
		header: 'Home page',
		dataId: 'url',
//		format: '#{url}',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'email',
//		format: '#{email}',
		binding: 'text'
	}],
	data: data2wb
});


w.render('#sample');

$context.section('10000');
$context.section_begin('test-10000');
$context.section_end('test-10000');

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
		binding: 'text'
	}
});

box.render('#sample');

$context.section('Список (+ click)');
$context.section_begin('test-events');
$context.section_end('test-events');


function _buildData(count) {
    count = count || 3000;

    var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    var data = [];
    for (var i = 0; i < count; i++)
        data.push({id: i+1, label: adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)] });
    return data;
}

function _random(max) {
    return Math.round(Math.random()*1000)%max;
}


var testEventsData = _buildData();


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
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		as: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		as: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		as: 'danger',
		text: '2000',
		cycles: 2000
	}, {
		etype: 'button',
		as: 'purple',
		text: '3000',
		cycles: 3000
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {

		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');

    var test = e.target.opt('text');

    if(test == 'Reset') {
      while( !TestEventsList.children.isEmpty() )
        TestEventsList.children.first()._destroy();
      }
      else {

//        var b = $.ergo({etype: 'box'});

        for(var i = 0; i < n; i++) {

//          var o = {etype: 'box'/*, text: testEventsData[0].label, onClick: function() { }*/}

//          var w = $.ergo( o );

//          b.items.add( o );

          TestEventsList.items.add({text: testEventsData[i].label/*, onClick: function() { this.rise('select') }*/});

        }

        TestEventsList.render();
      }




		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);
	}
});



var TestEventsList = $.ergo({
	etype: 'box',
  include: 'selectable',
//	dynamic: true,
//  layout: 'grid',
	defaultItem: {
    as: 'aaa bbb aaa2 bbb2',
    // onClick: function() {
    //   this.rise('select');
    // },
//    layout: 'grid',
    $content: {
      as: 'ccc ddd ccc2 ddd2',
//    components: {
      $content: {
        etype: 'text',
        events: {
          'click': function() {
            this.rise('select');
          }
        }
      }
    }
	}
});

TestEventsList.render('#sample');

