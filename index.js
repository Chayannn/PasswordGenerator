const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


    let passWordLength = prompt("Enter Length of your password")
    let passWord1 = document.getElementById("passWord-1");
    let passWord2 = document.getElementById("passWord-2");

    function getRandomCharacter(){
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    }
    

function randomPasswordFn() {
    
    let randomPassword = ""

    for (let i = 0; i <= passWordLength; i++) {

        randomPassword += getRandomCharacter()

    }
    return randomPassword
}

function  passwordGenerator(){

    passWord1.textContent = randomPasswordFn()
    passWord2.textContent = randomPasswordFn()

}

