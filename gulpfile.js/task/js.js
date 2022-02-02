const { src, dest } = require('gulp');

// Плагины
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
// Конфигурация
const path = require('../config/path.js');

// Обработка JS
const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(rename("main.min.js"))
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: true }))
}

module.exports = js;