const { src, dest } = require('gulp');

// Плагины
const fileInclude = require('gulp-file-include');

// Конфигурация
const path = require('../config/path.js');

// Обработка HTML
const html = () => {
  return src(path.html.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(path.html.dest));
}

module.exports = html;