
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
    'b': {
      etype: 'data:string',
      onlyUppercase: true
    },
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
  as: 'list __gap',
  data: ds,
  defaultItem: {
    as: 'item',
    $input: {
      etype: 'html:text-input',
      events: {
        'data:invalid': 'action:invalid',
        'data:valid': 'action:valid',
        'input': 'do_change'
      }
    },
    $message: {
      as: 'red text after +hidden'
    },
    onInvalid: function(e) {
      this.$message.states.unset('hidden');
      this.$message.opt('text', 'Неверное значение: ' + e.base.value + ' в поле "' + e.base.entry._id[0] + '"');
    },
    onValid: function(e) {
      this.$message.states.set('hidden');
    }
  },
  items: [{
    $input: {
      placeholder: 'Целое число',
      dataId: 'a'
    }
  }, {
    $input: {
      placeholder: 'Печатные буквы',
      dataId: 'b'
    }
  }, {
    $input: {
      placeholder: 'Прописные буквы',
      dataId: 'c'
    }
  }]
});


w.render('#sample');

