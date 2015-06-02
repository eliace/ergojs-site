

$context.section('Создание');
$context.section_begin('lightbox-basic');
$context.section_end('lightbox-basic');


var dialog1 = $.ergo({
	etype: 'panel',
	cls: 'modal',
	include: 'modal effects',
	title: 'Лайтбокс',
	closeOn: 'outerClick',
	$header: {
		$toolbar: {
			etype: 'tool-bar',
			cls: 'right',
			defaultItem: {
				etype: 'icon-button',
				state: 'tool flat'
			},
			items: [{icon: 'fa-close'}]
		}
	},
	$content: {
		style: {'padding': 0, 'background-color': '#000'},
		width: 200,
		height: 200
		// $image: {
			// etype: 'html:img',
			// src: 'img/anime9.jpg',
			// style: {'position': 'absolute', 'left': -100000000},
			// events: {
				// 'jquery:load': function(e, obj) {
					// var w = obj.el.width();
					// var h = obj.el.height();
// 
					// $context.alert('size: ['+w+','+h+']');
// 					
					// obj.el.css({'position': 'relative', 'left': 0});
				// }
			// }
		// }
//		text: LOREMIPSUM
	}
});




var buttons = $.ergo({
	etype:'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Открыть лайтбокс',
		onClick: function() {
			dialog1.render();//'body');
//			dialog1.open().then(function(){
				
				var img = $.ergo({
					etype: 'html:img',
					src: 'img/anime9.jpg',
					style: {'position': 'absolute'/*, 'left': -100000000*/, 'display': 'none'},
					mixins: ['effects'],
					effects: {
						show: 'fadeIn',
//						hide: 'fadeOut',
						delay: 300
					},
					events: {
						'jquery:load': function(e) {
							var w = this.el.width();
							var h = this.el.height();
		
//							$context.alert('size: ['+w+','+h+']');
							
							
							
							var w2 = 600;//obj.parent.el.width();
							var h2 = 600;//obj.parent.el.height();
							
//							$context.alert('size: ['+w2+','+h2+']');
							
							var a = w / (w2 || 400);
							var b = h / (h2 || 400);
							
							if(a > b) {
								w /= a;
								h /= a;
								h2 = w2*(h/w);
							}
							else {
								w /= b;
								h /= b;								
								w2 = h2*(w/h);
							}
							
							
							var dw = dialog1.content.el.outerWidth() - dialog1.content.el.width();
							var dh = dialog1.content.el.outerHeight() - dialog1.content.el.height();
							
//							console.log(a, b);
							
							dialog1.content.components.set('image', img);
							dialog1.content.render();
//							img.render();

							var self = this;
							
							dialog1.open().then(function(){

								dialog1.resize(w2, h2, 'content').then(function(){
									self.el.css({'position': 'relative'/*, 'left': 0*/, 'width': w-dw, 'height': h-dh});
									self.el.fadeIn(400);
								});
								
							});
							
							
						}
					}
				});
				
				
				$('body').append(img.el);
//				img.render('body');
				
				
//				dialog1.content.components.set('image', img);
				
//				dialog1.content.render();
				
//			}.bind(this));
			
			// setTimeout(function(){
				// w.resize(800, 400);
			// },4000);
			
		}		
	}]
});




buttons.render('#sample');
