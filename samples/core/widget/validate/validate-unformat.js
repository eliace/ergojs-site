
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
    etype: 'html:input'
  },

  items: [{
    dataId: 'a',
    placeholder: 'Не более 5 символов',
    unformat: function(v) {
      if(v && v.length > 5) {
        this.rise('invalid', {value: v});
        return this.opt('value');
      }
      return v;
    },
    events: {
      'dom:input': 'change' // обновляем значение при вводе символа
    }
  }, {
    dataId: 'b',
    placeholder: 'Без цифр',
    unformat: function(v) {
      if(v && /\d/.test(v)) {
        this.rise('invalid', {value: v});
        return this.prop('value');
      }
      return v;
    },
    // при нажатии клавиши вызываем onChange (символ не появляется)
    events: {
      'dom:keydown': function(e) {
        var self = this;
        setTimeout(function(){
          self.change();
        }, 0);
      }
    }
    // onKeyDown: function(e) {
    // }
  }]

});

w.render('#sample');
