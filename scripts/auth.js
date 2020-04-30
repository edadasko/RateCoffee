function submitLogInForm() {
  let email = document.getElementById('login-input').value;
  let password = document.getElementById('password-input').value;

  authService.logIn(email, password);
  return false;
}

function submitSignUpForm() {
  let email = document.getElementById('login-input').value;
  let password = document.getElementById('password-input').value;

  authService.signUp(email, password);
  return false;
}
