function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  onNavigate('/error');
});
}

function logIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    onNavigate('/error');
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    hideAuthButtons();
  } else {
    displayAuthButtons();
  }

  if (user && (window.location.pathname == '/login' ||
      window.location.pathname == '/register')) {
    onNavigate('/');
  }
});

function logOut() {
  firebase.auth().signOut().then(function() {
    onNavigate('/');
  }).catch(function(error) {
  });
}

function getCurrentUserEmail() {
  var user = firebase.auth().currentUser;
  return user.email;
}

function displayAuthButtons() {
  document.getElementById('signup-link').style.display = 'block';
  document.getElementById('login-link').style.display = 'block';
  document.getElementById('logout-link').style.display = 'none';
  document.getElementById('create-link').style.display = 'none';
}

function hideAuthButtons() {
  document.getElementById('signup-link').style.display = 'none';
  document.getElementById('login-link').style.display = 'none';
  document.getElementById('logout-link').style.display = 'block';
  document.getElementById('create-link').style.display = 'block';
}
