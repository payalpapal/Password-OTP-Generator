 function generatePassword(){
 const length = document.getElementById("length").value;
 const includeNumbers = document.getElementById("includeNumbers").checked;
 const includeUppercase = document.getElementById("includeUppercase").checked;
 const includeSpecial = document.getElementById("includeSpecial").checked;

 const lowercase = 'abcdefghijklmnopqrstuvwxyz';
 const numbers = '0123456789';
 const uppercase = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
 const special = '!@#$%^&*()_+-=[]{}|:;,.<>?/';

 let characters = lowercase;
 if(includeNumbers)characters += numbers;
 if(includeUppercase)characters += uppercase;
 if(includeSpecial)characters += special;

 let password = '';
 for(let i=0; i<length; i++){
const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex]
 }

 document.getElementById('output').value = password;
}