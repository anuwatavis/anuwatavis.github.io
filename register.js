window.onload = pageLoad;
function pageLoad() {
  let x = document.getElementById("submitButton");
  x.onclick = validateForm;
}

function validateForm() {
  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
  var password = document.forms["myForm"]["password"].value;
  var repassword = document.forms["myForm"]["repassword"].value;
  var wrongPassword = document.getElementById("password-invalid");
  console.log(wrongPassword);
  console.log(password);
  console.log(repassword);

  if (password === repassword) {
    return true;
  } else {
    console.log("password and repassword not correct");
    wrongPassword.style.display = "block";
    return false;
  }
}
