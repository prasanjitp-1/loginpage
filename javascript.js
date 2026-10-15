document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.textContent = isPassword ? "Hide" : "Show";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      message.textContent = "Please enter username and password.";
      message.style.color = "#fca5a5";
      return;
    }

    message.textContent = `Welcome, ${username}! Login successful.`;
    message.style.color = "#86efac";
    loginForm.reset();
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  });
});