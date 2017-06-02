import * as babylon from 'babylon'
 
let code = `
     let a = 1, b = 2;
     function sum(a, b){
          return a + b;
     }
 
    sum(a, b);
`
 
let ast = babylon.parse(code)
window.console.log(ast)