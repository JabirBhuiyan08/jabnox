const Sitemap = require('react-router-sitemap').default;
const path = require('path');

function generateSitemap() {
  return new Sitemap(require('./src/routes'))
    .build('https://jabnox.com')
    .save(path.resolve(__dirname, './public/sitemap.xml'));
}

generateSitemap();
