let randomNumber = 0;

const Alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOopPQqRrSsTtUuVvWwXxYyZz";
const number = "1@2#3$4%5&6*7!809";
const input = Alphabet+number;
let output= "";
for (let i = 1; i <= 12; i++) {
output+=input[ (Math.floor(Math.random() * 50))];
    }
function Generate()
{
    document.getElementById("password").value=output;
}
function Copy() {
    const passwordField = document.getElementById("password");
    
    // Select the text in the password field
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
}