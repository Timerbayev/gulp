const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const clean = ()=>{del(["assets"])};
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
gulp.task("default", gulp.series("clean","script","json"));