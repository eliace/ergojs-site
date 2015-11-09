


$context = new Ergo.core.Context();






$context.alert = function(msg, type) {

	type = type || 'primary';

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




$context.split = function() {
	$.ergo({
		etype: 'html:br',
		renderTo: '#sample'
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
				cls: 'contextual fa-code pull-right action',
				onClick: function() {
					this.events.rise('toggleExpand');
				}
			},
			// $jsfiddle: {
			// 	etype: 'icon',
			// 	as: 'contextual fa-jsfiddle pull-right action',
			// 	onClick: function() {
			// 		this.events.rise('jsFiddle');
			// 	}
			// }
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


		},




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
			defaultItem: {
				include: 'icon:before',
				icon: 'fa-jsfiddle',
				as: 'action',
				onClick: 'action:jsFiddle'
			},
			items: ['jsFiddle']//{text: 'JS', state: 'selected'}, 'CSS']
		},


		onJsFiddle: function(e) {

			var sample = $context.data('sample');

			var path = (block) ? sample.name+'/'+block+'.js' : sample.name+'.js';

			$.ajax({
				url:'samples/'+path,
				dataType:"text",
				async: false,
				success:function(data){

					var js = data;// Ergo.escapeHtml(data).replace(/\t/g, '  ');

					var form = $.ergo({
						etype: 'html:form',
						action: 'http://jsfiddle.net/api/post/jquery/2.1.3/',
						defaultItem: {
							etype: 'html:input',
							hidden: true
						},
//						id: 'jsfiddle-form',
						items: [{
							name: 'title',
							value: sample.name
						}, {
							name: 'wrap',
							value: 'd'
						}, {
							name: 'html',
							etype: 'html:textarea',
							value: '<script src="http://ergojs.com/lib/ergo-js/dist/ergojs-core.js" type="text/javascript"></script>\n'
								+'<script src="http://ergojs.com/lib/ergo-js/dist/ergojs-widgets-all.js" type="text/javascript"></script>\n'
								+'<script src="http://ergojs.com/js/examples-context.js" type="text/javascript"></script>\n'
								+'<script src="http://ergojs.com/js/examples-data.js" type="text/javascript"></script>\n'
								+'<link href="http://fonts.googleapis.com/css?family=Roboto:400,500,600,700&subset=latin,cyrillic" rel="stylesheet" type="text/css">\n'
								+'<link href="http://ergojs.com/css/layout.css" rel="stylesheet" type="text/css">\n'
								+'<link href="http://ergojs.com/css/style.css" rel="stylesheet" type="text/css">\n'
								+'<script>Ergo.widgets.Icon.prototype.defaults.cls = "icon fa fa-fw";</script>\n\n'
								+'<div id="sample" class="padding"></div>'
						}, {
							name: 'js',
							etype: 'html:textarea',
							value: js
						}, {
							name: 'resources',
							value: 'http://ergojs.com/lib/ergojs.css,https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
						}]
					});

					form.render('body');

					form.el.attr('target', '_blank');
					//
					// window.open('http://jsfiddle.net', 'TheWindow');

					form.el.submit();

					form._destroy();

				}
			});

//			e.stop();
		}



	});

};



$context.section = function(title, desc) {

	$context._section = {
		title: title,
		desc: desc
	};

};
