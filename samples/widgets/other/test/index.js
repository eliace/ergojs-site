
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
//= require test-create
$context.section('10000');
//= require test-10000