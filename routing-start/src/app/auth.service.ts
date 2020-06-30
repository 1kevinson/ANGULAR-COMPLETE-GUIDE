export class AuthService {
  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log("logged in");
  }

  logout() {
    this.loggedIn = false;
    console.log("logged out");
  }
}
