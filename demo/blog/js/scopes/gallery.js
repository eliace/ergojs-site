

$context.scopes.scope('gallery', function(on, params) {

	if(!on) {
		return;
	}

	$context.widget('main@page').component('content').item('menu').fire('menu', {name: 'gallery'});



	var data = [{
		title: 'Space',
		images: [
			'space/relegation-wallpaper-1280x720.jpg',
			'space/a_kings_demise-wallpaper-1366x768.jpg',
			'space/earth_15-wallpaper-1366x768.jpg',
			'space/exoplanet-wallpaper-1366x768.jpg',
			'space/fantasy_planet-wallpaper-1366x768.jpg',
			'space/future_world-wallpaper-1366x768.jpg',
			'space/futuristic_outer_space_view-wallpaper-1366x768.jpg',
			'space/nebula_by_hubble-wallpaper-1366x768.jpg',
			'space/planet_fantasy_art-wallpaper-1366x768.jpg',
			'space/planet_impact_2-wallpaper-1600x1200.jpg',
			'space/planets_7-wallpaper-1366x768.jpg',
			'space/saturn_gravity-wallpaper-1366x768.jpg',
			'space/solar_2-wallpaper-1366x768.jpg',
			'space/star_wars_fiction_planet-wallpaper-1366x768.jpg'


/*
			'relegation-wallpaper-1280x720.jpg',
			'fantasy_planet-wallpaper-1366x768.jpg',
			'planets_7-wallpaper-1366x768.jpg',
			'd_k_-wallpaper-1366x768.jpg',
			'bungies_destiny_game-wallpaper-1366x768.jpg',
			'destiny_mars-wallpaper-1366x768.jpg',
			'destiny_game_bungie-wallpaper-1366x768.jpg',
			'destiny_fallen-wallpaper-1366x768.jpg'
*/
		]
	}, {
		title: 'Mass Effect',
		images: [
			'mass_effect/mass_effect_3-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_3_ship-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_3_n7-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_4-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_mobile_car-wallpaper-1366x768.jpg',
			'mass_effect/normandy_mass_effect-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_3_teaser-wallpaper-1280x1024.jpg',
			'mass_effect/commander_shepard___mass_effect-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_art-wallpaper-1366x768.jpg',
			'mass_effect/mass_effect_3_female_shepard-wallpaper-1366x768.jpg'
		]
	}, {
		title: 'Star Craft',
		images: [
			'starcraft/starcraft_ii_heart_of_the_swarm___zerg_hive-wallpaper-1366x768.jpg',
			'starcraft/starcraft_2_zerg-wallpaper-1366x768.jpg',
			'starcraft/starcraft_2_game_2-wallpaper-1366x768.jpg',
			'starcraft/starcraft_ii_wings_of_liberty_medic_unit-wallpaper-1366x768.jpg',
			'starcraft/starcraft_ii_heart_of_the_swarm_concept_art-wallpaper-1366x768.jpg',
			'starcraft/starcraft_2_artwork-wallpaper-1366x768.jpg',
			'starcraft/starcraft-wallpaper-1366x768.jpg',
			'starcraft/starcraft_2_heart_of_the_swarm-wallpaper-1366x768.jpg',
			'starcraft/starcraft_2_game-wallpaper-1366x768.jpg',
			'starcraft/artwork_starcraft_2-wallpaper-1366x768.jpg',
			'starcraft/starcraft_4-wallpaper-1366x768.jpg',
		]
	}];




	var page = $.ergo({

		etype: 'box',

		cls: 'galleries',

		sid: 'page',

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



	// $context.pages.components.set('content', page);
	//
	// $context.pages.render();
	//
	// $context.pages._layoutChanged();




});
