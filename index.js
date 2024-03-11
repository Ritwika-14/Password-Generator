const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123467890";
const symbol = "!@#$%^&*(){}[]";
const allChar = upperCase + lowerCase + number + symbol;

const passwordBox = document.getElementById("password");

function Generate()
{
    let output = "";
    output += upperCase[(Math.floor(Math.random() * upperCase.length))];
    output += lowerCase[(Math.floor(Math.random() * lowerCase.length))];
    output += number[(Math.floor(Math.random() * number.length))];
    output += symbol[(Math.floor(Math.random() * symbol.length))];

    while(12 > output.length)
        output += allChar[(Math.floor(Math.random() * allChar.length))];

    passwordBox.value = output;
}
function Copy() 
{
    passwordBox.select();
    //passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
}

