function submitLogInForm() {
  let email = document.getElementById('login-input').value;
  let password = document.getElementById('password-input').value;

  authService.logIn(email, password);
}

function submitSignUpForm() {
  let email = document.getElementById('login-input').value;
  let password = document.getElementById('password-input').value;
  let passwordAgain = document.getElementById('password-again-input').value;

  if (password != passwordAgain) {
    alert("Passwords are different.")
    return;
  }
  if (password.length < 6) {
    alert("Password's length should be at least 6 symbols.")
    return;
  }
  authService.signUp(email, password);
}
