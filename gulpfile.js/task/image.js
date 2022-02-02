const { src, dest } = require('gulp');

// Плагины
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Обработка JS
const img = () => {
  return src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(imagemin(app.imagemin))
    .pipe(dest(path.img.dest));
}

module.exports = img;