const { src, dest } = require('gulp');

// Плагины
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));

// Конфигурация
const path = require('../config/path.js');

// Обработка CSS
const scss = () => {
  return src(path.scss.src, { sourcemaps: true })
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "SCSS ДО сжатия " }))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "SCSS ДО сжатия " }))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
}

module.exports = scss;