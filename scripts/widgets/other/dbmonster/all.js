
var ENV = {
  rows: 100,
  timeout: 0
}


var generateSqlData = function() {
  // generate some dummy data
  var data = {
    start_at: new Date().getTime() / 1000,
    databases: {}
  };

  for (var i = 1; i <= ENV.rows; i++) {
    data.databases["cluster" + i] = {
      queries: []
    };

    data.databases["cluster" + i + "slave"] = {
      queries: []
    };
  }

  Object.keys(data.databases).forEach(function(dbname) {
    var info = data.databases[dbname];

    var r = Math.floor((Math.random() * 10) + 1);
    for (var i = 0; i < r; i++) {
      var q = {
        canvas_action: null,
        canvas_context_id: null,
        canvas_controller: null,
        canvas_hostname: null,
        canvas_job_tag: null,
        canvas_pid: null,
        elapsed: Math.random() * 15,
        query: "SELECT blah FROM something",
        waiting: Math.random() < 0.5
      };

      if (Math.random() < 0.2) {
        q.query = "<IDLE> in transaction";
      }

      if (Math.random() < 0.1) {
        q.query = "vacuum";
      }

      info.queries.push(q);
    }

    info.queries = info.queries.sort(function(a, b) {
      return b.elapsed - a.elapsed;
    });
  });

  return data;
}





$context.section('dbmonster');
$context.section_begin('parashuram');
$context.section_end('parashuram');


function getLastSample(db) {
  return db.samples[db.samples.length - 1];
}

function getTopFiveQueries(db) {
  var arr = getLastSample(db).queries.slice(0, 5);
  while (arr.length < 5) {
    arr.push({ query: '' });
  }
  return arr;
}


function getCountClassName(db) {
  var count = getLastSample(db).queries.length;
//  var className = 'label';
  if (count >= 20) {
    return 'error';
  }
  else if (count >= 10) {
    return 'warning';
  }
  else {
    return 'success';
  }
  return null;
}


function getElapsedClassName(elapsed) {
  if (elapsed >= 10.0) {
    return 'warn_long';
  }
  else if (elapsed >= 1.0) {
    return 'warn';
  }
  else {
    return 'short';
  }
  return null;
}



$ergo.alias('formats:formatElapsed', function (value) {
  if (!value) return '';
  var str = parseFloat(value).toFixed(2);
  if (value > 60) {
    var minutes = Math.floor(value / 60);
    var comps = (value % 60).toFixed(2).split('.');
    var seconds = comps[0].lpad('0', 2);
    var ms = comps[1];
    str = minutes + ":" + seconds + "." + ms;
  }
  return str;
});


$ergo.defineClass('Ergo.widgets.Popover', 'Ergo.widgets.Box', {
  defaults: {
    as: 'popover left popup',
    components: {
      content: {
        as: 'popover-content',
      },
      arrow: {
        as: 'arrow'
      }
    }
  }
}, 'widgets:popover');


$ergo.defineClass('Ergo.widgets.ElapsedCell', 'Ergo.widgets.Box', {
  defaults: {
    tag: 'td',
    as: 'Query elapsed',
    binding: function(db) {
      var q = getLastSample(db).queries[this.name];
      if(q) {
        this.text = $ergo.alias('formats:formatElapsed').call(this, q.elapsed);
        this.$popover.text = q.query;
//        this.vdom.addClass(getElapsedClassName(q.elapsed));
        this.states.set(getElapsedClassName(q.elapsed));
      }
    },
    $content: {
      etype: '.'
    },
    $popover: {
      etype: 'popover',
    }
  }
}, 'widgets:elapsed-cell');





var w = $ergo({
  etype: 'table',
  as: 'table bordered fluid',
  columns: [{
    as: 'dbname',
    binding: 'text',
    format: '#{name}'
  }, {
    as: 'query-count',
    $label: {
      etype: 'label',
      binding: function(db) {
        this.text = getLastSample(db).queries.length;
//        this.vdom.addClass(getCountClassName(db));
        this.states.set(getCountClassName(db));
      },
      states: {
        'error:cnt': 'error',
        'warning:cnt': 'warning',
        'success:cnt': 'success'
      }
    }
  }, {
    etype: 'elapsed-cell',
    name: 0
  }, {
    etype: 'elapsed-cell',
    name: 1
  }, {
    etype: 'elapsed-cell',
    name: 2
  }, {
    etype: 'elapsed-cell',
    name: 3
  }, {
    etype: 'elapsed-cell',
    name: 4
  }],
//  data: []
});

var ds = new Ergo.core.DataSource([], {
  // valueEql: function() {
  //   return false;
  // }
});

w.data = ds;


w.render('#sample');

var n = 50;

var t0 = $ergo.ms();


function load() {

  var databases = {};

  var newData = generateSqlData();

  Object.keys(newData.databases).forEach(function(dbname) {
    var sampleInfo = newData.databases[dbname];

    if (!databases[dbname]) {
      databases[dbname] = {
        name: dbname,
        samples: []
      };
    }

    var samples = databases[dbname].samples;
    samples.push({
      time: newData.start_at,
      queries: sampleInfo.queries
    });

    if (samples.length > 5) {
      samples.splice(0, samples.length - 5);
    }

//    topFiveQueries[dbname] = RenderService.getTopFiveQueries($scope.databases[dbname]);
  });

  w.data.sync(databases);

  if(--n > 0) {
    setTimeout(load, ENV.timeout);
  }
  else {
    var t1 = $ergo.ms();
    console.log( (t1-t0)/50 );
  }

}


load();

