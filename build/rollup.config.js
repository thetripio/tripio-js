import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    plugins: [
        resolve({
            browser: true,
            jsnext: true,
            main: true,
            preferBuiltins: false
        }),
        commonjs({
            //include: 'node_modules/**'
        }),
        json(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: {
        file: 'dist/index.js',
        name: 'Tripio',
        format: 'iife' //cjs | umd
    }
};