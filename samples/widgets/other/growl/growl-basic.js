
var growl_list = $.ergo({
	etype: 'list',
	cls: 'growl ne',
	renderTo: 'body',
	defaultItem: {
		$content: {
			showOnRender: true,
			include: 'effects',
			effects: {
				show: 'fadeIn',
				hide: 'fadeOut',
				delay: 600
			},
			style: {'display': 'none'}
		},
		include: 'effects',
		effects: {
			hide: {type: 'slideUp', delay: 300}
			// show: 'fadeIn',
			// hide: 'fadeOut',
			// delay: 600
		},
		hideOnUnrender: true,
		//showOnRender: true,
//		style: {'display': 'none'},
//		style: {'opacity': 0},
		onClick: function() {
			this.events.fire('close');
//			this.el.removeClass('fade');
		},
		onClose: function() {
			this.el.height(this.el.height());
			this.content.hide().then(function(){
				this._destroy();//.el.slideUp(300);
			}.bind(this));			
		}
	}
});


growl_list.push = function(o) {
	
	var item = this.items.add({
		$content: o
	});
	
	this.render();
	
	
	setTimeout(function() {
		item.events.fire('close');
	}, 6000);
	
//	item.content.show();
	
	// setTimeout(function() {
	// item.el.addClass('fade');
// 		
	// }, 100);
//	item.el.css('opacity', 1);
	
};







var w = $.ergo({
	etype: 'box',
	layout: 'bar',
	defaultItem: {
		etype: 'button',
		onClick: function() {
			
			
			var growls = {
				'success': {
					icon: 'fa-check',
					title: 'Готово!',
					text: 'Процесс завершен',
					state: 'success'
				},
				'info': {
					icon: 'fa-info',
					title: 'Информация!',
					text: 'Помощь при работе с приложением',			
					state: 'info'
				},
				'warning': {
					icon: 'fa-bell-o',
					title: 'Предупреждение!',
					text: 'Автоматическая проверка отключена',					
					state: 'warning'
				},
				'danger': {
					icon: 'fa-times',
					title: 'Ошибка!',
					text: 'Сервер не отвечает на запросы',					
					state: 'danger'
				}
			};
			
			var name = this.opt('name');
			
			growl_list.push( Ergo.override({
				etype: 'alert',
				$icon: {
					cls: 'fa round'
				}
			}, growls[name]) );
			
		}
	},
	items: [
		{text: 'Success', state: 'success', name: 'success'},
		{text: 'Info', state: 'info', name: 'info'},
		{text: 'Warning', state: 'warning', name: 'warning'},
		{text: 'Danger', state: 'danger', name: 'danger'}
	]
});

w.render('#sample');
