


var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		$content: {
			dataId: 'title',
			binding: 'prop:text'
		},
		binding: function(v) {
			if(v.type != 'cities') this.set('expandable');
		}
	}

});

w.render('#sample');



//		layout: 'hbox',
//		cls: 'item box',
// 		transitions: {
// 			'* > expanded': function() {

// 				var item = this;

// 				if(!item.$subtree.states.is('slide-item-hidden')) return;

// 				item.$subtree.states.unset('slide-item-hidden');
// 				item.$subtree.el.css('max-height', 'none');
// 				var h = item.$subtree.el.outerHeight();
// 				item.$subtree.el.css('max-height', 0);
// 				setTimeout(function() {
// 					item.$subtree.el.css('max-height', h);
// 				}, 1);

// 				// var deferred = new $.Deferred();

// 				// item.$subtree.el.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
// 				// 	deferred.resolve();
// 				// });

// 				item.$subtree.states.set('opened');

// //				return deferred.promise();
// 			},
// 			'expanded > *': function() {

// 				var item = this;
// 				item.$subtree.el.css('max-height', 0);
// 				item.$subtree.states.set('slide-item-hidden');


// 				this.$subtree.states.unset('opened');
// 			}
// 		},




/*
var w = $.ergo({
	etype: 'box',
	layout: {
		etype: 'grid',
		pattern: [6, 6]
	},
	items: [{
		etype: 'basic-tree',
		data: data,
		nestedItem: {
			components: {
				content: {
					dataId: 'title'
				}
			},
			binding: function(v) {
				if(v.type != 'cities') this.states.set('expandable');
			}
		}

	}, {
		etype: 'basic-tree',
		data: data,
		nestedItem: {
			components: {
				// checker: {
					// etype: 'check',
					// weight: -20,
					// autoBind: false
				// },
				content: {
					$content: {
						etype: '&text',
						dataId: 'title'
					},
					$icon: {
						etype: 'icon',
						weight: -10,
						states: {
							// отображение состояния на класс иконки
							'cardinals': 'fa-globe',
							'countries': 'fa-flag',
							'cities': 'fa-building-o'
						}
					},
					binding: false
				},
				description: {
					// выведем дополнительную информацию
					etype: 'text',
					weight: 10,
					cls: 'desc',
					dataId: 'iso',
					format: function(v) { return v ? '('+v+')' : ''; }
				},
				// subtree: {
					// effects: {
						// easing: 'easeOutQuad'
					// }
				// }
			},
			binding: function(v) {
				// узлы с типом cities не должны раскрываться,
				// для них не будет устанавливаться состояние expandable, которое отображает toggler
				if(v.type != 'cities')
					this.states.set('expandable');
				// устанавливаем состояние иконки
				this.content.icon.states.set(v.type);
			}
		}

	}]
});

w.render('#sample');

*/
