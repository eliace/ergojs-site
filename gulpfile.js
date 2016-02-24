var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var through2 = require("through2");
var File = require('vinyl');
var path = require('path');
var fs = require('fs');
var watch = require('gulp-watch');
var jsdoc = require("gulp-jsdoc");





gulp.task('watch', function() {
	gulp.watch('samples/**', ['scripts']);
});

gulp.task('unwatch', function() {
	gulp.unwatch('samples/**');
});



gulp.task('jsdoc', function() {

	var conf = {
		options: {
			encoding: "utf8",
			recurse: true,
//			destination: "./docs/",
//			template: "node_modules/jaguarjs-jsdoc"
		},
		template: {
			path: "node_modules/jaguarjs-jsdoc"
		},
		infos: {
			plugins: ['plugins/markdown']
		}
	}


	gulp.src("./lib/ergo-js/dist/*.js")
	  .pipe(jsdoc('./docs', conf.template, conf.infos, conf.options))
});


gulp.task('default', function() {



});



gulp.task('scripts', function() {


	var MATCH_REGEXP = /^\/\/= require (.*)$/mg;
	var MATCH_REGEXP_S = /^\/\/= require (.*)$/m;
	var MATCH_REGEXP_INC = /^\/\/= include (.*)$/mg;
	var MATCH_REGEXP_INC_S = /^\/\/= include (.*)$/m;


	gulp.src("samples/**/index.js")
	  .pipe( through2.obj(function(file, enc, cb){

			var dir = path.dirname(file.path);

			var s = String(file.contents);



			while(match = MATCH_REGEXP_INC.exec(s)) {

				var filename = match[1];

				var content = fs.readFileSync( path.join(dir, filename+'.js') );

				var a = [
					String(content)
				]

				s = s.replace(MATCH_REGEXP_INC_S, a.join('\n'));

			}



			while(match = MATCH_REGEXP.exec(s)) {

//				console.log(match[1]);

				var filename = match[1];

				var content = fs.readFileSync( path.join(dir, filename+'.js') );

				var a = [
					"$context.section_begin('"+filename+"');",
					"$context.section_end('"+filename+"');",
					String(content)
				]

				s = s.replace(MATCH_REGEXP_S, a.join('\n'));

			}


			var filepath = path.relative(path.resolve('samples'), dir);

//			console.log(filepath);

			filepath = path.join(filepath, 'all.js');



  		var f = new File({
  			path: filepath,
  			contents: new Buffer(s)
  		});

  		this.push(f);

	  	cb();
	  }) )
//    .pipe(concat("ergojs-core.js"))
    .pipe(gulp.dest("scripts"));

});
