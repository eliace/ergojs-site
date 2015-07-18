
 var AVATARS_URL = 'demo/blog/img/avatars/';



$context.section('Login');
$context.section_begin('card-login');
$context.section_end('card-login');




var login1 = $.ergo({
	etype: 'panel',
	cls: 'inverted padded paper divided rounded',
	width: 240,
	$header: {
		$content: {
			etype: 'html:h4',
			text: 'Sign In',
			cls: 'header'
		}
	},
	$content: {
		$form: {
			etype: 'html:form',
			layout: 'vbox',
			cls: '__gap',
			defaultItem: {
				cls: 'fluid',
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
				cls: 'primary',
			}]
		}
	}

});






var login2 = $.ergo({
	etype: 'html:form',
	cls: 'card paper rounded',
	width: 240,
	$header: {
		etype: 'html:h3',
		cls: 'header padding',
		text: 'Sign In'
	},
	$content: {
		etype: 'box',
		cls: 'content box padding __gap',
		layout: 'vbox',
		defaultItem: {
			cls: 'fluid'
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
		cls: 'content box padding __center',
		layout: 'hbox',
		items: [{
			etype: 'button',
			cls: 'primary',
			text: 'Sign In'
		}]
	}
});





var login3 = $.ergo({
	etype: 'html:form',
	cls: 'card',
	width: 240,
	$header: {
		etype: 'html:h3',
		cls: 'header box divided basic',
		text: 'Sign In'
	},
	$content: {
		etype: 'box',
		cls: 'content box padding __gap',
		layout: 'vbox',
		defaultItem: {
			cls: 'fluid'
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
		cls: 'content box padding',
		layout: 'hbox',
		items: [{
			etype: 'button',
			cls: 'primary outlined fluid',
			text: 'Sign In'
		}]
	}
});






login1.render('#sample');
$context.split();
login2.render('#sample');
$context.split();
login3.render('#sample');



$context.section('Profile');
$context.section_begin('card-profile');
$context.section_end('card-profile');



var profile = $.ergo({
	etype: 'box',
	cls: 'card __gap __center',
	width: 240,
	layout: 'vbox',

	$image: {
		etype: 'html:img',
		width: 96,
		src: AVATARS_URL + '004.jpg',
		cls: 'image circular'
	},
	$content: {
		etype: 'box',
		cls: 'header medium lite',
		text: 'Зайцев Александр Андреевич'
	},
	$desc: {
		etype: 'text',
		cls: 'text muted',
		text: 'Ведущий дизайнер'
	}


});





profile.render('#sample');


