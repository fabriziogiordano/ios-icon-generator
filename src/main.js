const sharp = require('sharp');
const sizes = require('./sizes').sizes;
const resize = require('./helper').resize;

const source = sharp('source/1024x1024.png')

sizes.forEach((size) => {
  resize(source, size.size, size.name);
})
