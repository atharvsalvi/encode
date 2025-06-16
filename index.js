
const encryptButton = document.querySelector('.encrypt-button');
const decryptButton = document.querySelector('.decrypt-button');
const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

encryptButton.onclick = function() {
    const encryptText = document.querySelector('.encrypt-input');
    const textInput = encryptText.value;
    const keyText = document.querySelector('.encrypt-key');
    const key = keyText.value;
    encrypt(textInput, key, 1);
}

decryptButton.onclick = function() {
    const decryptText = document.querySelector('.decrypt-input');
    const textInput = decryptText.value;
    const keyText = document.querySelector('.decrypt-key');
    const key = keyText.value;
    decrypt(textInput, key, 1);
}

function encrypt(textInput, keyInput, direction) {
    const text = textInput.toLowerCase();
    const key = keyInput.toLowerCase();
    let encryptText = "";
    let j = 0;
    for(let i=0; i<text.length; i++) {
        const charInText = text.charAt(i);
        
        if(((charInText >= 'a') && (charInText <= 'z')) || ((charInText >= '0') && (charInText <= '9'))) {
            const keyChar = (key.charAt(j%(key.length)));
            j++;
            const shift = alphabet.indexOf(keyChar);
            const code = alphabet.indexOf(charInText);
            const newIndex = (code + shift*direction + alphabet.length) % (alphabet.length);
            encryptText += alphabet.charAt(newIndex); 
        } else {
            encryptText += charInText;
        }
    }
    window.alert(`Encrypted Text:\n${encryptText}`);
    return encryptText;
}

function decrypt(textInput, keyInput, direction) {
    const text = textInput.toLowerCase();
    const key = keyInput.toLowerCase();
    let decryptText = "";
    let j=0;
    for(let i=0; i<text.length; i++) {
        const charInText = text.charAt(i);
        if(((charInText >= 'a') && (charInText <= 'z')) || ((charInText >= '0') && (charInText <= '9'))) {
            const keyChar = (key.charAt(j%(key.length)));
            j++;
            const shift = alphabet.indexOf(keyChar);
            const code = alphabet.indexOf(charInText);
            const newIndex = (code - shift*direction + alphabet.length) % (alphabet.length);
            decryptText += alphabet.charAt(newIndex); 
        } else {
            decryptText += charInText;
        }
    }
    window.alert(`Decrypted Text:\n${decryptText}`);
    return decryptText;
}