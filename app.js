console.log("Keezhakundalapaadi Portal Loaded");

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function showMessage(msg){
  alert(msg);
}
