class AuthService {
  constructor() {
    this.user = null;
  }

  async isAuthenticated () {
    let service = this;
    return await initializeAuth.then(() => {
      return service.user != null
    })
  }

  setUser (user) {
    this.user = user;
  }

  logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      onNavigate('/');
    }).catch(function(error) {
      alert('Email or password is wrong. Try again.')
    });
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      onNavigate('/');
    }).catch(function(error) {
      alert('Email is wrong or has already been used.')
    });
  }

  logOut() {
    firebase.auth().signOut().then(function() {
      onNavigate('/');
    });
  }
}

const initializeAuth = new Promise(resolve => {
  firebase.auth().onAuthStateChanged(user => {
    authService.setUser(user);
    if (user) {
      hideAuthButtons();
    } else {
      displayAuthButtons();
    }
    resolve();
  })
})

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

let authService = new AuthService();
