



var list = $.ergo({
	etype: 'box',

	$header: {
		$button: {
			etype: 'button',
			as: 'flat +disabled',
			text: 'Назад',
			include: 'icon:at-left',
			icon: 'fa fa-chevron-left',
			onClick: 'action:back'
		}
	},

	$content: {
		as: 'slidable',
		defaultComponent: {
			dynamic: true,
			as: 'list __indent __hover slide',
			style: {'background-color': '#fff'},
			defaultItem: {
				etype: 'chip',
				include: 'icon:at-right',
				$icon: {
					autoRender: false,
					as: 'fa-chevron-right muted'
				},
				$image: {
					binding: 'prop:src',
					format: '#{id|avatarUrl}'
				},
				$content: {
					format: '#{full_name}',
					$description: {
						format: '#{email}'
					}
				},
				binding: function(v) {
//					console.log(this.$icon._rendered);
					if(v.children) {
						this.$icon.options.autoRender = true;
						this.render();
					}
					this.states.toggle('has-sub', !(!v.children));
				},
				onClick: 'action:itemClick'
			}
		},

		$content: {
			data: data
		},


		onItemClick: function(e) {
			if(e.target.states.is('has-sub')) {

				var s = this.$content ? 'xcontent' : 'content';
				var c2 = this.components.get( s == 'content' ? 'xcontent' : 'content' );

				console.log(s, c2);

				var c = this.components.set(s, {
					data: e.target.data.entry('children'),
					as: '+off',
//					autoHeight: 'fit',
					style: {'z-index': 100, 'position': 'absolute'}
				});

	//			console.log(c.$icon._rendered);

				this.render();

				var h = c.el.height();
				var h2 = c2.el.height();

				if(h < h2) {
					c.el.height(h2);
				}
				else {
					c2.el.height(h);
				}


				setTimeout(function() {
					c.states.unset('off');
				}, 10);

				setTimeout(function() {
					this.components.get(s == 'content' ? 'xcontent' : 'content')._destroy();
					c.el.css({'z-index': '', 'position': '', 'height': ''});
//					c.el.height('');
				}.bind(this), 1000);

				this.rise('slide');

			}
		}

	},

	onSlide: function(e) {
		this.$header.$button.states.unset('disabled');//opt('hidden', false);
	},

	onBack: function(e) {

		var box = this.$content;

		var s = box.$content ? 'xcontent' : 'content';
		var c2 = box.components.get( s == 'content' ? 'xcontent' : 'content' );

		console.log('back', s, c2);


		c2.el.css({'z-index': 100, 'position': 'absolute'});

		var c = box.components.set(s, {
			data: c2.data.source.source
//			autoHeight: 'fit'
		});

		box.render();




//		s = (s == 'content') ? 'xcontent' : 'content';

		c2.states.set('off');

// 		setTimeout(function() {
// //			console.log('off');
// 			c2.states.set('off');
// 		}, 1);

		setTimeout(function() {
			c2._destroy();
		}, 1000);

		// var list = this.$content.$content || this.$content.$xcontent;
		if( !c.data.source.source )
			this.$header.$button.states.set('disabled');//.opt('hidden', true);
	}

});

list.render('#sample');
