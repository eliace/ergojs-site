
$context.section('Создание пространства имен');
$context.section_begin('namespaces-basic');
$context.section_end('namespaces-basic');

Ergo.$foo = function(etype, o) {
	o.unshift({text: 'foo'}); 					// для всех элементов пространства foo: задаем текст по умолчанию
	return Ergo.object('foo', etype, o);
};


Ergo.defineClass('Foo.ListItem', {

	extends: 'Ergo.core.Widget',

	defaults: {
		tag: 'li'
	}

}, 'foo:list-item');



var w = $.ergo({
	tag: 'ul',
	defaultItem: {
		etype: 'foo:list-item'
	},
	items: [{}, {}, 'текст']
});


w.render('#sample');
