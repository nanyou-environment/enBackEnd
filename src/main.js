import * as babylon from 'babylon'
import generator from 'babel-generator'
 
let code = `
     let a = 1, b = 2;
     function sum(a, b){
          return a + b;
     }
 
    sum(a, b);
`
 
let ast = babylon.parse(code)
let codes = generator(ast)
window.console.log(codes)
document.getElementById('app').innerHTML = '颠三倒四的'