let signupform = document.querySelector("#signup-form");
let loginform = document.querySelector("#login-form");
let firstNameSignup = document.querySelector(`input[name="fname-sign"]`);
let userNameSignup = document.querySelector(`input[name="uname-sign"]`);
let emailSignup = document.querySelector(`input[name="email-sign"]`);
let passwordSignup = document.querySelector(`input[name="password-sign"]`);
let confirmPasswordSignup = document.querySelector(
  `input[name="confirm-password-sign"]`
);

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  let userAuthentication = {
    fullname: firstNameSignup.value,
    userName: userNameSignup.value,
    Email: emailSignup.value,
    password: passwordSignup.value,
    confirmPassword: confirmPasswordSignup.value,
  };
  if (
    passwordSignup.value.length < 8 ||
    confirmPasswordSignup.value.length < 8
  ) {
    document.getElementById("pass-len").innerHTML =
      "Password must be greater or equal to 8";
    if (passwordSignup.value != confirmPasswordSignup.value) {
      document.getElementById("pass-len").innerHTML =
        "Enter The Same Passwords they must be >= to 8";
    }
  }
  if (
    passwordSignup.value.length >= 8 ||
    confirmPasswordSignup.value.length >= 8
  ) {
    if (passwordSignup.value !== confirmPasswordSignup.value) {
      document.getElementById("pass-len").innerHTML =
        "Enter The Same Passwords";
    } else if (passwordSignup.value && confirmPasswordSignup.value) {
      signupform.parentElement.parentElement.classList.add("hide");
      loginform.parentElement.parentElement.classList.remove("hide");
      document.getElementById("pass-len").innerHTML = "";
      localStorage.setItem(
        "userAuthentication",
        JSON.stringify(userAuthentication)
      );
    }
  }
});

// login and get data from the localstorage
let emailLogin = document.querySelector(`input[name="email-login"]`);
let passwordLogin = document.querySelector(`input[name="password-login"]`);
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (localStorage.getItem("userAuthentication")) {
    let emailLs = JSON.parse(localStorage.getItem("userAuthentication")).Email;
    let passwordLs = JSON.parse(
      localStorage.getItem("userAuthentication")
    ).password;
    if (emailLogin.value == emailLs && passwordLogin.value == passwordLs) {
      // window.location.href = "" اكتب امتداد صفحة الهوم هنا
window.location.href="../Home/home.html"
      document.getElementById("error").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML =
        "Email or password is wronge";
    }
  } else {
    document.getElementById("error").innerHTML =
      "You don't have account you must sign up";
  }
});

// toggele btw login and signup
document.querySelector("#logIn-link").addEventListener("click", (e) => {
  e.preventDefault();
  signupform.parentElement.parentElement.classList.add("hide");
  loginform.parentElement.parentElement.classList.remove("hide");
});
document.querySelector("#SignUp-link").addEventListener("click", (e) => {
  e.preventDefault();

  loginform.parentElement.parentElement.classList.add("hide");
  signupform.parentElement.parentElement.classList.remove("hide");
});
