// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {

  // Login form validation
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if (username === "" || password === "") {
      alert("Please enter Username and Password");
    } else {
      alert("Login Successful! Welcome " + username);
      form.reset();
    }
  });

  // Navigation click
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const page = this.textContent;
      alert("You clicked