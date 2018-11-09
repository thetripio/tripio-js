const jsdoc2md = require("jsdoc-to-markdown");
const fs = require('fs');
const path = require('path');

const srcPath = './src/';
const distPath = './doc/';

fs.readdirSync(srcPath).forEach((file) => {
    if (file.indexOf('.js') > 0) {
        jsdoc2md.render({
            files: srcPath + file
        }).then((markdown) => {
            let fileName = distPath + file;
            fileName = fileName.split('.js')[0]
            fs.writeFile(fileName + '.md', markdown);
        });
    }
})

// function jsFiles() {
//     fs.readdirSync(path).forEach((itm, index) => {
//         const stat = fs.statSync(path + itm);
//         if (stat.isDirectory()) {
//             //递归读取文件
//             jsFiles(path + itm + "/", filesList);
//         } else {
//             const obj = {}; //定义一个对象存放文件的路径和名字
//             obj.path = path; //路径
//             obj.filename = itm; //名字
//             filesList.push(obj);


//             // if (itm.indexOf('.js') > 0) {
//             //     jsdoc2md.render({
//             //         files: path + itm
//             //     }).then((markdown) => {
//             //         let fileName = distPath + itm;
//             //         fileName = fileName.split('.js')[0]
//             //         fs.writeFile(fileName + '.md', markdown);
//             //     });
//             // }
//         }
//     });
//     return filesList;
// }

// jsFiles(srcPath);