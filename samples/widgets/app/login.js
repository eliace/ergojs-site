



var login = $.ergo({
	
	etype: 'panel',

	cls: 'paper widget',
	
	title: 'Вход в систему',
	
	width: 300,
	
	$content: {
	
		etype: 'html:form',
		
		style: {'padding': 16, 'text-align': 'center'},
		
		layout: 'stack',
		
		items: [{
			etype: 'text-box',
			name: 'username',
			placeholder: 'Логин',
			$addon: {
				cls: 'addon',
				$content: {
					etype: 'icon',
					cls: 'fa fa-fw fa-user'					
				}
			},
		}, {
			etype: 'text-box',
			name: 'password',
			placeholder: 'Пароль',
			$addon: {
				cls: 'addon',
				$content: {
					etype: 'icon',
					cls: 'fa fa-fw fa-lock'					
				}
			},
			$content_type: 'password'				
		}],
		
		$submit: {
			etype: 'html:input',
			weight: 10,
			type: 'submit',
			cls: 'btn primary',
			value: 'Войти'
		}
	
	}
});


login.render('#sample');



var login2 = $.ergo({
	
	etype: 'panel',

	cls: 'paper custom-panel',
	
	title: 'Вход в систему',
	
	width: 300,

	$content: {

		etype: 'html:form',
		
		style: {'padding': 16, 'text-align': 'center'},
		
		layout: 'stack',
		
		items: [{
			etype: 'text-box',
			name: 'username',
			placeholder: 'Логин',
			$addon: {
				cls: 'addon',
				$content: {
					etype: 'icon',
					cls: 'fa fa-fw fa-user'					
				}
			},
		}, {
			etype: 'text-box',
			name: 'password',
			placeholder: 'Пароль',
			$addon: {
				cls: 'addon',
				$content: {
					etype: 'icon',
					cls: 'fa fa-fw fa-lock'					
				}
			},
			$content_type: 'password'				
		}],
		
		$submit: {
			etype: 'html:input',
			weight: 10,
			type: 'submit',
			cls: 'btn primary',
			value: 'Войти',
			style: {'margin-top': 8, 'width': '100%'}
		}
	}
});


login2.render('#sample');

