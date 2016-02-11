
$context.section('Создание пространства имен');
$context.section_begin('namespaces-basic');
$context.section_end('namespaces-basic');

Ergo.$foo = function(o, etype) {
	o.unshift({text: 'foo'}); 					// для всех элементов пространства foo: задаем текст по умолчанию
	return Ergo.object('foo', o, etype);
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
