

var images = [
	'a_kings_demise-wallpaper-1366x768.jpg',
	'earth_15-wallpaper-1366x768.jpg',
	'exoplanet-wallpaper-1366x768.jpg',
	'fantasy_planet-wallpaper-1366x768.jpg',
	'future_world-wallpaper-1366x768.jpg',
	'futuristic_outer_space_view-wallpaper-1366x768.jpg',
	'nebula_by_hubble-wallpaper-1366x768.jpg',
	'planet_fantasy_art-wallpaper-1366x768.jpg',
	'planet_impact_2-wallpaper-1600x1200.jpg',
	'planets_7-wallpaper-1366x768.jpg',
	'relegation-wallpaper-1280x720.jpg',
	'saturn_gravity-wallpaper-1366x768.jpg',
	'solar_2-wallpaper-1366x768.jpg',
	'star_wars_fiction_planet-wallpaper-1366x768.jpg'
];



var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	$gallery: {
		
		mixins: ['selectable'],
		
		$preview: {
			cls: 'gallery-preview',
			height: 400,
			$content: {
				etype: 'html:img',
				height: '100%',
				binding: function(v) {
					$.when(this.el.fadeOut(150))
						.then(function(){
							this.opt('src', 'img/galleries/space/'+v);
						}.bind(this));
						
						
//					this.el.css('opacity', 0);
//					this.opt('src', 'img/galleries/space/'+v);							
				},
				events: {
					'jquery:load': function() {
							this.el.fadeIn(150);
//					this.el.css('opacity', 1);
//						this.el.show();						
					}
				}
			}
		},
		
		$slider: {
			
			layout: 'hbox',
			
			$prevBtn: {
				etype: 'button',
				state: 'tool line',
				width: 24,
				$content: {
					etype: 'icon',
					icon: 'fa-chevron-left'
				},
				onClick: function() {
					this.events.rise('prev');
				}
			},
			
			$content: {
				cls: 'gallery-slider',

				layout: {
//					etype: 'default',
					html: '<div style="white-space: nowrap; display: inline-block"/>'
				},
				
				autoWidth: true, //'ignore-siblings',
				
				dynamic: true,
				
				data: images,
				
				defaultItem: {
					etype: 'html:img',
					binding: function(v) {
						this.opt('src', 'img/galleries/space/preview/'+v);
					},
					onClick: function() {
						this.events.rise('change');
					}
				}
				
			},

			$nextBtn: {
				etype: 'button',
				width: 24,
				state: 'tool line',
				$content: {
					etype: 'icon',
					icon: 'fa-chevron-right'
				},
				onClick: function() {
					this.events.rise('next');
				}
			},
			
			
			mixins: [{
				next_frame: function() {
					var w = this.content.el.width();
					if(!this._offset) this._offset = 0;
					this._offset += w;
					if(this._offset > this.content.layout.el.width() - w) {
						this._offset = this.content.layout.el.width() - w;
						this.nextBtn.states.set('disabled');
					}
					else {
						this.nextBtn.states.unset('disabled');						
					}
					this.prevBtn.states.unset('disabled');
					this.content.layout.el.css('margin-left', -this._offset);
				},
				prev_frame: function() {
					var w = this.content.el.width();
					if(!this._offset) this._offset = 0;					
					this._offset -= w;
					if(this._offset < 0) {
						this._offset = 0;
						this.prevBtn.states.set('disabled');
					}
					else {
						this.prevBtn.states.unset('disabled');						
					}
					
					this.nextBtn.states.unset('disabled');
					this.content.layout.el.css('margin-left', -this._offset);
				},
				frame_to: function(i) {
					var x = this.item_offset(i);
					var w = this.content.item(i).el.outerWidth(true);
					var frame_w = this.content.el.width();
					if(x < this._offset) {
						this._offset = x;
						this.content.layout.el.css('margin-left', -this._offset);
					}
					else if(x+w > this._offset+frame_w) {
						this._offset = (x+w-frame_w);
						this.content.layout.el.css('margin-left', -this._offset);
					}
				},
				item_offset: function(i) {
					var offset = this.content.item(i).el.offset();
					var offset0 = this.content.layout.el.offset();
					
					return offset.left - offset0.left;
					
					// var x = 0;
					// for(var j = 0; j < i; j++) {
						// x += this.content.item(j).el.outerWidth(true);
					// }
					// return x;
				}
			}],
			
			
			
			onNext: function() {
				
				this.next_frame();
				
			},
			
			
			onPrev: function() {
				
				this.prev_frame();
			},
			
			onChange: function(e) {
				this.frame_to( e.target.opt('name') );
			}
			
//			index: 0
			
			
			
		},
		
		
		selector: function(i) {
			return this.slider.content.item(i);
		},
		
		onChange: function(e) {
			this.opt('index', e.target.opt('name'));
		},
		
		
		set: {
			'index': function(v) {
				this.preview.content.opt('value', this.slider.content.item(v).opt('value'));
				this.selection.set(v);				
			}
		}
		
		
	}
	
});


w.gallery.opt('index', 0);//slider.opt('index', 0);

//w.gallery.slider.layout.update();//._layoutChanged();


