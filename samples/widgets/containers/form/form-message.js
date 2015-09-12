
var form = $.ergo({
	etype: 'box',
	cls: 'block border rounded padding heavy',

	items: [{
		etype: 'title',
		text: 'Person',
		cls: 'large divided'		
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
			onChangeText: function(e) {
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

