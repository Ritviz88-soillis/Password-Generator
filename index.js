const characters = ["A","B","C","D","E","F","G","H","I","J","K"
    ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
]

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K"
    ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
     "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
     "p","q","r","s","t","u","v","w","x","y","z"]

const symbols = ["A","B","C","D","E","F","G","H","I","J","K"
    ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "~",
    "`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"]


const numbers = ["A","B","C","D","E","F","G","H","I","J","K"
    ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z","0","1", "2", "3", "4", "5", "6", "7", "8", "9"]

let valueEl = document.getElementById("password");
let len = document.getElementById("length");
let generateBtn = document.getElementById("generate");
const checkbox = document.getElementById("symbols");
const checkbox2 = document.getElementById("numbers");

function generatePassword() {
    let password = "";
    let pool = "";
    if (checkbox.checked && checkbox2.checked) {
        pool = characters;
    }
    else if (checkbox.checked && !checkbox2.checked) {
        pool = symbols;
    }
    else if(!checkbox.checked && checkbox2.checked) {
        pool = numbers;
    }
    else {
        pool = alphabets;
    }
    lenVal = parseInt(len.value);

    for (let i = 0; i < lenVal; i++) {
        password += pool[Math.floor(Math.random() * pool.length)];
    }
    console.log(password);
    valueEl.value = password;
}

generateBtn.addEventListener("click", generatePassword);

let copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", function() {
    valueEl.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
});




