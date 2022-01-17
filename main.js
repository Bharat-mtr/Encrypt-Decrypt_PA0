let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");

function cypher(text) {
  let ans = "",
    x;
  for (let i = 0; i < text.length; i++) {
    x = text.charCodeAt(i);
    if (x >= 97 && x <= 122) {
      ans = ans + String.fromCharCode(219 - x);
    } else if (x >= 65 && x <= 90) {
      ans = ans + String.fromCharCode(155 - x);
    } else {
      ans = ans + String.fromCharCode(x);
    }
  }

  return ans;
}

message1.addEventListener("input", function (e) {
  console.log(e.target.value);
  message2.value = cypher(e.target.value);
});

message2.addEventListener("input", function (e) {
  console.log(e.target.value);
  message1.value = cypher(e.target.value);
});
