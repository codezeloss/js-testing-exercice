function CaesarCipher(str, num) {
  // you can comment this line
  str = str.toLowerCase();

  let result = "";
  let charCode = 0;

  for (let i = 0; i < str.length; i++) {
    charCode = str[i].charCodeAt() + num;
    result += String.fromCharCode(charCode);
  }
  return result;
}
