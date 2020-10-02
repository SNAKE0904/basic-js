const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(checkrev=true) {
        if(checkrev === false) {
            this.check = false
        }
    }

    encode(str){
        let strs = str.toUpperCase().split('');

        let mass = [];
        let masc = []
        let seter = 0;
        let septer = 0;
        for(let x = 0; x < strs.length; x++){
            if (strs[x].charCodeAt(0) < 'A'.charCodeAt(0) || strs[x].charCodeAt(0) > 'Z'.charCodeAt(0)) {
                mass[septer]= masc;
                masc = []
                septer++
                mass[septer] = strs[x].charCodeAt(0) - 65;
                septer++
                seter = 0;
            }else if(x == strs.length-1){
                masc[seter] = strs[x].charCodeAt(0) - 65;
                mass[septer]= masc;
            }else if(strs[x].charCodeAt(0) >= 'A'.charCodeAt(0) || strs[x].charCodeAt(0) <= 'Z'.charCodeAt(0)){
                masc[seter] = strs[x].charCodeAt(0) - 65;
                seter++;
            }
        }
        return mass;
    }

   comparator(str, key){
       let disc = []
       let iter = 0
       for(let x = 0; x < str.length; x++){
           if(!Array.isArray(str[x])){
               disc.push(str[x]);
           } else{
               for(let y = 0; y < str[x].length; y++){
                   disc.push([str[x][y], key[0][iter]])
                   iter++;
                   if(iter >= key[0].length){
                       iter = 0;
                   }
               }
           }
       }

       return disc;
   }


    encrypt(str, key) {
    let strs = this.encode(str);
    let keys = this.encode(key);
    let disc = this.comparator(strs, keys);
    let code = [];

        for(let x = 0; x < disc.length; x++){
            if(!Array.isArray(disc[x])){
                code.push(disc[x])
            } else{
                code.push((disc[x][0] + disc[x][1]) % 26)
            }
        }

    for(let x = 0; x < disc.length; x++){
      code[x] = String.fromCodePoint(code[x]+65)
    }
        if(this.check === false){
            code.reverse();
        }

    return code.join('');
  }

    decrypt(str, key) {
        let strs = this.encode(str);
        let keys = this.encode(key);
        let disc = this.comparator(strs, keys);
        let code = [];

        for(let x = 0; x < disc.length; x++){
            if(!Array.isArray(disc[x])){
                code.push(disc[x])
            } else{
                code.push((disc[x][0] - disc[x][1] + 26) % 26)
            }
        }

        for(let x = 0; x < disc.length; x++){
            code[x] = String.fromCodePoint(code[x]+65)
        }

        if(this.check === false){
            code.reverse();
        }

        return code.join('');
    }

 }


module.exports = VigenereCipheringMachine;
