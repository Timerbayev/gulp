const gulp = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const concat = require("gulp-concat")
const del  = require("del")
let clean  = (cb)=>{del(["assets"]);cb()}



function scripts() { return  gulp.src("src/**/*.js")
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("assets/scripts/"))

}
function jsons() {return  gulp.src("src/**/*.json")
    .pipe(gulp.dest("assets/jsons/"))
}

gulp.task("default", gulp.series(clean, scripts, jsons))

gulp.task("clean",(cb)=>{del(["assets"]);cb();});
gulp.task("script",function () { return gulp.src("src/**/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("assets/scripts/"))

});
gulp.task("json",function () { return  gulp.src("src/**/*.json").pipe(gulp.dest("assets/jsons/"))

});
