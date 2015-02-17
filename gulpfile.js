'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var livereload = require('gulp-livereload');
var connect = require('connect');

var rename = require('gulp-rename');
var browserify = require('browserify');
var domthingify = require('domthingify');
var watchify = require('watchify');
var to5ify = require('6to5ify');
var source = require('vinyl-source-stream');
var combiner = require('stream-combiner2');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

/** Config variables */
var serverPort = 8888;
var lrPort = 35731;


/** File paths */
var dist = 'dist';
var cssSource = 'app/styles';
var mainLessFile = '/panellist.less';
var staticFiles = 'app/**/*.{html,png,jpg,svg}';

gulp.task('static', function () {
  return gulp.src(staticFiles).
    pipe(gulp.dest(dist));
});

/* Compile, minify, and compress LESS files */
gulp.task('less', function() {
  var combined = combiner.obj([
    gulp.src(cssSource + mainLessFile),
    less(),
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }),
    gulp.dest(dist)
  ]);

  // any errors in the above streams will get caught
  // by this listener, instead of being thrown:
  combined.on('error', console.error.bind(console));

  return combined;
});

function compileScripts(watch) {
  gutil.log('Starting browserify');

  var entryFile = './app/panellist.js';

  var bundler = watchify(browserify(entryFile));

  var rebundle = function () {
    var stream = bundler.bundle({
      debug: true,
      standalone: 'panellist'
    });
    stream.on('error', function (err) { console.error(err); });
    stream = stream.pipe(source(entryFile));
    stream.pipe(rename('panellist.js'));
    stream.pipe(gulp.dest('dist'));
  };

  bundler.on('update', rebundle);
  bundler.on('error', function (err) { console.log("Error : " + err.message); });

  bundler.transform(domthingify);
  bundler.transform(to5ify.configure({ only: /app/ }));

  return rebundle();
}

gulp.task('server', function (next) {
  var server = connect();
  server.use(connect.static(dist)).listen(serverPort, next);
});

gulp.task('scripts', function () {
  compileScripts();
});

gulp.task('build', ['less', 'scripts']);

/**
 * Run default task
 */
gulp.task('default', ['server'], function () {
  var lrServer = livereload(lrPort);
  var reloadPage = function (evt) {
    lrServer.changed(evt.path);
  };

  function initWatch(files, task) {
    gulp.start(task);
    gulp.watch(files, [task]);
  }

  compileScripts(true);
  initWatch(staticFiles, 'static');
  initWatch(cssSource + '/*.less', ['less']);

  gulp.watch([dist + '/**/*'], reloadPage);
});
