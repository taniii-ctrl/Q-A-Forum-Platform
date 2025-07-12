loginBtn.addEventListener("click", () => {
  const role = document.getElementById("loginRole").value;
  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value.trim();

  if (!username || !password) {
    showMessage("Please fill in all fields.", true);
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem(username));

  if (storedUser && storedUser.password === password && storedUser.role === role) {
    showMessage("Login successful! Redirecting...", false);

    // 🚀 Redirect based on role
    setTimeout(() => {
      if (role === "user") window.location.href = "user.html";
      else if (role === "admin") window.location.href = "admin.html";
      else if (role === "guest") window.location.href = "guest.html";
    }, 1000);
    
  } else {
    showMessage("Invalid credentials or role mismatch.", true);
  }
});
