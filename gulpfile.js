var gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    browserSync     = require('browser-sync'),
    reload           = browserSync.reload,
    csswring        = require('csswring');


// postcss task
gulp.task('sass', function(){
  var processors = [
    autoprefixer({browsers: ['last 10 version']}),
    csswring
  ]
  return gulp.src('assets/scss/style.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest('css/'))
  .pipe(reload({stream:true}));
})


/* html task
*******************************************/
gulp.task('html', function(){
  return gulp.src('*.html')
  .pipe(reload({stream:true}));
})


/* browserSync task
*******************************************/
gulp.task('browserSync', function(){
  browserSync({
    server:{
      baseDir: ''
    }
  });
})

/* Watch task
*******************************************/
gulp.task('watch', function(){
  gulp.watch('assets/scss/*.scss', ['sass']);
  gulp.watch('*.html', ['html']);
});


/* Default task
*******************************************/
gulp.task('default', ['browserSync', 'watch']);

