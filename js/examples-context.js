


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
			$jsfiddle: {
				etype: 'icon',
				as: 'contextual fa-jsfiddle pull-right action',
				onClick: function() {
					this.events.rise('jsFiddle');
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


		},


		onJsFiddle: function(e) {

			var sample = $context.data('sample');

			var path = (block) ? sample.name+'/'+block+'.js' : sample.name+'.js';

			$.ajax({
				url:'samples/'+path,
				dataType:"text",
				async: false,
				success:function(data){

					console.log(data);

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
							value: '<script src="http://ergojs.com/lib/ergojs-core.js" type="text/javascript"></script>\n<script src="http://ergojs.com/lib/ergojs-widgets-all.js" type="text/javascript"></script>\n<script>Ergo.widgets.Icon.prototype.defaults.cls = "icon fa fa-fw";</script>\n<div id="sample" class="padding"></div>'
						}, {
							name: 'js',
							etype: 'html:textarea',
							value: js
						}, {
							name: 'resources',
							value: 'http://ergojs.com/js/examples-context.js,http://ergojs.com/js/examples-data.js,http://ergojs.com/lib/ergojs.css,https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
						}]
					});

					form.render('body');

					form.el.attr('target', '_blank');
					//
					// window.open('http://jsfiddle.net', 'TheWindow');

					form.el.submit();

//					form._destroy();

/*
					$.ajax({
						url: 'http://jsfiddle.net/api/post/jquery/2.1.3/',
						type: 'post',
						data: {
							wrap: 'd',
							title: sample.name,
							dtd: 'html 4',
							resources: 'http://ergojs.com/lib/ergojs-core.js',
							js: js,
							panel_css: 0,
							panel_html:	0,
							panel_js: 0
						},
						success: function(data) {
							console.log(data)
						}
					});
*/
				}
			});

//			e.stop();
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
