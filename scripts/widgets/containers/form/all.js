


$context.section('Basic');
$context.section_begin('form-basic');
$context.section_end('form-basic');

var form = $.ergo({
	etype: 'box',
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
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
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
	}, {
		layout: 'hform',
		items: [{
			etype: 'input',
			cls: 'flat primary',
			text: 'First Name'
		}, {
			etype: 'input',
			cls: 'flat primary',
			text: 'Last Name'
		}, {
			etype: 'input',
			cls: 'flat primary',
			text: 'Middle Name'
		}]		
	}, {
		layout: 'hform',
		pattern: [3, 9],
		items: [{
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-calendar',
			cls: 'flat primary',
			text: 'Birth Date'
		}, {
			etype: 'input',
			include: 'icon:at-left',
			icon: 'fa-map-marker',
			cls: 'flat primary',
			text: 'Birth Place'
		}]		
	}]
});

form.render('#sample');

$context.section('Inline');
$context.section_begin('form-inline');
$context.section_end('form-inline');


var form = $.ergo({
	etype: 'box',
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
	}, {
		layout: 'hform',
		cls: 'inline',
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
		cls: 'inline',
		pattern: [4, 8],
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



