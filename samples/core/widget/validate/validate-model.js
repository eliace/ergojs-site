
var data = {
  a: '',
  b: '',
  c: ''
}


// Numeric
Ergo.defineClass('Ergo.data.type.Numeric', {
  extends: 'Ergo.data.Object',
  _validate: function(v) {
    return v && !isNaN( parseInt(v) );
  }
}, 'data:numeric');

// String
Ergo.defineClass('Ergo.data.type.String', {
  extends: 'Ergo.data.Object',
  _validate: function(v) {
    if(v && this.options.onlyUppercase) {
      return v.toUpperCase() === v;
    }
  }
}, 'data:string');



Ergo.defineClass('Ergo.data.SampleObject', {
  extends: 'Ergo.data.Object',
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
      etype: 'html:input',
      events: {
        'data:invalid': 'action:invalid',
        'data:valid': 'action:valid',
        'dom:input': 'change'
      }
    },
    $message: {
      as: 'red text after +hidden'
    },
    onInvalid: function(e) {
      this.$message.unset('hidden');
      this.$message.opt('text', 'Неверное значение: ' + e.base.value + ' в поле "' + e.base.entry._id[0] + '"');
    },
    onValid: function(e) {
      this.$message.set('hidden');
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
