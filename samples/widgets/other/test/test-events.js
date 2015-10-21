

function _buildData(count) {
    count = count || 3000;

    var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    var data = [];
    for (var i = 0; i < count; i++)
        data.push({id: i+1, label: adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)] });
    return data;
}

function _random(max) {
    return Math.round(Math.random()*1000)%max;
}


var testEventsData = _buildData();


$.ergo({
	etype: 'box',
	layout: 'hbox',
	as: '__gap',
	renderTo: '#sample',
	defaultItem: {
		onClick: 'action:run'
	},
	items: [{
		etype: 'button',
		as: 'primary',
		text: 'Reset',
		cycles: 0
	}, {
		etype: 'button',
		as: 'warning',
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		as: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		as: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		as: 'danger',
		text: '2000',
		cycles: 2000
	}, {
		etype: 'button',
		as: 'purple',
		text: '3000',
		cycles: 3000
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {

		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');

    var test = e.target.opt('text');

    if(test == 'Reset') {
      while( !TestEventsList.children.is_empty() )
        TestEventsList.children.first()._destroy();
      }
      else {

//        var b = $.ergo({etype: 'box'});

        for(var i = 0; i < n; i++) {

//          var o = {etype: 'box'/*, text: testEventsData[0].label, onClick: function() { }*/}

//          var w = $.ergo( o );

//          b.items.add( o );

          TestEventsList.items.add({text: testEventsData[i].label, onClick: function() { this.events.rise('select') }});

        }

        TestEventsList.render();
      }




		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);
	}
});



var TestEventsList = $.ergo({
	etype: 'box',
  include: 'selectable',
//	dynamic: true,
//  layout: 'grid',
	defaultItem: {
//    layout: 'grid',
    $content: {
//    components: {
      $content: {
        etype: 'text'
      }
    }
	}
});

TestEventsList.render('#sample');
