/**
 * @namespace
 * 
 */
var Ergo = (function(){

	var E = {};



	/**
	 * Копирование свойств одного объекта в другой (создание примеси)
	 * @param {Object} obj целевой объект, которому будут добавлены новые свойства
	 * @name Ergo.override
	 * @function
	 */
	E.override = function(obj) {
		for(var j = 1; j < arguments.length; j++){
			var overrides = arguments[j] || {};
			for(var i in overrides){
				obj[i] = overrides[i];
			}
		}
		return obj;
	};
	
	
	
	/**
	 * Полное копирование свойств одного объекта в другой (перегрузка) 
	 * @param {Object} obj целевой объект, которому будут добавлены новые свойства
	 * @name @Ergo.deep_override
	 * @function
	 * 
	 */
	E.deep_override = function(o) {
		
		for(var j = 1; j < arguments.length; j++){
		
			var srcObj = arguments[j];
			
//			E.each(srcObj, function(p, i){
			for(var i in srcObj) {
				
				var p = srcObj[i];
				
				if( p && p.constructor == Object ){//$.isPlainObject(p) ){
	//				if(!(i in o) || !$.isPlainObject(o[i])) o[i] = {};
					if(!(i in o) || (o[i] && o[i].constructor != Object)) o[i] = {};
					Ergo.deep_override(o[i], p);
				}
				else if( p && p.constructor == Array ) {//$.isArray(p) ){
	//				if(!(i in o) || !$.isArray(o[i])) o[i] = [];
					if(!(i in o) || (o[i] && o[i].constructor != Array)) o[i] = [];
					Ergo.deep_override(o[i], p);
				}
				else {
					o[i] = p;
				}
			}
		
		}
		
		return o;
	};
	
	
	
	
	
	
	
//	var _clear = false;
	
	
	
	var smart_override_prop = function(o, srcObj, i, context) {
	
		var p = srcObj[i];


		var prefix = i[0];
//		var j = i;
		
//		var keep_prefix = !_clear;


		if(prefix == '!' || prefix == '+' || prefix == '-') {
			i = i.substr(1);
		}
		else {
			
			prefix = false;
			
			if(i == 'data') prefix = '!'; 										//<-- поле data не перегружается
			if(i == 'mixins') prefix = '+'; 				//<-- поле mixins сливается
			if(i == 'cls') prefix = '+';
			if(i == 'state') prefix = '+';
			if( /^on\S/.test(i) ) prefix = '+';
			if(/\/events$/.test(context)) {
				prefix = '+';
			}
			
//			if(prefix)
//				keep_prefix = false;
			
			
			// Если в целевом объекте присутствует префиксная форма, то берется ее префикс
			if('!'+i in o) {
				prefix = '!';
//				i = '!'+i;
			}
			else if('+'+i in o) {
				prefix = '+';
//				i = '+'+i;
			}
			else if('-'+i in o) {
				prefix = '-';
//				i = '-'+i;
			}
			
		}
	
		
	
	

	
		if(prefix) {//prefix == '!' || prefix == '+' || prefix == '-') {
			
			var j = prefix + i;
			
//			var j = i.substr(1);
			
//			if(_clear) i = j;
			
			var m = null;

			
			if(prefix == '+') {
				
				m = [];
				
				if(i in o)
					m = o[i];
				if(j in o)
					m = o[j];
				
				if( !$.isArray(m) ) m = [m];
				
				m = m.concat(p);

				o[j] = m;
				
				// if(keep_prefix) {
					// o[j] = m;
					// if(i in o) delete o[i];
				// }
				// else {
					// o[i] = m;
					// if(j in o) delete o[j];
				// }
				
				// if(!(i in o)) o[i] = [];
				// if( !$.isArray(o[i]) ) o[i] = [o[i]];
				// p = o[i].concat(p);
				// o[i] = p;
				
			}
			else if(prefix == '-') {
				
				m = [];
				
				if(i in o)
					m = o[i];
				if(j in o)
					m = o[j];
				
				if( !$.isArray(m) ) m = [m];
				
				m = m.concat(p);

				o[j] = m;
				
				
				
				
				// TODO
				
				// m = [];
// 				
				// if(i in o)
					// m = o[i];
				// if(j in o)
					// m = o[j];
// 				
				// if( !$.isArray(m) ) m = [m];
// 				
				// if( !$.isArray(p) ) p = [p];
// 				
				// for(var k = 0; k < p.length; k++)
					// Ergo.remove_from_array(m, p[k]);
// 				
// 				
				// if(keep_prefix) {
					// o[j] = m;
					// if(i in o) delete o[i];
				// }
				// else {
					// o[i] = m;
					// if(j in o) delete o[j];
				// }				
				
			}
			else {
				m = p;
				
				o[j] = m;
				
//				if(m === undefined) delete o[i];
//				o[i] = p;
			}
			
			
			// if(keep_prefix) {
				// o[j] = m;
				// if(i in o) delete o[i];
			// }
			// else {
				// o[i] = m;
				// if(j in o) delete o[j];
			// }
			
//			if(j in o && !_clear) delete o[j];
		}
		else{
			//TODO здесь создается полная копия (deep copy) объекта-контейнера
			if( p && p.constructor == Object ) {//$.isPlainObject(p) ){
	//			if(!(i in o) || !$.isPlainObject(o[i])) o[i] = {};
				if(!(i in o) || (o[i] && o[i].constructor != Object)) o[i] = {};
				smart_override_obj(o[i], p, context+'/'+i);
			}
			else if( p && p.constructor == Array ){//$.isArray(p) ){
	//			if(!(i in o) || !$.isArray(o[i])) o[i] = [];
				if(!(i in o) || (o[i] && o[i].constructor != Array)) o[i] = [];
				smart_override_obj(o[i], p, context+'/'+i);
			}
			else {
				//TODO этот участок кода нужно исправить
				
				// // если элемент в перегружаемом параметре существует, то он может быть обработан специфически
				// if(i in o){
					// // классы сливаются в одну строку, разделенную пробелом
// //					if(i == 'cls') p = o[i] + ' ' + p;
					// if( /^on\S/.test(i) ) {
						// if( !$.isArray(o[i]) ) o[i] = [o[i]];
						// p = o[i].concat(p);
					// }
					// // if(i == 'state') {
						// // p = o[i] + ' ' + p;
					// // }
				// }
				
				o[i] = p;
			}
		}
		
	};
	
	
	
	var smart_override_obj = function(dest, src, context) {
		
		if(!dest)
			dest = {};
		
		
		for(var i in src)
			smart_override_prop(dest, src, i, context);
		
	};
	
	
	
	
	/**
	 * "Умное" копирование свойств одного объекта в другой (условная перегрузка) 
	 * @param {Object} obj целевой объект, которому будут добавлены новые свойства
	 * @name @Ergo.smart_override
	 * @function
	 * 
	 */
	E.smart_override = function(o) {
		
		
		// если перегружаемый объект содержит метод smart_override, то используем именно его
		if(o && o.smart_override) {
			// args будет содержать только список перегрузок
			var args = Array.prototype.slice.call(arguments);
			args.shift();
			return o.smart_override.apply(o, args);			
		}
	
	
//		var keep_keys = false;
		
		if(!o) {
//			_keep_keys = keep_keys = true;
			o = {};
		}
	
		// обходим все аргументы, начиная со второго
		for(var j = 1; j < arguments.length; j++){
			
			var srcObj = arguments[j];
			
			smart_override_obj(o, srcObj, '');

			// for(var i in srcObj)
				// smart_override_prop(o, srcObj, i);				
			
	//		if( $.isArray(srcObj) ){
	//			for(var i = 0; i < srcObj.length; i++)
	//				Ergo.utils.overrideProp(o, srcObj, i);
	//		}
	//		else {
		
		
	//		}		
		}
		
		// if(keep_keys)
			// _keep_keys = false;
		
		return o;
	};
	
	
	
	
	E.smart_build = function(o, key) {
		
		// применяем модификатор +
		for(var i in o) {
			
			var prefix = i[0];
			
			if(prefix == '+') {
				
				var j = i.substr(1);
				
				var m = (j in o) ? o[j] : [];
				if( !$.isArray(m) ) m = [m];
				
				m = m.concat(o[i]);
				
				o[j] = m;
				
				delete o[i];
			}
			
			
			if(prefix == '-') {
				
				var j = i.substr(1);
				
				var m = (j in o) ? o[j] : [];
				if( !$.isArray(m) ) m = [m];
				
				for(var n = 0; n < o[i].length; n++) {
					for(var k = 0; k < m.length; k++) {
						if(m[k] == o[i][n]) m.splice(k, 1);
					}
				}
				
				delete o[i];
			}



			if(prefix == '!') {
				
				var j = i.substr(1);
				
				if( o[i] === undefined )
					delete o[j];
				else
					o[j] = o[i];
				
				delete o[i];
			}
			
		}	

/*		
		// применяем модификатор -
		for(var i in o) {
			
			var prefix = i[0];
			
			if(prefix == '-') {
				
				var j = i.substr(1);
				
				var m = (j in o) ? o[j] : [];
				if( !$.isArray(m) ) m = [m];
				
				for(var n = 0; n < o[i].length; n++) {
					for(var k = 0; k < m.length; k++) {
						if(m[k] == o[i][n]) m.splice(k, 1);
					}
				}
				
				delete o[i];
			}
		}
		
		// применяем модификатор !
		for(var i in o) {
			
			var prefix = i[0];
			
			if(prefix == '!') {
				
				var j = i.substr(1);
				
				if( o[i] === undefined )
					delete o[j];
				else
					o[j] = o[i];
				
				delete o[i];
			}
			
		}
			
*/		
		
		
		if( k == 'shortcuts' || k == 'components' || k == 'items')
			return;
//		if(i == 'items') 
//			return;
			
		for(var i in o) {
			if(i == 'defaultItem' || i == 'defaultComponent' || i == 'layout') 
				continue;
			if(o[i] && o[i].constructor == Object)
				E.smart_build(o[i], i);
		}
		
	};
	
	
	
/*	
	E.self_smart_override = function() {
		
		// console.log(this);
		// console.log(arguments);
		
		_clear = true;
		
		// обходим все аргументы, начиная со второго
		for(var j = 0; j < arguments.length; j++){
			
			var srcObj = arguments[j];
		
			smart_override_obj(this, srcObj, '');
		
			// for(var i in srcObj)
				// smart_override_prop(this, srcObj, i);
								
		}
		
		_clear = false;
		
		return this;
	};
*/	
	
	
	
	
	
	
//	E.etypes = function() { return _etypes; }
	
//	E.defineClass = E.declare;
	
	
	
	
//	E.widget = E.object;
	
	
	
	
/*	
	E.isFunction = function(obj) { return obj instanceof Function; };
	E.isArray = function(obj) {return obj instanceof Array;}
	E.isNumber = function(obj) {return typeof obj == 'number';};
	E.isBoolean = function(obj) {return typeof obj == 'boolean';};
	E.isString = function(obj) {return typeof obj == 'string';};
	E.isObject = function(obj) { return obj.constructor == Object; };
*/


	// в версии jquery 1.4 появились методы, которые раньше реализовывались в Ergo
	
	/**
	 * Является ли объект функцией 
	 * 
	 * @name $.isFunction
	 * @function
	 * @param {Object} obj
	 */
//	E.isFunction = $.isFunction;
	/**
	 * Является ли объект массивом
	 * 
	 * @name $.isArray
	 * @function
	 * @param {Object} obj
	 */
//	E.isArray = $.isArray;
	/**
	 * Является ли объект простым объектом
	 * 
	 * @name $.isPlainObject
	 * @function
	 * @param {Object} obj
	 */
//	E.isPlainObject = $.isPlainObject;
	/**
	 * Является ли объект строкой
	 * 
	 * @name $.isString
	 * @function
	 * @param {Object} obj
	 */
	$.isString = function(obj) {
		return typeof obj == 'string';
	};
	/**
	 * Является ли объект логической переменной
	 * 
	 * @name Ergo.isBoolean
	 * @function
	 * @param {Object} obj
	 */
	$.isBoolean = function(obj) {
		return typeof obj == 'boolean';
	};
	/**
	 * Является ли объект числом
	 * 
	 * @name $.isNumber
	 * @function
	 * @param {Object} obj
	 */
	// $.isNumber = function(obj) {
		// return typeof obj == 'number';
	// };	
	
	
	
	
	
	
	

	
	
	//---------------------------------------------------
	//
	// Фильтры
	//
	//---------------------------------------------------
	
	
	//FIXME эта функция не так уж нужна
	E.filter_list = function(val, list) {
		for(var i = 0; i < list.length; i++)
			if(!list[i].call(this, val)) return false;
		return true;
	};
	
	
	
	E.sort_numbers = function(a, b) {
		return a - b;
	};
	
	
	
	
	
	

	
	
	
	
	
	
	
	return E;
})();

//var _dino = Ergo;


/**
 * @namespace
 */
Ergo.core = {};










/*
 * Расширяем базовый класс Array методом удаления элемента
 * 
 * @name Array.prototype.remove
 * @function
 * @param {Any} val элемент массива
 */

/*
Array.prototype.remove = function(val) {
	var index = -1;
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val) {
			index = i;
			break;
		}
	}
	if(index != -1) this.splice(index, 1);
	
	return (index != -1);		
}
*/




Ergo.globals = {
	
};














(function(){
	
	
	var E = Ergo;
	
	
	
	/**
	 * Создание расширенного класса
	 * 
	 * @name Ergo.extend
	 * @function
	 * @param {Object} p_ctor
	 * @param {Object} ctor
	 * @param {Object} overrides
	 */
	E.extend = function(p_ctor, ctor, overrides) {
		
		if(typeof ctor == 'object') {
			overrides = ctor;
			ctor = function(){ p_ctor.apply(this, arguments); };
		}
		
		
		// "магия" наследования
		var F = function(){};
		F.prototype = p_ctor.prototype;
		ctor.prototype = new F();
		ctor.prototype.constructor = ctor;
		ctor.superclass = p_ctor.prototype;
		ctor.super_ctor = p_ctor;

		// для всех функций определяем класс и имя функции
		for(var i in overrides) {
			var p = overrides[i];
			if($.isFunction(p)) {
				p.__class__ = ctor;
				p.__name__ = i;
			}
		}
		
		E.override(ctor.prototype, overrides);
		
		
		if(overrides.etype)
			Ergo.alias(overrides.etype, ctor);
//			_etypes[overrides.etype] = ctor;
		
		// добавляем классу метод extend
		ctor.extend = function(o) { return E.extend(this, o); };
		
		return ctor;
	};
	
		
	/**
	 * Рекурсивный обход всех базовых классов 
	 * 
	 * @name Ergo.walk_hierarchy
	 * @function
	 * @param {Object} ctor класс, для которого нужно выполнить обход
	 * @param {Function} callback метод, вызывваемый для каждого базового класса
	 */
	E.walk_hierarchy = function(ctor, callback) {
		if(!ctor) return;
		E.walk_hierarchy(ctor.super_ctor, callback);
		callback.call(this, ctor.prototype);
	};
	
	
	
	var _aliases = {};
	
	
	E.alias = function(alias, obj) {

		// var i = alias.indexOf(':');
		// var ns = 'ergo';
		// if(i > 0) {
			// ns = alias.substr(0, i);
			// alias = alias.substr(i+1);
		// }
// 
		// if( !_aliases[ns] ) _aliases[ns] = {};
// 		
		// ns = _aliases[ns];
		
	
		if(arguments.length == 2) {
			_aliases[alias] = obj;
		}
		else
			return _aliases[alias];
	
	};
	
	E.aliases = function() {
		return _aliases;
	};
	
	
		
//	var _etypes = {};
	
	/**
	 * Объявление класса
	 * 
	 * @param {String} class_name полное имя класса
	 * @param {String|Object} base_class базовый класс или имя базового класса
	 * @param {Object} overrides набор свойств и методов нового класса
	 * @param {String} [etype] e-тип (если не указан, то новый класс не регистрируется)
	 * 
	 * @name Ergo.defineClass
	 * @function
	 */
	E.defineClass = function(class_name, bclass, overrides, etype) {
		
		var base_class;
		
		if( typeof bclass == 'string' ) {
			var cp_a = bclass.split('.');
			var cp = window;
			for(var i = 0; i < cp_a.length; i++){
				base_class = cp[cp_a[i]];
				if(!base_class) break;
				cp = base_class;
			}
			
		}
		else {
			base_class = bclass;
		}
		
//		base_class = (typeof bclass == 'string') ? eval(bclass) : bclass;
		
		if(base_class === undefined)
			throw 'Unknown base class '+bclass+' for '+class_name;
		
		var clazz = E.extend(base_class, overrides);
		
		// создаем пространство имен для класса
		var cp_a = class_name.split('.');
		var cp = window;
		for(var i = 0; i < cp_a.length-1; i++){
			var c = cp_a[i];
			if(!cp[c]) cp[c] = {};
			cp = cp[c];
		}
		
		cp[cp_a[cp_a.length-1]] = clazz;
		
		// var cp_a = class_name.split('.');
		// var cp = 'window';
		// for(var i = 0; i < cp_a.length; i++){
			// cp += '.'+cp_a[i];
			// eval( 'if(!'+cp+') '+cp+' = {};' );
		// }		
		// eval(cp + ' = clazz;');

		// если псевдоним класса не задан явно, то он может быть указан в новых свойствах
		if(!etype)
			etype = overrides.etype;
		
		// регистрируем etype класса (если он есть)
		if(etype){
			clazz.prototype.etype = etype;
			Ergo.alias(etype, clazz);
//			_etypes[etype] = clazz;
		}
		
		if('mixins' in overrides) {
			for(i in overrides.mixins) {
				var mixin = overrides.mixins[i];
//				if($.isString(mixin)) mixin = o.mixins[i] = Ergo.alias('mixins:'+mixin);
//				if($.isFunction(mixin)) mixin.call(clazz.prototype, clazz.prototype);
//				else if($.isPlainObject(mixin)) Ergo.deep_override(clazz.prototype, mixin);
				Ergo.deep_override(clazz.prototype, mixin);
			}			
		}

		clazz.prototype._class_name = class_name;
		
		return clazz;
	};
	
	
	/**
	 * Синоним для Ergo.defineClass
	 */
	E.declare = E.defineClass;
	
	
	
	/**
	 * Создание экземпляра объекта по псевдониму класса
	 * 
	 * @name Ergo.object
	 * @function
	 * @param {Object} options параметры (опции) экземпляра
	 * @param {String} etype псевдоним класса
	 * @return {Ergo.core.Object}
	 */
	E.object = function(options, etype) {//defaultType) {
		
		if(options instanceof Ergo.core.Object) return options;
		
//		var etype = options.etype || defaultType;
		
		var ctor = Ergo.alias(etype);
//		var ctor = _etypes[etype];
		
		if(!ctor ){
//			Ergo.logger.debug('Class for etype "'+etype+'" not found');
			throw new Error('Class for etype "'+etype+'" not found');
//			return null;
		}
				
		return new ctor(options);
		
	};

	
	
	
	
	/**
	 * Является ли объект классом
	 * 
	 * @name $.isClass
	 * @function
	 * @param {Object} obj
	 * 
	 */
	$.isClass = function(obj) {
		return $.isFunction(obj) && (obj.superclass !== undefined);
	};
	
	
	
	
})();


//------------------------------------------------------
//
// Расширения базовых классов
//
//------------------------------------------------------


String.prototype.capitalize = function() {
//	var s = '';
//	for(i = 1; i < this.length; i++) s += this[i];
	return this.charAt(0).toUpperCase() + this.substr(1);
};

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, '');
};

/**
 * Добавление карринга к классу Function
 */
Function.prototype.curry = function(arg) {
	var F = this;
	var pre_args = arguments;
	return function(){
		var args = [];
		for(var i = 0; i < pre_args.length; i++) args.push(pre_args[i]);
		for(var i = 0; i < arguments.length; i++) args.push(arguments[i]);
//			args.unshift(arg);
		return F.apply(this, args);
	};
};

Function.prototype.rcurry = function(arg) {
	var F = this;
	var post_args = arguments;
//		for(var i = 0; i < arguments.length; i++) post_args.push(arguments[i]);
	return function(){
		var args = [];
		for(var i = 0; i < arguments.length; i++) args.push(arguments[i]);
		for(var i = 0; i < post_args.length; i++) args.push(post_args[i]);
//			args.push(arg);
		return F.apply(this, args);
	};
};






//------------------------------------
//
// Методы для работы с коллекциями
//
//------------------------------------





(function(){
	
	var E = Ergo;
	
	
	
	
	/**
	 * Последовательный обход каждого элемента массива или хэша
	 * 
	 * в jquery есть функция $.each, но меня не устраивает порядок аргументов в замыкании
	 * 
	 * @name Ergo.each
	 * @function
	 * @param {Object|Array} src объект, элементы которого необходимо просмотреть
	 * @param {Function} callback функция, вызываемая для каждого элемента
	 */
	E.each = function(src, callback, delegate){
		if($.isArray(src)){
			var arr = src;
			for(var i = 0; i < arr.length; i++){
				if( callback.call(delegate || arr, arr[i], i) === false ) return false;
			}
		}
		else {
			var obj = src;
			for(var i in obj){
				if( callback.call(delegate || obj, obj[i], i) === false ) return false;
			}	
		}
	};
	
	/**
	 * Фильтрация (как правило приводит к уменьшению размерности)
	 * 
	 * Элемент попадает в итоговый объект
	 * 
	 * @name Ergo.filter
	 * @function
	 * @param {Object|Array} src объект, элементы которого необходимо фильтровать
	 * @param {Function} callback функция, вызываемая для каждого элемента
	 * @returns {Object|Array} отфильтрованный объект или массив, в зависимости типа src 
	 */
	E.filter = function(obj, fn){
		var result;
		if( $.isArray(obj) ) {
			result = [];
			for(var i = 0; i < obj.length; i++)
				if( fn.call(obj, obj[i], i) ) result.push(obj[i]);
		}
		else {
			result = {};
			for(var i in obj)
				if( fn.call(obj, obj[i], i) ) result[i] = obj[i];			
		}
		return result;
	};
	
	
	
	/*
	 * Фильтрация ключей.
	 * 
	 * В результат попадают только индексы
	 * 
	 * @param {Object|Array} src объект, элементы которого необходимо фильтровать
	 * @param {Function} callback функция, вызываемая для каждого элемента
	 * @returns {Object|Array} отфильтрованный объект или массив, в зависимости типа src 
	 */
	E.filter_keys = function(src, fn){
		var result = [];
		if($.isArray(src)) {
			for(var i = 0; i < src.length; i++)
				if(fn.call(src, src[i], i)) result.push(i);
		}
		else {
			for(var i in src)
				if(fn.call(src, src[i], i)) result.push(i);			
		}
		return result;
	};
	
	
	
	
	/**
	 * Отображение (размерность сохраняется)
	 * 
	 * @name Ergo.map
	 * @function
	 * @param {Object|Array} src коллекция
	 * @param {Function} callback функция, вызываемая для каждого элемента
	 */
	E.map = function(obj, fn) {
		var a;
		if($.isArray(obj)) {
			a = [];
			for(var i = 0; i < obj.length; i++) a[i] = fn.call(obj, obj[i], i);			
		}
		else {
			a = {};
			for(var i in obj) a[i] = fn.call(obj, obj[i], i);			
		}
		return a;	
	};
	
	/**
	 * Поиск первого элемента, удовлетворяющего критерию
	 * 
	 * @name Ergo.find
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {Function|Any} criteria критерий 
	 */
	E.find = function(obj, criteria) {
		if(!$.isFunction(criteria)){
			var x = criteria;
			criteria = function(it) { return it == x; };
		}
		if($.isArray(obj)) {
			for(var i = 0; i < obj.length; i++)
				if(criteria.call(obj, obj[i], i)) return obj[i];
		}
		else {
			for(var i in obj)
				if(criteria.call(obj, obj[i], i)) return obj[i];			
		}
		
		return null;
	};
	
	
	/**
	 * Псевдоним для {@link Ergo.filter}
	 * 
	 * @name Ergo.find_all
	 * @function
	 */
	E.find_all = E.filter;
	
	
	
	/**
	 * Получение индекса (или ключа) элемента в коллекции
	 * 
	 * Если критерий не является функцией, то используется метод Ergo.eq
	 * 
	 * @name Ergo.key_of
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {Function|Any} criteria критерий 
	 */
	E.key_of = function(obj, criteria) {
		
		if(!$.isFunction(criteria))
			criteria = E.eq.curry(criteria);
			
		if($.isArray(obj)) {
			for(var i = 0; i < obj.length; i++)
				if(criteria.call(obj, obj[i], i)) return i;
		}
		else {
			for(var i in obj)
				if(criteria.call(obj, obj[i], i)) return i;			
		}
		return -1;
	};
	
	
	E.index_of = E.key_of;
	
	
	/**
	 * Вызов метода для всех элементов коллекции
	 * 
	 * Аргументы вызываемого метода передаются в виде массива
	 * 
	 * Ergo.apply_all(items, 'show', [10, 45]);
	 * 
	 * @name Ergo.apply_all
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {String} m_name имя метода
	 * @param {Array} [args] список аргументов
	 * 
	 */
	E.apply_all = function(obj, m_name, args) {
		for(var i in obj) {
			if(obj[i][m_name]) obj[i][m_name].apply(obj[i], args || []);
		}
	};
	
	/**
	 * Вызов метода для всех элементов коллекции
	 * 
	 * Аргументы вызываемого метода начинаются с 3 аргумента
	 * 
 	 * Ergo.call_all(items, 'show', 10, 45);
	 * 
	 * @name Ergo.call_all
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {String} m_name имя метода
	 * 
	 */
	E.call_all = function(obj, m_name) {
		var args = [];
		for(var i = 2; i < arguments.length; i++) args[i-2] = arguments[i];
		for(var i in obj) {
			if(obj[i][m_name]) obj[i][m_name].apply(obj[i], args);
		}
	};
	
	
	
	/**
	 * Проверка, содержится ли элемент в коллекции
	 * 
	 * @name Ergo.includes
	 * @function
	 * @param {Array|Object} obj коллекция
	 * @param {Any} val значение
	 */
	E.includes = function(obj, val) {
		for(var i in obj)
			if(obj[i] == val) return true;
//		for(var i = 0; i < arr.length; i++)
//			if(arr[i] == val) return true;
		return false;
	};
	
	E.contains = E.includes;
	E.is_include = E.includes;

	
	
	E.size = function(obj) {
		if($.isArray(obj)) return obj.length;

		var n = 0;
		for(var i in obj) n++;
		return n;
	};
	
	
	
	/**
	 * Удаление элемента из массива (массив уменьшает размерность)
	 * 
	 * @name Ergo.remove
	 * @function
	 * @param {Object} arr массив
	 * @param {Object} val удаляемый элемент
	 */
	
	//TODO в качестве значения может выступать критерий, а удаление может происходить как из массива, так и из хэша
	
	E.remove = function(arr, val) {
		var index = -1;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == val) {
				index = i;
				break;
			}
		}
		if(index != -1) arr.splice(index, 1);
		
		return (index != -1);
	};
	
	
	
	
})();





(function(){
	
	
	var F = Ergo;

	


	// "пустой" фильтр
	F.noop = function(){ return false; };
	// по индексу
	F.by_index = function(index, child, i){ return index == i; };
	// по совпадению набора свойств
	F.by_props = function(props, child){
		for(var i in props)
			if(child[i] != props[i]) return false;
		return true; 
	};
	// по опциям
	F.by_opts = function(opts, child){
		for(var i in opts)
			if(child.opt(i) != opts[i]) return false;
		return true; 
	};
	// по классу
	F.by_class = function(clazz, child){
		return (child instanceof clazz);
	};
	
	
	
	/**
	 * Предикативная функция равенства
	 * 
	 * Используется оператор ==
	 * 
	 * @name Ergo.eq
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {Object} item элемент коллекции
	 * @param {Object} i ключ/индекс элемента
	 */
	F.eq = function(obj, item, i) {
		return obj == item;
	};
	
	/**
	 * Предикативная функция неравенства
	 * 
	 * Используется оператор !=
	 * 
	 * @name Ergo.ne
	 * @function
	 * @param {Object|Array} obj коллекция
	 * @param {Object} item элемент коллекции
	 * @param {Object} i ключ/индекс элемента
	 */
	F.ne = function(obj, item, i) {
		return obj != item;
	};
	
	
	// F.ne = function(obj) {
		// return function(it) { return obj != it; };
	// }
// 
	// F.eq = function(obj) {
		// return function(it) { return obj == it; };
	// }
	
	// комплексный фильтр виджетов
	F.by_widget = function(i) {
		
		var f = null;
		
		if( $.isNumeric(i) ) f = F.by_index.curry(i);//return this.widgets[i]; // упрощаем
		else if( $.isString(i) ) f = F.by_opts.curry({'name': i});
		else if( $.isPlainObject(i) ) f = F.by_props.curry(i);
		else if( $.isClass(i) ) f = F.by_class.curry(i);
		else if( $.isFunction(i) ) f = i;
		
		return f;
	};






})();





(function(){
	
	
	var E = Ergo;

	
	E.indent_s = '\t';
	
	/**
	 * Печать объекта в удобочитаемой форме
	 * 
	 * @name Ergo.pretty_print
	 * @function
	 * @param {Any} obj любой объект/примитив
	 * @param {Integer} indent отступ
	 * @param {Integer} i_symb исимвол отступа
	 * @returns {String}
	 */
	E.pretty_print = function(obj, indent) {
		
		if(obj == undefined) return undefined;
		
		indent = indent || 0;
		var tabs = '';
		for(var i = 0; i < indent; i++) tabs += E.indent_s;
		
		if(obj.pretty_print) return obj.pretty_print(indent);
		
		if($.isString(obj))
			return '"'+obj.replace(/\n/g, '\\n')+'"';
		else if($.isBoolean(obj))
			return ''+obj;
		else if($.isNumeric(obj) || $.isBoolean(obj))
			return obj;
		else if($.isArray(obj)){
			var items = [];
			E.each(obj, function(item){
				items.push(E.pretty_print(item, indent));
			});
			return '[' + items.join(', ') + ']';
		}
		else if($.isFunction(obj)){
			return 'function() { ... }';
		}
		else if($.isPlainObject(obj) || !indent){
			var items = [];
			E.each(obj, function(item, key){
				if(key[0] == '!' || key[0] == '-' || key[0] == '+') key = "'"+key+"'";
				items.push(tabs + E.indent_s + key + ': ' + E.pretty_print(item, indent+1));					
			});
			return '{\n' + items.join(',\n') + '\n' + tabs + '}';
		}
		else
			return obj;
		
	};
	
	
	/**
	 * Экранирование строки для вывода в html
	 * 
	 * @name Ergo.escapeHtml
	 * @function
	 * @param {String} s строка
	 * @returns {String} экранированная строка
	 */
	E.escapeHtml = function(s) {
		return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	};
	
	


	/**
	 *  
	 *
	 * @name Ergo.timestamp
	 * @function
	 */
	E.timestamp = function() {
		return new Date().getTime();
	};
	
	
	



	/**
	 * Форматированный вывод значений.
	 * 
	 * @example
	 * Ergo.format("%s items from %s selected", 1, 10);
	 * 
	 * @name Ergo.format
	 * @function
	 * @param {String} format_str строка форматирования
	 * @return {String}
	 */
	E.format = function(format_str) {
		var values = [];
		for(var i = 1; i < arguments.length; i++) values.push(arguments[i]);
		return format_str.replace(/(%s)/g, function(str) {
			var replace_val = '';
			if(str == '%s') replace_val = ''+values.shift();
			return replace_val;
		});
	};
	
	/**
	 * Форматированный вывод объекта
	 * 
	 * @example
	 * 
	 * var record = {
	 * 	first_name: 'Alice',
	 * 	last_name: 'Green',
	 * 	email_count: 3
	 * }
	 * 
	 * Ergo.format_obj("#{first_name} #{last_name} has #{email_count} e-mails", record);
	 * 
	 * Output: Alice Green has 3 e-mails
	 * 
	 * @name Ergo.format_obj
	 * @function
	 * @param {Object} format_str строка форматирования
	 * @param {Object} obj объект
	 */
	E.format_obj = function(format_str, obj) {
		if(obj === null || obj === undefined) return '';
		return format_str.replace(/#{\s*(.+?)\s*}/g, function(str, key) {
			var o = obj;
			var arr = key.split('.');
			for(var i = 0; i < arr.length; i++) o = o[arr[i]]; 
			return o;
		});		
	};






	/**
	 * Полное копирование объекта.
	 * 
	 * Копируются вложенные простые объекты и массивы
	 * 
	 * @name Ergo.deep_copy
	 * @function
	 * @param {Any} src копируемый объект
	 */
	E.deep_copy = function(src) {
		var copy = null;
		
//		var is_po = $.isPlainObject(src);
//		if(is_po || $.isArray(src)){
		var is_po = (src && src.constructor == Object);
		if( src && (is_po || src.constructor == Array)) {
			copy = is_po ? {} : [];
			for(var i in src)
				copy[i] = E.deep_copy(src[i]);
//			E.each(src, function(item, i){
//				copy[i] = E.deep_copy(item);
//			});
		}
		else{
			copy = src;
		}
		
		return copy;
	};




	E.loadpath = {};
	
	
	/*
	 * Синхронная загрузка модулей через Ajax
	 * 
	 * В качестве аргументов передается список путей к классам
	 * 
	 */
	E.require = function() {
		
		for(var i = 0; i < arguments.length; i++) {

			var class_name = arguments[i];
			
			//TODO здесь нужно проверить, загружен ли класс
			try{
				if( eval('typeof '+class_name) == 'function') continue;
			}
			catch(e) {
			}
			
			for(var j in E.loadpath) {
				if(class_name.search(j) != -1) {
					class_name = class_name.replace(j, E.loadpath[j]);
					break;
				}
			}
			
			var url = class_name.replace(/\./g, '/') + '.js';
			
			$.ajax({
			  url: url,
			  dataType: "script",
			  success: function(){
			  	//TODO здесь нужно вызывать функцию, оповещающую, что класс загружен
			  },
			  error: function(jqXHR, textStatus, errorThrown){
			  	console.log(errorThrown);
			  },
			  async: false
			});			
			
		}
		
		
	};
	
	
	
	
	//TODO перенести в примеси
	E.glass_pane = function() {
		
		return $('<div class="e-glass-pane" autoheight="ignore"/>')
			.on('mousedown', function(e){
				e.preventDefault();
				return false;				
			});
		
	};






	//FIXME по большому счету это нужно только для корректной работы с событиями клавиатуры
	/*Browser detection patch*/
	E.browser = {};
	E.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	E.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	E.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	E.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());



})();





/**
 * Объект
 * 
 * Опции:
 * 	`set` хэш сеттеров
 * 	`get` хэш геттеров
 * 	`mixins` список примесей
 * 
 *
 * @class
 * 
 */
Ergo.core.Object = function() {
	this._initialize.apply(this, arguments);
};

Ergo.core.Object.extend = function(o) {
	return Ergo.extend(this, o);
};




Ergo.override(Ergo.core.Object.prototype, /** @lends Ergo.core.Object.prototype */{
	
	defaults: {
//		set: {},
//		get: {}
	},
	
	/**
	 * Инициализация объекта.
	 * 
	 * Процесс инициализации разбивается на три фазы:
	 * 	1. преконструирование
	 * 	2. конструирование
	 * 	3. постконструирование
	 *
	 * 
	 * Для каждой фазы вызывается свой обработчик
	 * 
	 * @private
	 * 
	 */
	_initialize: function(opts) {
		
		var o = {
//			smart_override: Ergo.self_smart_override
		};
		
		// 
		if(!this.constructor.NO_REBUILD_SKELETON) {
			var prevDefaults = null;
			Ergo.walk_hierarchy(this.constructor, function(clazz){
				if(clazz.defaults == prevDefaults) return;
				if('defaults' in clazz) Ergo.smart_override(o, clazz.defaults);
				prevDefaults = clazz.defaults; 
			});
			this.constructor.NO_REBUILD_SKELETON = true;
			this.constructor.prototype.defaults = Ergo.deep_copy(o);
//			Ergo.smart_build(this.constructor.prototype.defaults);

		}
		else {
			Ergo.deep_override(o, this.defaults);
		}
		
//			console.log(this.constructor.prototype._class_name);
		
		
//		this.options = o;
//		opts = opts || {};
//		this.options = o = Ergo.smart_override(o, opts);		
		
/*
		if('mixins' in o) {
			for(var i = 0; i < o.mixins.length; i++) {
				var mixin = o.mixins[i];
				if($.isString(mixin)) mixin = o.mixins[i] = Ergo.alias('mixins:'+mixin);
				if($.isFunction(mixin)) mixin.call(this, o);
				else if($.isPlainObject(mixin)) Ergo.deep_override(this, mixin);
			}
		}

		opts = opts || {};

		if('mixins' in opts) {//} || '+mixins' in opts) {
//			mixins = opts.mixins; ? opts.mixins : opts['+mixins'];
			for(var i = 0; i < opts.mixins.length; i++) {
				var mixin = mixins[i];
				if($.isString(mixin)) mixin = mixins[i] = Ergo.alias('mixins:'+mixin);
				if($.isFunction(mixin)) mixin.call(this, opts);
				else if($.isPlainObject(mixin)) Ergo.deep_override(this, mixin);
			}
		}
*/

		// //TODO возможно, здесь нужно реализовывать примешивание
// 		
		// var mixins = [].concat(o.mixins, opts ? opts.mixins : null);
// 		
// 		
// //		if('mixins' in o) {
		// for(var i = 0; i < mixins.length; i++) {
			// var mixin = mixins[i];
			// if($.isString(mixin)) mixin /*= o.mixins[i]*/ = Ergo.alias('mixins:'+mixin);
			// if($.isFunction(mixin)) mixin.call(this, o);
			// else if($.isPlainObject(mixin)) Ergo.smart_override(this, mixin);
		// }
// //		}

		

		this.options = $.isArray(opts) ? Ergo.smart_override.apply(this, [o].concat(opts)) : Ergo.smart_override(o, opts);
		
		// сборка опций
		Ergo.smart_build(this.options);

		// определен набор базовых опций - можно выполнить донастройку опций
		this._pre_construct(this.options);

		// повторная сборка опций (после PRE_CONSTRUCT могут появиться модификаторы опций)
		if(o.mixins && o.mixins.length)
			Ergo.smart_build(this.options);
		
//		this.options = Ergo.smart_override(this.options, opts);		
		
		// определен весь набор опций - можно выполнять сборку объекта
		this._construct(this.options);

		// объект готов - можно выполнить донастройку объекта
		this._post_construct(this.options);
		
//		if(this.$init)
//			this.$init(o);

	},
	
	
	
	/**
	 * Обработчик фазы "преконструирование" объекта
	 * 
	 * Как правило на этом этапе происходит донастройка и модификация опций
	 * 
	 * По умолчанию здесь происходит подкючение примесей
	 * 
	 * @private
	 * @param {Object} o опции
	 */
	_pre_construct: function(o) {
		
		// if('plugins' in o) {
			// for(var i = 0; i < o.plugins.length; i++) {
				// var plugin = o.plugins[i];
				// if($.isString(plugin)) plugin = o.plugins[i] = Ergo.alias('plugins:'+plugin);
				// if(plugin.pre_construct)
					// plugin.pre_construct.call(this, o);
			// }
		// }
		
		
		if('mixins' in o) {
			for(var i = 0; i < o.mixins.length; i++) {
				var mixin = o.mixins[i];
				if($.isString(mixin)) mixin /*= o.mixins[i]*/ = Ergo.alias('mixins:'+mixin);
				if($.isFunction(mixin)) mixin.call(this, o);
				else if($.isPlainObject(mixin)) Ergo.smart_override(this, mixin);
			}
		}		

	},
	
	
	/**
	 * Обработчик фазы "конструирование" объекта
	 * 
	 * Как правило, здесь происходит создание компонентов 
	 * 
	 * По умолчанию происходит подключение плагинов
	 * 
	 * @private
	 * @param {Object} o опции
	 * 
	 */
	_construct: function(o) {
		
		if('plugins' in o) {
			for(var i = 0; i < o.plugins.length; i++) {
				var plugin = o.plugins[i];
//				if($.isString(plugin)) plugin = o.plugins[i] = Ergo.alias('plugins:'+plugin);
				if(plugin.construct)
					plugin.construct.call(this, o);
			}
		}
		
	},
	
	
	/**
	 * Обработчик фазы "постконструирование" объекта
	 * 
	 * Эта фаза предназначена для конфигурирования сконструированного объекта
	 * 
	 * По умолчанию происходит применение опций (вызов метода _opt)
	 * 
	 * @private
	 * @param {Object} o опции
	 */
	_post_construct: function(o) {
				
		if('plugins' in o) {
			for(var i = 0; i < o.plugins.length; i++) {
				var plugin = o.plugins[i];
//				if($.isString(plugin)) plugin = o.plugins[i] = Ergo.alias('plugins:'+plugin);
				if(plugin.post_construct)
					plugin.post_construct.call(this, o);
			}
		}
		
		this._opt(o);
		
	},
	
	
	
	/**
	 * Установка опций (options) виджета.
	 * 
	 * Передаваемые параметры применяются и сохраняются в this.options
	 * 
	 * Опции применяются/получаются с учетом приоритета:
	 * 	Для сеттеров:
	 * 		1. Сеттер-опция из this.options.set
	 * 		2. Сеттер-метод вида set_<имя сеттера>
	 * 
	 * 	Для геттеров:
	 * 		1. Геттер-опция из this.options.get
	 * 		2. Геттер-метод вида get_<имя сеттера>
	 * 
	 * opt(i) - получение опции i
	 * opt(i, v) - установка опции i
	 * opt(o) - установка нескольких опций, передаваемых в виде Hash
	 * 
	 * @param {Object} o параметры
	 */
	opt: function(o) {
		var opts = o;
		if(arguments.length == 2){
			opts = {};
			opts[arguments[0]] = arguments[1];
		}
		else if($.isString(o)){
			// // нужно ли искать значение опции в другой области видимости
			// if(o.charAt(0) == '@') {
				// var k = o.substring(1);
				// var v = this.opt(k);
				// if(!k) {
					// var parent = this.parent || this.source;
					// v = parent.opt(o);
				// }
				// return v;
			// }
			// else {
			var getter = (this.options.get && this.options.get[o]) || this['get_'+o];//o.capitalize()];
			return (getter) ? getter.call(this) : this.options[o];
//			}
		}
		
//		Ergo.smart_override(this.options, opts);
		Ergo.override(this.options, opts);

		this._opt(opts);
		
		return this;//.options;
	},
	
	
	
	
	
	/**
	 * Обработчик, вызываемый для установки опций.
	 * 
	 * @private
	 * @param {Object} o опции
	 */
	_opt: function(o) {
		
//		var self = this;
		
		
		
//		var el = this.el;
		
		for(var i in o) {
			// проверяем наличие сеттеров опций
			if(this.options.set && this.options.set[i])
				this.options.set[i].call(this, o[i], this.options);
			// если сеттер опций не найден, проверяем наличие java-like сеттера
			else {
				// проверяем наличие сеттеров методов
				var java_setter = 'set_'+i;//.capitalize();			
				if(this[java_setter])
					this[java_setter](o[i]);
				// else {
					// $unknown_opt(i, o[i]);
			}
		}

//		profiler.tick('opt', 'other');
//
//		profiler.stop('opt');
		
	},
	
	
	// $unknown_opt: function(i) {
// 		
	// },
	
	
	/**
	 * Проверка установленного расширения
	 * 
	 * @function
	 * @name Object.is
	 * @param {Any} ex расширение
	 */
	$is: function(ex) {
		var o = this.options;
//		if($.isString(ex)) ex = Ergo.alias('mixins:'+ex);
		return ('mixins' in o) ? Ergo.includes(o.mixins, ex) : false;
	},
	
	
	/**
	 * Вызов метода родительского класса из перегруженного метода
	 * 
	 * По сути является "синтаксическим сахаром"
	 * 
	 * @private
	 */
	_super: function(){
		var caller = arguments.callee.caller;
		return caller.__class__.superclass[caller.__name__].apply(this, arguments);
	}
	
	
	
	
	
	
});





/**
 * Добавляем метод для регистрации примесей в ErgoJS
 */
Ergo.declare_mixin = function(mixin_name, obj, alias) {
	
	// создаем пространство имен для класса
	var cp_a = mixin_name.split('.');
	var cp = window;
	for(var i = 0; i < cp_a.length-1; i++){
		var c = cp_a[i];
		if(!cp[c]) cp[c] = {};
		cp = cp[c];
	}
	
	cp[cp_a[cp_a.length-1]] = obj;
	
	
	// создаем пространство имен для расширения
	// var cp_a = mixin_name.split('.');
	// var cp = 'window';
	// for(var i = 0; i < cp_a.length; i++){
		// cp += '.'+cp_a[i];
		// eval( 'if(!'+cp+') '+cp+' = {};' );
	// }		
	// eval(cp + ' = obj;');
	
	if(alias)
		Ergo.alias(alias, obj);
	
	return obj;
}
;

Ergo.defineMixin = Ergo.declare_mixin;


//= require "object"


/**
 * @name Ergo.events
 * @namespace
 */


/**
 * 
 * @deprecated
 * 
 * @class
 * @name Ergo.events.Event
 * @extends Ergo.core.Object
 */
Ergo.declare('Ergo.events.Event', Ergo.core.Object, /** @lends Ergo.events.Event.prototype */{
	
	/**
	 * @param {Object} overrides
	 * @param {Object} baseEvent
	 */
	_initialize: function(overrides, baseEvent) {
		this._super();
//		Ergo.events.Event.superclass._initialize.call(this);
		
		if(overrides) Ergo.override(this, overrides);
		
//		this.is_stopped = false;
		this.baseEvent = baseEvent;
		this.canceled = false;
		this.stopped = false;
	},
	
	
	cancel: function(){
		this.canceled = true;
	},
	
	stop: function() {
		if(this.baseEvent) this.baseEvent.stopPropagation();
		this.stopped = true;
	}
	
	
	
});


// Ergo.declare('Ergo.events.CancelEvent', 'Ergo.events.Event', /** @lends Ergo.events.CancelEvent.prototype */{
// 
	// /**
	 // * @constructs
 	 // * @extends Ergo.events.Event
	 // * @param {Object} overrides
	 // * @param {Object} baseEvent
	 // */
	// _initialize: function(overrides, baseEvent) {
		// this._super(overrides, baseEvent);
// //		Ergo.events.CancelEvent.superclass._initialize.apply(this, arguments);
		// this.isCanceled = false;
	// },
// 	
	// cancel: function(){
		// this.isCanceled = true;
	// }
// 	
// });




/**
 * Диспетчер событий
 * 
 * @class
 * @name Ergo.events.Dispatcher
 * @extends Ergo.core.Object
 */
Ergo.declare('Ergo.events.Observer', 'Ergo.core.Object', /** @lends Ergo.events.Dispatcher.prototype */{
	
	_initialize: function(target) {
		this.events = {}; 
		this.target = target;
	},
	
	/**
	 * Регистрируем событие.
	 * 
	 * reg(type, callback, target)
	 */
	reg: function(type, callback, target) {
		if(!(type in this.events)) this.events[type] = [];//new Ergo.core.Array();
		var h_arr = this.events[type];
		h_arr.push({'callback': callback, 'target': target || this.target});
		return this;
	},
	
	/**
	 * Однократная обработка события
	 */
	once: function(type, callback, target) {
		if(!(type in this.events)) this.events[type] = [];
		var h_arr = this.events[type];
		h_arr.push({'callback': callback, 'target': target || this.target, 'once': true});
		return this;
	},
	
	/**
	 * Убираем регистрацию события.
	 * 
	 * unreg(type)
	 * unreg(callback)
	 * unreg(type, callback)
	 * unreg(target)
	 */
	unreg: function(arg, arg2) {
		
		var events = this.events;
		
		if(arguments.length == 2){
			events[arg] = Ergo.filter( events[arg], function(h) { return h.callback != arg2; } );
		}
		else if( $.isString(arg) ){
			// удаляем все обработчики с данным именем
			delete events[arg];
		}
		else if( $.isFunction(arg) ){
			// удаляем указанный обработчик
//			for(var i = 0; i < events.length; i++) {
			for(var i in events) {
				events[i] = Ergo.filter( events[i], function(h) { return h.callback != arg; } );
			}
		}
		else {
			// удаляем все обработчики для указанного объекта
//			for(var i = 0; i < e.length; i++) {
			for(var i in events) {
				events[i] = Ergo.filter( events[i], function(h) { return h.target != arg; } );
			}
		}
		
		return this;		
	},
	
	unreg_all: function() {
		this.events = {};
	},
	
	/**
	 * Инициируем событие.
	 * 
	 * fire(type, event)
	 * 
	 * type - тип события в формате тип_1.тип_2 ... .тип_N
	 * 
	 */
	fire: function(type, e, baseEvent) {
		
		// "ленивая" генерация базового события
		var _event = {
			baseEvent: baseEvent,
			stop: function() {
				if(this.baseEvent) this.baseEvent.stopPropagation();
				this.stopped = true;
			}
		};
		
		if(arguments.length == 1) { 
//			_event = new Ergo.events.Event();
//			e = new Ergo.events.Event();
		}
		else if( $.isPlainObject(e) ){
			Ergo.override(_event, e);
//			_event.baseEvent = baseEvent;
//			e = new Ergo.events.Event(e, baseEvent);
		}
		
		e = _event;
		
		
		var self = this;
		
		var h_arr = this.events[type];
		if(h_arr) {
			Ergo.each(h_arr, function(h){
				// вызываем обработчик события
				h.callback.call(h.target, e, type);
				// если усьановлен флаг остановки, то прекращаем обработку событий
//				if(e.stopped) return false;
			});
			this.events[type] = Ergo.filter( this.events[type], function(h) { return !h.once; } );
		}

		if(e.after && !e.stopped) 
			e.after.call(this.target, e, type);

//		self.on_fire(type, e, baseEvent);
		
		return this;
	}
	
	
	// bubble: function() {
// 		
	// }
// 	
// 	
	// /**
	 // * Метод, вызываемый после отрабатывания метода fire
	 // * 
	 // */
	// on_fire: function(type, e, base_event) {
// 		
	// }
	
	
});


//Ergo.declare('Ergo.events.Dispatcher', 'Ergo.core.Object', {
//	
//	
//	/**
//	 * @constructs
//	 * @extends Ergo.core.Object
//	 * @param {Object} target
//	 */
//	_initialize: function(target) {
//		Ergo.events.Dispatcher.superclass._initialize.apply(this, arguments);
//		this.tree = new Ergo.ObjectTree({}, function(){ return {handlers:[]}; }, ['handlers']);
//		this.target = target;
//	},
//	
//	/**
//	 * Регистрируем событие.
//	 * 
//	 * reg(type, callback, target)
//	 */
//	reg: function(type, callback, target) {
//		var node = this.tree.ensure(type);
//		node.handlers.push({'callback': callback, 'target': target});
//		return this;
//	},
//	
//	/**
//	 * Убираем регистрацию события.
//	 * 
//	 * unreg(type)
//	 * unreg(callback)
//	 * unreg(type, callback)
//	 * unreg(target)
//	 */
//	unreg: function(arg, arg2) {
//		
//		if(arguments.length == 2){
//			var node = this.tree.get(arg);
//			// с одной стороны это очень "жадный" способ удаления, а с другой - убирает некорректно зарегистрированных слушателей
//			node.handlers = Ergo.filter(node.handlers, Ergo.ne.curry(arg2));
//		}
//		else if( $.isString(arg) ){
//			this.tree.del(arg);
//		}
//		else if( $.isFunction(arg) ){
//			// с одной стороны это очень "жадный" способ удаления, а с другой - убирает некорректно зарегистрированных слушателей
//			this.tree.traverse(function(node){
//				node.handlers = Ergo.filter(node.handlers, Ergo.ne.curry(arg));
//			});
//		}
//		else {
//			this.tree.traverse(function(node){
//				node.handlers = Ergo.filter(node.handlers, function(h) { return (h.target != arg); });
//			});
//		}
//		
//		return this;		
//	},
//	
//	/**
//	 * Инициируем событие.
//	 * 
//	 * fire(type, event)
//	 * 
//	 * type - тип события в формате тип_1.тип_2 ... .тип_N
//	 * 
//	 */
//	fire: function(type, event, baseEvent) {
//		
//		// "ленивая" генерация базового события
//		if(arguments.length == 1) 
//			event = new Ergo.events.Event();
//		else if( $.isPlainObject(event) ){
//			event = new Ergo.events.Event(event, baseEvent);
//		}
//		
//		var self = this;
//		
//		// получаем узел указанного типа
//		var node0 = this.tree.get( type );
//		// обходим всех потомков и вызываем все обработчики событий
//		this.tree.traverse(function(node){
//			Ergo.each(node.handlers, function(h){
//				h.callback.call(h.target || self.target, event);
//			});
//		}, node0);
//		
//		return this;
//	},
//	
//	unreg_all: function(){
//		this.tree = new Ergo.ObjectTree({}, function(){ return {handlers:[]}; }, ['handlers']);		
//	}
//	
//	
//});




//Ergo.event_bus = new Ergo.events.Observer();




/**
 * 
 * @mixin
 * 
 */
Ergo.Observable = {
	
	construct: function(o) {
	
		this.events = new Ergo.events.Observer(this);
		
//		var o = this.options;
				
	},
	
	
	post_construct: function(o) {
		
		var regexp = /^on\S/;
		for(var i in o){
			if(regexp.test(i)){
				var name = i.charAt(2).toLowerCase() + i.slice(3);
				var chain = ( !$.isArray(o[i]) ) ? [o[i]] : o[i];
				for(var j = 0; j < chain.length; j++) {
					this.events.reg( name, chain[j] );
				}
			}
		}
		
	} 
	
};




//= require "events"


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
		plugins: [Ergo.Observable],
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
			else this.id = id;
		}
		else if(arguments.length == 3) {
			this.id = id;
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
		this.entries = $.isArray(val) ? new Ergo.core.Array() : new Ergo.core.Collection();
		
		if(!o.lazy) {
			Ergo.each(val, function(v, i){	self.entry(i); });
		}
		
	},
	
	
	_destroy: function() {
		
		this.del();
		
		// очищаем регистрацию обработчиков событий
		this.events.unreg_all();
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
			if('id' in this) {
				v = v ? v[this.id] : undefined;
			}
		} 
		else {
			if (this.source instanceof Ergo.core.DataSource) {
				('id' in this) ? this.source._val()[this.id] = v : this.source._val(v);
	  	}
			else {
				('id' in this) ? this.source[this.id] = v : this.source = v;
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
	 * @param {Numbre|String} [i] ключ
	 * @returns {Any}
	 */
	get: function(i) {
		if(i === undefined){
			// var v = (this.source instanceof Ergo.core.DataSource) ? this.source.get() : this.source;
			// if('id' in this) v = v[this.id];
			// return v;
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
						
						

			this.entries
				.filter(function(e){
					//FIXME упрощенная проверка присутствия ключа
					return (newValue && newValue[e.id] === undefined);
				})
				.each(function(e){	
					e._destroy(); 
				});


			if(this.entries.is_empty())
				this.entries = $.isArray(newValue) ? new Ergo.core.Array() : new Ergo.core.Collection();

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
			
			
			this.events.fire('value:changed', {'oldValue': oldValue, 'newValue': newValue});
			
			if(this.source instanceof Ergo.core.DataSource)
				this.source.events.fire('entry:changed', {entry: this});
			
			this._changed = true;
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
			
		if($.isArray(values)) {
			
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
					e.id = i+1;
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
				this.source.del(this.id);
			else
				throw new Error('Unable to delete root data src');
		}
		else {
			var value = this.get();

			var deleted_entry = this.entry(i);
//			var deleted_entry = this.entries.remove_at(i);
			var deleted_value = value ? value[i] : undefined;
			
			
			this.entries.remove_at(i);
			
			if($.isArray(value)) {
				value.splice(i, 1);
				for(var j = i; j < value.length; j++)
					this.entries.get(j).id = j;
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
		
		var self = this;
		var values = this.get();
//		var keys = this.keys(this.options.filter);
		
		var criteria = filter || this.options.filter;

		Ergo.each(values, function(v, i){
			if(!criteria || criteria.call(self, v, i)) {
				callback.call(self, self.entry(i), i, v);
			}
		});
		
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







/**
 * Менеджер состояний
 * 
 * 
 * @class
 * @name Ergo.core.StateManager
 * @extends Ergo.core.Object
 */
Ergo.declare('Ergo.core.StateManager', 'Ergo.core.Object', /** @lends Ergo.core.StateManager.prototype */{
	
	
	_initialize: function(widget) {
		this._widget = widget;
		this._current = {};
		this._states = {};
		this._transitions = [];
		this._exclusives = {};
	},
	
	
	transition: function(from, to, value) {
		
		var t = this._transitions;
//		var s = name.replace(/\s/g, '');
//		if(!t[from]) t[from] = {};
//		t[from][to] = value;
		t.push({
			from: from,
			to: to,
			action: value
		});
		
	},
	
	
	exclusive: function(name, g) {
		
//		var excl_template = new RegExp('^'+name+'.*$');
		var excl_template = new RegExp('^'+name+'$');

		var group = this._exclusives[g];
		if(!group) group = [];
		this._exclusives[g] = group;
		
		group.push(excl_template);		
	},
	
	exclusive_group: function(g, exclusives) {		
		for(var i = 0; i < exclusives.length; i++)
			this.exclusive(exclusives[i], g);
	},
	
	
	
	state: function(name, value) {
		
		// парсим код состояния
		var i = name.indexOf(':');
		if( i == 0 ) {
			var g = name.substr(1);
			this.exclusive_group(g, value);
		}
		else {
			if( i > 0 ) {
				var g = name.substr(i+1);
				name = name.substr(0, i);
				
				this.exclusive(name, g);
			}
		
			this._states[name] = value;
		}
	},
	
	
	
	/**
	 * Установка состояния
	 *  
	 * @param {String} to имя состояния
	 * @param {Object} data данные, связанные с состоянием
	 * @returns {$.Deferred}
	 */
	set: function(to, data) {
		
		// Если состояние уже установлено, то ничего не делаем
		if(to && (to in this._current))
			return $.when({});

		
		
		var self = this;
		var transitions = this._transitions;
		var states = this._states;//this._widget.options.states;
		
		var from = [];
		
		// 1.
		var def = null;
		var deferreds = [];
		
		for(var i = 0; i < transitions.length; i++) {
			var t = transitions[i];
			if(t.to == to && t.from in this._current) {
				var result = t.action.call(this._widget);
				// Если результат является Deferred-объектом, то сохраняем его в цепочку
//				if(result && result.done)
				deferreds.push(result);
//					deferred = deferred ? $.when(deferred, result) : $.when(result);
				
				from.push(t.from);
			}
			else if(t.to == to && t.from == '*'){
				def = t;
			}
		} 
		// for(var i in this._current) {
			// if(i in transitions && to in transitions[i]) {
				// transitions[i][to].call(this._widget);
				// from.push(i);
			// }
		// }
		
		for(var g in this._exclusives) {
			if( this._is_exclusive(to, g) ) {
				
				for(var i in this._current)
					if(this._is_exclusive(i, g))
						this.unset(i);
				
			}			
		}
		
		
		
		
		
		if(from.length == 0 && def) {
			var result = def.action.call(this._widget);
			
//			if(result && result.done)
			deferreds.push(result);
//				deferred = $.when(result);
		}
		


		
		
		// if(deferreds.length == 0)
			// deferreds.push({});
		
		
		//FIXME хак, если Deferred не определен
		// if(deferred == null) {
			// deferred = $.Deferred();
			// deferred.resolve();
		// }		
		
		
		
		return $.when.apply($, deferreds).done(function() {
			
			// 2. удаляем все исходные состояния переходов из списка активных состояний
			for(var i = 0; i < from.length; i++) {
				delete self._current[from[i]];
			}			
			
			// 3. включаем итоговое состояние
			self._state_on(to, data);
			self._current[to] = from;
			
			// 4. оповещаем виджет, что состояние изменилось
			self._widget.events.fire('stateChanged', {from: from, to: to, data: data});
			
		});
		
//		return deferred;
	},
	
	
	
	_state_on: function(s, data) {
		
		var self = this;
		var states = this._states;//this._widget.options.states;
		
		if(s in states) {
			var val = states[s];
			
			// если состояние определено строкой, то строка содержит имя устанавливаемого класса
			if($.isString(val))
				this._widget.el.addClass(val);
			// если состояние определено массивом, то первый элемент содержит состояние ON, а второй элемент состояние OFF
			else if($.isArray(val)) {
				if(val.length > 0) {
					$.when( val[0].call(this._widget, true, data) ).done(function(add_cls) {
						if(add_cls !== false)				
							self._widget.el.addClass(add_cls || s);					
					});
				}
			}
			// в иных случаях ожидается, что состояние содержит функцию
			else {
				$.when( val.call(this._widget, true, data) ).done(function(add_cls) {
					if(add_cls !== false)				
						self._widget.el.addClass(add_cls || s);					
				});
			}
		}
		else {
			this._widget.el.addClass(s);
		}

		this._widget.events.fire('stateChanged', {state: s, op: 'on', data: data});		
	},
	
	
	
	
	
	_state_off: function(s) {

		var self = this;
		var states = this._states;//this._widget.options.states;
		
		if(s in states) {
			var val = states[s];
			
			// если состояние определено строкой, то строка содержит имя устанавливаемого класса			
			if($.isString(val))
				this._widget.el.removeClass(val);
			// если состояние опрелено массивом, то первый элемент содержит состояние ON, а второй элемент состояние OFF
			else if($.isArray(val)) {
				if(val.length > 1) {
					$.when( val[1].call(this._widget, false) ).done(function(rm_cls) {
						if(rm_cls !== false)
							self._widget.el.removeClass(rm_cls || s);					
					});					
				}
			}
			// в иных случаях ожидается, что состояние содержит функцию
			else {
				$.when( val.call(this._widget, false) ).done(function(rm_cls) {
					if(rm_cls !== false)				
						self._widget.el.removeClass(rm_cls || s);
				});
				
//				var rm_cls = val.call(this._widget, false);
//				if(rm_cls !== false)				
//					this._widget.el.removeClass(s);				
			}
		}
		else {
			this._widget.el.removeClass(s);
		}		
		
		this._widget.events.fire('stateChanged', {state: s, op: 'off'});
				
	},
	
	
	
	_is_exclusive: function(s, g) {
		
		var group = this._exclusives[g];
		
		for(var i = 0; i < group.length; i++) {
			if(s.match(group[i])) return true;
		}
		
		return false;
	},

	
	/**
	 * Отключение состояния
	 *  
	 * @param {String} from имя состояния
	 * @returns {$.Deferred}
	 */
	unset: function(from) {
		
		// Если состояние не установлено, то ничего не делаем
		if(from && !(from in this._current)) {
			return $.when({});			
		}
		
		var self = this;
		var transitions = this._transitions;
		var states = this._states; //this._widget.options.states;
		
		var to = [];
		
		// 1. Вызываем 
		var def = null;
		var deferreds = [];
		
		for(var i = 0; i < transitions.length; i++) {
			var t = transitions[i];
			if(t.from == from && t.to) {
				var result = t.action.call(this._widget);
				// Если результат является Deferred-объектом, то сохраняем его в цепочку
//				if(result && result.done)
//					deferred = $.when(result);
				deferreds.push(result);
				
				to.push(t.to);
			}
			else if(t.from == from && t.to == '*') {
				def = t;
			}
		}
		// for(var i in transitions[from]) {
			// transitions[from][i].call(this._widget);
			// to.push(i);
		// }
		
		if(to.length == 0 && def) {
			var result = def.action.call(this._widget);
			
			deferreds.push(result);
			// //FIXME
			// if(result && result.done)
				// deferred = $.when(result);
		}
		


		// 2. 
		for(var i = 0; i < to.length; i++) {
			self._current[to[i]] = [from];
			if(to[i] in states) self._state_on(to[i]); //states[to[i]].call(self._widget);
		}
		
		// 3.
		self._state_off(from);
		
		delete self._current[from];		
		

		// 3.
//		this.state_off(from);
		

		
		//FIXME хак, если Deferred не определен
		// if(deferred == null) {
			// deferred = $.Deferred();
			// deferred.resolve();
		// }
		
		
		// deferred.done(function() {
// 			
		// });
		
		
//		return deferred;
		return $.when.apply($, deferreds);
	},
	
	
	
	/**
	 * Переключение состояния
	 *  
	 * Состояние устанавливается, если флаг равен true и отключается, если флаг false
	 * 
	 * @param {String} name имя состояния
	 * @param {boolean} sw флаг переключения
	 */
	toggle: function(name, sw) {
		
		if(arguments.length == 1) sw = !this.is(name);
		
		return sw ? this.set(name) : this.unset(name);

//		return this;
	},
	
	
	
	/**
	 * Установка состояния и отключение других состояний, попадающих под шаблон
	 * 
	 * @deprecated
	 * 
	 * @param {String} name имя состояния
	 * @param {Array|String|RegExp} unset_template шаблон
	 */
	only: function(name, unset_template) {

		var states_to_unset = [];

		if(unset_template) {
			
			if($.isArray(unset_template))
				states_to_unset = unset_template;
			else {
				if($.isString(unset_template))
					unset_template = new RegExp('^'+unset_template+'.*$');
				
				for(var i in this._current)
					if(i.match(unset_template)) states_to_unset.push(i);				
			}
		}
		else {
			for(var i in this._current)
				if(i != name) states_to_unset.push(i);
		}

		// очищаем состояния, выбранные для удаления
		for(var i = 0; i < states_to_unset.length; i++) 
			this.unset(states_to_unset[i]);

		// если состояние еще не установлено, то устанавливаем его
		if(!this.is(name))
			this.set(name);	
		
		return this;		
	},	
	
	
	
	/**
	 * Очистка всех состояний
	 *  
	 */
	clear: function() {
		this._current = {};
		return this;
	},
	
	
	/**
	 * Проверка, установлено ли состояние
	 *  
	 * @param {String} name имя состояния
	 */
	is: function(name) {
		return (name in this._current);
	}
	
	
	
});











/**
 * Плагин, добавляющий StateManager к объекту
 *
 * @mixin  
 */
Ergo.Statable = {
	
	
	
	construct: function(o) {

		this.states = new Ergo.core.StateManager(this);
		
	//	var o = this.options;
		var self = this;
		
		if('states' in o){
			for(var i in o.states)
				this.states.state(i, o.states[i]);
			// настраиваем особое поведение состояния hover
			if('hover' in o.states){
				this.el.hover(function(){ self.states.set('hover'); }, function(){ self.states.unset('hover'); });
			}
		}
		
		if('transitions' in o) {
			for(var i in o.transitions) {
				var t = o.transitions[i];
				if($.isPlainObject(t)) {
					//TODO
				}
				else {
					var a = i.split('>');
					if(a.length == 1) a.push('');
					this.states.transition($.trim(a[0]) || '*', $.trim(a[1]) || '*', t);					
				}
			}
		}
	
	}
	
};














/**
 * @class
 * @name Ergo.core.Layout
 * @param {Object} opts
 */
Ergo.declare('Ergo.core.Layout', 'Ergo.core.Object', /** @lends Ergo.core.Layout.prototype */ {
	
	defaults: {
//		updateMode: 'auto'
	},
	
/*	
	_initialize: function(o){
//		this._super(o);
		Ergo.core.Layout.superclass._initialize.call(this, o);
		
//		var o = this.options = {};
//		
//		Ergo.hierarchy(this.constructor, function(clazz){
//			if('defaults' in clazz) Ergo.smart_override(o, clazz.defaults);
//		});
//		Ergo.smart_override(o, this.defaults, opts);
		
	},
*/	
	
	/**
	 * ассоциация компоновки с виджетом
	 * @param {Object} c виджет
	 */
	attach: function(c) { 
		
		var o = this.options;
		
		this._widget = c;
				
		if('name' in o) this._widget.el.attr('layout', o.name);
		if('cls' in o) this._widget.el.addClass(o.cls.join(' '));

		this.el = this._widget.el;
		
		if(o.html){
			var html = $(o.html);
			this.el = (o.htmlSelector) ? $(o.htmlSelector, html) : html;
			this._widget.el.append(html);
		}
		
	},
	
	/**
	 * удаление ассоциации компоновки с виджетом
	 */
	detach: function() { 
//		if('containerCls' in this.options) this.container.el.removeClass(this.options.containerCls);
		if('name' in this.options) this._widget.el.attr('layout', undefined);
		if('cls' in o) this._widget.el.removeClass(o.cls.join(' '));
		delete this._widget; 
	},
	
	
	
	/**
	 * Оборачивание элемента.
	 * 
	 * @param {Ergo.core.Widget} item виджет
	 * @return {jQuery} jQuery-объект, содержащий обертку и элемент виджета
	 * 
	 */
	wrap: function(item) {
		return item.el;
	},
	
	
	/**
	 * jQuery-элемент, куда будут добавляться виджеты
	 *  
	 */
	select: function(item) {
		return this.el;
//		var o = this.options;
//		return (o.elementSelector) ? o.elementSelector.call(this, item) : this.el; 
	},






	/**
	 * добавление нового элемента-виджета в компоновку
	 * 
	 * @param {Ergo.core.Widget} item виджет
	 * @param {int} index порядковый номер (может быть не определен)
	 * @param {int} weight вес группы
	 */
	add: function(item, index, weight) {
		
//		var selector = item.options.layoutSelector;
		
//		var el = this.el;

		var o = this.options;

		// выбираем элемент, куда будет добавляться элемент-виджет
		var el = (o.selector) ? o.selector.call(this, item) : this.select(item);

		// если вес не указан, то вес считается равным 0
		var weight = item.options.weight || 0;
		
		item._weight = weight;

		// создаем обертку (если она необходима) для элемента-виджета
		var item_el = (o.wrapper) ? o.wrapper.call(this, item) : this.wrap(item);
		
		
		
		// экспериментальный код
		if(item.options.wrapper) {
			
			if(item_el == item.el) {
				item_el = $('<div/>').append(item.el);
			}
			
			item.wrapper = $.ergo( Ergo.deep_override({etype: 'widgets:widget', html: item_el, autoRender: false}, item.options.wrapper) );
			item.wrapper._weight = weight;
			
		}
		
		
		if(item_el != item.el) {
			item._wrapper = item_el;			
		}
				
		
		
//		item_el.data('weight', weight);

		item_el[0]._index = index;

		item_el[0]._weight = weight;

		item_el[0]._group = item.options.group;
		
		
//		var elements = el.contents();
		var elements = el[0].childNodes;// new Ergo.core.Array(el[0].childNodes);
		
		// фильтруем список элементов
		if(item.options.group) {
			var filtered = [];
			for(var j = 0; j < elements.length; j++) {
				var elem = elements[j];
				if( elem._ergo && elem._ergo.options.group == item.options.group ) filtered.push(elem);
			}
			elements = filtered;
			// elements = Ergo.filter(elements, function(i, elem){
				// return (elem._ergo) ? (elem._ergo.options.group == item.options.group) : false;
			// });
		}
		
		
		
		
		
		
		// если индекс не определен, то элемент должен быть добавлен последним в свою группу
		if(index == null) {


			// обходим все элементы контейнера в поисках первого с большим весом
			var after_el = null;
			
			// немножко эвристики
			var last = $(elements[elements.length-1]);
			
			
			if(elements.length == 0) {
				el.append( item_el );
			}
			else if(last[0]._weight <= weight) {//} && last[0]._index < index){
				last.after(item_el);
			}
			else {
			
				for(var j = 0; j < elements.length; j++) {
					var elem = elements[j];
					var w = elem._weight;// $(elem).data('weight');
					if(w > weight) {
						after_el = $(elem);
						break;
					}				
				}
				// elements.each(function(i, elem){
					// var w = elem._weight;// $(elem).data('weight');
					// if(w > weight) {
						// after_el = $(elem);
						// return false;
					// }
				// });
	
				if(after_el)
					after_el.before( item_el );
				else if(elements.length)
					/*elements.last()*/last.after( item_el );
				else
					el.append( item_el );
			}			
			
			

			
			// var after_el = null;
			// el.children().each(function(i, elem){
				// var w = $(elem).ergo();
				// if(w && w._weight > weight) {
					// after_el = $(elem);
					// return false;
				// }
			// });
// 
			// if(after_el)
				// after_el.before( item_el );
			// else
				// el.append( item_el );
		}
		// else if(index === 0) {
			// var before_a = [];
			// for(var i = elements.length-1; i >= 0; i--) {
				// var w = $(elements[i]).ergo();
				// if(w && w._weight < weight) before_a.push($(elements[i]));				
			// }
// 
			// if(before_a.length > 0)
				// before_a[before_a.length-1].after( item_el );
			// else if(elements.length)
				// elements.first().before( item_el );
			// else
				// el.prepend( item_el );
		// }
		else {
			
//			var elements = el[0].childNodes;// new Ergo.core.Array(el[0].childNodes);
			
			
			// немножко эвристики
			var last = $(elements[elements.length-1]);

			// if(elements.length > 0)
				// console.log('last ', last[0]);
//			console.log('--1--');
//			console.log(elements.length);
//			console.log(elements[elements.length-1]);
//			if(elements.length != 0)
//			console.log(last[0], last[0]._weight, last[0]._index);
//			console.log('--2--');

//			console.log(index);

			if(elements.length == 0) {
				el.append( item_el );
//				console.log('---1---');
			}
			else if(last[0]._weight == weight && last[0]._index < index){
				last.after(item_el);
//				console.log('---2---');
			}
			else {	

//				console.log('---3---', index, last[0]._index);

//				console.log(index, 'layout');
			
				var arr = [];
				var before_el = null;
				var after_el = null;
	//			this.container.children.each(function(it){
				for(var k = 0; k < elements.length; k++) {
//				elements.each(function(k, child){
					var child = elements[k];
					it = $(child).ergo();
					if(!it || it == item) return; //если элемент еще не отрисован, это вызовет ошибку
					if(it._weight == weight) arr.push(it);//.el);
					else if(it._weight <= weight) before_el = it.el;
					else if(!after_el /* || it._weight > after_el._weight*/) after_el = it.el;
				}//);


	
	
				for(var i = 0; i < arr.length; i++) {
					if( arr[i]._index >= index  ) {
						if(!after_el) after_el = arr[i].el;
					}
					else {
						before_el = arr[i].el;
					}
//					(arr[i]._index > index) ? after_el = arr[i].el : before_el = arr[i].el;
				}
	
	//			if( !arr[index] ) {
	//				before_el = arr[index-1] | before_el;
	
				// console.log(index);
				// console.log(arr);
//				console.log(before_el, after_el);
	
	
	
				if(before_el)
					before_el.after( item_el );
				else if(after_el)
					after_el.before( item_el );
				else if(elements.length)
					/*elements.last()*/last.after( item_el );
				else
					el.append( item_el ); //FIXME это уже не нужно				
				
				

				// }
				// else {
					// arr[index].before(item_el);
				// }
			}
			
			
			
		}
		// else if(index == 0)
			// el.prepend( item.el );
		// else if($.isNumber(index))
			// el.children().eq(index-1).before(item.el);
		// else
			// index.el.before(item.el);
		
		item._rendered = true;
		
		// deprecated
//		if('itemCls' in this.options) item.el.addClass(this.options.itemCls);
//		if('itemStyle' in this.options) item.el.css(this.options.itemStyle);
	},
	
	
	/**
	 * удаление элемента-виджета из компоновки
	 * @param {Object} item
	 */
	remove: function(item) {
		
		if(item._wrapper) {
			item._wrapper.remove(); //?
			
			if(item.wrapper)
				item.wrapper._destroy();
		}
		else
			item.el.remove(); //TODO опасный момент: все дочерние DOM-элементы уничтожаются
		
		item._rendered = false;
		
		if('itemCls' in this.options) item.el.removeClass(this.options.itemCls);
	},
	
	
	/**
	 * очистка компоновки от всех элементов (уничтожения дочерних элементов не происходит)
	 */
	clear: function() {
		this.el.empty(); //WARN еще опасный момент все дочерние DOM-элементы уничтожаются		
	},
	
	
	/**
	 * обновление компоновки (позиции, размеров элементов)
	 */
	update: function() {
		
		// AUTO WIDTH
		if(this._widget.options.autoWidth){
			
			var _el = this._widget.el;
			
			// если элемент не отображается - его не надо выравнивать
			if(!_el.not(':hidden')) return;
			
			// рассчитываем отступы
			var dw = 0;
			if(_el.is(':button')) dw = _el.outerWidth(true) - _el.outerWidth();
			else dw = _el.outerWidth(true) - _el.width();
			// скрываем элемент
			_el.hide();
			
			// ищем родителя, у которого определена ширина
			var w = 0;
			_el.parents().each(function(i, el){
				if(!w) w = $(el).width();
				if(w) return false;
			});
			
			if(_el.attr('autowidth') != 'ignore-siblings') {
				// обходим всех видимых соседей и получаем их ширину
				_el.siblings().not(':hidden').each(function(i, sibling){
					var sibling = $(sibling);
					if(sibling.attr('autoWidth') != 'ignore') 
						w -= sibling.outerWidth(true);
				});
			}
			
			// задаем ширину элемента (с учетом отступов), если она не нулевая
			if(w - dw) 
				_el.width(w - dw);
				
			// отображаем элемент
			_el.show();
		}
		
		// AUTO HEIGHT
		if(this._widget.options.autoHeight) {//} &&  this.container.options.autoHeight != 'ignore'){

			if(!this.el.is(":visible")) return;
			if(this.el.attr('autoHeight') == 'ignore') return;

			var debug = (this._widget.debug == 'autoheight');
			
			this.el.height(0);
			
			
//			this.el.hide();
			
			var dh = 0;
			var h = 0;
			this.el.parents().each(function(i, el){
				el = $(el);
				var w = el.ergo();
				if((w && w.options.height) || el.attr('autoHeight') == 'true' || el.attr('autoHeight') == 'stop' || el.is('body')){
					h = el.height();
//					h = el[0].scrollHeight;
					return false;
				}
				else {
//					if(dh == 0) dh = el.height();
					if(el.attr('autoheight') != 'ignore-siblings') {
						dh += (el.outerHeight(true) - el.height());
						el.siblings().not('td, :hidden').each(function(i, sibling){
							sibling = $(sibling);
							if(sibling.attr('autoHeight') != 'ignore') 
								dh += sibling.outerHeight(true);
						});
					}
				}
			});
			
			
			if(Ergo.context.debug) console.log({h: h, dh: dh});
			
			dh += (this.el.outerHeight(true) - this.el.height());

			if(Ergo.context.debug) console.log({h: h, dh: dh});
			
			
			var self = this;
			
			// обходим все соседние элементы
			var h_ratio = 1;
			this.el.siblings().not('td').each(function(i, sibling){
				sibling = $(sibling);
				var ah = sibling.attr('autoHeight');
				// элемент видимый
				if(!ah) {
					if(sibling.is(':visible'))
						dh += sibling.outerHeight(true);
				}
				else if(ah != 'ignore-siblings' && ah != 'ignore') {
					h_ratio++;
					dh += sibling.outerHeight(true) - sibling.height();					
				}
			});

			// var h_ratio = 1;
// 
			// if(this.container.parent) {
// 
			// this.container.parent.children.each(function(sibling){
				// if(sibling == self.container) return;
				// var ah = sibling.options.autoHeight;
				// if(!ah) {
					// dh += sibling.el.outerHeight(true);
				// }
				// else if(ah != 'ignore-siblings') {
					// h_ratio++;
					// dh += sibling.el.outerHeight(true) - sibling.el.height();
				// }
			// });
// 
			// }

			// if(this.el.attr('autoheight') != 'ignore-siblings') {
				// this.el.siblings().not('td, :hidden').each(function(i, sibling){
					// sibling = $(sibling);
					// if(sibling.attr('autoHeight') != 'ignore') {
						// dh += sibling.outerHeight(true);
						// if(debug)	console.log({type: 'sibling', el: sibling, h: sibling.outerHeight(true)});
					// }
				// });
			// }




			if(Ergo.context.debug) console.log({h: h, dh: dh});
			
//			dh -= this.el.height()
			this.el.height((h - dh)/h_ratio);

//			this.el.show();
			
		}
		
		// AUTO FIT
		if(this._widget.options.autoFit === true){
			
			var dw = this.el.outerWidth() - this.el.width();
			var dh = this.el.outerHeight() - this.el.height();
			
			this.el.hide();
			
			var h = this._widget.options.height || 0;
			var w = this._widget.options.width || 0;
			this.el.parents().each(function(i, el){
				if(!h) h = $(el).height();
				if(!w) w = $(el).width();
				if(w && h) return false;
			});
			
			this.el.siblings().not(':hidden').each(function(i, el){
				w -= $(el).outerWidth(true);
			});

			this.el.width(w - dw);
			this.el.height(Math.floor(h - dh));		

			this.el.show();			
		}
		
		
	},
	
	/**
	 * обновление компоновки (порядка, количества элементов)
	 */
	rebuild: function() {},
	
	
	
	build: function() {
		
//		var render_list = [];
		
		// this._widget.children.each(function(item){
// 			
// 			
// 			
		// });
		
		
	}
	
	
	
}, 'layouts:default');






// Ergo.$layout = function(o, etype) {
	// return Ergo.object(o, 'layout:'+etype);
// };



/**
 *  Пространство имен для компоновок
 * @namespace
 */
Ergo.layouts = {};


Ergo.$layouts = Ergo.object;




/**
 * Общие опции виджетов
 * 
 * Опции:
 * 	`text` текстовое содержимое виджета
 * 	`innerText` текстовое соержимое тега
 * 	`innerHtml` html-содержимое тега
 * 	`opacity` непрозрачность 0..1
 * 	`width` ширина
 * 	`height` высота
 * 	`autoWidth` авто-ширина {@link Ergo.core.Layout}
 * 	`autoHeight` авто-высота {@link Ergo.core.Layout}
 * 	`autoBind` авто-связывание данных
 * 	`autoUpdate` авто-обновление данных
 * 	`tooltip` всплывающая подсказка
 * 	`id` HTML id (используется в поиске)
 * 	`name` имя виджета (используется в поиске)
 * 	`tabindex` HTML tabindex
 * 	`format` форматирование связанных данных 
 * 	`store` преобразование вводимых данных к формату связанных данных
 * 	`hidden` скрытие элемента
 * 	
 * 
 * @mixin
 */
Ergo.WidgetOptions = {


//	getText: function() {	return this.layout.el.text();	},
	get_width: function() {	return this.el.width();	},
	get_height: function() {	return this.el.height();	},
	get_name: function() { return this.options.name || this._key || this._index; },
	
	
	
	set_text: function(v) { 
		if(this.children.size() == 0)
//			this.layout.el.text( v == null ? '': v ); 
			this.layout.el[0].textContent = ( v == null ? '': v ); 		 
		else if(this.content)
			this.content.opt('text', v == null ? '': v);
		else
//			this.layout.el.text( v == null ? '': v );
 			this.layout.el[0].textContent = ( v == null ? '': v ); 		 

	},
	set_innerText: function(v) {	this.layout.el.text(v); },
	set_innerHtml: function(v) {	this.layout.el.html(v); },
	set_opacity: function(v) {
		if($.support.opacity) 
			this.el.css('opacity', v);
		else {
			this.el.css('filter', 'Alpha(opacity:' + (v*100.0) + ')');
			this.el.css('-ms-filter', 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (v*100.0).toFixed() + ')');				
		}				
	},
	set_width: function(v) { this.el.width(v); },
	set_height: function(v) { this.el.height(v); },
	set_autoWidth: function(v) { v ? this.el.attr('autoWidth', v) : this.el.removeAttr('autoWidth'); },
	set_autoHeight: function(v) { 
		if(v) {
			this.el.attr('autoHeight', v);
			if(v === true || v == 'ignore-siblings')
				this.el.css('overflow-y', 'auto');
		}
		else {
			this.el.removeAttr('autoHeight');
			this.el.css('overflow-y', '');			
		}
	},
	set_tooltip: function(v) { this.el.attr('title', v); },
	set_id: function(v) { this.el.attr('id', v); },
	set_tag: function(v) { this.tag = v; },
	set_name: function(v) { this._name = v; },
//			'name': function(v) { this.name = v; },
	set_tabindex: function(v) { this.el.attr('tabindex', v); },			
	set_format: function(v) {
		if($.isString(v)) this.options.format = Ergo.format_obj.curry(v);
	},
	set_hidden: function(v) {
		(this._wrapper || this.el).css('display', v ? 'none' : '');
	}
	// setLead: function(v) { this.layout.el.prepend(v); },
	// setTrail: function(v) { this.layout.el.append(v); }
	
};


//= require "object"
//= require "events"

/**
 * Коллекция пар ключ/значение
 *
 * Представляет собой обертку для объектов javascript-класса Object
 * 
 * @class
 * @extends Ergo.core.Object
 *  
 */
Ergo.core.Collection = Ergo.declare('Ergo.core.Collection', 'Ergo.core.Object', /** @lends Ergo.core.Collection.prototype */{
	
	defaults: {
		plugins: [Ergo.Observable]
	},
	
	_initialize: function(src, options) {
		this._super(options);
//		Ergo.core.Collection.superclass._initialize.call(this, options);
		this.src = src || {};
	},
	
	
	create: function(v) {
		return new Ergo.core.Collection(v);
	},
	
	
	/**
	 * Установка значения
	 * @param {Object} i ключ
	 * @param {Object} item значение
	 */
	set: function(i, item) {
		if(arguments.length == 1) {
			item = i;
			var old = this.src;
			this.src = item;
//			this.events.fire('value:changed', {'value': item, 'oldValue': old});
		}
		else {
			var old = this.src[i];
			this.src[i] = item;
//			this.events.fire('item:changed', {'item': item, 'index': i, 'oldItem': old});			
		}
	},
	
	/**
	 * Удаление значения по ключу
	 * @param {Object} i ключ
	 */
	unset: function(i) {
		this.remove_at(i);
	},
	
	/**
	 * Получение значения по ключу
	 * @param {Object} i
	 */
	get: function(i) {
		return this.src[i];
	},
	
	/**
	 * Добавление нового значения
	 * @param {Object} item значение
	 * @param {Object} [i] ключ
	 * 
	 * Аналогично по работе методу set
	 */
	// add: function(item, i) {
		// this.src[i] = item;
// //		this.events.fire('item:add', {'item': item});
	// },



	/**
	 * Удаление значения по ключу
	 * @param {Object} i ключ
	 */
	remove_at: function(i) {
		var item = this.src[i];
		delete this.src[i];
		return item;
		
//		this.events.fire('item:removed', {'item': item});
	},
	
	/**
	 * Удаление значения
	 *
	 * Для удаления используется метод remove_at
	 *
	 * @param {Object} item значение
	 */
	remove: function(item) {
		this.remove_at(this.key_of(item));
		return item;
	},

	/**
	 * Удаление значения по условию
	 *
	 * Для удаления используется метод remove_at
	 *
	 * @param {Object} criteria функция-условие
	 * 
	 * Значение удаляеся, если результат, возвращаемый criteria равен true 
	 */
	remove_if: function(criteria) {
		var keys = Ergo.filter_keys(this.src, criteria);
		keys.sort(Ergo.sort_numbers).reverse();
		var removed = [];
		for(var i = 0; i < keys.length; i++) removed.push( this.remove_at(keys[i]) );
		return removed;
	},
	

	remove_all: function() {
		for(i in this.src)
			this.remove_at(i);
	},
	
	
	/**
	 * Очистка коллекции от всех значений
	 */
	clear: function() {
		this.remove_all();
//		this.src = {};
	},
	
	/**
	 * Последовательный обход всех значений
	 * @param {Object} callback
	 * @param {Object} delegate
	 */
	each: function(callback, delegate) {
		return Ergo.each(this.src, callback, delegate);
	},
	
//	ensure: function(i) {
//		
//	},
	
	/**
	 * Поиск первого элемента, удовлетворяющего критерию
	 */
	find: function(criteria) {
		return Ergo.find(this.src, criteria);
	},
	
	/**
	 * Поиск всех элементов, удовлетворяющих критерию
	 */
	find_all: function(criteria) {
		return Ergo.filter(this.src, callback);
	},
	
	
	
	//
	//TODO методам filter и map имеет смысл возвращать коллекцию, а не значение
	//
	
	/**
	 * Фильтрация элементов
	 */
	filter: function(callback) {
		return this.create( Ergo.filter(this.src, callback) );
	},
	
	/**
	 * Отображение элементов
	 */
	map: function(callback) {
		return this.create( Ergo.map(this.src, callback) );		
	},
	
	/**
	 * Проверка вхождения значения в коллекцию
	 * @param {Object} criteria
	 */
	includes: function(criteria) {
		return Ergo.includes(this.src, callback);
	},

	is_include: function(criteria) {
		return Ergo.includes(this.src, callback);
	},

	
	/**
	 * Размер коллекции
	 */
	size: function() {
		var n = 0;
		for(var i in this.src) n++;
		return n;
	},
	
	count: function() {
		return this.size();
	},
	
	/**
	 * Проверка, является ли коллекция пустой
	 */
	is_empty: function() {
		return this.size() == 0;
	},
	
	/**
	 * Получение ключа элемента
	 * @param {Object} item
	 */
	key_of: function(item) {
		return Ergo.key_of(this.src, item);
	},
	
	/**
	 * Вызов для всех элементов коллекции указанного метода 
	 *
	 * @param {Object} m
	 * @param {Object} args
	 */
	apply_all: function(m, args) {
		Ergo.apply_all(this.src, m, args);
	},
	
	
	/**
	 * Проверка наличия элемента с указанным ключом
	 * @param {Object} i ключ
	 */
	has_key: function(i) {
		return (i in this.src);
	},
	
	/**
	 * Список всех ключей в коллекции
	 */
	keys: function() {
		var k = [];
		for(var i in this.src) k.push(i);
		return k;
	}
	
});









//= require "collection"

/**
 * Коллекция упорядоченных значений
 *
 * Представляет собой обертку для объектов javascript-класса Array
 *
 * @class
 * @extends Ergo.core.Collection
 * 
 */
Ergo.core.Array = Ergo.declare('Ergo.core.Array', 'Ergo.core.Collection', /** @lends Ergo.core.Array.prototype */{
	
	_initialize: function(src, options) {
		this._super(src || [], options);
//		Ergo.core.Array.superclass.__initialize.call(this, src || [], options);
//		this.src = src || [];
//		Ergo.Observable.call(this);
//		this.events = new Ergo.events.Dispatcher();
	},	
	
	
	create: function(v) {
		return new Ergo.core.Array(v);
	},
	
	
	/**
	 * Добавить новый элемент
	 * @param {Object} item
	 * @param {Object} i
	 */
	add: function(item, i) {
		if(i == null) {
			this.src.push(item);
			i = this.src.length-1;
		}
		else {
			this.src.splice(i, 0, item);			
		}
			
//		this.events.fire('item:added', {'item': item, 'index': i});
		return i;
	},
	
	
	/**
	 * Удалить элемент по индексу
	 * @param {Object} i
	 */
	remove_at: function(i) {
		var item = this.src[i];
		this.src.splice(i, 1);
		return item;
//		this.events.fire('item:removed', {'item': item});
	},
	
	
	remove_all: function() {
		while(this.src.length)
			this.remove_at(0);
	},

	
	
	size: function() {
		return this.src.length;
	},
	
	// clear: function() {
		// this.src = [];
	// },
	
	/**
	 * Первый элемент коллекции
	 */
	first: function() {
		return this.src[0];
	},
	
	/**
	 * Последний элемент коллекции
	 */
	last: function() {
		return this.src[this.src.length-1];
	},
	
	keys: function() {
		var k = [];
		for(var i = 0; i < this.src.length-1; i++) k.push(i);
		return k;
	},
	
	sort: function(comparator) {
		this.src.sort(comparator);
	},
	
	copy: function() {
		return this.create(this.src.slice(0));
	}
	
	
});






//= require "array"



/*
 * Массив виджетов
 * 
 * 
 * @class
 * @name Ergo.core.WidgetArray
 * @extends Ergo.core.Array
 * 
 * 
 */
Ergo.declare('Ergo.core.WidgetChildren', 'Ergo.core.Array', /** @lends Ergo.core.Array.prototype */{
	
	defaults: {
		plugins: [Ergo.Observable]
	},
	
	
	_initialize: function(w, o) {
//		this._super(null, o);
		
//		Ergo.core.WidgetArray.superclass._initialize.call(this, null, o);
		
		this.options = o;
		this.src = [];
//		this.events = new Ergo.events.Observer(this);
		
		this.autobinding = true;
		
		this.widget = w;
	},
	
	
	factory: function(o, type) {
		var default_opt = this.options.defaultOpt || 'text';
		if($.isString(o)) {
			var v = o;
			o = (this.options.shortcuts || {})[v];
			if(!o) {
				o = {}; 
				o[default_opt] = v;//{text: o};
			}
		}
		else if($.isArray(o)) o = {items: o};
		var default_child = 'default' + type[0].toUpperCase() + type.substr(1);
		return $.ergo( [this.options[default_child], o] );
//		return $.ergo( Ergo.smart_override({}, this.options[default_child], o) );
	},
	
	

	add: function(item, i, type) {		
		
//		var key;
		var w = this.widget;
		
//		item = w.factory(item);
		
		// если не определен тип компонента
		if(type == undefined) {
			// если не определен ключ компонента
			type = (i && $.isString(i)) ? 'component' : 'item';
		}
		
//		type = type || 'item';

		// создаем виджет с помощью фабрики элементов
		if(!(item instanceof Ergo.core.Widget))
			item = (w.options[type+'Factory'] || this.factory).call(w, item, type);
			
		item._type = type;

		// для элементов с текстовыми ключами (компонентов) сохраняем ключ в поле _key
		if(i && $.isString(i)) {
			item._key = i;
			i = undefined;
		}
		else {
			item._index = i;
		}
		
		// определяем поле parent
		item.parent = w;
		
		// добавляем элемент в компоновку с индексом i (для компонентов он равен undefined)
		if(item.options.autoRender === true)
			w.layout.add(item, item._index);//i);

		// определяем индекс элемента в children 
		if(i != null && ('_index' in item)) {//item._index) {
			// FIXME здесь нужно немного эвристики
			// if(this.src[this.src.length-1]._index < item._index)
				// i = 
			for(i = this.src.length-1; i >= 0; i--) {
				if(('_index' in this.src[i]) && this.src[i]._index < item._index) {
//					i--;
//					i++;
					break;
				}
			}
			
			i++;
		}
		else if(i == null && ('_index' in item)) {
			// FIXME последний индекс лучше сохранять после пересчета
			item._index = 0;
			for(var j = this.src.length-1; j >= 0; j--) {
				if(this.src[j]._type == item._type) {
					item._index = this.src[j]._index + 1;
					break;
				}
			}
		}

//		var i0 = i;

		// добавляем элемент в коллекцию
//		i = this._super(item, i);
		i = Ergo.core.WidgetChildren.superclass.add.call(this, item, i);
		
//		console.log(i0 + ' > '+i);
		
		// обновляем свойство _index у соседних элементов
		for(var j = i+1; j < this.src.length; j++) {
			if(this.src[j]._index)
				this.src[j]._index++;
		}
//			this.src[j]._index = j;
		
		//FIXME скорее всего вызов метода show должен находиться не здесь
		// if(item.options.autoRender === true) {
			// if(item.options.showOnRender) item.show();
			// if(item.options.hideOnRender) item.hide();
		// }
		
		// для элементов с текстовыми ключами (компонентов) добавляем accessor
		if(item._key) {
			w[item._key] = item;
		}
		
		// выполняем иерархическое связывание данных (автобиндинг)
		if(w.data && !item.data && this.autobinding)
			item.bind(w.data, false, false);
		

		
//		console.log('item:add');
//		this.events.fire('item:add', {'item': item});
		
		return item;
	},
	
	remove_at: function(i) {
		
//		var key;
		var w = this.widget;		
		
		// // для компонентов определяем индекс через accessor
		// if($.isString(i)) {
// //			key = i;
			// i = w[i]._index;
		// }
		
		
//		var item = this._super(i); 
		var item = Ergo.core.WidgetChildren.superclass.remove_at.call(this, i);
		
		
//		if('hide' in item) item.hide();		
				
		// обновляем свойство _index у соседних элементов
		for(var j = i; j < this.src.length; j++) {
			if(this.src[j]._index)
				this.src[j]._index--;
		}
		
//			this.src[j]._index = j;
		
		// поля parent, _index и _key больше не нужны
		delete item.parent;
		delete item._index;

		if(item._key) {
			delete w[item._key];
			delete item._key;
		}

		
		// if(item.options.hideOnDestroy) {
			// item.hide().then(function(){ w.layout.remove(item); });
		// }
		// else {
			// удаляем элемент из компоновки	
		w.layout.remove(item); //FIXME
		// }			
		
		
//		this.events.fire('item:remove', {'item': item});
		
		return item;
	}
	
	
	// _destroy_all: function() {
		// while(this.src.length)
			// this.remove_at(0)._destroy();
	// }
	
//	find: function(i) {
//		return Ergo.core.ItemCollection.superclass.find.call(this, Ergo.utils.widget_filter(i));
//	}	
		
});









Ergo.declare('Ergo.core.WidgetComponents', 'Ergo.core.Array', {

	defaults: {
		plugins: [Ergo.Observable]
	},
	
	
	_initialize: function(w, o) {
//		this._super(null, o);
		
		this.options = o;
		
		this.src = [];
//		this.events = new Ergo.events.Observer(this);
		
		this._widget = w;
	},


	_source: function() {
		var result = {};
		var o = this.options;
		this._widget.children.each(function(c) { if(c._type == o.type) result[c._key] = c; });
		return result;
	},
	
	
	
	create: function(v) {
		return new Ergo.core.WidgetComponents(this._widget);
	},
	
	
	/**
	 * Установка значения
	 * @param {Object} i ключ
	 * @param {Object} item значение
	 */
	set: function(i, item) {
		if(i in this._widget)
			this.remove_at(i);
//			this._widget.children.remove_at(i);
		this._widget.children.add(item, i, this.options.type);
	},
	
	
	
	
	/**
	 * Получение значения по ключу
	 * @param {Object} i
	 */
	get: function(i) {
		return this._source()[i];
	},
	
	/**
	 * Добавление нового значения
	 * @param {Object} item значение
	 * @param {Object} [i] ключ
	 * 
	 * Аналогично по работе методу set
	 */
	// add: function(item, i) {
		// this.src[i] = item;
// //		this.events.fire('item:add', {'item': item});
	// },



	/**
	 * Удаление значения по ключу
	 * @param {Object} i ключ
	 */
	remove_at: function(i) {
//		return this._widget.children.remove_at(i);
		var removed = this._widget.children.remove_if(function(v) {	return v._key == i;	});
		
		return removed.length == 0 ? null : removed[0];
	},
	
	/**
	 * Удаление значения
	 *
	 * Для удаления используется метод remove_at
	 *
	 * @param {Object} item значение
	 */
	remove: function(item) {
		return this.remove_at(item._key);
	},

	/**
	 * Удаление значения по условию
	 *
	 * Для удаления используется метод remove_at
	 *
	 * @param {Object} criteria функция-условие
	 * 
	 * Значение удаляеся, если результат, возвращаемый criteria равен true 
	 */
	remove_if: function(criteria) {
		var keys = Ergo.filter_keys(this._source(), criteria);
		keys.sort(Ergo.sort_numbers).reverse();
		var removed = [];
		for(var i = 0; i < keys.length; i++) removed.push( this.remove_at(keys[i]) );
		return removed;
	},
	

	remove_all: function() {
		var src = this._source();
		for(i in src)
			this.remove_at(i);
	},
	
	
	/**
	 * Очистка коллекции от всех значений
	 */
	clear: function() {
		this.remove_all();
	},
	
	/**
	 * Последовательный обход всех значений
	 * @param {Object} callback
	 * @param {Object} delegate
	 */
	each: function(callback, delegate) {
		return Ergo.each(this._source(), callback, delegate);
	},
	
//	ensure: function(i) {
//		
//	},
	
	/**
	 * Поиск первого элемента, удовлетворяющего критерию
	 */
	find: function(criteria) {
		return Ergo.find(this._source(), criteria);
	},
	
	/**
	 * Поиск всех элементов, удовлетворяющих критерию
	 */
	find_all: function(criteria) {
		return Ergo.filter(this._source(), callback);
	},
	
	
	
	//
	//TODO методам filter и map имеет смысл возвращать коллекцию, а не значение
	//
	
	/**
	 * Фильтрация элементов
	 */
	filter: function(callback) {
		return this.create( Ergo.filter(this._source(), callback) );
	},

	/**
	 * Отображение элементов
	 */
	map: function(callback) {
		return this.create( Ergo.map(this._source(), callback) );		
	},
	
	/**
	 * Проверка вхождения значения в коллекцию
	 * @param {Object} criteria
	 */
	includes: function(criteria) {
		return Ergo.includes(this._source(), callback);
	},
	
	/**
	 * Размер коллекции
	 */
	size: function() {
		var n = 0;
		var src = this._source();
		for(var i in src) n++;
		return n;
	},
	
	/**
	 * Проверка, является ли коллекция пустой
	 */
	is_empty: function() {
		return this.size() == 0;
	},
	
	/**
	 * Получение ключа элемента
	 * @param {Object} item
	 */
	key_of: function(item) {
		return Ergo.key_of(this._source(), item);
	},
	
	/**
	 * Вызов для всех элементов коллекции указанного метода 
	 *
	 * @param {Object} m
	 * @param {Object} args
	 */
	apply_all: function(m, args) {
		Ergo.apply_all(this._source(), m, args);
	},
	
	
	/**
	 * Проверка наличия элемента с указанным ключом
	 * @param {Object} i ключ
	 */
	has_key: function(i) {
		return (i in this._source());
	},
	
	/**
	 * Список всех ключей в коллекции
	 */
	keys: function() {
		var k = [];
		for(var i in this._source()) k.push(i);
		return k;
	},
	
	
	add: function(item, i) {
		return this._widget.children.add(item, i, this.options.type);
	},
	
	
	first: function() {
		return this._source()[0];
	},
	
	
	last: function() {
		var src = this._source();
		return src[src.length-1];
	}	
	

});




Ergo.declare('Ergo.core.WidgetItems', 'Ergo.core.WidgetComponents', {

	_source: function() {
		var result = [];
		this._widget.children.each(function(c) { if(!('_key' in c)) result.push(c); });
		return result;
	},
	
	
	
	create: function(v) {
		return new Ergo.core.WidgetItems(this._widget);
	},
	
	
	last: function() {
		var src = this._source();
		return src[src.length-1];		
	},
	
	size: function() {
		var src = this._source();
		return src.length;
	},
	
	remove_all: function() {
		var src = this._source();
		for(var i = 0; i < src.length; i++)
			this.remove(src[i]);//_at(src[i]._index);
	},
	
	
	
	remove_at: function(i) {
		var removed = this._widget.children.remove_if(function(v) {	return v._index == i;	});
		
		return removed.length == 0 ? null : removed[0];
	},
	
	
	remove: function(item) {
		return this.remove_at(item._index);
	},
	
	
	
/*	
	set: function(i, item) {
		this._widget.children.add(item, i, 'item');
	},
	
	add: function(item, i) {
		this._widget.children.add(item, i, 'item');
	}
*/	
	
});



//= require "data"
//= require "states"
//= require "layout"
//= require "widget-props"
//= require "widget-list"




/**
 * Базовый объект для всех виджетов
 * 
 * Опции:
 * 	`layout` компоновка дочерних виджетов
 * 	`layoutFactory` фабрика компоновок
 * 	`cls` css-классы
 * 	`style` хэш стилей
 * 	`html` html-тег виджета
 * 	`components` хэш компонентов
 * 	`defaultComponent` опции компонента по умолчанию
 * 	`componentFactory` фабрика компонентов
 * 	`items` массив элементов
 * 	`defaultItem` опции элемента по умолчанию
 * 	`itemFactory` фабрика элементов
 * 	`dynamic` флаг динамического связывания
 * 	`data` связываемые данные
 * 	`events` хэш событий
 * 	`states` хэш состояний
 * 	`transitions` хэш переходов между состояниями
 * 	`state` предустановленное состояние
 * 	`rendering` функция создания jQuery-элемента
 * 	`renderTo` селектор родительского элемента
 * 	`autoRender` авто-отрисовка при создании
 * 	`showOnRender` вызов метода show при создании
 * 	`hideOnRender` вызов метода hide при создании (?)
 * 	`hideOnDestroy` вызов метода hide при удалении
 * 	`binding` функция связывания данных с виджетом
 * 	`value` значение виджета
 * 	`wrapper` опции "обертки"
 * 
 * 
 * 
 * @class
 * @name Ergo.core.Widget
 * @extends Ergo.core.Object
 * @param {Object} o параметры
 * @mixes Ergo.WidgetOptions
 * @mixes Ergo.Observable
 * @mixes Ergo.Statable
 */
Ergo.defineClass('Ergo.core.Widget', 'Ergo.core.Object', /** @lends Ergo.core.Widget.prototype */{
	
	
	
	defaults: {
		layout: 'default',
		// states: {
// //			'hidden': 'hidden',
			// 'disabled': 'disabled',
			// 'invalid': 'invalid'
// //			'unselectable': 'unselectable'
		// },
		plugins: [Ergo.Observable, Ergo.Statable],
//		autoBind: true,
//		autoUpdate: true,
		layoutFactory: function(layout) {
			if( $.isString(layout) )
				layout = $.ergo({etype: layout}, 'layouts');
			else if(!(layout instanceof Ergo.core.Layout))
				layout = $.ergo(Ergo.override({etype: 'default'}, layout), 'layouts');
			return layout;	
		},
//		events: {},
//		defaultItem: {},
		// defaultComponent: {},
		// componentFactory: function(o) {
			// if($.isString(o)) {
				// o = this.options.shortcuts[o] || {text: o};
			// }
			// return Ergo.widget( Ergo.smart_override({}, this.options.defaultComponent, o) );
		// },
//		shortcuts: {},
//		showOnRender: false,
//		hideOnRender: false,
		// set: {
		// },
		// get: {
		// }			
	},
	
/*			
	_initialize: function(o) {
		this._super(o);
//		Ergo.core.Widget.superclass._initialize.apply(this, arguments);


		var o = this.options;
		var self = this;

		
		// this.events.on_fire = function(type, e, base_event) {
			// if(e.bubble && self.parent) self.parent.events.fire(type, e, base_event);
		// };


		// инициализируем виджет
		this.$init(o);
				

		// добавляем метод bubble к events
		this.events.bubble = function(name, e) {
			if(!e) e = {}
			e.after = Ergo.bubble;
			e.target = self;
			this.fire(name, e);
		}

		
		// создаем список дочерних элементов
		this.children = new Ergo.core.WidgetChildren(this);

		this.components = new Ergo.core.WidgetComponents(this, {type: 'component'});
		this.items = new Ergo.core.WidgetItems(this, {type: 'item'});
		
		//TODO этап генерации jQuery-элемента можно оптимизировать
		// создаем новый элемент DOM или используем уже существующий
		this.el = $(o.html);//this.$html());
		this.el.data('ergo-widget', this);
//		if(this.defaultCls) this.el.addClass(this.defaultCls);
		if('style' in o) this.el.css(o.style);
		if('cls' in o) this.el.addClass(o.cls);
		if('baseCls' in o) this.el.addClass(o.baseCls);

		
		// создаем компоновку
		this.layout = o.layoutFactory(o.layout);
		//FIXME костыль
//		if(!this.layout.container) this.layout.attach(this);
		this.layout.attach(this.layout.options.container || this);
		
		
		
		
		// конструируем виджет
		this._construct(o);
		
		// устанавливаем опциональные параметры
		this._opt(o);
		
		// добавляем обработку событий (deprecated)
//		this.$events(this);

		// добавляем элемент в документ
		this.render(o.renderTo);
		
		// подключаем данные и обновляем их, если установлен параметр autoUpdate
		this.bind(o.data, o.autoUpdate);
						
		
		this.$afterBuild();
		
//		if(this.options.debug)	console.log('created');		
		
	},
*/	
	
	
	
	/**
	 * Уничтожение виджета
	 * 
	 * Удаляются связи в виртуальном дереве виджетов, отключается связь с данными,
	 * удаляется элемент из DOM-дерева, уничтожаются все дочерние виджеты.
	 * 
	 */
	_destroy: function() {//noHide) {
		
		var self = this;
		
		// if(this.options.hideOnDestroy && !noHide) {
			// return this.hide().then(function() { self._destroy(true); });
		// }
		// else {
			
		this.unrender().then(function(){

			// удаляем элемент и все его содержимое (data + event handlers) из документа
			if(this.parent) this.parent.children.remove(this);
			
			if(this.data) this.data.events.unreg(this);
			
			if(this.el) this.el.remove();
			// очищаем регистрацию обработчиков событий
			this.events.unreg_all();
			// очищаем регистрацию обработчиков событий
			Ergo.context.events.unreg(this);
			// очищаем компоновку
			this.layout.clear();
			
			// вызываем метод _destroy для всех дочерних компонентов
			this.children.apply_all('_destroy');
			
		}.bind(this));
		
//		}
//		if(this.options.debug)	console.log('_destroyed');
		
	},
	
	
	
	
	/**
	 * В фазе преконструирования происходит следующее:
	 * 
	 * Преобразуется "сахарное" определение компонентов с префиксом $ 
	 * 
	 * 
	 */
	_pre_construct: function(o) {
		Ergo.core.Widget.superclass._pre_construct.call(this, o);
//		this._super(o);
		
		
		var self = this;


		// "сахарное" определение контента виджета
		if('content' in o){
			Ergo.smart_override(o, {
				components: {
					content: o.content
				}
			});
		}


		
		for(var i in o) {
			if(i[0] == '$') {
				var key_a = i.split('_');
				var overrides = {};
				var val = overrides;
				
				while(key_a.length > 0) {
					var k = key_a.shift();
					var v = (key_a.length == 0) ? o[i] : {};
					if(k[0] == '$') {
						k = k.substr(1);
						val.components = {};
						val = val.components[k] = v;
					}
					else {
						val = val[k] = v;
					}					
				}
				
				Ergo.smart_override(o, overrides);
			}
		}
		
		

		
		
		
		
		
	},
	
	
	
	/**
	 * Хук, вызываемый для инициализации виджета.
	 * 
	 * Чаще всего используется для модификации параметров.
	 * 
	 * @private
	 */
	
/*	
	$init: function(o) {
		
//		var o = this.options;
		
//		this.components = new Ergo.core.WidgetCollection(this);
		
//		this.components = this.collection; //new Ergo.core.Collection();		
		
		// "сахарное" определение контента виджета
		if('content' in o){
			Ergo.smart_override(o, {
				components: {
					content: o.content
				}
			})
		}
		
		
		
//		if('states' in o) {
//			if($.isString(o.states)) o.states = [o.states];
//		}
		
	},
*/

	
	/**
	 * В фазе конструирования виджета:
	 * 1. создаются поля
	 * 2. создается элемнт DOM-дерева (обернутый jQuery)
	 * 3. создаются компоненты
	 * 4. создаются элементы
	 * 5. регистрируются события (виджета, jquery, ctx)
	 * 6. регистрируются обработчики onClick, onDoubleClick
	 * 
	 */
	_construct: function(o) {
//		this._super(o);
		Ergo.core.Widget.superclass._construct.call(this, o);
		
		
		var self = this;
//		var el = this.el;
		
		
		// создаем список дочерних элементов
		/**
		 * @field
		 * 
		 * @description Коллекция дочерних виджетов
		 * 
		 */
		this.children = new Ergo.core.WidgetChildren(this);
		
		/**
		 * Коллекция компонентов
		 * @field
		 */
		this.components = new Ergo.core.WidgetComponents(this, {type: 'component'});
		/**
		 * Коллекция элементов
		 * @field
		 */
		this.items = new Ergo.core.WidgetItems(this, {type: 'item'});
		
		//TODO этап генерации jQuery-элемента можно оптимизировать
		// создаем новый элемент DOM или используем уже существующий
		/**
		 * @field
		 * 
		 * @description jQuery-объект, с которым связан виджет
		 * 
		 */
		
		if(o.rendering) {
			
			o.rendering.call(this, o);
			
		}
		else {
			
			/**
			 * jQuery-элемент
			 * @field
			 */
			this.el = $(o.html);//this.$html());
			
			if(!o.html) {
				this.el = $(document.createTextNode(''));
			}
	
			if('style' in o) this.el.css(o.style);
			if('cls' in o) this.el.addClass($.isString(o.cls) ? o.cls : o.cls.join(' '));
			if('baseCls' in o) this.el.addClass(o.baseCls);
			
		}
		
		this.el[0]._ergo = this;			

		
		/**
		 * Компоновка
		 * @field
		 */
		this.layout = o.layoutFactory(o.layout);
		//FIXME костыль
//		if(!this.layout.container) this.layout.attach(this);
		this.layout.attach(this);//this.layout.options._widget || this);
		
		
		
		
		
		
		
		
		
		if('components' in o) {
			var arr = [];
			// преобразуем набор компонентов в массив
			Ergo.each(o.components, function(c, i){
//				c.weight = ('weight' in c) ? c.weight : 0;//9999;
//				c._cweight = ('weight' in c) ? c.weight : 9999;
//				c._cname = i;

				if(!c.ignore)
					self.children.add(c, i, 'component');
	
//				c.name = i;
//				self[i] = c;
								
//				arr.push(c);
			});
			// сортируем массив по весу компонентов
			// arr.sort(function(c1, c2){
				// var a = c1._cweight;
				// var b = c2._cweight;
				// if(a < b) return -1;
				// else if(a > b) return 1;
				// return 0;
			// });
			// добавляем компоненты
//			Ergo.each(arr, function(c){
//				var i = c._cname;
//				var w = c._cweight;
//				delete c._cweight;
//				delete c._cname;
//				self.addComponent(c, i);
//				c = o.componentFactory.call(self, c);
//				c.opt('tag', i);
//			});
			
			// задаем "ленивые" классы компонентов
			// for(var i in o.components){
				// var easyCls = ''+i+'Cls';
				// if(easyCls in o) this[i].el.addClass(o[easyCls]);//.opt('cls', o[easyCls]);
			// }

			// if('baseCls' in o) {
				// // задаем дочерние классы компонентов
				// for(var i in o.components){
					// var cls = o.baseCls + '-' + i;
					// this[i].el.addClass(cls);
				// }				
			// }
			
		}
		
		
		
		if('items' in o){
			for(var i = 0; i < o.items.length; i++)
				this.children.add(o.items[i]);
				
		}		
		
		
		
		if('events' in o){
			for(var i in o.events){				
				var callback_a = o.events[i];
				callback_a = $.isArray(callback_a) ? callback_a : [callback_a]; //FIXME
				for(var j in callback_a) {
					var callback = callback_a[j];
					
					if(i.indexOf('ctx:') == 0) {
						// EventBus
						$context.events.reg(i.substr(4), callback, this);
					}
					else if(i.indexOf('jquery:') == 0) {
						// jQuery
//						Ergo.event_bus.reg(i.substring(7), callback, this);
						self.el.on(i.substr(7), callback.rcurry(self).bind(this));						
					}
					else {
						// TODO здесь должны добавляться обработчики событий виджета
//						self.el.on(i, callback.rcurry(self));
						self.events.reg(i, callback, this);						
					}
				}
			}
		}		
		
		
						
		// if('states' in o){
			// for(var i in o.states)
				// this.states.state(i, o.states[i]);
			// // настраиваем особое поведение состояния hover
			// if('hover' in o.states){
				// this.el.hover(function(){ self.states.set('hover') }, function(){ self.states.unset('hover') });
			// }
		// }
// 		
		// if('transitions' in o) {
			// for(var i in o.transitions) {
				// var t = o.transitions[i];
				// if($.isPlainObject(t)) {
					// //TODO
				// }
				// else {
					// var a = i.split('>');
					// if(a.length == 1) a.push('');
					// this.states.transition($.trim(a[0]), $.trim(a[1]), t);					
				// }
			// }
		// }
		
		
		
		
//				this.states.state(i, o.states[i]);
		
		
		// var wrap_func = function(handler, e, type) {
			// var result = handler.call(this, e, type);
			// if(this.parent) this.parent.events.fire(type, e);
		// }
		
		
		// var regexp = /^on\S/;
		// for(var i in o){
			// if(regexp.test(i)){
				// var name = i.charAt(2).toLowerCase() + i.slice(3);
				// var chain = ( !$.isArray(o[i]) ) ? [o[i]] : o[i];
				// for(var j = 0; j < chain.length; j++) {
					// this.events.reg( name, chain[j] );
				// }
			// }
		// }

		
		if('onClick' in o)
			this.el.click(function(e) { if(!self.states.is('disabled')) self.events.fire('click', {button: e.button}, e); });
		if('onDoubleClick' in o)
			this.el.dblclick(function(e) { if(!self.states.is('disabled')) self.events.fire('doubleClick', {button: e.button}, e); });
		
		
		
		
		this.events.rise = Ergo.rise;
		this.events.sink = Ergo.sink;
		
		
/*		
		// добавляем метод raise к events
		this.events.rise = function(name, e) {
			if(!e) e = {};
			e.after = Ergo.rise;
			e.target = e.target || self;
			this.fire(name, e);
		};
		
		this.events.sink = function(name, e) {
			if(!e) e = {};
			e.after = Ergo.sink;
			e.target = e.target || self;
			this.fire(name, e);
		};
*/		
	},
	
//	_theme: function() {
//		if(this.options.ui == 'jquery_ui') this._theme_jquery_ui
//	}
	
	
	
	/**
	 * Фаза постконструирования виджета:
	 * 1. рендеринг (renderTo)
	 * 2. подключение данных (data)
	 * 3. установка состояний (state)
	 * 
	 */
	_post_construct: function(o) {
//		this._super(o);
		Ergo.core.Widget.superclass._post_construct.call(this, o);
		
		
		// добавляем элемент в документ
		if('renderTo' in o)
			this.render(o.renderTo);
		
		// подключаем данные и обновляем их, если установлен параметр autoUpdate
		if('data' in o)
			this.bind(o.data, o.autoUpdate);
						
		
//		this.$afterBuild();
	
		var self = this;
		
		
		// устанавливаем состояния по умолчанию
		if('state' in o) {
			var a = o.state.join(' ').split(' ');			
//			var a = o.state.split(' ');
			Ergo.each(a, function(state) {
				if(state[0] == '-') 
					self.states.unset(state.substr(1));
				else 
					self.states.set(state);
			});
		}
		
		
		this.events.fire('afterBuild');
		
	},
	
	
	
	
	// factory: function(item) {
		// if(!(item instanceof Ergo.core.Widget)) {
			// item = this.options.componentFactory.call(this, item);
		// }
		// return item;
	// },
	
	
	
	
	
	
	
	/**
	 * Отображение виджета
	 * 
	 * В том случае, если он уже включен в DOM-дерево
	 */
	show: function() {
		return $.when( (this._wrapper || this.el).show() );
	},
	
	
	/**
	 * Скрытие виджета
	 * 
	 * В том случае, если он уже включен в DOM-дерево
	 */
	hide: function() {
		return $.when( (this._wrapper || this.el).hide() );
	},
	
	
	
	
	/**
	 * Отрисовка (рендеринг) виджета, т.е. добавление его в DOM-дерево
	 * 
	 * Если метод вызывается без параметров, а виджет входит в виртуальное дерево
	 * виджетов, то он будет добавлен в компоновку родителя
	 * 
	 * Отрисовка выполняется для всех дочерних виджетов
	 * 
	 * После отрисовки вызывается обработчик _layoutChanged
	 * 
	 */
	render: function(target, cascade) {
		
		
		var self = this;
				
		
		
		this.children.each(function(item){
			if(!item._rendered && item.options.autoRender !== false) {
				
				
				item._type == 'item' ? self.layout.add(item, item._index) : self.layout.add(item);
				
//				if(item.options.showOnRender || item.options.renderEffects) item.show();
//				if(item.options.hideOnRender || item.options.renderEffects) item.hide();				
			}

			// if( !(item.options.dynamic && item.data) )  //FIXME
				// item.render();			

		});






		// this.children.each(function(item){
			// item._layoutChanged();
		// });


		this.children.each(function(item){
			if( !(item.options.dynamic && item.data) )  //FIXME
				item.render(false, false);			
		});




		if(target !== false && this.parent) {
			
			if(!this._rendered && this.options.autoRender !== false) {
				
//				console.log(this);
				
				this._type == 'item' ? this.parent.layout.add(this, this._index) : this.parent.layout.add(this);
				
//				if(this.options.showOnRender) this.show();
//				if(this.options.hideOnRender) this.hide();				
			}
			
		}
		else if(target) {
			$(target).append(this.el);
			this._rendered = true;
//			target.layout.add(this, this._index);
		}




/*
		this.components.each(function(item){
//			if(!item._dynamic)
				item.render();
		});

		this.items.each(function(item){
			// содержимое динамических элементов отрисовывается через bind
			if(!item.options.dynamic)  //FIXME
				item.render();			
		});
*/

/*		
		if(cascade !== false) {
		
			this.children.each(function(item) {
				if(!item.options.dynamic)  //FIXME
					item.render(null, false);			
			});

			this.components.each(function(item){
					item.render();
			});
	
			this.items.each(function(item){
				// содержимое динамических элементов отрисовывается через bind
				if(!item.options.dynamic)  //FIXME
					item.render();			
			});
			
		}
*/		
		
		if(cascade !== false)
			this._layoutChanged();
		
		
		return $.when( (this.options.showOnRender || this.options.renderEffects) ? this.show() : true );
	},
	
	
	
	/**
	 * Удаление виджета из DOM-дерева
	 * 
	 */
	unrender: function() {
		
		this._rendered = false;
		
		return $.when( (this.options.hideOnUnrender || this.options.renderEffects) ? this.hide() : true )
			.then(function() {
				this.el.detach();
			}.bind(this));
		
	},
	
	
	
	
/*	
	$doLayout: function() {

		var self = this;
		
		
		
		this.components.each(function(item){
//			if(item._rendered) return;
//			if(!data_control || item.data != self.data) {
				if(!item.options.autoRender)
					self.layout.add(item);
//			}
		});

		this.items.each(function(item){
//			if(item._rendered) return;
//			if(!data_control || item.data != self.data) {
				if(!item.options.autoRender)
					self.layout.add(item, item._index);
//			}
		});

		// if(cascade === false) {
		// console.log(cascade);
// 
//		console.log('doLayout ' + this.options.html + ' ' + this.getValue());
// //		console.log(this);
// 
// }
		
//		this._layoutChanged();
		this.layout.update();
		
		
		this.children.each(function(child){
			if(!child.options.dynamic)
				child.$doLayout();			
		});
		
		
		return this;
	},
*/	
	
	/**
	 * Хук, вызываемый для определения тэга, на основе которого будет построен виджет
	 * 
	 * @private
	 */
	// $html: function() {
		// return this.options.html;
	// },
	
	/**
	 * Хук, вызываемый при добавлении виджета на страницу
	 * 
	 * @param {Element|Ergo.core.Widget} target
	 * @private
	 */
/*	
	render: function(target) {
		if(target){
//			if(target instanceof Ergo.core.Widget) {
//				target.addComponent(this);
//			}
//			else {
				$(target).append(this.el);
//			}
				
//			var parentEl = (target instanceof Ergo.core.Widget) ? target.el : $(target);
//			parentEl.append(this.el);
			
			if(this.el.parents().is('body')){
				this.$afterRender();
//				this._layoutChanged();
			}
			
		}
	},
*/	
	// _theme: function(name) {
	// },
	
	/**
	 * Хук, вызываемый после построения объекта
	 * 
	 * @private
	 */
	
/*
	$afterBuild: function() {
		
		var o = this.options;
		var self = this;
		
		
//		if(o.showOnRender) this.show();
//		if(o.hideOnRender) this.hide();
		
		
		// устанавливаем состояния по умолчанию
		if('state' in o) {
			var a = o.state.split(' ');
			Ergo.each(a, function(state) {
				if(state[0] == '!') 
					self.states.unset(state.substr(1));
				else 
					self.states.set(state);
			});
		}

		

		this.events.fire('afterBuild');
		
	},
*/	

	/**
	 * Обработчик, вызываемый когда необходимо обновить компоновку
	 * 
	 * @private
	 */
	_layoutChanged: function(cascade) {
	
		this.layout.update();
		//FIXME возможно следует поменять эту строку на fire('layoutChanged')
//		if(this.layout.options.updateMode == 'auto') this.layout.update();
		
		if(cascade !== false)
			this.children.apply_all('_layoutChanged');
		
//		this.events.fire('layoutChanged');
	},
	
	// $events: function(self){
	// },
	
	
	/**
	 * Хук, вызываемый после отрисовки виджета
	 * 
	 * @private
	 */
/*
	$afterRender: function() {
		
//		if(this.options.showOnRender)	this.show();
//		if(this.options.hideOnRender) this.hide();		
		
//		this.children.each(function(c) { c.$afterRender(); });
		this.events.fire('afterRender');
		this.children.apply_all('$afterRender');
	},
*/
	
	
	
	/**
	 * Рекурсивный обход всех дочерних виджетов
	 * 
	 * @param {Object} callback метод, вызываемый для каждого компонента
	 */
	walk: function(callback) {
		if( callback.call(this, this) === false) 
			return;
		this.children.each(function(item){
			item.walk(callback);
		});
	},	
	
	
	
	
	/**
	 * Получение следующего соседнего элемента, если виджет является элементом коллекции
	 */
	next: function() {
		if(!this.parent) return null;
		return this.parent.item(this._index+1);
	},
	
	/**
	 * Получение предыдущего соседнего элемента, если виджет является элементом коллекции
	 */
	prev: function() {
		if(!this.parent) return null;
		return this.parent.item(this._index-1);
	},
	
	/**
	 * Поиск элемента
	 * 
	 * @param {int|string|class|Function|Object} i индекс|имя|класс|фильтр|шаблон
	 * @returns {Ergo.core.Widget}
	 * 
	 * @example
	 * w.item(2) - находит элемент с индексом 2
	 * w.item('header') - находит элемент с именем "header"
	 * w.item(Ergo.widgets.MyWidget) - элемент класса Ergo.widgets.MyWidget
	 * w.item({tag: 'hello'}) - элемент, у которого свойство "tag" равно "hello"
	 *  
	 */
	item: function(i) {
//		return this.children.find(Ergo.filters.by_widget(i));		
		var filter = Ergo.by_widget(i);
		var j = 0;
		return this.children.find(function(item, i){
			if(item._type == 'item'){
				if(filter.call(this, item, j)) return true;
				j++;
			} 
//			return item.type == 'item' && ;
		});
	},
	
	
	/**
	 * Поиск компонента
	 * 
	 * Поиск элемента
	 * 
	 * @param {string|class|Function|Object} i имя|класс|фильтр|шаблон
	 * @returns {Ergo.core.Widget}
	 * 
	 */
	component: function(i) {
		var filter = Ergo.by_widget(i);
		return this.children.find(function(item, j){
			return item._type == 'component' && filter.call(this, item, j);
		});
	},
	
		
	
	
	
	//-------------------------------------------
	// Методы для работы с компонентами виджета
	//-------------------------------------------
	
	
	/**
	 * Получение списка всех родителей виджета.
	 * 
	 * Еще здесь применим термин "путь" для деревьев.
	 * 
	 * @returns {Array} список родительских виджетов
	 */
	parents: function(list) {
		if(arguments.length == 0) list = [];
		if(!this.parent) return list;
		list.push(this.parent);
		return this.parent.parents(list);
	},
	
	/**
	 * Получение родительского виджета
	 * 
	 * Если критерий не указан, то возвращается непосредственный родитель
	 * 
	 * @example
	 * a.parent();
	 * b.parent({'data': dataItem});
	 * c.parent(Ergo.widgets.Box);
	 * d.parent(function(w) { return w.options.width < 100; });
	 * e.parent('header');
	 * 
	 * @param {Any} [criteria] критерий 
	 * 
	 * @deprecated
	 */
	// parent: function(i) {
// 		
		// if(arguments.length == 0) return this.parent;
// 		
		// return Ergo.find(this.parents(), Ergo.by_widget(i));
	// },
// 	
	
	
	
	
	
	
	
	//---------------------------------------------
	// Методы работы с подсоединенными данными
	//---------------------------------------------
	
	
	
	/**
	 * Подключение данных к виджету
	 * 
	 * Если опция autoBind = false, то связывание осуществлено не будет.
	 * 
	 * @param {Any} data подключаемые данные
	 */
	bind: function(data, update, pivot) {
				
		var o = this.options;
		var self = this;
		

		// если данные не определены или биндинг выключен, то биндинг не выполняем
		if(this.data == data || data === undefined || o.autoBind === false) return;
		
		// открепляем источник данных от виджета:
		//   удаляем все обработчики событий старого источника данных, связанные с текущим виджетом
		if(this.data)
			this.data.events.unreg(this);


		// определяем, является ли источник данных опорным
		if(pivot === undefined) pivot = true;
		this._pivot = pivot;
		
//		if(update !== false) update = true;
		


		// если определен параметр dataId, то источником данных будет дочерний элемент, если нет - то сам источник данных 
		if('dataId' in o)
			this.data = (data instanceof Ergo.core.DataSource) ? data.entry(o.dataId) : new Ergo.core.DataSource(data, o.dataId);
		else
			this.data = (data instanceof Ergo.core.DataSource) ? data : new Ergo.core.DataSource(data);


		// Если виджет является динамическим (управляется данными)
		if(o.dynamic) {
			
			// если добавлен новый элемент данных, то добавляем новый виджет
			this.data.events.reg('entry:added', function(e){
				
				console.log(e);
				
				self.children.autobinding = false;
				var item = self.items.add({}, e.isLast ? null : e.index);
				self.children.autobinding = true;
				item.bind(e.entry);
				
				item._dynamic = true;
				
				item.render();
			}, this);
			
			// если элемент данных удален, то удаляем соответствующий виджет
			this.data.events.reg('entry:deleted', function(e){
				var item = self.item({data: e.entry});
				if(item)
					item._destroy();
//				self.children.remove( self.item({data: e.entry}) )._destroy();//e.index) );// {data: self.data.item(e.index)});
			}, this);
			
			// если элемент данных изменен, то создаем новую привязку к данным
			this.data.events.reg('entry:changed', function(e){
				//FIXME странное обновление данных
				var item = self.item({data: e.entry});
				if(!item) {
					self.children.autobinding = false;
					item = self.items.add({});
					self.children.autobinding = true;
					
					item.bind(e.entry);
					item._dynamic = true;
				}
				
				item.bind(/*self.data.entry(e.entry.id)*/e.entry, false, false);
	//			self.getItem( e.item.id )._dataChanged(); //<-- при изменении элемента обновляется только элемент
			}, this);
	
			// если изменилось само значение массива, то уничожаем все элементы-виджеты и создаем их заново
			this.data.events.reg('value:changed', function(e){
				
				self._rebind(false);
				
			}, this);
			
	
	
			// создаем вложенные элементы контейнера на основе источника данных 
	
			this.layout.immediateRebuild = false;
					
			this.children.filter(function(c){ return c._dynamic; }).apply_all('_destroy', [true]);
	
			this.data.each(function(dataEntry, i){
//					self.items.add({}).bind(dataEntry, true, 2);
					self.children.autobinding = false;
					var item = self.items.add({});//{ 'data': dataEntry, 'autoUpdate': false });
					self.children.autobinding = false;
					
					item.bind(dataEntry, false);
					item._pivot = false;
					item._dynamic = true;
//					item.el.attr('dynamic', true);
			}, this.options.dynamicFilter);
	
			this.layout.immediateRebuild = true;
			this.layout.rebuild();
			
			this.render(false);
		}
		else {
		
								
			this.data.events.reg('value:changed', function(e) {
				// при изменении значения обновляем виджет, но только в "ленивом" режиме
				/*if(o.updateOnDataChanged)*/ 
				//self._dataChanged(true);
				self._rebind();
			}, this);

//			this.data.events.reg('value:changed', this._rebind.bind(this), this);
			
		
			// связываем данные с дочерними компонентами виджета при условии:
			//	1. если дочерний виджет является опорным (логически связан с другим источником данных), то игнорируем его
			// 	2. обновление дочернего виджета не производится (оно будет позже иницировано опорным элементом)
			//	3. дочернtve виджетe явно указывается, что он является опорным
			this.children.each(function(child){
				if(!child._pivot && child.data != self.data) child.bind(self.data, false, false);
			});

		}

		// обновляем виджет (если это не запрещено в явном виде)
		if(update !== false) this._dataChanged();


		this.data.events.reg('fetch:before', function(){ self.events.fire('fetch'); });
		this.data.events.reg('fetch:after', function(){ self._layoutChanged(); self.events.fire('fetched'); });

		// если установлен параметр autoFetch, то у источника данных вызывается метод fetch()
		if(o.autoFetch)	this.data.fetch();//.then(function(){ self.events.fire('fetch'); });


		this.events.fire('bound');
	},
	
	
	
	
	_rebind: function(update) {
		
		var o = this.options;
		var self = this;
		
		
		if(!this.data) return;
		
//		console.log('rebind');

		// // если определен параметр dataId, то источником данных будет дочерний элемент, если нет - то сам источник данных 
		// if('dataId' in o)
			// data = (data instanceof Ergo.core.DataSource) ? data.entry(o.dataId) : new Ergo.core.DataSource(data, o.dataId);
		// else
			// data = (data instanceof Ergo.core.DataSource) ? data : new Ergo.core.DataSource(data);
// 		
		// // если источник данных отличается от уже привязанного, то выполняем новое связвание
		// if(data != this.data) {
			// this.bind(data, update, pivot);
			// return
		// }


		// console.log('rebind ('+self.options.dynamic+')');
		// console.log(''+self.options.html + ' ' + self.getValue());

		
		
		if(o.dynamic) {
			// TODO
			
//		console.log('rebind (dynamic)');
			
			// обновляем вложенные элементы контейнера на основе источника данных 
			this.layout.immediateRebuild = false;

			// // уничтожаем все динамические элементы
			this.children.filter(function(c){ return c._dynamic; }).apply_all('_destroy', [true]);
			
//			var t0 = Ergo.timestamp();

			this.data.each(function(dataEntry, i){
//					self.items.add({}).bind(dataEntry, true, 2);
				self.children.autobinding = false;
				var item = self.items.add({});//{ 'data': dataEntry });
				self.children.autobinding = false;
				
				item.bind(dataEntry);
				item._pivot = false;
				item._dynamic = true;
//					item.el.attr('dynamic', true);
//					item.dataPhase = 2;
//				item.render();
			}, this.options.dynamicFilter);
		
//			var t1 = Ergo.timestamp();
//			console.log(t1 - t0);
				
			this.layout.immediateRebuild = true;
			this.layout.rebuild();

			if(!Ergo.noDynamicRender)
				this.render();
			
		}
		else {

//		console.log('rebind (static)');

			this.children.each(function(child){
//				if(!child._pivot) child.rebind(false);
				// 1. rebind не вызывается у дочерних элементов со своим dataSource
				// 2. rebind не вызывается у дочерних элементов с общим dataSource 
				//      (работает некорректно, если rebind вызывается не событием)
				if(!child._pivot && child.data != self.data) child._rebind(false);
			});
			
			//TODO возможно, здесь нужно вызвать render() с выключенным каскадированием
			
//			this._layoutChanged();
			
		}
		

		
		// обновляем виджет (если это не запрещено в явном виде)
		if(update !== false) this._dataChanged(true);
		
		
	},
	
	
	
	
	is_bound: function() {
		return (this.data != null);
	},
	
	
	
	
	
	/**
	 * Получение значения, связанного с виджетом.
	 * 
	 * Если задана функция форматирования (format), то она используется для преобразования результата
	 * 
	 * @returns {Any} undefined, если к виджету данные не подключены
	 */
	get_value: function() {
		var val;
		var o = this.options;
		
		if(this.data)
			val = this.data.get();
		else if('_value' in this)
			val = this._value;
		else
			val = this.opt('text');
			
//			val = (o.value) ? o.value.call(this) : this.opt('text');
		
		// если присутствует функция форматирования, то используем ее
		if(this.options.format)
			val = o.format.call(this, val);		
		
		return val;
	},
	
	/**
	 * Установка значения, связанного с виджетом
	 * 
	 * Если задана функция хранения (store), то она используется для преобразования значения
	 * 
	 * @param {Any} val значение
	 */
	set_value: function(val/*, reason*/) {
		
//		if(this._lock_value_change) return;
		
		var o = this.options;

		if(o.store)
			val = o.store.call(this, val);
		
		if(this.data){


//			this._lock_data_change = true;
//			o.store ? o.store.call(this, val) : this.data.set(val);
			this.data.set(val);
//			delete this._lock_data_change;
				 
		}
		else {
			this._value = val;
			this._dataChanged();
//			o.value ? o.value.call(this, val) : this.opt('text', val);
		}		
		
		
		
//		if(o.binding)
//			o.binding.call(this, val);

//		this.events.fire('valueChanged', {'value': val});				
				
	},
	
	
/*	
	format: function(val) {
		// если присутствует функция форматирования, то используем ее
		if(this.options.format)
			val = this.options.format.call(this, val);		
		return val;
	},
*/	


	
	// $valueChanged: function() {
// 		
	// },
	
	

	/**
	 * Обработчик, вызываемый при изменении связанных данных
	 * 
	 * @private
	 */
	_dataChanged: function(lazy) {
		
		// если отключено каскадирование, то обновление не производим
//		if(cascade && !this.options.cascading) return;
		
//		if(!this.options.autoBind /*|| this._lock_data_change*/) return;
		
		var binding = this.options.binding;

		if(/*this.data &&*/ binding){
			if( $.isString(binding) ) {
				this.opt(binding, this.opt('value'));
			}
			else {
				if( binding.call(this, this.opt('value')) === false) return false;				
			}
//			var val = this.getValue();
//			this._lock_value_change = true;
//			delete this._lock_value_change;
			
		}

		// var e = new Ergo.events.CancelEvent({value: this.getValue()});
		this.events.fire('dataChanged');//, e);
		// if(e.isCanceled) return;

		var self = this;

//		if(cascade !== false) {
		this.children.each(function(child){
			// Отменяем обновление дочернего элемента, если:
			//  1. определен источник данных
			//  2. источник данных дочернего элемента совпадает с текущим
			//  3. дочерний элемент имеет свой независимый источник данных
			if(lazy && child.data && child.data == self.data) return;
			if(child._pivot || child.options.autoBind === false) return; //FIXME динамические элементы являются опорными => это условие всегда срабатывает
			child._dataChanged(lazy);
		});
//		}
//			this.children.apply_all('_dataChanged', [true]);
		
//		this.children.each(function(child) { child._dataChanged(); });	
		
	},


	// $unknown_opt: function(i, v) {
// 		
		// // проверяем состояния
		// if(i in this.states._states) {
			// this.states.toggle(i, v)
		// }
		// // проверяем группы
		// else if(i in this.states._exclusions) {
			// this.states.set(v);
		// }
// 		
	// }

	
	
	_opt: function(o) {
		
//		var self = this;
		
		var exclusions = {
			components: true,
			items: true,
			set: true,
			get: true,
			mixins: true,
			defaultItem: true,
			defaultComponent: true,
			events: true,
			states: true
		};
		
//		var el = this.el;
		
		for(var i in o) {
			
			if( (i in exclusions) || i[0] == '$') continue;
			
			// проверяем наличие сеттеров опций
			if(this.options.set && this.options.set[i])
				this.options.set[i].call(this, o[i], this.options);
			// если сеттер опций не найден, проверяем наличие java-like сеттера
			else {
				// проверяем наличие Java-like сеттеров
				var java_setter = 'set_'+i;//.capitalize();			
				if(this[java_setter])
					this[java_setter](o[i]);
				else {
					// проверяем состояния
					if(i in this.states._states)
						this.states.toggle(i, o[i]);
					// проверяем группы состояний
					else if(i in this.states._exclusives)
						this.states.set(o[i]);
				}
			}
		}


//		profiler.tick('opt', 'other');
//
//		profiler.stop('opt');
		
	}
	
	


	// setTextSelection: function(v) {
		// if(!v) {
      // if($.browser.mozilla){//Firefox
        // this.el.css('MozUserSelect','none');
      // }
      // else if($.browser.msie){//IE
        // this.el.bind('selectstart',function(){return false;});
      // }
      // else{//Opera, etc.
        // this.el.mousedown(function(){return false;});
      // }
		// }
	// }




	
}, 'widgets:widget');



Ergo.override(Ergo.core.Widget.prototype, Ergo.WidgetOptions);




//Ergo.widget = function(){
//	if(arguments.length == 1) return Ergo.object(arguments[0]);
//	return Ergo.object( Ergo.smart_override.apply(this, arguments) );
//};

Ergo.$widget = Ergo.object;

// Ergo.$widget = function(o, etype) {
	// return Ergo.object(o, 'widget:'+etype);
// };


Ergo.after_rise = function(e, type) {
	if(this.parent && !e.stopped) this.parent.events.fire(type, e);
};


Ergo.after_sink = function(e, type) {
	this.children.each(function(child){
		child.events.fire(type, e);
	});
};


Ergo.rise = function(name, e) {
	if(!e) e = {};
	e.after = Ergo.after_rise;
	e.target = e.target || this.target;
	this.fire(name, e);
};

Ergo.sink = function(name, e) {
	if(!e) e = {};
	e.after = Ergo.after_sink;
	e.target = e.target || this.target;
	this.fire(name, e);
};





//------------------------------
// Интегрируемся в jQuery
//------------------------------

$.ergo = function(o, ns) {
	
//	var o = Ergo.smart_override.apply(this, arguments);
	
	var etype = null;
	
	if( $.isArray(o) ) {
		for(var i = o.length-1; i >= 0; i--) {
			etype = o[i].etype;
			if(etype) break;
		}
	}
	else {
		etype = o.etype;
		o = [o];
	}
	
//	var etype = o.etype;
	ns = ns || 'widgets';
	var i = etype.indexOf(':');
	if(i > 0) {
		ns = etype.substr(0, i);
		etype = etype.substr(i+1);
	}
	
	if( !Ergo['$'+ns] )
		throw new Error('Namespace "'+ns+'" not defined');

	o.etype = ns+':'+etype;
	
	return Ergo['$'+ns](o, ns+':'+etype);
}; //Ergo.widget;



$.fn.ergo = function(o) {
	if(this.length > 0){
		var widget = this[0]._ergo;// this.data('ergo-widget');
		if(widget) return widget;
		if(!o) return undefined;
		o.html = this;
	}
	else if(arguments.length == 0) return null;
		
	return $.ergo(o);
};




/**
 * Пространство для виджетов
 * 
 * @namespace
 */
Ergo.widgets = {};


Ergo.$widgets = Ergo.object;









/**
 * Контекст
 *
 * @class
 * @name Ergo.core.Context
 * @extends Ergo.core.Object
 * 
 */
Ergo.defineClass('Ergo.core.Context', 'Ergo.core.Object', /** @lends Ergo.core.Context.prototype */{
	
	defaults: {
		plugins: [Ergo.Observable, Ergo.Statable]		
	},
	
	
	
	
	
	_construct: function(o) {
		this._super(o);
		
		
		
		
		if(o.hashLinks) {
			
			// обрабатываем нажатие ссылок
			$('html').click(function(e){
				var el = $(e.target);
		//		console.log(el[0].localName);
		//		console.log(el.attr('href'));
				if(el[0] && el[0].localName == 'a' && el.attr('href') == '#') {
					e.preventDefault();
					
					// !
					// var w = el.ergo();
					// if(w && w.opt('link')) {
		// //				$context.setState( w.opt('link'), 'pages', {}, true );
					// }
				}
			});
			
			
		}
		
		
		if(o.history) {
			
			// для полифила
			var location = window.history.location || window.location;
			
			
		}
		
		
		
		
		if(o.windowBox) {
			
			// обновляем компоновку при изменении размеров окна
			$(window).on('resize', function(){
				
				//устанавливаем высоту <body> по высоте окна
				$('body').height(window.innerHeight);
				// обновляем компоновку
				$context.app._layoutChanged();
				
			});
			
			
			$('body').height(window.innerHeight);		
		}
		
		
	},
	
	
	
	state: function(s, fn) {
		this.states.state(s, function() {
			fn.apply(this, arguments);
			return false;
		}.bind(this));
	},
	
	
	
	
	
	
	open_glass_pane: function() {
		var gp = $('<div class="glass-pane" autoheight="ignore"/>')
			.on('mousedown', function(e){
				e.preventDefault();
				return false;				
			});		
			
		$('body').append(gp);	
			
		return gp;
	},
	
	
	close_glass_pane: function() {
		$('.glass-pane').remove();
	}
	
	
});




Ergo.context = new Ergo.core.Context();


//= require "core-def"
//= require "core-classes"
//= require "core-ext"
//= require "core-collections"
//= require "core-filters"
//= require "core-utils"
//= require "widget"
//= require "context"





/**
 * Источник данных как типизированная коллекция 
 * 
 * 
 * @class
 * @name Ergo.data.Collection
 * @extends Ergo.core.DataSource
 */
Ergo.declare('Ergo.data.Collection', 'Ergo.core.DataSource', /** @lends Ergo.data.Collection.prototype */{
	
	defaults: {
		model: null,
		idKey: 'id',
		query: {}
	},
	
	/**
	 * Модель элемента коллекции
	 * 
	 * @field
	 * 
	 */
	model: null,
	
	
	/**
	 * Получение элемента коллекции по OID
	 */
	find: function(id) {
		var a = this.get();
		for(var i in a)
			if(a[i][this.options.idKey] == id) return a[i];
		return null;
	},
	
	
	_initialize: function(v) {
		if(arguments.length == 0)
			this._super([]);
		else if(arguments.length == 1) {
			$.isArray(v) ? this._super(v) : this._super([], v);
		}
		else
			this._super.apply(this, arguments);
	},
	
	/**
	 * Загрузка данных из хранилища => заполнение коллекции данными
	 *  
	 */
	fetch: function(q) {
		
		this._fetched = undefined;
		
		var parse = this.options.parser || this.parse;
		var query = Ergo.override({}, this.options.query, q); 
		
		this.events.fire('fetch:before'); 
		
		if(this.options.provider) {
			var self = this;
			return this.options.provider.find_all(this, query).then(function(data) {
				
				var v = parse.call(self, data);
				
				if(self.options.swap && v.length == self.source.length) { 
					self.source = v;
					self._fetched = 'swap';
				}
				else {
					self.set( v );
					self._fetched = true;
				} 
				self.events.fire('fetch:after'); 
			});
		}
		else {
			this._fetched = true;			
			this.events.fire('fetch:after'); 
		}
		
	},
	
	
	parse: function(v) {
		return v;
	},
	
	
	
	/**
	 * Очистка данных => удаление данных из коллекции
	 *  
	 */
	purge: function() {
		this._fetched = false;
	},
	
	/**
	 * Сброс данных в хранилище (принудительная синхронизация)
	 *  
	 */
	flush: function() {
		
	},
	
	
	/**
	 * Фабрика элементов коллекции
	 */
	_factory: function(i) {
		
		/**
		 * Фабрика должна создавать элементы с помощью функции-генератора класса.
		 * Причем, могут быть такие случаи:
		 *  - задана сама функция
		 *  - задано имя класса
		 *  - задано поле, которое содержит имя класса
		 */
		
		var model = this.options.model || this.model; // модель можно определить либо в опциях, либо в классе, причем опции имеют больший приоритет
//		if($.isFunction(model)) model = model.call(this, this.val()[i]);
		if($.isFunction(model) && !$.isClass(model)) model = model.call(this, this.get()[i]);
		if($.isString(model)) model = Ergo.alias(model);// eval(model); //TODO здесь лучше загружать класс по зарегистрированному имени
		model = model || Ergo.core.DataSource;

		var o = {provider: this.options.provider};
		return new model(this, i, o);
	}

	
	
});


//= require <core/data>


/**
 * Источник данных как объект.
 * 
 * 
 * @class
 * @name Ergo.data.Object
 * @extends Ergo.core.DataSource
 */
Ergo.declare('Ergo.data.Object', 'Ergo.core.DataSource', /** @lends Ergo.data.Object.prototype */{
	
	defaults: {
		idKey: 'id'
	},
	
	/**
	 * Определение полей объекта
	 */
	fields: {
	},
	
	oid: function() {
		return this.get(this.options.idKey);
	},
	
	/**
	 * Метод валидации
	 * @function
	 */
	validate: null,
	
	
	
	_initialize: function(v) {
		if(arguments.length == 0)
			this._super({});
		else if(arguments.length == 1) {
			this._super({}, v);
		}
		else
			this._super.apply(this, arguments);
	},
	
	
	
	
	set: function(v) {
		
		// если значение устанавливается именно для нас
		if(arguments.length == 1) {
			
			if(this.options.readonly) return;
			
			if(this.validate) {
				if( !this.validate.call(this, v) ) throw new Error('Invalid value: ['+v+']');
			}
		}
		
		this._super.apply(this, arguments);
//		Ergo.data.Model.superclass.set.apply(this, arguments);
	},
	
	
	/**
	 * Подгрузка данных
	 * 
	 * 
	 */
	fetch: function(id) {
//		this._fetched = true;
		var parse = this.options.parser || this.parse;
		
		this.events.fire('fetch:before'); 
		
		if(this.options.provider) {
//			var self = this;
			return this.options.provider.find(this, id, this.options.query).then(function(data) { 
				this.set( parse.call(this, data) ); 
				this._fetched = true;
				this.events.fire('fetch:after'); 
			}.bind(this));
		}
		else {
			this._fetched = true;			
			this.events.fire('fetch:after'); 
		}

	},
	
	
	/**
	 * Обработка "сырых" данных 
	 * 
	 */
	parse: function(v) {
		return v;
	},
	
	
//	get: function() {
//		var v = this._super.apply(this, arguments);
//		var v = Ergo.data.Model.superclass.get.apply(this, arguments);

//		return (this.format) ? this.format.call(this, v) : v;
//	},

	
	/**
	 * Фабрика элементов модели (полей).
	 */
	_factory: function(i) {
		
		/**
		 * Фабрика должна создавать элементы с помощью функции-генератора класса.
		 * Причем, могут быть такие случаи:
		 *  - задана сама функция
		 *  - задано имя класса
		 *  - задано поле, которое содержит имя класса
		 */		
		
		var obj = this.fields[i];
		var o = {};
//		if($.isFunction(model)) model = model.call(this, this.val()[i]);
		if($.isPlainObject(obj)) {
			o = obj;
			obj = obj.etype;
		}
		if($.isFunction(obj) && !$.isClass(obj)) 
			obj = obj.call(this, this.get()[i]);
		if($.isString(obj)) 
			obj = eval(Ergo.alias(obj) || obj); //TODO здесь лучше загружать класс по зарегистрированному имени
		obj = obj || Ergo.core.DataSource;
		
		o.provider = this.options.provider;
		
		return new obj(this, i, o);		
	}
	
}, 'data:object');



//= require <data/collection>
//= require <data/object>


Ergo.defineClass('Ergo.data.NodeList', 'Ergo.data.Collection', {

	defaults: {
	},
	
	model: 'data:node',
	
	purge: function() {
		this.set([]);
		this._fetched = false;
	}
	
}, 'data:node-list');


Ergo.defineClass('Ergo.data.Node', 'Ergo.data.Object', {
	
	defaults: {
	},
	
	fields: {
		'children': 'data:node-list'
	},
	
	
	fetch: function() {
		var self = this;
		return this.entry('children').fetch( {id: this.oid()} ).then(function(){ self._fetched = true; });
	},
	
	
	purge: function() {
		this.entry('children').purge();
		this._fetched = false;
	},
	
		
	get_branch: function() {
		return this.get('children');
	}
	
	
}, 'data:node');





Ergo.declare('Ergo.data.PagedCollection', 'Ergo.data.Collection', {
	
	defaults: {
		pageSize: 30,
		totalCount: 0,
		index: 0
	},
	
	
	
	set_index: function(v) {
		this.options.query.from = (v-1)*this.options.pageSize;
		this.options.query.to = v*this.options.pageSize;
	},
	
	
	get_count: function() {
		return Math.ceil(this.options.totalCount / this.options.pageSize);
	},
	
	
	parse: function(v) {
		this.options.totalCount = v.total;
		this.options.from = v.from;
		this.options.to = v.to;
		
		return v.data;
	}
	
	
	
/*	
	fetch: function() {

		this.events.fire('fetch');
		
		var o = this.options;
		
		if(o.provider) {
			var self = this;
			return o.provider.get(this, Ergo.deep_override({}, this.options.query, {from: o.from,	to: o.to}))
				.then(function(response) {
				
				o.from = response.from;
				o.to = response.to;
				o.totalCount = response.total;
				
				self.set(response.data); 
				self._fetched = true;
				
				self.events.fire('fetched');
			});
		}
		else {
			this._fetched = true;			
			this.events.fire('fetched');
		}
		
	}
*/	
	
	
});



Ergo.defineClass('Ergo.data.AjaxProvider', 'Ergo.core.Object', {
	
	defaults: {
		dataType: 'json'
	},
	
	
	_initialize: function(url, o) {
		this._super(o || {});
		
		this._url = url;
	},
	
	
	find_all: function(ds, query) {
		return $.ajax({
			url: this._url,
			data: query,
			dataType: this.options.dataType
		});
	}
	
	
}, 'data:ajax-provider');






Ergo.declare('Ergo.layouts.Inherited', 'Ergo.core.Layout', {
	
	// select: function(item) {
		// return this.container.parent.el;
	// }
	
	add: function(item, index, weight) {
		
//		var _select = this.container.parent.layout.options.selector;
		
//		var wrapper = this.container._wrapper;
		
//		if(wrapper) {
//			this._widget.el.after(item.el);
		this._widget.parent.layout.add(item, index, weight);
//		}
		
		
//		if(this.container._wrapper)
//			this.container.parent.layout.options.selector = function() { return wrapper; }
		
//		this.container.parent.layout.add(item, index, weight);
		
//		if(this.container._wrapper)
//			this.container.parent.layout.options.selector= _select;
		
	}
	
	
}, 'layouts:inherited');


Ergo.declare('Ergo.layouts.HBox', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'hbox'
	}	
	
}, 'layouts:hbox');


Ergo.declare('Ergo.layouts.Bar', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'bar'
	}
	
}, 'layouts:bar');


Ergo.declare('Ergo.layouts.Row', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'row'
	}
	
}, 'layouts:row');



Ergo.declare('Ergo.layouts.VBox', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'vbox'
	}	
	
}, 'layouts:vbox');


Ergo.declare('Ergo.layouts.Stack', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'stack'
	}
	
}, 'layouts:stack');


Ergo.declare('Ergo.layouts.Column', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'column'
	},
	
	wrap: function(item) {
		return $('<div/>').append(item.el);
	}
	
}, 'layouts:column');


Ergo.declare('Ergo.layouts.Band', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'band'
	},
	
	wrap: function(item) {
		var w = $('<div/>');
		if(item.label)
			w.append(item.label.el);
		w.append(item.el);
		return w;
	}
	
	
}, 'layouts:band');



Ergo.declare('Ergo.layouts.Form', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'form'
	},
	
	wrap: function(item) {
		var w = $('<div/>');
		if(item.label)
			w.append(item.label.el);
		w.append(item.el);
		return w;
	}
	
	
}, 'layouts:form');



Ergo.defineClass('Ergo.layouts.Grid', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'grid',
//		pattern: []
	},
	
	
	wrap: function(item) {
		return $('<div autoheight="ignore-siblings"/>').append(item.el);
	},
	
	
	update: function() {
		this._super();

		
		var self = this;
		
		var o = this.options;
		
		var w = this._widget;
		
		var n = w.children.size();
		var k = (n == 0) ? 1 : (12/n).toFixed();

				
		w.children.each(function(item, i) {
			
			if(!item._rendered) return;
			
			var el = item._wrapper || item.el;
			
//			console.log(el._wrapper != null);
			
			if(w.options.pattern) {
				el.addClass('col-'+(item.options.col || w.options.pattern[i]));				
			}
			else {
				el.addClass('col-'+k);				
			}
			
			
/*			
			for(var i in o.pattern) {
				var j = o.pattern[i];
				
				var k = -1;
				var d = 0;
				// for(var j = 0; j < tmpl.length; j++) {
					// if( tmpl[j] > 0 ) {
						// k++;
					// }
					// else if( tmpl[j] < 0 ) {
						// d -= tmpl[j];
					// }
					// else {
						// d++;
					// }
					
//					if( k == item._index ) {
						el.addClass('col-'+j);
//						if(d)
//							el.addClass('col-'+'-offset-'+d);
//						break;
//					}
					
//					if( j > 0 ) d = 0;
					
//				}
				
			}
*/			
		});
		
		
	}
	
	
}, 'layouts:grid');


Ergo.declare('Ergo.layouts.Table', 'Ergo.core.Layout', {
	
	defaults: {
		columns: []
	},
	
	
	// construct: function(o) {
		// this._super(o);
// 		
	// },
	
	
	update: function() {
		this._super();
		
		$('tr.group > td', this.el).attr('colspan', this.options.columns.length);
		
	}
	
	
}, 'layouts:table');


Ergo.declare('Ergo.layouts.Fluid', 'Ergo.core.Layout', {
	
	defaults: {
		name: 'fluid'
	}
	
}, 'layouts:fluid');











/**
 * Перегружаемт методы show() и hide() для поддержки анимации
 * 
 * Опции:
 * 	`effects`
 * 
 * @mixin Ergo.mixins.Effects
 */
Ergo.defineMixin('Ergo.mixins.Effects', function(o) {
	
	this.show = function() {
		
		var effect = false;
		
		if( !this.children.is_empty() || this.el.text() ) {  // ?

			var o = this.options.effects;
			
			if(o.initial) {
				o = Ergo.override({}, o, o.initial);
				delete this.options.effects.initial;
			}
			
			var el = this._wrapper || this.el;
			
			// FIXME экспериментальный код
			if( !el.is(':visible')) {
				if( $.isPlainObject(o.show) ) {
					effect = el[o.show.type]({
						duration: o.show.delay || o.delay,
						easing: o.show.easing || 'swing'
					});					
				}
				else {
					effect = el[o.show]({
						duration: o.delay,
						easing: o.easing || 'swing'
					});
				}
				
			}
			
		}

		return $.when( effect )
						.then(function(){ this.events.fire('show'); }.bind(this));		
	};
	
	
	this.hide = function() {
		
		var effect = false;
		
		if( !this.children.is_empty() || this.el.text() ) {  // ?

			var o = this.options.effects;
	
			if(o.initial) {
				o = Ergo.override({}, o, o.initial);
				delete this.options.effects.initial;
			}
			
			var el = this._wrapper || this.el;
		
			if( el.is(':visible')) {
				if( $.isPlainObject(o.hide) ) {
					effect = el[o.hide.type]({
						duration: o.hide.delay || o.delay,
						easing: o.hide.easing || 'swing'
					});					
				}
				else {
					effect = el[o.hide]({
						duration: o.delay,
						easing: o.easing || 'swing'
					});
				}				
			}
//				effect = el[o.hide](o.delay);
		}

		return $.when( effect )
						.then(function(){ this.events.fire('hide'); }.bind(this));
	};
	
	
	o.effects = Ergo.smart_override({
		show: 'show',
		hide: 'hide',
		delay: 0
	}, o.effects);
	
	
	
}, 'mixins:effects');




Ergo.defineMixin('Ergo.mixins.Selectable', function(o) {
	
	o.events = Ergo.smart_override({
		'select': function(e) {
			this.selection.set( e.key != null ? e.key : (e.target._name || e.target._index) );
			e.stop();
		},
		'unselect': function(e) {
			this.selection.unset( e.key != null ? e.key : (e.target._name || e.target._index) );
			e.stop();
		}
	}, o.events);


	this.selection = {
		
		_widget: this,
		
		_selected: [],
		
		set: function(key) {
			
			// определяем метод поиска
			var finder = this._widget.options.selector || this._widget.item;
			// режим множественной выборки
			var multiselect = this._widget.options.multiselect;
	
	
			// ищем выбранный элемент
			var selected = (key instanceof Ergo.core.Object) ? key : finder.call(this._widget, key);
	
			// TODO здесь нужно обработать вариант, если элемент не найден
	
			
			// если новый ключ совпадает со старым, то не меняем выборку
//			for(var i = 0; i < this._selected.length; i++)
//				if(this._selected[i] == selected) return;
			
			
			// если выборка эксклюзивная, то нужно очистить текущую выборку
			if(!multiselect) {
				for(var i = 0; i < this._selected.length; i++) {
					this._selected[i].states.unset('selected');
				}
			}
			
			
			
			//
			if(!multiselect)
				this._selected = [];
			
			
			if(selected == null) return;
			
			
			this._selected.push(selected);
			
			
			selected.states.set('selected');
			
					
			this._widget.events.fire('selectionChanged', {selection: this.get()});		
		},
		
		
		unset: function(key) {
			
			// определяем метод поиска
			var finder = this._widget.options.selector || this._widget.item;
			// режим множественной выборки
			var multiselect = this._widget.options.multiselect;
			
			// ищем выбранный элемент
			var unselected = (key instanceof Ergo.core.Object) ? key : finder.call(this._widget, key);
			
			Ergo.remove(this._selected, unselected);
			
			unselected.states.unset('selected');
			
			
			this._widget.events.fire('selectionChanged', {selection: this.get()});
			
		},
		
		
		get: function() {
			return (this._widget.options.multiselect) ? this._selected : this._selected[0];
		},
		
		
		is_empty: function() {
			return this._selected.length == 0;
		},
		
		size: function() {
			return this._selected.length;
		},
		
		each: function(fn) {
			Ergo.each(this._selected, fn);
		},
		
		clear: function() {
			this._selected = [];
			this._widget.events.fire('selectionChanged', {selection: this.get()});
		}
		
		
	};


	
	
	
	
	this.set_selected = function(selection) {
		this.selection.set(selection);
//		this._selected = (this.options.multiselect) ? selection : [selection];
/*		
		// если новый ключ совпадает со старым, то не меняем выборку
		if(this._selected && this._selected == key) return;
		
		// определяем метод поиска
		var finder = this.options.selector || this.item;
		
		
		if(this._selected) {
			var target = $.isArray(this._selected) ? this._selected : [this._selected];
			
			for(var i = 0; i < target.length; i++) {
				if(target[i]) target[i].states.unset('selected');
			}
		}
		
		
		this._selected = (key instanceof Ergo.core.Object) ? key : finder.call(this, key);
		
		
		if(this._selected) {
			var target = $.isArray(this._selected) ? this._selected : [this._selected];
			
			for(var i = 0; i < target.length; i++) {
				if(target[i]) target[i].states.set('selected');
			}
		}
				
		
		this.events.fire('changeSelection', {selection: this._selected, key: key});
*/		
		
	};
	
	
	this.get_selected = function() {
		return this.selection.get();
	};
	
	
	
//	this._selected = [];
	
	
	
}, 'mixins:selectable');



/*
Ergo.defineMixin('Ergo.mixins.Selection', function(o) {


	
	this.selection = new Ergo.core.Selection(this);
	
	Ergo.smart_override(o, {
		events: {
			'selected': function(e) {
				this.selection.set(e.target);
//				e.target.states.set('selected');
			} 
		}
	});
	
	
	// this.setSelected = function(i) {
		// this.item(i).select();
	// }
	
	Ergo.smart_build(o);
	
}, 'mixins:selection');






Ergo.defineMixin('Ergo.mixins.Selectable', function(o) {
	
	Ergo.smart_override(o, {
		states: {
			'selected': 'selected'
		},
		events: {
			'jquery:click': function(e, w) {
				w.states.set('selected');
			},
			'stateChanged': function(e) {
				if(e.to == 'selected') {
					this.events.rise('selected');
				}
			}
		}
	});

	Ergo.smart_build(o);
	
	// this.select = function() {
		// this.states.set('selected');
		// this.events.rise('selected');		
	// };
	
}, 'mixins:selectable');







Ergo.defineClass('Ergo.core.Selection', 'Ergo.core.Object', {
	
	
	_initialize: function(w, o) {
		this._super(o);
		
		this._widget = w;
	},

	
	set: function(item) {
		
		if(this._selected)
			this._selected.states.unset('selected');
		
		item.states.set('selected');
		
		this._selected = item;
		
		this._widget.events.fire('selectionChanged');
	},
	
	
	get: function() {
		return this._selected;
	}
	
	
});

*/












/**
 * Эксклюзивное отображение одного из дочерних виджетов
 * 
 * Опции:
 * 	`active`
 * 
 * @mixin Ergo.mixins.Pageable
 */
Ergo.defineMixin('Ergo.mixins.Pageable', function(o) {
	
	Ergo.smart_override(o, {
		cls: 'pageable',
		// defaultItem: {
			// style: {'display': 'none'}
		// }
	});
	
	
	
	this.set_active = function(i) {
		
		var child = (i instanceof Ergo.core.Widget) ? i : this.children.find( Ergo.by_widget(i) );
		
		// this.children.each(function(c){
			// (c != child) ? c.hide() : c.show();
		// });
		
		if(child.layout) child._layoutChanged();
		
		var promise = $.when(true);
		
		if(this._active) {
			this._active.states.unset('active');
			promise = this._active.hide();
		}

		this._active = child;

		promise.then(function(){
		
			this._active.states.set('active');
			this._active.show();
			
		}.bind(this));
		
		
		return child;
	};
	
	
	this.get_active = function() {
		return this._active;
	};
	
	
	
	
//	Ergo.smart_build(o);
	
}, 'mixins:pageable');



Ergo.defineMixin('Ergo.widgets.Popup', function(o){
	
	
	
	this.open = function(position) {
		
		var popups = Ergo.context._popups;
		
		// в эксклюзивном режиме закрываем другие всплывающие виджеты
		if(!popups.is_empty() && this.options.popup.exclusive) {
			popups.apply_all('close');
			popups.remove_all();
		}
		
		
		
		var self = this;
		
		if(arguments.length == 2) {
			position = {offset: [arguments[0], arguments[1]]};
		}
		
		var p = Ergo.smart_override({}, this.options.popup, position);
		
		// позиционируем виджет

		// определяем координаты относительно точки "at"
		var x = p.offset[0];
		var y = p.offset[1];
		
		
		// получаем целевой элемент, относительно которого отображаем элемент
		var to_el = null;
		
		// определяем элемент, к которому будет привязан popup		
		if(p.to) {
			to_el = $(p.to);			
		} 
		else if(this.parent) { 
			to_el = this.parent.el;
		}
		
		
		
		// определяем смещение из привязки к элементу "to"
		
		if(to_el) {
			
			var at = p.at.split(' ');
		
			if(at[0] == 'right') x += to_el.outerWidth(false);
			else if(at[0] == 'center') x += to_el.outerWidth(false)/2;
	
			if(at[1] == 'bottom') y += to_el.outerHeight(false);
			else if(at[1] == 'center') y += to_el.outerHeight(false)/2;
			
			if(p.adjust)
//				this.el.width(to_el.outerWidth(false));
				this.el.css('min-width', to_el.outerWidth(false));
			
		}	


		// определяем смещение из привязки точки popup
			
		var my = p.my.split(' ');

		if(my[0] == 'right') x -= this.el.outerWidth(false);
		else if(my[0] == 'center') x -= this.el.outerWidth(false)/2;

		if(my[1] == 'bottom') y -= this.el.outerHeight(false);
		else if(my[1] == 'center') y -= this.el.outerHeight(false)/2;


		// if(to_el) {
			// // смещение целевого элемента
			// var offset = to_el.offset();
// 		
			// x += offset.left;
			// y += offset.top;
		// }
		
		
		
		if(p.behaviour == 'contextmenu') {
			
			var max_w = $(document).scrollLeft() + $(window).width();
			var max_h = $(document).scrollTop() + $(window).height();
			var pop_h = this.el.outerHeight(true);
			var pop_w = this.el.outerWidth(true);
			
			var dh = (y + pop_h) - max_h;
			if(dh > 0) {
				y -= pop_h;
			}

			var dw = (x + pop_w) - max_w;
			if(dw > 0) {
				x -= dw;//pop_w;
			}
			
		}
		else if(p.behaviour == 'global') {
			
			var offset = to_el.offset();
			x += offset.left;
			y += offset.top;
			
		}
		
		


		if(p.behaviour != 'none') {
			
			this.el.css({'left': x, 'top': y});
						
		}
		
		
		
		if(p.boundary == 'auto' && to_el) {
			// изменяем положение виджета в зависимости от расстояния до границы
			var offset = to_el.offset();
			var max_x = $(window).width(); 
			var max_y = $(window).height();
			var scroll_top = 0;
			
			this.el.parents().each(function(i, elem) {
				scroll_top += $(elem).scrollTop();
			});
			
			if(offset.left + this.el.width() > max_x)
				this.states.set('pull-left-auto');
			else
				this.states.unset('pull-left-auto');
			
			if(offset.top + to_el.height() + this.el.outerHeight(true) - scroll_top > max_y)
				this.states.set('dropup-auto');
			else if(this.states.is('dropup') && (offset.top - this.el.outerHeight(true) - scroll_top < 0))
				this.states.set('dropdown-auto');
			else
				this.states.set('no-auto');
			
			 
		}
		
		
		
		// настраиваем размер виджета
		
		
		// определяем параметры закрытия
		
		$('html').one('click', function(e) {
			if(this.options.popup.closeOn == 'outerClick') this.close();
		}.bind(this));
		
		
		
		
		// добавляем текущий объект в список всплывших окон
		popups.add(this);
		
		
		return this.show().then(function(){
			self.events.fire('opened');
		});
	};
	
	
	this.close = function() {
		var self = this;
		var popups = Ergo.context._popups;
		
		var k = popups.key_of(this);
		if( k > -1 ) {//Ergo.context._popup == this) {
			
			if(this != popups.last()) popups.get(k+1).close();  //TODO возможно, будет лучше, если закрытия будут связаны в цепочку
			
			Ergo.context._popups.remove(this);
			
			return this.hide().then(function(){
				self.events.fire('closed');
			});			
		}
		
	};
	
	
	
	if(!Ergo.context._popups)
		Ergo.context._popups = new Ergo.core.Array();
	
	
	Ergo.smart_override(o, {
		states: {
			'dropup-auto:auto': 'dropup-auto',
			'dropdown-auto:auto': 'dropdown-auto',
			'no-auto:auto': ''
		},
		events: {
			'jquery:mouseleave': function(e, w){ 
				if(w.options.popup.closeOn == 'mouseleave') w.close(); 
			}
		},
		autoHeight: 'ignore' // игнорировать высоту контекстного меню при автоматическом расчете высоты
	});
	
	
	o.popup = Ergo.smart_override({
		to: null, 
		at: 'left top', 
		my: 'left top', 
		offset: [0, 0],
		closeOn: 'outerClick',
		exclusive: true,
		boundary: 'auto'
	}, o.popup);
	
	
}, 'mixins:popup');



Ergo.defineMixin('Ergo.mixins.Window', function(o) {
	
	
	this.open = function() {
		
		
		if(arguments.length == 2) {
			// x, y
			var x = arguments[0];
			var y = arguments[1];
			
			this.el.css({'top': y, 'left': x});
		}
		
		// получаем новый индекс z-слоя
		var z = Ergo.context._z || 0;
		z++;
		
		// устанавливаем z-index
		this.el.css({'z-index': z*1000});
		
		$('body').append(this.el); // FIXME заменить на render
		
		this.el.show();
		
	};
	
	
	this.close = function() {
		
		// уменьшаем индекс слоя
		Ergo.context._z--;
		
		this.el.hide();

		this.el.detach(); // FIXME заменить на unrender
		
		if(this.options._destroyOnClose)	this._destroy();
		
	};
	
	
	this.resize = function(w, h) {
		
	};
	
	
	
	this.move = function(x, y) {
		
		this.el.css({
			left: x,
			top: y
		});
		
	};
	
	
/*	
	o.components = Ergo.smart_override({
		overlay: {
			etype: 'html:div',
			cls: 'overlay',
			autoHeight: 'ignore',
			events: {
				'jquery:click': function(e, w) {
					
					if(this.parent.options.closeOn == 'outerClick')
						this.parent.close();
					
					// блокируем всплывание событий
					e.preventDefault();
					return false;
				}
			}
		}
	}, o.components);
*/	
	
//	o
	
	
	o.appearance = Ergo.smart_override({
		
	}, o.appearance);
	
	
	
}, 'mixins:window');



/**
 * Отображает виджет как модальное окно
 * 
 * Добавляются методы `open()`, `close()`, `resize()` и компонент `overlay`
 *  
 */
Ergo.defineMixin('Ergo.mixins.Modal', function(o) {
	
	
	this.open = function() {
		
		
		if(arguments.length == 2) {
			// x, y
			var x = arguments[0];
			var y = arguments[1];
			
			this.el.css({'top': y, 'left': x});
		}
		
		// получаем новый индекс z-слоя
		var z = Ergo.context._z || 0;
		z++;
		
		// устанавливаем z-index
		this.overlay.el.css({'z-index': z*1000});
		this.el.css({'z-index': z*1000+1});
		
		$('body').append(this.overlay.el);
		
		this.overlay.el.append(this.el);
		
		this._rendered = true;
		this.overlay._rendered = true;
//		this.overlay.items.add(this);
//		$('body').append(this.el);
		
		this.render();
		
		this.overlay.show();

		this.el.show();
		
		// здесь, в зависимости от методики позиционирования, расчитываются параметры
		
		// center
		var w = this.el.width();
		var h = this.el.height();
		
		h = Math.min(h, $(window).height());
		
		var x = w/2;
		var y = h/2;




		
		this.el.css({'margin-left': -x, 'margin-top': -y});
		
		this.el.hide();
		
//		this.events.fire('open');
		
		var result = this.show().then(function(){
			this.events.fire('opened');
			this._layoutChanged();
		}.bind(this));
		
		this.events.fire('open');
		
		return result;
	};
	
	
	this.close = function() {
		
		Ergo.context._z--;
		
		
//		this.overlay.el.detach();
		this.overlay.hide().then(function(){
			this.overlay.el.detach();
		}.bind(this));
		
		return this.hide().then(function(){
			this.events.fire('closed');
			this.el.detach();
		}.bind(this));
	};
	
	
	this.resize = function(w, h, comp) {
		
		var el = (comp) ? this.component(comp).el : this.el;
		
		var w0 = this.el.width();
		var h0 = this.el.height();
		
		el.css({'width': w, 'height': h});
		
		var w1 = this.el.width();
		var h1 = this.el.height();
		
		el.css({'width': w0, 'height': h0});
		
		el.animate({
			width: w,
			height: h,
			// 'margin-left': -w/2,
			// 'margin-top': -h/2
		});
		
		return $.when(this.el.animate({
			'margin-left': -w1/2,
			'margin-top': -h1/2
		}));
		
	};
	




	o.components = Ergo.smart_override({
		overlay: {
			etype: 'html:div',
			cls: 'overlay',
			autoHeight: 'ignore',
//			render: 'body',
			events: {
				'jquery:click': function(e, w) {
					
					if(w.parent.options.closeOn == 'outerClick')
						w.parent.close();
					
					// блокируем всплывание событий
					e.preventDefault();
					return false;
				}
			}
		}
	}, o.components);
	
	
	
	o.appearance = Ergo.smart_override({
		
	}, o.appearance);
	
	
	
}, 'mixins:modal');


Ergo.defineMixin('Ergo.mixins.Draggable', function(o) {
	
	o.events = Ergo.smart_override({
		'jquery:mousedown': function(e) {
			
			if( e.button == 0 ) {
				
				var self = this;
				
				var offset = this.el.offset();

				var drag = {
					dx: e.pageX - offset.left,
					dy: e.pageY - offset.top,
				};
				
				// добавляем компенсацию прокрутки
				this.el.parents().each(function(i, p){
					drag.dy += $(p).scrollTop() || 0;
					drag.dx += $(p).scrollLeft() || 0;
				});
				
				
				// добавляем "стекло"
				var glass = $('<div class="glass"/>');
				$('body').append(glass);
				
				glass.on('mousemove', function(e) {
					
					if(drag) {
						self.events.rise('drag', {x: e.pageX, y: e.pageY, dx: drag.dx, dy: drag.dy, target: self});
					}
					
					
				});
				
				glass.on('mouseup', function(e) {
										
					glass.remove();

					self.events.rise('dragEnd', {x: e.pageX, y: e.pageY, dx: drag.dx, dy: drag.dy, target: self});
				});
				
				
				
				this.events.rise('dragStart', {x: e.pageX, y: e.pageY, dx: drag.dx, dy: drag.dy});
				
				e.preventDefault();
			}
			
		}
	}, o.events);



}, 'mixins:draggable');

/**
 * Добавляет компонент label
 * 
 * Опции:
 * 	`label`
 * 
 * @mixin Ergo.mixins.Label
 */
Ergo.defineMixin('Ergo.mixins.Label', function(o) {

	Ergo.smart_override(o, {
		components: {
			label: {
				etype: 'html:label',
				autoRender: false
			}
		}
	});
	
	
	this.set_label = function(v) {
		this.label.opt('text', v);
	};
	
	this.get_label = function(v) {
		this.label.opt('text');
	};

}, 'mixins:label');

/**
 * Добавляет компонент dropdown
 * 
 * Состояния:
 * 	`opened`
 * 
 * 
 * @mixin Ergo.widgets.Dropdown
 */
Ergo.defineMixin('Ergo.widgets.Dropdown', function(o){
	
	o.components = Ergo.smart_override({
		dropdown: {
			etype: 'dropdown-list',
			weight: 100,
			popup: {
				at: 'left bottom'
//				adjust: true
			},
			events: {
				'closed': function() {
					this.parent.states.unset('opened', false);
					this.events.rise('dropdownClose');
				}
//				'opened': function
			}
		}		
	}, o.components);
	
	
	// o.transitions = Ergo.smart_override({
		// '* > opened': function() {
			// return this.dropdown.open();
		// },
		// 'opened > *': function() {
			// return this.dropdown.close();
		// }
	// }, o.transitions);
	

	o.states = Ergo.smart_override({
		'opened': function(on, f) {
			if(f !== false)
				on ? this.dropdown.open() : this.dropdown.close();
		}		
	}, o.states);
	
}, 'mixins:dropdown');



Ergo.defineMixin('Ergo.widgets.Loader', function(o){
	
	o.components = Ergo.smart_override({
		loader: {
			etype: 'box',
			cls: 'loader',
			weight: 100,
			autoHeight: 'ignore',
			components: {
				icon: {
					etype: 'icon'					
				}
			}
		}		
	}, o.components);


	o.events = Ergo.smart_override({
		'fetch': function() {
			this.states.set('loading');
		},		
		'fetched': function() {
			this.states.unset('loading');
		}		
	}, o.events);

	Ergo.smart_override(o, {cls: 'loadable'});
	
	// o.states = Ergo.smart_override({
		// 'loading': 'loading'		
	// }, o.states);
	
//	Ergo.smart_build(o);
	
}, 'mixins:loader');


Ergo.defineMixin('Ergo.widgets.Lockable', function(o){
	
	o.components = Ergo.smart_override({
		locker: {
			etype: 'box',
			cls: 'locker',
			weight: 1000,
			autoHeight: 'ignore',
		}		
	}, o.components);


	// o.events = Ergo.smart_override({
		// 'fetch': function() {
			// this.states.set('loading');
		// },		
		// 'fetched': function() {
			// this.states.unset('loading');
		// }		
	// }, o.events);

//	Ergo.smart_override(o, {cls: 'lockable'});
	
	o.states = Ergo.smart_override({
		'locked': 'locked'		
	}, o.states);
	
//	Ergo.smart_build(o);
	
}, 'mixins:lockable');



/**
 * Добавляет компонент contextMenu
 * 
 * События:
 * 	`contextMenu`
 * 
 * @mixin Ergo.mixins.ContextMenu
 */
Ergo.defineMixin('Ergo.mixins.ContextMenu', function(o) {

	o.components = Ergo.smart_override({
		contextMenu: {
			etype: 'dropdown-menu',
			cls: 'context-menu',
			renderTo: 'body',
			autoBind: false,
			popup: {
				behaviour: 'contextmenu'
			}
		}
	}, o.components);
	
	
	o.events = Ergo.smart_override({
		'jquery:contextmenu': function(e, w) {
			
			var x = e.pageX;
			var y = e.pageY;
			
			w.events.rise('contextMenu');
				
			w.contextMenu.open(x, y);
			
			e.preventDefault();			
		}
	}, o.events);
	
	
//	Ergo.smart_build(o);	

}, 'mixins:context-menu');

//= require "effects"
//= require "selectable"
//= require "pageable"
//= require "popup"
//= require "window"
//= require "modal"
//= require "draggable"

//= require "label"
//= require "dropdown"
//= require "loader"
//= require "locker"
//= require "context-menu"



/**
 * Виджет для <iframe>
 * 
 * etype: html:iframe
 *  
 * опции:
 * 	- src
 * 
 * @class
 * @name Ergo.html.Iframe
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Iframe', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<iframe/>'
	},
	
	set_src: function(v) {
		this.el.attr('src', v);
	}
	
}, 'html:iframe');



/**
 * Виджет для <input>
 * 
 * etype: html:input
 *  
 * опции:
 * 	- type
 * 	- placeholder
 * 	- disabled
 * 	- name
 * 	- readonly
 * 
 * @class
 * @name Ergo.html.Input
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Input', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<input/>',
		binding: function(v) {
			this.el.val(v);
		}
		// events: {
			// 'jquery:change': function() {
				// this.events.rise('change', {value: this.el.val()});
// //				this.opt('value', this.el.val());
			// }
		// }
	},
	
	set_type: function(v) {
		this.el.attr('type', v);
	},
	
	set_placeholder: function(v) {
		this.el.attr('placeholder', v);
	},
	
	set_disabled: function(v) {
		this.el.attr('disabled', '');
	},
	
	set_name: function(v) {
		this.el.attr('name', v);
	},
	
	set_readonly: function(v) {
		this.el.attr('readonly', v);
	}
	
	
	
	// get_value: function() {
		// return this.el.val();
	// },
// 	
	// set_value: function(v) {
		// this.el.val(v);
	// }
	
	
	
}, 'html:input');





/**
 * Виджет для <input type="text">
 * 
 * etype: html:text-input
 *  
 * опции:
 * 
 * @class
 * @name Ergo.html.TextInput
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.TextInput', 'Ergo.html.Input', {
	
	defaults: {
		type: 'text',
		binding: function(v) {
			this.el.val(v);
		},
		events: {
			'jquery:change': function() {
				this.opt('value', this.el.val());
			}
		}
	},
	
	
}, 'html:text-input');





/**
 * Чекбокс
 *  
 * :`html:checkbox`
 * 
 * Опции:
 * 	`indeterminate`
 * 
 * События
 * 	`action` пользователь изменил значение чекбокса
 * 
 * @class
 * @name Ergo.html.Checkbox
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Checkbox', 'Ergo.html.Input', /** @lends Ergo.html.Checkbox.prototype */{
	
	defaults: {
//		html: '<input type="checkbox"/>',
		type: 'checkbox',
		binding: function(v) {
			this.el.prop('checked', v);
		},
		events: {
			'jquery:change': function(e) {
				w.opt('value', this.el.prop('checked'));
//				w.events.fire('action');
			}
		}
	},
	
	
	set_indeterminate: function(v) {
		this.el.prop('indeterminate', v);
	}
	
}, 'html:checkbox');



/**
 * Радио
 *  
 * :`html:radio`
 * 
 * 
 * @class
 * @name Ergo.html.Radio
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Radio', 'Ergo.html.Input', /** @lends Ergo.html.Radio.prototype */{
	
	defaults: {
		type: 'radio',
		binding: function(v) {
			this.el.prop('checked', v);
		},
		events: {
			'jquery:change': function(e) {
//				w.opt('value', w.el.prop('checked'));
				this.events.rise('change', {value: this.el.prop('checked')});
			}
		}
	}
	
}, 'html:radio');





/**
 * Виджет для <select>
 * 
 * etype: html:select
 *  
 * опции:
 * 	- disabled
 * 	- name
 * 	- readonly
 * 	- multiple
 * 
 * @class
 * @name Ergo.html.Select
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Select', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<select/>',
		defaultItem: {
			etype: 'html:option'
		}
	},
	
	set_disabled: function(v) {
		this.el.attr('disabled', '');
	},
	
	set_name: function(v) {
		this.el.attr('name', v);
	},
	
	set_readonly: function(v) {
		this.el.attr('readonly', v);
	},
	
	set_multiple: function(v) { 
		this.el.attr('multiple', v); 
	}
	
	
}, 'html:select');




/**
 * Виджет для <textarea>
 * 
 * etype: html:Textarea
 *  
 * опции:
 * 	- rows
 * 
 * @class
 * @name Ergo.html.Textarea
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Textarea', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<textarea/>'
	},
	
	set_rows: function(v) {
		this.el.attr('rows', v);
	},
	
}, 'html:textarea');


/**
 * Виджет для <button>
 * 
 * etype: html:button
 *  
 * @class
 * @name Ergo.html.Button
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Button', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<button/>'
	}
	
}, 'html:button');



/**
 * Виджет для <img>
 * 
 * etype: html:img
 *  
 * опции:
 * 	- src
 * 
 * @class
 * @name Ergo.html.Img
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Img', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<img/>'
	},
	
	set_src: function(v) {
		this.el.attr('src', v);
	} 
	
}, 'html:img');


/**
 * @namespace Ergo.html 
 */





/**
 * Основной класс для виджетов пространства имен $html
 * 
 * etype: html:widget
 *  
 * @class
 * @name Ergo.html.Widget
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.html.Widget', 'Ergo.core.Widget', {
	
	defaults: {
	}
	
}, 'html:widget');



Ergo.$html = function(o, etype) {
	
	if(!Ergo.alias(etype)) {
		
//		var _etype = etype;
		
		var i = etype.indexOf(':');
		if(i > 0) {
//			ns = etype.substr(0, i);
			etype = etype.substr(i+1);
		}
		
		// var _o = $.isArray(o) ? o[o.length-1] : o;
// 		
// //		o.etype = 'html:widget';
		// _o.html = '<'+_etype+'/>';
		
		o.unshift({html: '<'+etype+'/>'});
		
		etype = 'html:widget';
	}
	
	return Ergo.object(o, etype);
};



