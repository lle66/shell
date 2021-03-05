var shell = require('shelljs')
/* var Compressor = require('compressorjs')
 new Compressor('./big.png', {
    quality: 0.6,
    success(result) {
		console.info(result)
	}
 }) */
 const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
//const PNGImages = 'assets/images.png';
(async () => {
    const files = await imagemin(['./*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [
            imageminJpegtran({
				 quality: [0.1, 0.1]
			}),
            imageminPngquant({
                quality: [0.4, 0.6]
            })
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();

//没用
/* const imageminMozjpeg = require('imagemin-mozjpeg');
const JPEGImages = './*.jpg';
const output = './build/images2';
const optimiseJPEGImages = () =>
  imagemin('./*.jpg', output, {
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
    ]
  });
optimiseJPEGImages()
  .catch(error => shell.echo(error)); */