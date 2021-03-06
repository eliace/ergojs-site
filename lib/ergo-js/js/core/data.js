
//= require events


/**
 * Источник данных
 * 
 * Опции:
 * 	`lazy` "ленивое" создание элементов (только когда происходит обращение по ключу)
 * 
 * События:
 * 	`value:changed` изменился источник данных
 * 	`entry:changed` изменился элемент
 * 	`entry:added` добавлен элемент
 * 	`entry:deleted` удален элемент
 * 
 * @class
 * @name Ergo.core.DataSource
 * @extends Ergo.core.Object
 * 
 */
Ergo.declare('Ergo.core.DataSource', 'Ergo.core.Object', /** @lends Ergo.core.DataSource.prototype */{
	
	defaults: {
//		plugins: [Ergo.Observable],
		include: 'observable',
		lazy: true
	},
	
	
	_initialize: function(src, id, o) {
		
		/**
		 * Ключ связанных данных в источнике данных
		 * 
		 * @field id
		 */
		
		/**
		 * Источник данных
		 * 
		 * @field {Any|Ergo.core.DataSource}
		 */
		this.source = src;
				
		if(arguments.length == 2) {
			if($.isPlainObject(id)) o = id;
			else this._id = id;
		}
		else if(arguments.length == 3) {
			this._id = id;
		}

		if('_id' in this) {
			// if(typeof id == 'string')
			// 	this._id = this._id.split('+');
			if(Array.isArray(id))
				this._id = id;
			else
				this._id = [this._id];
		}

		
//		this._super(o || {});
		Ergo.core.DataSource.superclass._initialize.call(this, o || {});
		
		var self = this;
		var o = this.options;
		var val = this.get();
		
		/**
		 * Элементы данных
		 * 
		 * @field
		 */
		this.entries = Array.isArray(val) ? new Ergo.core.Array() : new Ergo.core.Collection();
		
//		this.events = new Ergo.events.Observer(this);
		
		if(!o.lazy) {
			Ergo.each(val, function(v, i){	self.entry(i); } );
		}
		
//		console.log('-- data --');
		
	},
	
	
	_destroy: function() {
		
		this.del();
		
		// очищаем регистрацию обработчиков событий
		this.events.off();
		// удаляем все дочерние элементы
		this.entries.apply_all('_destroy');
		
	},
	
	
	
	/**
	 * Получение вложенного элемента данных по ключу
	 * 
	 * @param {String|Any} i ключ
	 * @return {Ergo.core.DataSource} элемент данных
	 */
	entry: function(i) {
		
//		console.log('-- data entry --');
		
		var e = this;
		
		// если ключ - строка, то он может быть составным 
		if($.isString(i)) {
			var a = i.split('.');
			var i = a.pop();
			// двигаемся внутрь объекта по элементам ключа
			for(var j = 0; j < a.length; j++) e = e.entry(a[j]);
		}
				
		// если ключ существует, то возвращаем соответствующий элемент, иначе - создаем новый
		if(!e.entries.has_key(i)) {
			e.entries.set(i, e._factory(i));
		}
		
		return e.entries.get(i);
	},
	
	
	/**
	 * Фабрика вложенных элементов
	 * 
	 * По умолчанию используется класс Ergo.core.DataSource
	 * 
	 * @param {Any} i ключ
	 * @returns {Ergo.core.DataSource}
	 * 
	 */
	_factory: function(i) {
		return new Ergo.core.DataSource(this, i);		
	},
	


	_parse: null,

	_compose: null,

	
	
	/**
	 * Получение значения источника данных
	 * 
	 * Если метод вызывается без аргументов, то он ведет себя как геттер.
	 * Если определен аргумент, то метод является сеттером.
	 * 
	 * @param {Any} [v] значение
	 * @private
	 */
	_val: function(v) {
//		if('_cached' in this) return this._cached;
//		var v = undefined;

		if(arguments.length == 0) {
			v = (this.source instanceof Ergo.core.DataSource) ? this.source._val() : this.source;
			if('_id' in this) {
				if(v) {
					// single key
					if(this._id.length == 1) {
						v = v[this._id[0]];
					}
					// multi key
					else {
						var mv = {};
						for(var i = 0; i < this._id.length; i++)
							mv[this._id[i]] = v[this._id[i]];
						v = mv;
						// var mv = [];
						// for(var i = 0; i < this._id.length; i++)
						// 	mv.push( v[this._id[i]] );
						// v = mv;
					}
				}
				else {
					v = undefined;
				}
			}

			// if(this.options.unformat)
			// 	v = this.options.unformat.call(this, v);			
			

		} 
		else {

			// if(this.options.format)
			// 	v = this.options.format.call(this, v);

			if (this.source instanceof Ergo.core.DataSource) {
				if('_id' in this) {
					var src = this.source._val();
					// single key
					if(this._id.length == 1) {
						src[this._id[0]] = v 
					}
					// multi key
					else {
						for(var i = 0; i < this._id.length; i++) {
							var key = this._id[i];
							if(key in v)
								src[key] = v[key];
						}
						// for(var i in v){//var i = 0; i < this._id.length; i++) {
						// 	src[this._id[i]] = v[i];
						// }
					}
				}
				else {
					this.source._val(v);
				} 
	  	}
			else {
				if('_id' in this) {
					var src = this.source;
					// single key
					if(this._id.length == 1) {
						src[this._id[0]] = v 
					}
					// multi key
					else {
						for(var i = 0; i < this._id.length; i++) {
							var key = this._id[i];
							if(key in v)
								src[key] = v[key];
						}
						// for(var i in v) {//var i = 0; i < this._id.length; i++) {
						// 	src[this._id[i]] = v[i];
						// }
					}
				}
				else {
					this.source = v;
				}
			}			
		}
//		this._cached = v;
		return v;
	},
	
	
	/**
	 * Получение значения элемента по ключу
	 *
	 * Если ключ не указан или не определен, то берется значение самого источника данных
	 * 
	 * @param {Number|String} [i] ключ
	 * @returns {Any}
	 */
	get: function(i) {
		if(i === undefined){
			return this._val();
		}
		else {
			return this.entry(i).get();			
		}
	},
	
	/**
	 * Полная копия значения
	 * 
	 * @param {Number|String} i ключ
	 * @returns {Any}
	 */
	copy: function(i) {
		return Ergo.deep_copy(this.get(i));
	},
	
	
	
	/**
	 * Изменение существующего элемента
	 * 
	 * Если аргумент один, то изменяется значение самого источника данных
	 * 
	 * @param {String|Number} [i] ключ
	 * @param {Any} val новое значение
	 * 
	 */
	set: function(i, newValue) {
		if(arguments.length == 1) {
			newValue = i;
			
			var oldValue = this.get();
						
			

			// var filtered = [];
			// this.entries.each(function(e) {
			// 	//FIXME упрощенная проверка присутствия ключа
			// 	if(newValue && newValue[e.id] === undefined)
			// 		filtered.push(e);
			// });

			// for(var i = 0; i < filtered.length; i++) {
			// 	filtered[i]._destroy();
			// }


			this.entries
				.filter(function(e){
					//FIXME упрощенная проверка присутствия ключа
					return (newValue && newValue[e._id.join('+')] === undefined);
				})
				.each(function(e){	
					e._destroy(); 
				});


			if(this.entries.is_empty())
				this.entries = Array.isArray(newValue) ? new Ergo.core.Array() : new Ergo.core.Collection();

			// удаляем все элементы
//			this.entries.filter(function(e) { return true; }).each(function(e){	e._destroy(); });
			// пересоздаем коллекцию элементов
			// положительный эффект в том, что можно поменять содержимое Object на Array и наоборот
//			this.entries = $.isArray(newValue) ? new Ergo.core.Array() : new Ergo.core.Collection();

						
			// var entries_to__destroy = [];
// 
			// this.entries.each(function(e){
// //				//FIXME упрощенная проверка присутствия ключа
// //				if(newValue[e.id] === undefined) entries_to__destroy.push(e);
				// entries_to__destroy.push(e);
			// });
// 			
			// for(var i = 0; i < entries_to__destroy.length; i++)
				// entries_to__destroy[i]._destroy();


			// опустошаем список элементов
//			this.entries.apply_all('_destroy');



			this._val(newValue);
			


			this.mark_dirty(false);

			
			this.events.fire('value:changed', {'oldValue': oldValue, 'newValue': newValue});
			
			// var ds = this.source;
			// while(ds) {
			// 	ds.events.fire('entry:changed', {entry: this});
			// 	ds = ds.source;
			// }

			if(this.source instanceof Ergo.core.DataSource)
				this.source.events.fire('entry:changed', {entry: this});
			
//			this._changed = true;
		}
		else {
			return this.entry(i).set(newValue);
		}
		
	},
	
	
	
	/**
	 * Добавление нового элемента
	 * 
	 * 
	 * @param {Any} value значение нового атрибута
	 * @param {String|Number} [index] индекс или ключ, куда должен быть добавлен атрибут 
	 * @returns {Ergo.core.DataSource}
	 */
	add: function(value, index) {
		
		var values = this.get();		
		
		var isLast = false;
			
		if(Array.isArray(values)) {
			
			if(index == null){
				values.push(value);
				index = values.length-1;
				isLast = true;
			}
			else {

				// меняем индексы элементов данных
				for(var i = values.length-1; i >= index; i--){
					var e = this.entries.get(i);
					// this.events.fire('onIndexChanged', {'oldIndex': j, 'newIndex': (j-1)});
					e._id[0] = i+1;
					this.entries.set(i+1, e);
				}
				
				// добавляем новый элемент массива
				values.splice(index, 0, value);

				this.entries.set(index, this._factory(index));
				
			}
			
		}
		else {
//			throw new Error('Method "add" does not support object src');
			values[index] = value;
		}

		
		var e = this.entry(index);

		this.events.fire('entry:added', {'index': isLast ? undefined : index, 'entry': e});//, 'isLast': isLast});
		
		return e;
	},
	
	
	/**
	 * Удаление элемента.
	 * 
	 * Если метод вызывается без аргументов, то удаляется сам источник данных из родительского
	 * 
	 * @param {String|Number} [i] ключ
	 * 
	 */
	del: function(i) {
		
		if(i === undefined) {
			if(this.source instanceof Ergo.core.DataSource)
				this.source.del(this._id.join('+'));
			else
				throw new Error('Unable to delete root data src');
		}
		else {
			var value = this.get();

			var deleted_entry = this.entry(i);
//			var deleted_entry = this.entries.remove_at(i);
			var deleted_value = value ? value[i] : undefined;
			
			
			this.entries.remove_at(i);
			
			if(Array.isArray(value)) {
				value.splice(i, 1);
				for(var j = i; j < value.length; j++)
					this.entries.get(j)._id[0] = j;
			}
			else {
				if(value) delete value[i];
			}
						
			// элемента могло и не быть в кэше и, если это так, то событие не генерируется
			if(deleted_entry)
				this.events.fire('entry:deleted', {'entry': deleted_entry, 'value': deleted_value});
		}
				
	},
	
	
	/**
	 * Последовательный обход всех вложенных элементов с поддержкой фильтрации
	 * 
	 * @param {Function} callback 
	 * 
	 */
	each: function(callback, filter, sorter) {
		
		var ds = this;

		var values = ds.get();
//		var keys = this.keys(this.options.filter);
		
		var filter = filter || ds.options.filter;
		var sorter = sorter || ds.options.sorter;


		if( filter || sorter ) {

			var kv_a = [];

			// Filtering source and mapping it to KV-array
			Ergo.each(values, function(v, i) {
				if(!filter || filter.call(ds, v, i)) {
					kv_a.push( [i, v] );
	//				callback.call(self, self.entry(i), i, v);
				}
			});



			if(sorter) {
				// Sorting KV-array
				kv_a.sort( sorter );
			}


			for(var i = 0; i < kv_a.length; i++) {
				var kv = kv_a[i];
				callback.call(ds, ds.entry(kv[0]), kv[0], kv[1]);
			}

		}
		else {

			Ergo.each(values, function(v, i) {
				callback.call(ds, ds.entry(i), i, v);
			});

		}

		
		// var keys = [];
		// if($.isArray(values)) {
			// for(var i = 0; i < values.length; i++) keys.push(i);
		// }
		// else {
			// for(var i in values) keys.push(i);			
		// }
		
		//TODO здесь могут применяться модификаторы списка ключей (сортировка, фильтрация)
		// if(this.options.filter){
			// keys = this.options.filter.call(this, values, keys);
		// }
		
		// for(var i = 0; i < keys.length; i++){
			// var k = keys[i];
			// callback.call(this, this.entry(k), k, values[k]);			
		// }
	},
	
/*	
	keys: function(criteria) {
		var keys = [];
		var values = this.get();
		
		Ergo.each(function(v, i){
			if(criteria || criteria.call(this, v, i)) keys.push(i);
		});
		
		return keys;
				
		// if($.isArray(values)) {
			// for(var i = 0; i < values.length; i++) keys.push(i);
		// }
		// else {
			// for(var i in values) keys.push(i);			
		// }
		// return keys
	},
*/	
	

	mark_dirty: function(do_event) {
		this._changed = true;
		
		if(do_event !== false)
			this.events.fire('entry:dirty');

		if(this.source && this.source instanceof Ergo.core.DataSource)// && !this.source._changed) 
			this.source.mark_dirty();
	},

	
	
	walk: function(callback) {
		//TODO
	},
	
	/**
	 * Проверка, изменялся ли источник данных или хотя бы один из его атрибутов/элементов
	 * 
	 * @returns {Boolean}
	 */
	changed: function() {
		if(this._changed) return true;
		var found = this.entries.find(function(e){ return e.changed(); });
		return found != null;
	},

	/*
	 * Удаление состояния о том, что источник данных или его атрибуты изменялись
	 */
	clean: function() {
		this._changed = false;
		this.entries.apply_all('clean');
	},
	
	
	/**
	 * Количество элементов в источнике данных
	 * 
	 * @returns {Number}
	 */
	size: function() {
		return Ergo.size(this._val());
	}
	
	
	
});




/**
 * Пространство имен для данных
 * 
 * @namespace Ergo.data
 */
Ergo.data = {};


Ergo.$data = Ergo.object;


