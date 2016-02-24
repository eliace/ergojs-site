

var textFilter = function(s, item) {
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var w = $.ergo({
	etype: 'select',

  '~include': ['focusable', 'placeholder'],

	$content: {
		etype: 'html:input',
    placeholder: 'Country',
		autoBind: false,
		events: {
      'vdom:keyup': function(e) {
        this.rise('keyUp', {text: this.opt('text')}, e);
      },
      'vdom:keydown': function(e) {
        this.rise('keyDown', {text: this.opt('text')}, e);
      },
		}
	},

	$dropdown: {
//		style: {'max-height': 200, 'overflow-y': 'auto', 'overflow-x': 'hidden'},
		items: COUNTRIES
	},


	onKeyUp: function(e) {

//    console.log('keyup', e.text);

//		this.$dropdown.filter( 'render', textFilter.curry(e.text) );

		this.$dropdown.opt('renderFilter', textFilter.bind(this, e.text));
		this.$dropdown._rerender();

	}

});










var inputFilter = function(s, val) {
  var v = val.full_name;
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};

var inputFilterData = new Ergo.data.Collection({provider: usersProvider});


var w2 = $.ergo({
	etype: 'select',

  '~include': 'focusable',

  data: {},

  dataId: ['id', 'full_name'],


	$content: {
		etype: 'html:input',
    placeholder: 'User...',
		autoBind: false,
//    format: '#{full_name}',
		events: {
      'jquery:keyup': function(e) {
        if( !(e.keyCode == KEY_UP || e.keyCode == KEY_DOWN || e.keyCode == KEY_ESC || e.keyCode == KEY_ENTER) ) {
          this.rise('input', {text: this.el.val()}, e);
        }
//        this.rise('keyUp', {text: this.el.val()}, e);
      }
      // 'jquery:keydown': function(e) {
      //   this.rise('keyDown', {text: this.el.val()}, e);
      // }
		}
	},

	$dropdown: {
//		style: {'max-height': 200, 'overflow-y': 'auto', 'overflow-x': 'hidden'},
		data:  inputFilterData,
    defaultItem: {
      format: '#{full_name}',
      dataId: ['id', 'full_name'],
      get: {
        'name': function() {
          return this.data.get();// {id: this.data.get('id'), full_name: this.data.get('full_name')};
        }
      }
    }
	},


  transitions: {
    '* > opened': function() {
      var self = this;
      // при открытии выпадающего списка загружаем данные
      return this.$dropdown.data
        .fetch()
        .then(function() {
          //FIXME обновляем выборку, поскольку список перестроился
          self.selection.set( self.opt('value') );
//          self.$dropdown.navigator.selected = self.selection.get();
        });
    }
  },


  onInput: function(e) {

    var self = this;

    this.$dropdown.opt('dynamicFilter', inputFilter.bind(this, e.text));

    this.$dropdown.data
      .fetch()
      .then(function() {
        //FIXME обновляем выборку, поскольку список перестроился
        self.selection.set( self.opt('value') );
      });

    this.set('opened');

  },

	// onKeyUp: function(e) {
  //
  //   var self = this;
  //
  //   if( !(e.base.keyCode == KEY_UP || e.base.keyCode == KEY_DOWN || e.base.keyCode == KEY_ESC || e.base.keyCode == KEY_ENTER) ) {
  //
  //     this.$dropdown.opt('dynamicFilter', inputFilter.curry(e.text));
  //
  //     this.$dropdown.data
  //       .fetch()
  //       .then(function() {
  //         //FIXME обновляем выборку, поскольку список перестроился
  //         self.selection.set( self.opt('value') );
  //         self.$dropdown.navigator.selected = self.selection.get();
  //       });
  //
  //     this.states.set('opened');
  //   }
  //
  //   // if( e.base.keyCode == 27 ) {
  //   //   this._dataChanged();
  //   // }
  //
	// },



  onChangeSelect: function(e) {
    // устанавливаем фильтр
    var text = e.target.opt('text');
    if(text)
      this.$dropdown.opt('dynamicFilter', $ergo.curry(inputFilter, text) );
    // устанавливаем фокус на элемент ввода
    this.$content.el.focus();
  }

});




var box = $ergo({
  etype: 'box',
  as: 'box horizontal __gap',
  items: [ w, w2 ]
});


box.render('#sample');
