// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');



// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(cssnano({
          discardComments: {
            removeAll: true
          },
          advanced: false,
          autoprefixer : {
            add: true,
            browsers: [
              '> 1%',
              'last 2 versions',
              'ie >= 9'
            ]
          },
          rebase: false
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/styles'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['assets/scripts/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename('all.min.js'))
        .pipe(uglify({
          sequences     : true,  // join consecutive statemets with the “comma operator”
          properties    : true,  // optimize property access: a["foo"] → a.foo
          dead_code     : true,  // discard unreachable code
          drop_debugger : true,  // discard “debugger” statements
          unsafe        : false, // some unsafe optimizations (see below)
          conditionals  : true,  // optimize if-s and conditional expressions
          comparisons   : true,  // optimize comparisons
          evaluate      : true,  // evaluate constant expressions
          booleans      : true,  // optimize boolean expressions
          loops         : true,  // optimize loops
          unused        : true,  // drop unused variables/functions
          hoist_funs    : true,  // hoist function declarations
          hoist_vars    : false, // hoist variable declarations
          if_return     : true,  // optimize if-s followed by return/continue
          join_vars     : true,  // join var declarations
          cascade       : true,  // try to cascade `right` into `left` in sequences
          side_effects  : true,  // drop side-effect-free statements
          warnings      : true,  // warn about potentially dangerous optimizations/code
          global_defs   : {}     // global definitions
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function() { 
    return gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src([
                    'assets/fonts/*'])
            .pipe(gulp.dest('dist/fonts/'));
});




gulp.task('iconfonts', function() {
    return gulp.src([
                    'assets/iconfonts/*'])
            .pipe(gulp.dest('dist/fonts/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/scripts/*.js', ['lint', 'scripts']);
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch('assets/images/*', ['images']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'images','fonts', 'iconfonts']);