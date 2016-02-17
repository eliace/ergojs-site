
var data = [{
		title: 'Африка',
		type: 'cardinals',
		children: [{
			title: 'Египет',
			iso: 'EG',
			type: 'countries'
		}, {
			title: 'Марокко',
			iso: 'MA',
			type: 'countries'			
		}, {
			title: 'Кения',
			iso: 'KE',
			type: 'countries'						
		}, {
			title: 'Ангола',
			iso: 'AO',
			type: 'countries'						
		}]
	}, {
		title: 'Азия',
		type: 'cardinals',
		children: [{
			title: 'Китай',
			type: 'countries'						
		}, {
			title: 'Индия',
			type: 'countries'						
		}, {
			title: 'Иран',
			type: 'countries'						
		}, {
			title: 'Индонезия',
			type: 'countries'						
		}, {
			title: 'Ливия',
			type: 'countries'						
		}, {
			title: 'Непал',
			type: 'countries'						
		}]
	}, {
		title: 'Европа',
		type: 'cardinals',
		children: [{
			title: 'Великобритания',
			iso: 'GB',
			type: 'countries',
			children: [{
				title: 'Лондон',
				type: 'cities'
			}, {
				title: 'Бирмингем',
				type: 'cities'
			}, {
				title: 'Глазго',
				type: 'cities'
			}]
		}, {
			title: 'Германия',
			iso: 'DE',
			type: 'countries',
			children: [{
				title: 'Берлин',
				type: 'cities'
			}, {
				title: 'Гамбург',
				type: 'cities'
			}, {
				title: 'Мюнхен',
				type: 'cities'
			}]
		}, {
			title: 'Италия',
			iso: 'IT',
			type: 'countries',
			children: [{
				title: 'Рим',
				type: 'cities'
			}, {
				title: 'Милан',
				type: 'cities'
			}, {
				title: 'Неаполь',
				type: 'cities'
			}]
		}]
}];



var USERS = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});




$context.section('Базовое дерево');
$context.section_begin('basic-create');
$context.section_end('basic-create');



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

$context.section('Иконка');
$context.section_begin('basic-icon');
$context.section_end('basic-icon');


var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		$content: {
			format: '#{title}',
			binding: 'prop:text',
			$icon: {
				etype: 'icon',
				as: 'before',
				weight: -10,
				states: {
					// отображение состояния на класс иконки
					'cardinals': 'cls:fa-globe',
					'countries': 'cls:fa-flag',
					'cities': 'cls:fa-building-o'
				},
				dataId: 'type',
				binding: 'prop:icon'
			},
			$content: {
//				etype: '.',
//				dataId: 'title'
			}
		},
		binding: function(v) {
			if(v.type != 'cities') this.states.set('expandable');
		}
	}

});

w.render('#sample');

$context.section('Переключатель');
$context.section_begin('basic-toggler');
$context.section_end('basic-toggler');


var w = $.ergo({
	etype: 'basic-tree',
	data: USERS,
//	cls: 'items-indent',
	nestedItem: {
		as: 'margin-top',
		$toggler: {
			as: 'fa-2x before',
			states: {
				toggler: {
					'caret': 'cls:fa-angle-right',
					'opened': 'cls:fa-angle-down'
				}
			}
		},
		$image: {
			etype: 'html:img',
			as: 'rounded before',
			binding: 'prop:src',
			format: function(v) {
				var s = v.id;
				if(v.id < 10) s = '0'+s;
				if(v.id < 100) s = '0'+s;
				return 'demo/blog/img/avatars/'+s+'.jpg';
			},
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			$content: {
				$content: {
					etype: '.',
					format: '#{full_name}',
					binding: 'prop:text'

//					dataId: 'full_name'
				},
				$email: {
					etype: 'text',
					as: 'description',
					format: '#{email}'
//					dataId: 'email'
				}
			}
		},
		binding: function(v) {
			if(v.children) this.set('expandable');
		}
	}

});


w.render('#sample');

$context.section('Checkboxes');
$context.section_begin('basic-checkboxes');
$context.section_end('basic-checkboxes');

// создаем провайдера тестовых данных дерева
TreeAjaxProvider = {
	url: 'data/tree',
	findAll: function(source, query) {
		var id = query.id || 0;
		return $.ajax(this.url+'/'+id+'.json', {
			data: query,
			dataType: 'json'
		});
	}
};


// создаем источник данных
var data = new Ergo.data.NodeList({provider: TreeAjaxProvider});



var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		binding: function(v) {
			if(this.data.opt('branch')) this.set('expandable');
			this.$icon.set(v.type);
		},
		$content: {
			dataId: 'title',
			binding: 'prop:text'
		},
		$checkbox: {
			etype: 'check',
			as: 'before',
			weight: -20,
			autoBind: false,
			onAction: function() {
//					this.events.
			}
		},
		$icon: {
			etype: 'icon',
			as: 'before',
			weight: -10,
			states: {
				// настраиваем FontAwesome-иконки для состояний
				'drive': 'cls:fa-hdd-o',
				'folder': 'cls:fa-folder-o',
				'clip': 'cls:fa-film'
			}
		}
	}
});


w.render('#sample');


data.fetch();


USERS.fetch();
