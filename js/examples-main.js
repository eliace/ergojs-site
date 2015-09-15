

//-----------------------------------------------------
// Страница примеров
//-----------------------------------------------------
$context.scope('main', function($scope) {

	var data = $context.data('examples');


	var menu = $scope.widget('menu', {

		etype: 'box',
		id: 'content-menu',
		include: 'selectable',
		defaultItem: {
			layout: 'inherited',
			autoRender: false,
			components: {
				title: {
					dataId: 'title',
					binding: 'text'
				},
				content: {
					etype: 'side-menu',
					dataId: 'children',
					nestedItem: {
						$content: {
//							etype: 'link',
							format: '#{title}',
							binding: 'text',
//							$content_dataId: 'title',
							$icon_dataId: 'icon'
							// onClick: function() {
								// this.parent.states.toggle('expanded');
//
								// var v = this.data.get();
								// if(!v.children) {
									// load_sample(v.name, v.title, this.data.source.source.get('title'));
								// }
							// }
						},
						binding: function(v) {
							this.opt('name', v.title);
						},
						onItemExpanded: function(e) {
							var self = this;
							this.parent.items.each(function(item) {
								if(item.states.is('expanded') && item != this)
									item.states.unset('expanded');
							});
						}
					},

					onMenuAction: function(e) {
//						console.log(e.target.path());
						this.events.rise('select', {key: e.target.path()});
					}

				}
			}
		},

		data: data,
//		dataId: '@examples',
		dynamic: true,

		selection: {
			lookup: function(key) {
				var result = {};
				this.items.each(function(item){
					var w = item.content.find_path(key);
					if(w) result.found = w;
				});
				return result.found;
			}
		},

		onSelectionChanged: function(e) {
			var v = e.selection.data.get();

			$context.data('sample', {
				name: v.name,
				title: v.title,
				section: e.selection.data.source.source.get('title')
			});

			$context.join('main.sample:show');

//			console.log(v);
//			load_sample(v.name, v.title, e.selection.data.source.source.get('title'));
		}

/*
		etype: 'tree',
		id: 'content-menu',
		data: EXAMPLES,
		node: {
			$content: {
				etype: 'link',
				format: '#{title}',
				onClick: function() {
					this.parent.states.toggle('expanded');

					var v = this.data.get();
					if(v.name) {
						load_sample(v.name, v.title);
					}
				}
			}
		}
*/
	});


//	menu.bind();

	menu.render('.page-content > aside');

});
