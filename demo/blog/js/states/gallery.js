

$context.state('gallery:page', function(on, params) {
	
	if(!on) {
		return;
	}
	
	$context.menu.opt('index', 'gallery');
	
	
	
	var data = [{
		title: 'Space',
		images: [
			'relegation-wallpaper-1280x720.jpg',
			'fantasy_planet-wallpaper-1366x768.jpg',
			'planets_7-wallpaper-1366x768.jpg',
			'd_k_-wallpaper-1366x768.jpg',
			'bungies_destiny_game-wallpaper-1366x768.jpg',
			'destiny_mars-wallpaper-1366x768.jpg',
			'destiny_game_bungie-wallpaper-1366x768.jpg',
			'destiny_fallen-wallpaper-1366x768.jpg'
		]
	}, {
		title: 'Mass Effect',
		images: [
			'mass_effect_3-wallpaper-1366x768.jpg',
			'mass_effect_3_ship-wallpaper-1366x768.jpg',
			'mass_effect_3_n7-wallpaper-1366x768.jpg',
			'mass_effect_4-wallpaper-1366x768.jpg',
			'mass_effect_mobile_car-wallpaper-1366x768.jpg',
			'normandy_mass_effect-wallpaper-1366x768.jpg',
			'mass_effect_3_teaser-wallpaper-1280x1024.jpg',
			'commander_shepard___mass_effect-wallpaper-1366x768.jpg',
			'mass_effect_art-wallpaper-1366x768.jpg',
			'mass_effect_3_female_shepard-wallpaper-1366x768.jpg'
		]
	}, {
		title: 'Star Craft',
		images: [
			'starcraft_ii_heart_of_the_swarm___zerg_hive-wallpaper-1366x768.jpg',
			'starcraft_2_zerg-wallpaper-1366x768.jpg',
			'starcraft_2_game_2-wallpaper-1366x768.jpg',
			'starcraft_ii_wings_of_liberty_medic_unit-wallpaper-1366x768.jpg',
			'starcraft_ii_heart_of_the_swarm_concept_art-wallpaper-1366x768.jpg',
			'starcraft_2_artwork-wallpaper-1366x768.jpg',
			'starcraft-wallpaper-1366x768.jpg',
			'starcraft_2_heart_of_the_swarm-wallpaper-1366x768.jpg',
			'starcraft_2_game-wallpaper-1366x768.jpg',
			'artwork_starcraft_2-wallpaper-1366x768.jpg',
			'starcraft_4-wallpaper-1366x768.jpg',
		]
	}];
	
	
	
	
	var page = $.ergo({
		
		etype: 'box',
		
		cls: 'galleries',

		// $title: {
			// etype: 'html:h1',
			// cls: 'title',
			// text: 'Галереи',
			// $icon: {
				// etype: 'icon',
				// cls: 'fa fa-photo before'
			// },
			// $content: {
				// etype: 'text'
			// }
		// },
		
		data: data,
		
		dynamic: true,
		
		defaultItem: {
			
			cls: 'gallery',
			
			$title: {
				etype: 'html:h2',
				binding: 'text',
				dataId: 'title'
//				text: 'Space and Games'				
			},
			
			$preview: {
				cls: 'image-preview',
				autoBind: false,
				$content: {
					etype: 'html:img'					
				}
			},
			
			$slider: {
				
				cls: 'image-slider',
				
				autoWidth: 'ignore-siblings',
				
				layout: {
					etype: 'bar',
					html: '<div style="white-space: nowrap"/>'
				},
				
				dataId: 'images',
//				data: data,
				
				dynamic: true,
				
				defaultItem: {
					etype: 'html:img',
					binding: function(v) {
						this.opt('src', 'img/gallery/'+v);
					},
					// style: {
						// 'padding': 4
					// }
				}
				
			},
			
			set: {
				'index': function(v) {
					this.preview.content.opt('src', 'img/gallery/'+this.data.get('images')[v]);
				}
			},
			
			onBound: function() {
				this.opt('index', 0);
			}
		}
		
		
		
	});
	
	
	
	$context.pages.components.set('content', page);
	
	$context.pages.render();
	
	$context.pages._layoutChanged();



	
});
