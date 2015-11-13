
var data = {
  a: '',
  b: ''
}



var w = $.ergo({
  etype: 'box',
  layout: 'vbox',
  as: '__gap',
  data: data,

  defaultItem: {
    etype: 'html:text-input',
  },

  items: [{
    dataId: 'a',
    placeholder: 'Не более 5 символов',
    unformat: function(v) {
      if(v && v.length > 5) {
        this.events.rise('invalid', {value: v});
        return this.opt('value');
      }
      return v;
    },
    // при вводе символа вызываем onChange (символ появляется)
    onInput: 'do_change'
  }, {
    dataId: 'b',
    placeholder: 'Без цифр',
    unformat: function(v) {
      if(v && /\d/.test(v)) {
        this.events.rise('invalid', {value: v});
        return this.opt('value');
      }
      return v;
    },
    // при нажатии клавиши вызываем onChange (символ не появляется)
    onKeyDown: function(e) {
      var self = this;
      setTimeout(function(){
        self.do_change();//events.rise('change', {value: self.el.val()});
      }, 0);
    }
  }]

});

w.render('#sample');
