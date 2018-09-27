const path = require('path');
const cwd = process.cwd();
const queue = require('./queue');
const fs = require('fs-extra');
const config = require('./config');
const utils = require('./utils')
const nodeResolve = require('resolve');

const isLess = (filePath)=>{
    return /\.less$/.test(filePath);
};
const isCss = (filePath)=>{
    return /\.css$/.test(filePath);
};
const isSass = (filePath)=>{
    return /\.(scss|sass))$/.test(filePath);
};
const getDist = (filePath) =>{
    let { name, dir } = path.parse(filePath);
    let relativePath = path.relative( path.join(cwd, 'src'), dir);
    let distDir = path.join(cwd, 'dist', relativePath);
    let styleExt = config[config['buildType']].styleExt; //获取构建的样式文件后缀名
    let distFilePath = path.join(distDir, `${name}.${styleExt}` );
    return distFilePath;
};

var less = require('less');
const compileLess = (filePath)=>{
    var content = fs.readFileSync(filePath, 'utf-8').toString();
    less.render(
        content,
        {
           filename: filePath,
           compress: true
        }
    )
    .then(res => {
        let code = res.css;
        queue.push({
            code: code,
            path: getDist(filePath),
            type: 'css'
        });
        utils.emit('build');
       

    })
    .catch(err => {
        if (err){
            // eslint-disable-next-line
            console.log(err);
        }
    });
    
};

const compileSass = (filePath)=>{
    
    //installedSass = nodeResolve('node-sass');
    if(!require( path.join(cwd, 'node_modules', 'node-sass', 'package.json'))){
        utils.installer('node-sass')
    }


    utils.installer('node-sass')
    .then(()=>{
        log();
    })
    let sass = require('node-sass');
    // return new Promise((resolve, reject)=>{
    //     sass.render(
    //         {
    //             file: file
    //         },
    //         (err, res) => {
    //             if (err) throw err;
    //             let code = res.css.toString();
    //             resolve(code);

    //             queue.push({
    //                 code: code,
    //                 path: getDist(filePath),
    //                 type: 'css'
    //             });
    //             utils.emit('build');
    //         }
    //     );
    // });
    

};


module.exports = (filePath)=>{
    if (isLess(filePath)){
        compileLess(filePath);
    } else if (isSass(filePath)){

    }

};