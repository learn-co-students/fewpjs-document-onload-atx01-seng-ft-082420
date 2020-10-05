document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text").innerHTML = "This is really cool!";
  });

// function changeP() {
//     let par = document.querySelector(#text);
//     par.innerHTML = "This is really cool!";
// };
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );