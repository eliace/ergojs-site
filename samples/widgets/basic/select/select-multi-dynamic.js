

var textFilter = function(s, item) {
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
    include: 'user-input',
		weight: 5,
	},
	$dropdown: {
		items: COUNTRIES
	},


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

	onClick: 'action:dropdown',

	onSelect: function(e) {
		this.$content.el.focus();
	},

	onInput: $ergo.debounce(function(e) {
    this.$dropdown.opt('renderFilter', textFilter.bind(this, e.text));
    this.$dropdown._rerender();
//		this.$dropdown.filter( 'render', textFilter.curry(e.text) );
		this.states.toggle('opened', !(!e.text));
	}, 300),

	onDropdown: function(e) {
		this.$content.el.focus();
	},

  onChangeSelect: function(e) {

    var k = e.target.opt('name');

    var entry = this.data.add( k );

    this.item({data: entry}).opt('text', e.target.opt('text')).opt('name', k);

    this.states.unset('opened');

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
