

var usersProvider = {

	url: 'data/mock-30.json',

	findAll: function() {
		return $.ajax(this.url, {
			method: 'get',
			dataType: 'json'
		});
	}
}


var CountryData = {
	country: 2,
	countries: ['Югославия', 'Болгария', 'Венгрия', 'Польша', 'Чехия', 'Словакия', 'Словения']
};


var CountryData2 = {
	country: 'CZ',
	countries: [
		{iso: 'HR', name: 'Хорватия'},
		{iso: 'BG', name: 'Болгария'},
		{iso: 'HU', name: 'Венгрия'},
		{iso: 'PL', name: 'Польша'},
		{iso: 'CZ', name: 'Чехия'},
		{iso: 'SK', name: 'Словакия'},
		{iso: 'SI', name: 'Словения'}]
};

var IsoCountries = [
	{iso: 'HR', name: 'Хорватия'},
	{iso: 'BG', name: 'Болгария'},
	{iso: 'HU', name: 'Венгрия'},
	{iso: 'PL', name: 'Польша'},
	{iso: 'CZ', name: 'Чехия'},
	{iso: 'SK', name: 'Словакия'},
	{iso: 'SI', name: 'Словения'}
]

var FormData = new Ergo.core.DataSource({
	id: 1,
	title: 'Horns\'n\'Hoofs Ltd',
	iso: 'PL',
	name: 'Польша'
});



$context.alert('Поскольку `select` использует стиль `display-table`, его не следует применять с компоновками типа `hbox` или `vbox`');

$context.section('Простой список');
$context.section_begin('select-basic');
$context.section_end('select-basic');

var w = $.ergo({
	etype: 'select',
	$content: {
		placeholder: 'Варианты...'
	},
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');

$context.section('Связывание с данными', '', ['data.js']);
$context.section_begin('select-dropdown');
$context.section_end('select-dropdown');




var select1 = $.ergo({
	etype: 'select',

	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	},

	value: 1
});


var select2 = $.ergo({
	etype: 'select',

	$dropdown: {
		defaultItem: {
			get: {
				'name': function() {
					return this.opt('text');
				}
			}
		},
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	},

	value: 'Австралия'
});



var select3 = $.ergo({
	etype: 'select',

	$dropdown: {
		data: CountryData,
		dataId: 'countries'
	},

	data: CountryData,
	dataId: 'country'
});



var select4 = $.ergo({
	etype: 'select',

	$dropdown: {
		data: CountryData2,
		dataId: 'countries',
		defaultItem: {
			binding: function(v) {
				this.opt('text', v.name);
				this.opt('name', v.iso);
			}
		}
	},

	data: CountryData2,
	dataId: 'country'

});





var select5 = $.ergo({
	etype: 'select',

	$content: {
		format: '#{name}',
		binding: 'prop:text'
	},

	$dropdown: {
		data: IsoCountries,
		defaultItem: {
			binding: function(v) {
				this.prop('text', v.name);
			},
			get: {
				'name': function() {
					return this.prop('value');
				}
			}
		}
	},

	data: FormData,
	dataId: ['iso', 'name']

});





var w = $.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	items: [ select1, select2, select3, select4, select5 ]
});

w.render('#sample');

$context.section('С полем ввода');
$context.section_begin('select-input');
$context.section_end('select-input');


var w = $.ergo({
	etype: 'select',

	'~include': 'focusable',

	$content: {
		etype: 'html:input',
		placeholder: 'Сторона света'
	},

	$dropdown__items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

});



w.render('#sample');

$context.section('С фильтрацией', '', ['provider.js']);
$context.section_begin('select-filter');
$context.section_end('select-filter');


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
      'dom:keyup': function(e) {
        this.rise('keyUp', {text: this.opt('text')}, e);
      },
      'dom:keydown': function(e) {
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

$context.section('Множественный выбор');
$context.section_begin('select-multi');
$context.section_end('select-multi');

var TextFilter = function(item) {
  var s = this.opt('filter');
  if(!s) return true;
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var select = $.ergo({
	etype: 'select',
	as: 'multi',

  selection: {
    multiselect: true
  },

//	$labels: {
	defaultItem: {
//		style: {'display': 'inline-block', 'vertical-align': 'middle', 'margin-left': 4, 'float': 'left', 'margin-top': 3, 'margin-bottom': 3},
//		etype: 'label',
		as: 'label',
    // $content: {
    //   etype: '.'
    // },
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'contextual action after +close',
			onClick: 'action:delete'
		},
    onDelete: 'action:removeSelect'
		// onDelete: function() {
		// 	this._destroy();
		// }
	},
//	items: ['hello', 'goodbye'],
//	},
	$content: {
		etype: 'edit',
    include: ['user-input'],
		weight: 5,
	},

	$dropdown: {
		items: COUNTRIES,
    renderFilter: TextFilter
	},

/*
	binding: function(v) {

    if(!v) return;

    for(var i = 0; i < v.length; i++) {
      var selected = this.selection.get(v[i]);
      if(!selected) {

        var selected = this.selection.set( v[i] );

        this.$content.opt('text', '');
        this.$dropdown.opt('filter', '');
//        this.$dropdown.opt('renderFilter', textFilter.bind(this, ''));
      }

    }

	},
*/

  // get: {
  //   'value': function() {
  //     return this.selection.get();
  //   }
  // },



	onClick: 'action:dropdown',

	onSelect: function(e) {
		this.$content.dom.el.focus();
	},

  onDropdown: function(e) {
		this.$content.dom.el.focus();
	},

	onInput: $ergo.debounce(function(e) {

    this.$dropdown.opt('filter', e.text)._rerender();

		this.toggle('opened', !(!e.text));

	}, 300),

  onChangeSelect: function(e) {

    var k = e.target.opt('name');

//    var selected = this.selection.set(k);

    this.items.add({text: e.target.opt('text'), name: e.target.opt('name')}).render();



//    console.log('select', this.value);

    // var v = this.value || [];
    //
    //
    // v.push(k);
    //
    // this.value = v;//opt('value', v);

    // сбрасываем фильтр
    this.$content.opt('text', '');
    
//    this.$dropdown.opt('filter', '')._rerender();

    this.unset('opened');

    this.$content.dom.el.focus();


    e.interrupt();
  },



  // onAddSelect: function(e) {
  // },

  onRemoveSelect: function(e) {

    var k = (e.key == null) ? e.target.opt('name') : e.key;

    this.selection.unset(k);

    e.target._destroy();




    // var v = this.opt('value') || [];
    //
    // Ergo.remove(v, k);
    //
    // this.opt('value', v);
//
//     this.selection.unset(k);
  }

});


select.render('#sample');

$context.section('Множественный выбор (dynamic)');
$context.section_begin('select-multi-dynamic');
$context.section_end('select-multi-dynamic');


var TextFilter = function(item) {
  var s = this.opt('filter');
  if(!s) return true;
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};


var data = new Ergo.core.DataSource([]);


var select2 = $.ergo({
	etype: 'select',
	as: 'multi',

  selection: {
    multiselect: true
  },

  data: data,
  dynamic: true,
//	$labels: {
	defaultItem: {
//		etype: 'label',
		as: 'label',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'contextual action after +close',
			onClick: 'action:delete'
		},
    $content: {
      etype: '.'
    },
    onDelete: 'action:removeSelect'
	},
	$content: {
		etype: 'edit',
    include: 'user-input', //?
		weight: 5,
	},
	$dropdown: {
		items: COUNTRIES,
    renderFilter: TextFilter
	},

  binding: function(v) {

  },

/*
	binding: function(v) {

    for(var i = 0; i < v.length; i++) {
      var selected = this.selection.get(v[i]);
      if(!selected) {

        var selected = this.selection.set(v[i]);


        // var selected = this.selection.set( v[i] );
        // this.items.add({text: selected.opt('text'), name: selected.opt('name')}).render();

        this.$content.opt('text', '');
        this.$dropdown.opt('renderFilter', textFilter.bind(this, ''));
//        this.$dropdown.options.renderFilter = textFilter.curry('');
      }

    }

	},
*/

	onClick: 'action:dropdown',

	onSelect: function(e) {
		this.$content.dom.el.focus();
	},

  onDropdown: function(e) {
		this.$content.dom.el.focus();
	},



	onInput: $ergo.debounce(function(e) {

    this.$dropdown.opt('filter', e.text)._rerender();

    // this.$dropdown.opt('renderFilter', textFilter.bind(this, e.text));
    // this.$dropdown._rerender();
//		this.$dropdown.filter( 'render', textFilter.curry(e.text) );
		this.toggle('opened', !(!e.text));
	}, 300),

  onChangeSelect: function(e) {

    var k = e.target.opt('name');

    var entry = this.data.add( k );

    this.item({data: entry}).opt('text', e.target.opt('text')).opt('name', k);

    // сбрасываем фильтр
    this.$content.opt('text', '');

    this.unset('opened');

    this.$content.dom.el.focus();

    e.interrupt();
  },


  // onAddSelect: function(e) {
  // },

  onRemoveSelect: function(e) {

    var k = e.target.opt('name');

    this.selection.unset(k);
//    e.target._destroy();
//    console.log(k);

    this.data.rm(k);

    // var v = this.opt('value') || [];
    //
    // Ergo.remove(v, k);
    //
    // this.opt('value', v);
//
//     this.selection.unset(k);
  }

});


select2.render('#sample');

$context.section('Ajax', '', ['provider.js']);
$context.section_begin('select-data');
$context.section_end('select-data');


var userData = {
	user_id: -1,
	user_title: '---'
};

var users = new Ergo.data.Collection({provider: usersProvider});


var w = $.ergo({
	etype: 'select',

	$content: {
		format: '#{user_title}',
		placeholder: 'Варианты...',
		binding: 'prop:text'
	},

	$dropdown: {
		defaultItem: {
			format: '#{full_name}',
			get: {
				'name': function() {
					return {user_id: this.data.get('id'), user_title: this.prop('text')}
				}
			}
		},
		data: users
	},

	data: userData,
	dataId: ['user_id', 'user_title']
});


users.fetch();


w.render('#sample');

$context.section('Состояния');
$context.section_begin('select-states');
$context.section_end('select-states');

var w = $.ergo({
	etype: 'select',
  as: '+disabled',
	$content: {
		placeholder: 'Disabled'
	},
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');

