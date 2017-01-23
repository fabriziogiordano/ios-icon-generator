const resize = (source, size, name) => {
  const [x, y] = size.split('x');
  source
    .resize(parseInt(x), parseInt(y))
    .background('white')
    .embed()
    .toFile(`ios/AppBundleName/Images.xcassets/AppIcon.appiconset/${name}.png`)
    .then(() => {
      console.log(name)
    });
}

module.exports.resize = resize;
