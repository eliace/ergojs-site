
$context.section('Формат');
$context.section_begin('validate-unformat');
$context.section_end('validate-unformat');

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
    onInvalid: function(e) {
      console.log('invalid', e.value);
    }
  },

  items: [{
    dataId: 'a',
    placeholder: 'Не более 5 символов',
    unformat: function(v) {
      if(v && v.length > 5) {
        this.events.fire('invalid', {value: v});
        return this.opt('value');
      }
      return v;
    },
    // при вводе символа вызываем onChange (символ появляется)
    onInput: 'changeAction'
  }, {
    dataId: 'b',
    placeholder: 'Без цифр',
    unformat: function(v) {
      if(v && /\d/.test(v)) {
        this.events.fire('invalid', {value: v});
        return this.opt('value');
      }
      return v;
    },
    // при нажатии клавиши вызываем onChange (символ не появляется)
    onKeyDown: function(e) {
      var self = this;
      setTimeout(function(){
        self.events.rise('change', {value: self.el.val()});
      }, 0);
    },
  }]
});

w.render('#sample');

$context.section('Модель');
$context.section_begin('validate-model');
$context.section_end('validate-model');

var data = {
  a: '',
  b: '',
  c: ''
}


// Numeric
Ergo.defineClass('Ergo.data.type.Numeric', 'Ergo.data.Object', {
  _validate: function(v) {
    return v && !isNaN( parseInt(v) );
  }
}, 'data:numeric');

// String
Ergo.defineClass('Ergo.data.type.String', 'Ergo.data.Object', {
  _validate: function(v) {
    if(v && this.options.onlyUppercase) {
      return v.toUpperCase() === v;
    }
  }
}, 'data:string');



Ergo.defineClass('Ergo.data.SampleObject', 'Ergo.data.Object', {
  fields: {
    'a': 'data:numeric',
    'b': {etype: 'data:string', onlyUppercase: true},
    'c': {
      etype: 'data:string',
      validator: function(v) {
        if(v) {
          return v.toLowerCase() === v;
        }
      }
    }
  }
});




var ds = new Ergo.data.SampleObject();
ds.set(data);




var w = $.ergo({
  etype: 'box',
  layout: 'vbox',
  as: '__gap',
  data: ds,
  defaultItem: {
    etype: 'html:text-input',
    events: {
      'data:invalid': function(e) {
        console.log('Некорректное значение: ' + e.value);
      },
      'input': 'changeAction'
    }
  },
  items: [{
    placeholder: 'Целое число',
    dataId: 'a'
  }, {
    placeholder: 'Печатные буквы',
    dataId: 'b'
  }, {
    placeholder: 'Прописные буквы',
    dataId: 'c'
  }]
});


w.render('#sample');

