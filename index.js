const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// Link to Figma: https://www.figma.com/file/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?type=design&node-id=0-1&mode=design&t=DNFF5IWoWbns8C1R-0

let passwordLength = 15
let passOne = document.getElementById("firstGen")
let passTwo = document.getElementById("secondGen")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword

}
let generatedPasswordOne = generateRandomPassword()
let generatedPasswordTwo = generateRandomPassword()

function getPassword(){
    passOne.textContent = generatedPasswordOne;
    passTwo.textContent = generatedPasswordTwo;
    
}

