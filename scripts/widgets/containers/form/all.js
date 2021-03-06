


$context.section('Basic');
$context.section_begin('form-basic');
$context.section_end('form-basic');

var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'		
	}, {
		layout: 'hform',
		items: [{
			etype: 'input',
			label: 'First Name'
		}, {
			etype: 'input',
			label: 'Last Name'
		}, {
			etype: 'input',
			label: 'Middle Name'
		}]
	}, {
		layout: 'hform',
		pattern: [2, 10],
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-calendar',
			label: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-map-marker',
			label: 'Birth Place'
		}]
	}]
});

form.render('#sample');

$context.section('Flat');
$context.section_begin('form-flat');
$context.section_end('form-flat');


var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'
	}, {
		layout: 'hform',
		items: [{
			etype: 'input',
			as: 'flat primary',
			placeholder: 'First Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			placeholder: 'Last Name'
		}, {
			etype: 'input',
			as: 'flat primary',
			placeholder: 'Middle Name'
		}]
	}, {
		layout: 'hform',
		pattern: [3, 9],
		items: [{
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-calendar',
			as: 'flat primary',
			placeholder: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-map-marker',
			as: 'flat primary',
			placeholder: 'Birth Place'
		}]
	}]
});

form.render('#sample');

$context.section('Inline');
$context.section_begin('form-inline');
$context.section_end('form-inline');


var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'		
	}, {
		layout: 'vform',
		defaultItem: {
			as: 'fluid'
		},
//		cls: 'inline',
		items: [{
			etype: 'input',
			label: 'First Name'
		}, {
			etype: 'input',
			label: 'Last Name'
		}, {
			etype: 'input',
			label: 'Middle Name'
		}]		
	}, {
		layout: 'vform',
//		cls: 'inline',
		pattern: [4, 8],
		defaultItem: {
			as: 'fluid'
		},
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-calendar',
			label: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-map-marker',
			label: 'Birth Place'
		}]		
	}]
});

form.render('#sample');

$context.section('Sub label');
$context.section_begin('form-message');
$context.section_end('form-message');

var form = $.ergo({
	etype: 'box',
	as: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		as: 'large divided'
	}, {
		layout: 'hform',
		defaultItem: {
			$message: {
				etype: 'text',
				as: 'sub text muted',
				autoRender: false
			},
			wrapper: {
				as: 'form item'
			},
			set: {
				'message': function(v) { this.$message.opt('text', v); }
			}
		},
		items: [{
			etype: 'input',
			label: 'First Name',
			message: 'Только символы'
		}, {
			etype: 'input',
			label: 'Last Name',
			message: 'Цифра 1 является недопустимой',
			onInput: function(e) {
				this.wrapper.states.toggle( 'error', e.text.indexOf('1') != -1 )
			}
		}, {
			etype: 'input',
			label: 'Middle Name'
		}]
	}, {
		layout: 'hform',
		pattern: [2, 10],
		defaultItem: {
			$message: {
				etype: 'text',
				as: 'text message muted',
				autoRender: false
			}
		},
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-calendar',
			label: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-map-marker',
			label: 'Birth Place'
		}]
	}]
});

form.render('#sample');



