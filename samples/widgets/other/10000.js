
$.ergo({
	etype: 'button',
	text: 'Run',
	renderTo: '#sample',
	onClick: function() {
		
		var v = [];
		
    for(var i=0; i<10000; i++){
      v.push({number : i});
    }
		
		var t0 = Ergo.timestamp();
		
		w.data.set(v);

		var t1 = Ergo.timestamp();
		
		console.log('done: ' + (t1-t0));
	}
});



$.ergo({
	etype: 'button',
	text: 'Run (no data binding)',
	renderTo: '#sample',
	onClick: function() {

		var t0 = Ergo.timestamp();
				
    for(var i=0; i<10000; i++){
    	w.items.add({text: i});
    }

		var t1 = Ergo.timestamp();

		if(!Ergo.noDynamicRender)
			w.$render();

		var t2 = Ergo.timestamp();
		
		console.log('done: ' + (t1-t0), (t2-t1));
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
