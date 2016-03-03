
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

		include: 'selectable',

		selection: {
			lookup: function(i) {
				return this.$slider.$content.item(i);
			}
		},


		$preview: {
			as: 'gallery-preview',
			height: 400,
			$content: {
				etype: 'html:img',
				height: '100%',
				format: 'img/galleries/space/#{*}',
				binding: function(v) {
					$.when(this.el.fadeOut(150))
						.then(function(){
							this.prop('src', v);
							//this.opt('src', 'img/galleries/space/'+v);
						}.bind(this));
				},
				events: {
					'jquery:load': function() {
						this.el.fadeIn(150);
					}
				}
			}
		},

		$slider: {

			layout: 'hbox',

			$prevBtn: {
				etype: 'icon-button',
				state: 'slider-button tool line disabled',
				weight: -10,
				icon: 'fa-chevron-left',
				onClick: 'action:prev'
			},

			$nextBtn: {
				etype: 'icon-button',
				weight: 10,
				state: 'slider-button tool line',
				icon: 'fa-chevron-right',
				onClick: 'action:next'
			},


			$content: {
				as: 'gallery-slider',

				layout: 'hslide',

				autoWidth: true,

				dynamic: true,

				data: images,

				defaultItem: {
					etype: 'html:img',
//					binding: 'src',
//					format: 'img/galleries/space/preview/#{*}',
					binding: function(v) {
						this.prop('src', 'img/galleries/space/preview/'+v);
					},
					onClick: 'action:changeImage'
					// actions: {
					// 	'jquery:click': 'changeImage'
					// }
					// onClick: function() {
						// this.rise('selectImage');
					// }
				},

				events: {
					'layout#slide': 'action:slide'
					// 'layout:slide': function(e) {
						// this.rise('slide', e);
					// }
				}

			},


			onNext: function() {

				this.$content.dom.slide_next();

			},


			onPrev: function() {

				this.$content.dom.slide_prev();
			},

			onChangeImage: function(e) {
				console.log('----');
				this.$content.dom.slide_to_item( e.target, 20 );
			},

			onSlide: function(e) {
				this.$prevBtn.toggle('disabled', !e.base.hasPrev);
				this.$nextBtn.toggle('disabled', !e.base.hasNext);
			}

//			index: 0



		},

		onChangeImage: function(e) {
			this.opt('index', e.target.opt('name'));
		},


		set: {
			'index': function(v) {
				var img = this.$slider.$content.item(v);
				this.$preview.$content.opt('value', img.opt('value'));
				this.selection.set(img);
			}
		}


	}

});


w.$gallery.opt('index', 0);
