

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
				state: 'tool line disabled',
				cls: 'slider-button',
//				width: 48,
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

				layout: 'hslide',

				autoWidth: true,
				
				dynamic: true,
				
				data: images,
				
				defaultItem: {
					etype: 'html:img',
					binding: function(v) {
						this.opt('src', 'img/galleries/space/preview/'+v);
					},
					onClick: function() {
						this.events.rise('selectImage');
					}
				},
				
				events: {
					'layout:slide': function(e) {
						this.events.rise('slide', e);
					}
				}
				
			},

			$nextBtn: {
				etype: 'button',
//				width: 48,
				state: 'tool line',
				cls: 'slider-button',
				$content: {
					etype: 'icon',
					icon: 'fa-chevron-right'
				},
				onClick: function() {
					this.events.rise('next');
				}
			},
			
			onNext: function() {
				
				this.content.layout.slide_next();
				
			},
			
			
			onPrev: function() {
				
				this.content.layout.slide_prev();
			},
			
			onSelectImage: function(e) {
				this.content.layout.slide_to_item( e.target, 20 );
			},
			
			onSlide: function(e) {
				this.prevBtn.states.toggle('disabled', !e.hasPrev);
				this.nextBtn.states.toggle('disabled', !e.hasNext);
			}
			
//			index: 0
			
			
			
		},
		
		
		selector: function(i) {
			return this.slider.content.item(i);
		},
		
		onSelectImage: function(e) {
			this.opt('index', e.target.opt('name'));
		},
		
		
		set: {
			'index': function(v) {
				var img = this.slider.content.item(v);
				this.preview.content.opt('value', img.opt('value'));
				this.selection.set(img);
			}
		}
		
		
	}
	
});


w.gallery.opt('index', 0);//slider.opt('index', 0);

//w.gallery.slider.layout.update();//._layoutChanged();


