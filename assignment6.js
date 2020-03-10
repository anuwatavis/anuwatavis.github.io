function getParams() {
  var idx = document.URL.indexOf("?");
  var params = new Array();
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}

window.onload = loginLoad;
function loginLoad() {
  // วิธีใช้ getParams()
  let x = document.getElementById("submitButtonLogin");
  x.onclick = checkLogin;
}

function checkLogin() {
  var parameter = getParams();
  var username = parameter["username"];
  var password = parameter["password"];

  var userNameInput = document.forms["myLogin"]["username"].value;
  var passwordInput = document.forms["myLogin"]["password"].value;
  console.log(userNameInput);
  console.log(passwordInput);

  if (username === userNameInput && password === passwordInput) {
    alert("welcome");
  } else {
    alert("ใส่ใหม่นะครับที่รัก");
    return false;
  }
}
