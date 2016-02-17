

Ergo.defineClass('Ergo.test.Widget', {

	extends: 'Ergo.core.Object',

	defaults: {
		layout: 'default',
		plugins: [Ergo.Observable, Ergo.Statable],
//		autoBind: true,
//		autoUpdate: true,
		layoutFactory: function(layout) {
			if( $.isString(layout) )
				layout = $.ergo({etype: layout}, 'layouts');
			else if(!(layout instanceof Ergo.core.Layout))
				layout = $.ergo(Ergo.override({etype: 'default'}, layout), 'layouts');
			return layout;
		},


	},



	_pre_construct: function(o) {
		Ergo.test.Widget.superclass._pre_construct.call(this, o);
		//this._super(o);


		for(var i in o) {
			if(i[0] == '$') {
				var key_a = i.split('_');
				var overrides = {};
				var val = overrides;

				while(key_a.length > 0) {
					var k = key_a.shift();
					var v = (key_a.length == 0) ? o[i] : {};
					if(k[0] == '$') {
						k = k.substr(1);
						val.components = {};
						val = val.components[k] = v;
					}
					else {
						val = val[k] = v;
					}
				}

				Ergo.smart_override(o, overrides);
			}
		}


	},


	_construct: function(o) {
		Ergo.test.Widget.superclass._construct.call(this, o);
//		this._super(o);


		var self = this;

		this.children = new Ergo.core.WidgetChildren(this);
		this.components = new Ergo.core.WidgetComponents(this, {type: 'component'});
		this.items = new Ergo.core.WidgetItems(this, {type: 'item'});


		this.el = $(o.html);//this.$html());

		if(!o.html) {
			this.el = $(document.createTextNode(''));
		}

		if('style' in o) this.el.css(o.style);
		if('cls' in o) this.el.addClass($.isString(o.cls) ? o.cls : o.cls.join(' '));
		if('baseCls' in o) this.el.addClass(o.baseCls);


		this.el[0]._ergo = this;


		this.layout = o.layoutFactory(o.layout);
		this.layout.attach(this);//this.layout.options._widget || this);



		if('components' in o) {
			var arr = [];
			// преобразуем набор компонентов в массив
			Ergo.each(o.components, function(c, i){

				if(!c.ignore)
					self.children.add(c, i, 'component');

			});
		}



		if('items' in o){
			for(var i = 0; i < o.items.length; i++)
				this.children.add(o.items[i]);

		}



		if('events' in o){
			for(var i in o.events){
				var callback_a = o.events[i];
				callback_a = $.isArray(callback_a) ? callback_a : [callback_a]; //FIXME
				for(var j in callback_a) {
					var callback = callback_a[j];

					if(i.indexOf('ctx:') == 0) {
						// EventBus
						$context.events.on(i.substr(4), callback, this);
					}
					else if(i.indexOf('jquery:') == 0) {
						// jQuery
//						Ergo.event_bus.on(i.substring(7), callback, this);
						self.el.on(i.substr(7), $ergo.rcurry(callback, self).bind(this));
					}
					else {
						// TODO здесь должны добавляться обработчики событий виджета
//						self.el.on(i, callback.rcurry(self));
						self.events.on(i, callback, this);
					}
				}
			}
		}




		if('onClick' in o)
			this.el.click(function(e) { if(!self.states.is('disabled')) self.events.fire('click', {button: e.button}, e); });
		if('onDoubleClick' in o)
			this.el.dblclick(function(e) { if(!self.states.is('disabled')) self.events.fire('doubleClick', {button: e.button}, e); });




		this.events.rise = Ergo.rise;
		this.events.sink = Ergo.sink;



	},


	_post_construct: function(o) {
		Ergo.test.Widget.superclass._post_construct.call(this, o);
//		this._super(o);




		// добавляем элемент в документ
		if('renderTo' in o)
			this.render(o.renderTo);

		// подключаем данные и обновляем их, если установлен параметр autoUpdate
		if('data' in o)
			this.bind(o.data, o.autoUpdate);


//		this.$afterBuild();

		var self = this;


		// устанавливаем состояния по умолчанию
		if('state' in o) {
			var a = o.state.join(' ').split(' ');
//			var a = o.state.split(' ');
			Ergo.each(a, function(state) {
				if(state[0] == '-')
					self.states.unset(state.substr(1));
				else
					self.states.set(state);
			});
		}


		this.events.fire('afterBuild');


	},



});


Ergo.override(Ergo.test.Widget.prototype, Ergo.WidgetOptions);


new Ergo.test.Widget({});



$.ergo({
	etype: 'button',
	text: 'Run',
	renderTo: '#sample',
	onClick: function() {

		var v = [];

    for(var i=0; i<10000; i++){
      v.push(i);//{number : i});
    }

		var t0 = Ergo.timestamp();

		w.data.set(v);

		var t1 = Ergo.timestamp();

		console.log('done: ' + (t1-t0));
	}
});



$.ergo({
	etype: 'button',
	text: 'Run (Create + compose + rendering)',
	renderTo: '#sample',
	onClick: function() {

		var t0 = Ergo.timestamp();

		var items = [];

    for(var i=0; i<10000; i++){
    	items.push( w.children.factory.call(w, {text: i}, 'item') );
    }

		var t1 = Ergo.timestamp();

    for(var i=0; i<10000; i++){
    	w.items.add( items[i] );
    }

		var t2 = Ergo.timestamp();

//		if(!Ergo.noDynamicRender)
		w.render();

		var t3 = Ergo.timestamp();

		console.log('done: ' + (t1-t0), (t2-t1), (t3-t2));
	}
});



$.ergo({
	etype: 'button',
	text: 'Run (jQuery)',
	renderTo: '#sample',
	onClick: function() {
/*
		var Cls2 = function() {

		};


		var Cls = function() {

			// _initialize
			Cls2();
			// _pre_onstruct
			Cls2();
			// _construct
			Cls2();
			// _post_construct
			Cls2();


			// children
			new Ergo.core.WidgetChildren(this); //new Cls2();
			// items
			new Ergo.core.WidgetChildren(this); //new Cls2();
			// components
			new Ergo.core.WidgetChildren(this); //new Cls2();
			// layout
			new Ergo.core.WidgetChildren(this); //new Cls2();
			// events
			new Ergo.core.WidgetChildren(this); //new Cls2();
			// states
			new Ergo.core.WidgetChildren(this); //new Cls2();

			var o = {
				a: '0',
				b: '1',
				c: '2'
			};

			Ergo.smart_override(o, {d: '3'});
			Ergo.smart_build(o);
		};
*/

		var t0 = Ergo.timestamp();

		var el = $('#sample ul');

    for(var i=0; i<10000; i++){
//    	var item = $('<li/>');
//    	item.text(i);
    	// el.append(item);

    	new Ergo.test.Widget({html: '<li/>', text: i});

    }

		var t1 = Ergo.timestamp();

		console.log('done: ' + (t1-t0));
	}
});



$.ergo({
	etype: 'button',
	text: 'Run (Create only)',
	renderTo: '#sample',
	onClick: function() {

		var t0 = Ergo.timestamp();

    for(var i=0; i<10000; i++){
    	var item = $.ergo({etype: 'html:li', text: i});
    }

		var t1 = Ergo.timestamp();

		console.log('done: ' + (t1-t0));
	}
});

/*
$.ergo({
	etype: 'button',
	text: 'Run (Create and compose)',
	renderTo: '#sample',
	onClick: function() {

		var t0 = Ergo.timestamp();

    for(var i=0; i<10000; i++){
    	var item = $.ergo({etype: 'html:li', text: i});
    }

		var t1 = Ergo.timestamp();

		console.log('done: ' + (t1-t0));
	}
});
*/





var w = $.ergo({
	etype: 'html:ul',
	renderTo: '#sample',
	dynamic: true,
	data: [],
	defaultItem: {
		etype: 'html:li',
		binding: 'prop:text',
//		dataId: 'number'
	}
});
