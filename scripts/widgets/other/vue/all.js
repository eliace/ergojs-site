

function Attribute(v, i) { this.vdom.el.setAttribute(i, v); }


$ergo.defineClass('Ergo.widgets.Svg', {

  extends: 'Ergo.core.Widget',

  defaults: {
    tagNS: 'http://www.w3.org/2000/svg',
    defaultItem: {
      etype: 'svg'
    },
    defaultComponent: {
      etype: 'svg'
    }
  },

  props: {
    set: {
      'x': Attribute,
      'y': Attribute,
      'width': Attribute,
      'height': Attribute,
      'cx': Attribute,
      'cy': Attribute,
      'r': Attribute,
      'points': Attribute
    }
  }

}, 'widgets:svg');




$context.section('SVG Graph');
$context.section_begin('svg-graph');
$context.section_end('svg-graph');

// The raw data to observe
var stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]



//var statsData = new Ergo.core.DataSource(stats);



function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}


$ergo.alias('formats:json', function(v) {
  return $ergo.prettyPrint(v);
});





var Polygraph = $ergo({
  etype: 'svg',
  tag: 'svg',
  width: 200,
  height: 200,
  $group: {
    tag: 'g',
    $polygon: {
      tag: 'polygon',
      binding: function(v) {
        var total = v.length;

        var points = v.map(function (stat, i) {
          var point = valueToPoint(stat.value, i, total)
          return point.x + ',' + point.y
        }).join(' ');

        this.prop('points', points);
      }
    },
    $circle: {
      tag: 'circle',
      cx: 100,
      cy: 100,
      r: 80
    },
    $labels: {
      layout: 'contents', // эта компоновка нужна, т.к. метки сгруппированы в $labels
      dynamic: true,
      weight: 10,
      defaultItem: {
        tag: 'text',
        binding: function(v) {
          var point = valueToPoint(v.value+10, this._index, stats.length);
          this.opt({
            text: v.label,
            x: point.x,
            y: point.y
          });
        }
      },
      events: {
        'data:dirty': '_dataChanged' // поскольку данные сильно связаны, нужно обновить все
      }
    }
  }
});


var Controls = $ergo({
  etype: 'box',
  dynamic: true,
  defaultItem: {
    items: [{
      tag: 'label',
      format: '#{label}',
      binding: 'text'
    }, {
      etype: 'html:input',  // обеспечивает связывание input->value
      type: 'range',
      dataId: 'value',
      unformat: Number    // пользователь вводит строки, а нам нужно число
    }, {
      tag: 'span',
      format: '#{value}',
      binding: 'text'
    }, {
      tag: 'button',
      text: 'X',
      onClick: function() {
        this.data.del();
      }
    }]
  }
});


var NewStat = $ergo({
  etype: 'box',
  data: {value: 100},
  items: [{
    etype: 'html:input',  // обеспечивает связывание input->value
    dataId: 'label'
  }, {
    tag: 'button',
    text: 'Add a Stat',
    onClick: function() {
      Demo.data.add( this.data.get() );
      this.data.set({value: 100});
    }
  }]
});


var RawStats = $ergo({
  tag: 'pre',
  id: 'raw',
  binding: 'text',
  format: '#{*|json}'
});



var Demo = $ergo({
  etype: 'box',
  css: {'position': 'relative'},
  data: stats,
  items: [Polygraph, Controls, NewStat, RawStats]
});

Demo.render('#sample');

