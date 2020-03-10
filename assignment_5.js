let count = 0;
let postFunction = () => {
  if (count === 0) {
    console.log(count);
    console.log("post");
    let post1 = document.getElementById("post1");
    let text = document.getElementById("text1").value;
    post1.innerHTML = text;
    count += 1;
  } else if (count === 1) {
    console.log(count);
    console.log("post");
    let post1 = document.getElementById("reply1");
    let text = document.getElementById("text1").value;
    post1.innerHTML = text;
    count += 1;
  } else if (count === 2) {
    console.log(count);
    console.log("post");
    let post1 = document.getElementById("reply2");
    let text = document.getElementById("text1").value;
    post1.innerHTML = text;
    count = 0;
  }
};

let clearFunction = () => {
  let post1 = document.getElementById("post1");
  let post2 = document.getElementById("reply1");
  let post3 = document.getElementById("reply2");
  let text = document.getElementById("text1").value;
  let text_con = document.getElementById("text1");

  post1.innerHTML = "";
  post2.innerHTML = "";
  post3.innerHTML = "";
  count = 0;
  text_con.value = "WELCOME BACK";
};
