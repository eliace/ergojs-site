
Ergo.alias('formats:avatarUrl', function(v) {
	var s = v;
	if(v < 10) s = '0'+s;
	if(v < 100) s = '0'+s;
	return 'demo/blog/img/avatars/'+s+'.jpg';
});
