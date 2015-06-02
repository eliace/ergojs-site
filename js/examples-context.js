


$context = new Ergo.core.Context();




$context.alert = function(msg, type) {
	
	type = type || 'info';
	
	// var titles = {
		// info: 'Информация! ',
		// success: 'Успех! '
	// };
	var icons = {
		info: 'fa-info',
		success: 'fa-check'
	};
	
	$.ergo({
		renderTo: '#sample',
		etype: 'simple-alert',
		$icon: {
			cls: 'fa fa-fw rounded'
		},
//			title: titles[type],
		icon: icons[type],
		text: msg,
		state: type
	});
	
};



$context.section_begin = function(block) {

	var info = $context._section;


	$.ergo({
		etype: 'box',
		renderTo: '#sample',
		cls: 'demo-section',
		$content: {
			text: info.title,
			cls: 'clearfix',
			layout: 'hbox',
			// $icon: {
			// 	etype: 'icon',
			// 	cls: 'fa-arrow-circle-down'
			// },
			$content: {
				etype: 'html:h3'
			},
			$codeToggle: {
				etype: 'icon',
				cls: 'contextual fa-code pull-right action-icon',
				onClick: function() {
					this.events.rise('toggleExpand');
				}
			}
		},
		$description: {
			cls: 'description',
			innerHtml: info.desc
		},
		// $codePanel: {
		// 	state: 'animated hidden',
		// 	$content: {
		// 		etype: 'html:pre',
		// 		$code: {
		// 			etype: 'html:code',
		// 			cls: 'javascript'
		// 		}
		// 	}
		// },
		onToggleExpand: function(e) {

			var section = this;

			var sample = $context.data('sample');

			var path = (block) ? sample.name+'/'+block+'.js' : sample.name+'.js';

			var codePanel = $('.'+block).ergo();

			if(!codePanel.el.is(':visible')) {

				if(!codePanel._loaded) {

			    $.ajax({
			        url:'samples/'+path,
			        dataType:"text",
			        success:function(data){

							
							$('pre code.javascript', codePanel.el).append( Ergo.escapeHtml(data).replace(/\t/g, '  ') );
							
							$('pre code.javascript', codePanel.el).each(function(i, blk) {
						    hljs.highlightBlock(blk);
						  });		
												
		//					section.codePanel.show();
							codePanel.states.unset('hidden');
							codePanel.states.set('fadeIn');

						  codePanel._loaded = true;

						}
					});
			  }
			  else {
					codePanel.states.unset('hidden');
					codePanel.states.set('fadeIn');			  	
			  }

		  }
		  else {

		  	codePanel.el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  		codePanel.states.set('hidden');
			  	codePanel.states.unset('fadeOut');
			  	codePanel.states.unset('fadeIn');
		  	});

		  	codePanel.states.set('fadeOut');
		  }


		}
	});

};



$context.section_end = function(block) {

	$.ergo({
		etype: 'box',
		renderTo: '#sample',
		cls: 'code-panel paper ' + block,
		state: 'animated hidden',
		$content: {
			etype: 'html:pre',
			$code: {
				etype: 'html:code',
				cls: 'javascript'
			}
		},
		$tabs: {
			cls: 'code-tabs',
			layout: 'hbox',
			items: [{text: 'JS', state: 'selected'}, 'CSS']
		}
	});

};



$context.section = function(title, desc) {

	$context._section = {
		title: title,
		desc: desc
	};

};

