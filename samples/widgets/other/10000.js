
$.ergo({
	etype: 'button',
	text: 'Run',
	renderTo: '#sample',
	onClick: function() {
		
		var v = [];
		
    for(var i=0; i<2000; i++){
      v.push({number : i});
    }
		
		var t0 = Ergo.timestamp();
		
		w.data.set(v);

		var t1 = Ergo.timestamp();
		
		console.log('done: ' + (t1-t0));
	}
});


var w = $.ergo({
	etype: 'html:ul',
	renderTo: '#sample',
	dynamic: true,
	data: [],
	defaultItem: {
		etype: 'html:li',
		binding: 'text',
		dataId: 'number'
	}
});
