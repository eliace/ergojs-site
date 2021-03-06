
//----------------------------------------------------------------
// Скоуп загружаемого примера
//----------------------------------------------------------------
$context.scopes.scope('sample:show', function($scope) {

	var sample = $context.sample;//.data('sample');

	var w;

	if(sample.name) {

		w = {
			etype: 'panel',
			sid: 'samplePanel',
			as: 'sample',
			title: sample.title,
			$content: {
				id: 'sample'

/*
				etype: 'tab-panel',
				$tabbar: {
					state: 'simple'
				},
				tabs: [{
					tab: {
						text: 'Пример',
						cls: 'sample-tab'
					},
					id: 'sample'
	//					$content: o
				}, {
					tab: 'Javascript',
					$content: {
						etype: 'html:pre',
	//						cls: 'sh_javascript'
						$content: {
							etype: 'html:code',
							cls: 'javascript',
						}
					}
				}, {
					tab: 'CSS',
					$content: {
						etype: 'html:pre',
	//						cls: 'sh_javascript'
						$content: {
							etype: 'html:code',
							cls: 'css',
						}
					}
				}],
				selected: 0
*/
			}
		};


		$.getScript('scripts/'+sample.name+'/all.js').success(function(script){


//			$('pre code.javascript', $scope.widget('samplePanel').el).append( Ergo.escapeHtml(script).replace(/\t/g, '  ') );

			$('pre code.javascript', $scope.widgets['samplePanel'].el).each(function(i, block) {
		    hljs.highlightBlock(block);
		  });


//			sh_highlightDocument();
		});


		$('#sample-css').remove();

    $.ajax({
        url:'styles/'+sample.name+'.css',
        dataType:"text",
        success:function(data){
          $("head").append('<style id="sample-css">' + data + '</style>');

					$('pre code.css', $scope.widgets['samplePanel'].el).append( Ergo.escapeHtml(data).replace(/\t/g, '  ') );

					$('pre code.css', $scope.widgets['samplePanel'].el).each(function(i, block) {
				    hljs.highlightBlock(block);
				  });

        }
    });


	}
	else {

		w = {
			etype: 'box',
			layout: 'column',
			as: 'under-construct',
			components: {
				icon: {
					etype: 'icon',
					state: 'fa-wrench fa-3x'
				},
				message: {
					cls: 'message',
					text: 'Пример все еще находится в разработке. Немножко терпения :)'
				}
			}
		};


	}


	w = $ergo(w);

	w.render('#samples');


});
