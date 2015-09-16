


Ergo.alias('includes:expandable', {

	defaults: {
		components: {
			sub: {
				hidden: true
			}
		},
		transitions: {
			'* > expanded': function() {
				this.$sub.show();
			},
			'expanded > *': function() {
				this.$sub.hide();				
			}
		},
		events: {
			'expand': function(e) {
				this.states.toggle('expanded');
//				e.stop();
			}
		}
	}

});



Ergo.alias('includes:exclusive-expand', {

	defaults: {
		events: {
			'expand': function() {
				// схлапываем соседние узлы
	      this.parent.items.each(function(item) {
	        if(item != this && item.states.is('expanded'))
	          item.states.unset('expanded');
	      }.bind(this));
			}		
		}
	}

});






$context.section('Basic');
$context.section_begin('accordion-basic');
$context.section_end('accordion-basic');



var acc = $.ergo({
	etype: 'box',
	as: 'accordion',
	defaultItem: {
		include: 'expandable exclusive-expand',
		$title: {
			etype: 'box',
			as: 'title box action toggle small',
			weight: -10,
			$caret: {
				etype: 'icon',
				as: 'caret +point-right',
				weight: -10
			},
			$content: {
				etype: '.'
			},
			onClick: 'action:expand'
		},
		$sub: {
			etype: 'box',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			}
		}
	},
	items: [{
		$title_text: 'Section 1',
		$sub_text: LOREMIPSUM
	}, {
		$title_text: 'Section 2',
		$sub_text: LOREMIPSUM_2
	}, {
		$title_text: 'Section 3',
		$sub_text: LOREMIPSUM_3
	}, {
		$title_text: 'Section 4',
		$sub_text: LOREMIPSUM_4
	}]
});



acc.render('#sample');

$context.section('Box');
$context.section_begin('accordion-box');
$context.section_end('accordion-box');


var acc = $.ergo({
	etype: 'box',
	as: 'accordion list bordered rounded divided',
	defaultItem: {
		include: 'expandable exclusive-expand',
		$title: {
			etype: 'box',
			as: 'title action toggle box padding small',
			weight: -10,
			$caret: {
				etype: 'icon',
				as: 'caret +point-right',
				weight: -10
			},
			$content: {
				etype: '.'
			},
			onClick: 'action:expand'
		},
		$sub: {
			etype: 'box',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			},
			as: 'box padding'
		}
	},
	items: [{
		$title_text: 'Section 1',
		$sub_text: LOREMIPSUM
	}, {
		$title_text: 'Section 2',
		$sub_text: LOREMIPSUM_2
	}, {
		$title_text: 'Section 3',
		$sub_text: LOREMIPSUM_3
	}, {
		$title_text: 'Section 4',
		$sub_text: LOREMIPSUM_4
	}]
});



acc.render('#sample');


