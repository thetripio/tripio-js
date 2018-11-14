const jsdoc2md = require("jsdoc-to-markdown");
const fs = require('fs');
const path = require('path');

const srcPath = './src/';
const distPath = './mds/';

function createDoc(path, filesList = []) {
    fs.readdirSync(path).forEach((file, index) => {
        const stat = fs.statSync(path + file);
        
        if (stat.isDirectory()) {
            if (file === 'room-night')
                createDoc(path + file + "/", filesList);
        } else {
            filesList.push({
                path: path,
                filename: file
            });

            if (file.indexOf('.js') > 0) {
                jsdoc2md.render({
                    files: path + file
                }).then((markdown) => {
                    let fileName = distPath + file;
                    fileName = fileName.split('.js')[0]
                    console.log(fileName);
                    console.log(markdown);
                    fs.writeFile(fileName + '.md', markdown);
                });
            }
        }
    });
    
    return filesList;
}

createDoc(srcPath);