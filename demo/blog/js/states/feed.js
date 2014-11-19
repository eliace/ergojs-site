

$context.state('feed:page', function(on, params) {
	
	if(!on) {
		return;
	}
	
	
	
	var page = $.ergo({
		etype: 'box',
		
		$content: {
			autoHeight: true
		}
		
	});
	
	
	
	
	$context.pages.components.set('content', page);
	
	$context.pages.render();
	
	$context.pages._layoutChanged();
	
});
