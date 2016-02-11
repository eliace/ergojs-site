
var w = $.ergo({
	etype: 'panel',
	include: 'window',
	cls: 'window widget simple',
	title: 'Dialog',
	width: 600,
	height: 300,
//	destroyOnClose: true,
	$header: {
		mixins: ['draggable'],
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'icon-button',
				state: 'small line',
				icon: 'fa-close',
				onClick: function() {
					this.rise('closeDialog');
				}				
			}],
			// $dialogButtons: {
			// 	layout: 'hbox',
			// 	defaultItem: {
			// 		etype: 'icon-button',
			// 		state: 'small line',
			// 		onClick: function() {
			// 			this.rise(this.opt('text')+'Dialog');
			// 		},
			// 		$content: {
			// 			states: {
			// 				'settings': 'fa-cog',
			// 				'move': 'fa-arrows-alt',
			// 				'expand': 'fa-expand',
			// 				'close': 'fa-close'
			// 			}
			// 		}
			// 	},
			// 	items: ['close']//'settings', 'move', 'expand', 'close']
			// },
			events: {
				'jquery:mousedown': function(e) {
					e.stopPropagation();
				}
			}
		},
	},
	

	onCloseDialog: function() {
		this.close();
	},

	// onAction: function(e) {
		
	// 	if(e.action == 'close') {
	// 		this.close();
	// 	}
		
	// },
	
	onDrag: function(e) {
		
		var p1 = this.header.el.offset();
		var p2 = this.el.offset();

		var dx = p2.left - p1.left;
		var dy = p2.top - p1.top;

		this.move(e.x - e.dx + dx, e.y - e.dy + dy);
		
		
	}
	
	
//	autoRender: true
});


//w.render('body');
//w.open();


var button = $.ergo({
	etype: 'button',
	text: 'Новое окно',
	onClick: function() {
		w.render('body');
		w.open(300, 200);
	}
});

button.render('#sample');
