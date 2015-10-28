
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
