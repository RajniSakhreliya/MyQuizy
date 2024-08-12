// TODO: Install workBox-build from a command prompt
// TODO:   npm install workbox-build
const workboxBuild = require('workbox-build');
const SRC_DIR = 'src';
const BUILD_DIR = '{1:dist}';
const SW = 'sw.js';

const input ={
    swSrc: `${SRC_DIR}/${SW}`,
    swDest: `${BUILD_DIR}/${SW}`,
    globDirectory: BUILD_DIR,
    globPatterns: [
        '**/*.{js,png,ico,svg,html,css,scss}',
        'assets/**/*'
    ],
    globIgnores: ['sw.js'],
    maximumFileSizeToCacheInBytes: 4000000
};

workboxBuild.injectManifest(input).then(() =>{
    console.log(`The service worker ${BUILD_DIR}/${SW} has been injected with a precache list.`);
});