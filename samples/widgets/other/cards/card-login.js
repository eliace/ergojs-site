



var login1 = $.ergo({
	etype: 'panel',
	as: 'inverted padded paper divided rounded',
	width: 240,
	$header: {
		$content: {
			etype: 'html:h4',
			text: 'Sign In',
			as: 'title'
		}
	},
	$content: {
		$form: {
			etype: 'html:form',
			layout: 'vbox',
			as: '__gap',
			defaultItem: {
				as: 'fluid',
			},
			items: [{
				etype: 'input',
				include: 'icon:at-left',
				icon: 'fa-user',
				placeholder: 'Login'
			}, {
				etype: 'input',
				include: 'icon:at-left',
				icon: 'fa-lock',
				placeholder: 'Password',
				type: 'password'
			}, {
				etype: 'button',
				text: 'Sign In',
				as: 'primary',
			}]
		}
	}

});






var login2 = $.ergo({
	etype: 'html:form',
	as: 'card paper rounded',
	width: 240,
	$header: {
		etype: 'html:h3',
		as: 'title padding',
		text: 'Sign In'
	},
	$content: {
		etype: 'box',
		as: 'content box padding __gap',
		layout: 'vbox',
		defaultItem: {
			as: 'fluid'
		},
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-user',
			placeholder: 'Login'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-lock',
			placeholder: 'Password',
			type: 'password'
		}]
	},
	$footer: {
		etype: 'box',
		as: 'content box padding __center',
		layout: 'hbox',
		items: [{
			etype: 'button',
			as: 'primary',
			text: 'Sign In'
		}]
	}
});





var login3 = $.ergo({
	etype: 'html:form',
	as: 'card',
	width: 240,
	$header: {
		etype: 'html:h3',
		as: 'title box divided basic',
		text: 'Sign In'
	},
	$content: {
		etype: 'box',
		as: 'content box padding __gap',
		layout: 'vbox',
		defaultItem: {
			as: 'fluid'
		},
		items: [{
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-user',
			placeholder: 'Login'
		}, {
			etype: 'input',
			include: 'icon:at-right',
			icon: 'fa-lock',
			placeholder: 'Password',
			type: 'password'
		}]
	},
	$footer: {
		etype: 'box',
		as: 'content box padding',
		layout: 'hbox',
		items: [{
			etype: 'button',
			as: 'primary outlined fluid',
			text: 'Sign In'
		}]
	}
});






login1.render('#sample');
$context.split();
login2.render('#sample');
$context.split();
login3.render('#sample');
