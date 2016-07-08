//rollup hack
import {rollup} from 'rollup'
import * as path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){

        if(id.startsWith('rxjs/')){
            return `${__dirname}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
        }

        //TODO: remove when https://github.com/angular/angular/issues/8381 lands
        if(id.startsWith('@angular/core')){
            if(id === '@angular/core'){
                return `${__dirname}/node_modules/@angular/core/esm/index.js`;
            }
            return `${__dirname}/node_modules/@angular/core/esm/${id.split('@angular/core').pop()}.js`;
        }
        if(id.startsWith('@angular/common')){
            if(id === '@angular/common'){
                return `${__dirname}/node_modules/@angular/common/esm/index.js`;
            }
            return `${__dirname}/node_modules/@angular/common/esm/${id.split('@angular/common').pop()}.js`;
        }

        if(id.startsWith('platform-browser')){
            if(id === 'platform-browser'){
                return `${__dirname}/node_modules/platform-browser/esm/index.js`;
            }
            return `${__dirname}/node_modules/platform-browser/esm/${id.split('platform-browser').pop()}.js`;
        }
    }
}


const rollupNG2 = (config) => new RollupNG2(config);


export default {
    entry: 'es6/main.js',
	format: 'es6',
	dest: 'build/build.js',
    sourceMap: true,
    plugins: [
      rollupNG2(), 
     // babel(babelrc()),
     // uglify(),
      nodeResolve({jsnext: true})],

}