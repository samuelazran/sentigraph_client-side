var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    nib = require('nib'),
    autoprefixer = require('gulp-autoprefixer');

var projectJsFiles = [
    './app/app.js', // element 0 always should be the main app file!
    './app/components/*/*.js',
    './app/views/graph/graph.js',
    './app/views/items/items.js',
    './app/views/overview/overview.js',
    './app/views/about/about.js'
];

var projectMainView = 'app/index.html';
var projectPartialsFiles = 'app/partials/*.html';
var projectViewsFiles = 'app/views/**/*.html';

var projectAllViewsFiles = [
    projectMainView, projectPartialsFiles, projectViewsFiles
];

var projectStylusFiles = "app/style/*.styl";

var relevantCssFiles = [
    'app/bower_components/mobile-angular-ui/dist/css/*.min.css',
    'app/bower_components/angular-loading-bar/build/loading-bar.min.css'
];

var relevantFontsFiles = ['app/bower_components/mobile-angular-ui/dist/fonts/*'];

// Dev task
gulp.task('dev', ['clean', 'views', 'stylus', 'css', 'lint', 'browserify'], function() { });

// Clean task
gulp.task('clean', function() {
    gulp.src('./dist/views', { read: false }) // much faster
        .pipe(rimraf({force: true}));
});

// JSHint task
gulp.task('lint', function() {
    gulp.src(projectJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(projectJsFiles[0])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bundle.js'))
        //compress
        .pipe(uglify())
        // Output it to our dist folder
        .pipe(gulp.dest('dist/js'));
});

// Views task
gulp.task('views', function() {
    // Get index.html
    gulp.src(projectMainView)
        // And put it in the dist folder
        .pipe(gulp.dest('dist/'));

    // Any other view files from app/views
    gulp.src(projectViewsFiles).on('error', function (e) {console.err(e);})
        // Will be put in the dist/views folder
        .pipe(gulp.dest('dist/views/'));

    // Any other view files from app/views
    gulp.src(projectPartialsFiles)
        // Will be put in the dist/views folder
        .pipe(gulp.dest('dist/partials/'));
});

// stylus to css & compress with nib
gulp.task('stylus', function () {
    gulp.src(projectStylusFiles)

        .pipe(stylus({
            use: nib(),
            compress: false
        }))
        .pipe(autoprefixer({
            browsers: [
                '> 0.1%',
                'last 5 versions',
                'last 4 Chrome versions',
                'last 8 ChromeAndroid versions',
                'last 10 Android versions',
                'last 10 Firefox versions', 'last 10 FirefoxAndroid versions',
                'last 10 Opera versions',
                'last 10 OperaMobile versions',
                'last 10 OperaMini versions',
                'last 10 BlackBerry versions',
                'last 6 Explorer versions', 'last 10 ExplorerMobile versions',
                'last 6 iOS versions', 'last 10 Safari versions'
            ],
            cascade: false
        }))
        // Bundle to a single file
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css/'));
});

// css task
gulp.task('css', function() {
    // Get css files
    gulp.src(relevantCssFiles)
        // Bundle to a single file
        .pipe(concat('lib.css'))
        // And put it in the dist folder
        .pipe(gulp.dest('dist/css/'));
});

// fonts task
gulp.task('fonts', function() {
    // Get fonts file/s
    gulp.src(relevantFontsFiles)
        // And put it in the dist folder
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watch', ['lint'], function() {
    // Start webserver
    //server.listen(serverport);
    // Start live reload
    //refresh.listen(livereloadport);

    // Watch scripts, and when they change run lint and browserify
    gulp.watch(projectJsFiles,[
        'lint',
        'browserify'
    ]);

    gulp.watch(projectStylusFiles,[
        'stylus'
    ]);

    // Watch css files
    gulp.watch(relevantCssFiles, [
        'css'
    ]);

    // Watch fonts files
    gulp.watch(relevantFontsFiles, [
        'fonts'
    ]);

    gulp.watch(projectAllViewsFiles, [
        'views'
    ]);

    //gulp.watch('./dist/**').on('change', refresh.changed);

});

gulp.task('default', ['dev', 'watch']);