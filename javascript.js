// Registration - Save to LocalStorage
const regForm = document.getElementById("registerForm");
if (regForm) {
  regForm.addEventListener("submit", function(e){
    e.preventDefault();
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const email = document.getElementById("regEmail").value;

    localStorage.setItem("savedUsername", user);
    localStorage.setItem("savedPassword", pass);
    localStorage.setItem("savedEmail", email);

    document.getElementById("regMsg").innerText = "Account Created! Redirecting to Login...";
    document.getElementById("regMsg").style.color = "green";

    setTimeout(() => { window.location.href = "login.html"; }, 1500);
  });
}

// Login - Retrieve from LocalStorage
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const savedUser = localStorage.getItem("savedUsername");
    const savedPass = localStorage.getItem("savedPassword");

    if (user === savedUser && pass === savedPass) {
      document.getElementById("loginMsg").innerText = "Login Successful!";
      document.getElementById("loginMsg").style.color = "green";
      setTimeout(() => { alert("Welcome " + savedUser); }, 500);
    } else {
      document.getElementById("loginMsg").innerText = "Invalid Username or Password";
      document.getElementById("loginMsg").style.color = "red";
    }
  });
}