const { src, dest } = require('gulp');

// Плагины
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
// Конфигурация
const path = require('../config/path.js');

// Обработка CSS
const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "CSS ДО сжатия "}))
    .pipe(dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min"}))
    .pipe(csso())
    .pipe(size({ title: "CSS ДО сжатия " }))
    .pipe(dest(path.css.dest, { sourcemaps: true }))
}

module.exports = css;