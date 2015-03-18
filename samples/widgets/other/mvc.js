

var User = Ergo.data.Object.extend({
	
});





var load_page = function(page) {
	
	
	
};










var ctx = new Ergo.core.Context();

ctx._controllers = {};


ctx.controller = function(name, o) {
	
	this._controllers[name] = o;
	
	
	// типа роутер
	// for(var i in o) {
		// this.state(name+':'+i, o[i]);
	// }
	
};



ctx.load = function(route, params) {
	
	var arr = route.split('.');
	

	// 1. преобразуем в URL
	
	// 2. загружаем
	
	// 3. вызываем контроллер (?)
	var context = this._controllers[arr[0]][arr[1]](true, params);

	if(context.view) {
		
		var view = context.view;
		
		// эмуляция загрузки страницы
		if(view.template == 'main') {
			
			// шаблон страницы
			var p = '<div><div class="block_1"/><div class="block_2"/></div>';
			// добавляем шаблон страницы в DOM
			$('#sample').append(p);		
			
		}
		
		
		if(view.components) {
			for(var i in view.components) {
				
				var w = $.ergo(view.components[i], null, context);
				
				w.render('#sample .'+i);
				
				w.bind();
				
			}
		}

	}
	
	
	
};



/*

ctx.view = function(name, o) {
	
	this._views[name] = o;
	
};

*/






ctx.controller('app', {
	index: function(on, params) {
		
		var block1 = {
			etype: 'list',
			items: ['Item1', 'Item2', 'Item3']
		};
		
		var block2 = {
			etype: 'html:form',
			layout: 'form',
			
			$username: {
				etype: 'text-box',
				dataId: 'username'
			},
			
			$notifications: {
				etype: 'text-box',
				dataId: 'notifications'
			},
			
			$roles: {
				etype: 'text-box',
				dataId: 'roles'
			},
			
			$submit: {
				etype: 'button',
				type: 'submit',
				text: 'Сохранить'
			},
			
			dataId: '@user'
			
		};
		
		
		var model = new User({
			username: 'admin',
			notifications: 5,
			roles: 'superuser cooluser administrator',
		}, {});
		
		
		return {view: {template: 'main', components: {block_1: block1, block_2: block2}}, '@user': model};
	}
});






ctx.load('app.index');



/*
var view = $.ergo({
	etype: 'html:form',
	
	layout: 'form',
	
	$username: {
		etype: 'text-box',
		dataId: 'username'
	},
	
	$notifications: {
		etype: 'text-box',
		dataId: 'notifications'
	},
	
	$roles: {
		etype: 'text-box',
		dataId: 'roles'
	},
	
	$submit: {
		etype: 'button',
		type: 'submit'
	},
	
	events: controller
	
});


//view.render('#sample');

*/

