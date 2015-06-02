





$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		cls: 'primary',
		text: 'Reset',
		onClick: function() {
			n = 0;
			data.fetch();
		}		
	}, {
		etype: 'button',
		cls: 'warning',
		text: '500',
		onClick: function() {
			n = 300;
			data.fetch();
		}
	}, {
		etype: 'button',
		cls: 'success',
		text: '1000',
		onClick: function() {
			n = 1000;
			data.fetch();
		}
	}, {
		etype: 'button',
		cls: 'danger',
		text: '2000',
		onClick: function() {
			n = 2000;
			data.fetch();
		}
	}]
});





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
			v.age = g.randomAge();
			v.url = g.randomUrl();
		}

		return $.when(a);
	}

}});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'list-view cell-small',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	$content: {
		autoHeight: false
	},
	columns: [{
		header: '#',
		dataId: 'id',
		binding: 'text'
	}, {
		header: 'Avatar',
		dataId: 'avatar',
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
		header: 'Age',
		dataId: 'age',
		binding: 'text'
	}, {
		header: 'Gender',
		dataId: 'gender',
		binding: 'text'
	}, {
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
	}],
	data: data
});


w.render('#sample');

//data.fetch();
