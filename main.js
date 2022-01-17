let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");

function cypher(text) {
  // Function for Encrypting/Decrypting The text
  let ans = "",
    x; // cypher is taking text as a input, its cipher text will be ans which is initially empty string
  for (let i = 0; i < text.length; i++) {
    //Looping through every character of text
    x = text.charCodeAt(i); // Initialising x with ascii value of every character of text
    if (x >= 97 && x <= 122) {
      // checking if its small Alphabet
      ans = ans + String.fromCharCode(219 - x);
    } else if (x >= 65 && x <= 90) {
      //checking if its Capital Albhabet
      ans = ans + String.fromCharCode(155 - x);
    } else {
      // else it will be maped to its plaintext character
      ans = ans + String.fromCharCode(x);
    }
  }

  return ans;
}

message1.addEventListener("input", function (e) {
  // triggered when text in Plain Text is updated
  message2.value = cypher(e.target.value);
});

message2.addEventListener("input", function (e) {
  // triggered when text in Cipher Text is updated
  message1.value = cypher(e.target.value);
});
