
let userRole = prompt("Who's there?", "");

if(userRole === "Admin") {

  let password = prompt("Password?", "");
  
  if(password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === "") {
    alert("Canceled!");
  } else {
    alert("Wrong password!");
  }

} else if (userRole === null || userRole === "") {
  alert("Canceled");

} else {
  alert("I don't know you");
}