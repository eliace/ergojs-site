

var growl_list = $.ergo({
	etype: 'list',
	cls: 'growl ne',
	renderTo: 'body',
	defaultItem: {
		$content: {
			showOnRender: true,
			mixins: ['effects'],
			effects: {
				show: 'fadeIn',
				hide: 'fadeOut',
				delay: 600
			},
			style: {'display': 'none'}
		},
		mixins: ['effects'],
		effects: {
			hide: {type: 'slideUp', delay: 300}
			// show: 'fadeIn',
			// hide: 'fadeOut',
			// delay: 600
		},
		hideOnDestroy: true,
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
				this.destroy();//.el.slideUp(300);
			}.bind(this));			
		}
	}
});


growl_list.push = function(o) {
	
	var item = this.items.add({
		$content: o
	});
	
	this.$render();
	
	
	setTimeout(function() {
		item.events.fire('close');
	}, 30000);
	
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
			
			
			
			
			growl_list.push({
				etype: 'alert',
				$icon: {
					cls: 'fa rounded'
				},
				icon: 'fa-check',
				title: 'Готово!',
				text: 'Процесс завершен',
				state: this.options.name
			});
			
		}
	},
	items: [
		{text: 'Success', state: 'success', name: 'success'},
		{text: 'Info', state: 'info', name: 'info'},
		{text: 'Warning', state: 'warning', name: 'warning'},
		{text: 'Error', state: 'error', name: 'error'}
	]
});

w.$render('#sample');