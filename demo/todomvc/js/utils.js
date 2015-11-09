

var KEY_ESC = 27;
var KEY_ENTER = 13;




Ergo.alias('formats:countActive', function(v) {
  return ergo.filter(v, function(item) { return !item.completed; }).length;
});

Ergo.alias('formats:countCompleted', function(v) {
  return ergo.filter(v, function(item) { return item.completed; }).length;
});

Ergo.alias('formats:allCompleted', function(v) {
  return ergo.filter(v, function(item) { return item.completed; }).length == v.length;
});

Ergo.alias('formats:pluralizeItem', function(v) {
  return pluralize('item', v);
});



Ergo.alias('providers:localStorage', {

  storeKey: 'todomvc.ergojs',

  find_all: function(ds) {
    var json = JSON.parse( window.localStorage.getItem(this.storeKey) ) || {};
    return $.when( json[ds.options.storeId] || [] );
  },

  update: function(ds) {
    var json = JSON.parse( window.localStorage.getItem(this.storeKey) ) || {};
    json[ ds.options.storeId ] = ds.get();
    window.localStorage.setItem(this.storeKey, JSON.stringify(json));
    return $.when( true );
  }


});


Ergo.alias('includes:editor:input', {

  defaults: {
    editor: {
      etype: 'html:input',
      events: {
        // 'jquery:change': function() {
        //   this.events.fire('change', {value: this.el.val()});
        // },
        'jquery:keydown': function(e) {
          this.events.fire('keyDown', {keyCode: e.keyCode, value: this.el.val()});
        }
      },
      onClick: function(e) {
        e.stop();
      },
      // onChange: function(e) {
      //   this.opt('value', e.value);
      //     this.parent.stopEdit();
      // },
      onKeyDown: function(e) {
        if( e.keyCode == KEY_ESC )
          this.parent.cancelEdit();
        else if( e.keyCode == KEY_ENTER ) {
          this.opt('value', e.value);
          this.parent.stopEdit();
        }
      }
    }
  },


  overrides: {

    startEdit: function(data) {

      var w = this;

      this.components.set('editor', this.options.editor);


      this.states.set('editing');

//        this.$content.unrender();

      this.$editor.render()
        .then(function() {
          w.$editor.el.focus();
        });

      $('html').one('click', function() {
        if(w.states.is('editing'))
          w.cancelEdit();
//          w.events.rise('cancelEdit');
      });


      this.$editor.bind( data );

//      this.events.rise('beginEdit');
    },


    stopEdit: function() {

      this.events.rise('stopEdit', {value: this.$editor.data.get()} );

      this.$editor._destroy();
      this.states.unset('editing');

    },


    cancelEdit: function() {

      this.events.rise('cancelEdit');

      this.$editor._destroy();
      this.states.unset('editing');

    }

  }


});






$context = new Ergo.core.Context({
  include: 'history router',
  events: {
    'scopeRestore': function(e) {
//      this.to(e.hash);
      console.log('restore');
      e.stop(true);
    }
  }
});
