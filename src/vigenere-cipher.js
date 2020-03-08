let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let template = /[A-Z]/;
class VigenereCipheringMachine {
    constructor(reverse){
        this.reverse = reverse;
    }

    encrypt(line, key) {
        let cipher = "";
        if(line === undefined || key == undefined)
            throw Error;
        let n = 0;
        line = line.toUpperCase();
        key = key.toUpperCase();

        let M, K;
        for(let i=0, j=0; i<line.length; i++) {
            if(line[i].match(template)){
                M = alphabet.split("").indexOf(line[i]);
                K = alphabet.split("").indexOf(key[j%key.length]);
                let pos = (M + K) % 26;
                cipher += alphabet[pos];
                j++;
            }
            else
                cipher += line[i];
        }
        if(this.reverse === false)
            return cipher.split("").reverse().join("");
        return cipher;
    }

    decrypt(cipher, key) {
        let message = "";
        if(cipher === undefined || key == undefined)
            throw Error;
        let n = 0;
        cipher = cipher.toUpperCase();
        key = key.toUpperCase();

        let C, K;
        for(let i=0, j=0; i<cipher.length; i++) {
            if(cipher[i].match(template)){
                C = alphabet.split("").indexOf(cipher[i]);
                K = alphabet.split("").indexOf(key[j%key.length]);
                let pos = (C - K) % 26;
                if(pos<0)
                    message += alphabet.split("").reverse()[Math.abs(pos)-1];
                else
                    message += alphabet.split("")[pos];
                j++;
            }
            else
                message += cipher[i];
        }
        if(this.reverse === false)
            return message.split("").reverse().join("");
        return message;
    }
}

module.exports = VigenereCipheringMachine;
