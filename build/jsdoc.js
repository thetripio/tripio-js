const jsdoc2md = require("jsdoc-to-markdown");
const fs = require('fs');
const path = require('path');

const srcPath = './src/';
const distPath = './doc/';

fs.readdirSync(srcPath).forEach((file) => {
    jsdoc2md.render({
        files: srcPath + file
    }).then((markdown) => {
        let fileName = distPath + file;
        fileName = fileName.split('.js')[0]
        fs.writeFile(fileName + '.md', markdown);
    })
})