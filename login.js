// Login Logic
document.getElementById('loginBtn').addEventListener('click', function () {
  const role = document.getElementById('loginRole').value;
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value.trim();

  if (!username || !password) {
    alert('Please enter username and password.');
    return;
  }

  // Optional: mock validation (replace with backend logic in real app)
  localStorage.setItem('currentUser', JSON.stringify({ username, role }));

  if (role === 'user') {
    window.location.href = 'user.html';
  } else if (role === 'admin') {
    window.location.href = 'admin.html';
  } else if (role === 'guest') {
    window.location.href = 'guest.html';
  } else {
    alert('Invalid role selected.');
  }
});

// Signup Logic
document.getElementById('signupBtn').addEventListener('click', function () {
  const role = document.getElementById('signupRole').value;
  const username = document.getElementById('signupUser').value.trim();
  const password = document.getElementById('signupPass').value.trim();

  if (!username || !password) {
    alert('Please fill in all fields to sign up.');
    return;
  }

  // Optional: mock storage (use backend API in real app)
  localStorage.setItem('stackitUser', JSON.stringify({ username, password, role }));
  localStorage.setItem('currentUser', JSON.stringify({ username, role }));

  if (role === 'user') {
    window.location.href = 'user.html';
  } else if (role === 'admin') {
    window.location.href = 'admin.html';
  } else {
    alert('Invalid role selected.');
  }
});
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
document.getElementById('usernameDisplay').innerText = currentUser.username;
