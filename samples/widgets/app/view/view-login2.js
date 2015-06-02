

var login2 = $.ergo({
	
	etype: 'panel',

	cls: 'paper widget simple',
	
	title: 'Вход в систему',
	
	width: 300,

	$content: {

		etype: 'html:form',
		
		style: {'padding': '16px 8px', 'text-align': 'center'},
		
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

