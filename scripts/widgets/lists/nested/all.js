

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});

data.fetch();


Ergo.alias('formats:avatarUrl', function(v) {
	var s = v;
	if(v < 10) s = '0'+s;
	if(v < 100) s = '0'+s;
	return 'demo/blog/img/avatars/'+s+'.jpg';
});


$context.section('Динамический расчет отступа', '', ['data.js', 'format.js']);
$context.section_begin('nested-basic');
$context.section_end('nested-basic');

var w = $.ergo({
	etype: 'nested-list',
	as: 'list nested hovered divide',
	data: data,
	nestedItem: {
		$content: {
			etype: 'box',
			as: 'item padding-vertical',
			// аватарка пользователя
			$avatar: {
				etype: 'html:img',
				as: 'rounded before',
				binding: 'prop:src',
				format: '#{id|avatarUrl}',
				width: 32
			},
			// текстовое содержимое элемента списка
			$content: {
				binding: 'prop:text',
				format: '#{full_name}',
				$content: {
//					etype: '.'
				},
				$email: {
					etype: 'text',
					as: 'description',
					format: '#{email}'
				}
			}
		},
		$sub: {
			hidden: false,
			as: 'list nested hovered divide',
			// "Магия"" происходит тут
			events: {
				'item#added': function(e) {
					// задаем уровень вложенности элементов при композиции
					e.item._depth = (this.parent._depth || 0)+1;
				},
				'item#rendered': function(e) {
					// при отрисовке устанавливаем значение отступа
					e.item.$content.dom.setStyle('padding-left', e.item._depth * 32);
				}
			}
		}
	}

});


w.render('#sample');

$context.section('Слайдер', '', ['data.js', 'format.js']);
$context.section_begin('nested-slide');
$context.section_end('nested-slide');

var list = $.ergo({
	etype: 'box',

	$header: {
		$button: {
			etype: 'button',
			as: 'flat +disabled',
			text: 'Назад',
			include: ['icon:at-left'],
			icon: 'fa fa-chevron-left',
			onClick: 'rise:back'
		}
	},

	$content: {
		as: 'slidable',
		defaultComponent: {
			dynamic: true,
			as: 'list __indent __hover slide',
			css: {'background-color': '#fff'},
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
					binding: 'prop:text',
					$description: {
						format: '#{email}',
						binding: 'prop:text'
					}
				},
				binding: function(v) {

					if(v.children) {
						this.$icon.options.autoRender = true;
						this.render();
					}
					this.toggle('has-sub', !(!v.children));
				},
				onClick: 'rise:itemClick'
			}
		},

		$content: {
			data: data
		},


		onItemClick: function(e) {
			if(e.target.states.is('has-sub')) {

				var s = this.$content ? 'xcontent' : 'content';
				var c2 = this.components.get( s == 'content' ? 'xcontent' : 'content' );

//				console.log(s, c2);

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
		this.$header.$button.unset('disabled');//opt('hidden', false);
	},

	onBack: function(e) {

		var box = this.$content;

		var s = box.$content ? 'xcontent' : 'content';
		var c2 = box.components.get( s == 'content' ? 'xcontent' : 'content' );

//		console.log('back', s, c2);


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
			this.$header.$button.set('disabled');//.opt('hidden', true);
	}

});


list.render('#sample');

