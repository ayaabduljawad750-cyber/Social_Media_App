let page = 
`
    <div class="page">
        <div class="container">
            <div class="form">
                <h1>Sign Up</h1>
                <form id="signup-form" action="">
                    <input type="text" name="fname-sign" placeholder="Full Name" required><br><br>
                    <input type="text" name="uname-sign" placeholder="Username" required><br><br>
                    <input type="email" name="email-sign" placeholder="Email" required><br><br>
                    <div class="eye-container">
                        <input class="passwordInput" type="password" name="password-sign"
                            placeholder="Password must be >= 8" required>
                        <span class="toggle-password">
                            <i class="fa-solid fa-eye-slash eye"></i>
                        </span>
                    </div><br>
                    <div class="eye-container">
                        <input class="passwordInput" type="password" name="confirm-password-sign"
                            placeholder="Confirm Password" required>
                        <span class="toggle-password" ">
                            <i class=" fa-solid fa-eye-slash eye"></i>
                        </span>
                    </div><br>
                    <div id="pass-len" class="err">
                       
                    </div>
                    <button class="btn" id="SignUp-btn" type="submit">Sign Up</button>
                </form>
                <p class="signUp">
                    Already have an account?
                    <a id="logIn-link" href="#">Log In</a>
                </p>
            </div>
        </div>
        <div class="container hide ">
            <div class="form ">
                <h1>Log In</h1>
                <form id="login-form" action="">
                    <input type="email" name="email-login" placeholder="Email" required><br><br>
                    <div class="eye-container">
                        <input class="passwordInput" type="password" name="password-login" placeholder="Password"
                            required>
                        <span class="toggle-password">
                            <i class="fa-solid fa-eye-slash eye"></i>
                        </span>
                    </div><br>
                    <div id="error" class="err">

                    </div>
                    <button class="btn" id="logIn-btn" type="submit">Log In</button>
                </form>
                <p class="login">
                    Don’t have an account?
                    <a id="SignUp-link" href="#">Sign Up</a>
                </p>
            </div>
        </div>

    </div>
`
document.body.innerHTML = page;
let signupform = document.querySelector("#signup-form");
let loginform = document.querySelector("#login-form");
let firstNameSignup = document.querySelector(`input[name="fname-sign"]`);
let userNameSignup = document.querySelector(`input[name="uname-sign"]`);
let emailSignup = document.querySelector(`input[name="email-sign"]`);
let passwordSignup = document.querySelector(`input[name="password-sign"]`);

let confirmPasswordSignup = document.querySelector(
  `input[name="confirm-password-sign"]`
);

let userId = Date.now();
let currentUser ;
console.log(userId);
let usersInSystem =
  JSON.parse(localStorage.getItem("userAuthentication")) || [];
signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  let userAuthentication = {
    id: userId,
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
    document.getElementById("pass-len").innerHTML = `

           <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
         Password must be greater or equal to 8
        </span>
      
      `;
    if (passwordSignup.value != confirmPasswordSignup.value) {
      document.getElementById("pass-len").innerHTML = `
        <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
          Enter The Same Passwords they must be >= to 8
        </span>
        `;
    }
  }
  if (
    passwordSignup.value.length >= 8 ||
    confirmPasswordSignup.value.length >= 8
  ) {
    if (passwordSignup.value !== confirmPasswordSignup.value) {
      document.getElementById("pass-len").innerHTML =
  `     <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
          Enter The Same Passwords
        </span>
        `;
        ;
    } else if (passwordSignup.value && confirmPasswordSignup.value) {
      signupform.parentElement.parentElement.classList.add("hide");
      loginform.parentElement.parentElement.classList.remove("hide");
      document.getElementById("pass-len").innerHTML = "";
      usersInSystem.push(userAuthentication);
      localStorage.setItem("userAuthentication", JSON.stringify(usersInSystem));
    }
  }
});

// login and get data from the localstorage
let emailLogin = document.querySelector(`input[name="email-login"]`);
let passwordLogin = document.querySelector(`input[name="password-login"]`);
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (localStorage.getItem("userAuthentication")) {
    for (let i = 0; i < usersInSystem.length; i++) {
      let data = JSON.parse(localStorage.getItem("userAuthentication"));
      console.log(data);
      let emailLs = data[i].Email;
      let passwordLs = data[i].password;
      console.log(emailLs, passwordLs);
      if (emailLogin.value == emailLs && passwordLogin.value == passwordLs) {
        console.log("yes");
        currentUser = data[i];
        console.log(currentUser)
        localStorage.setItem("currentUser" , JSON.stringify(currentUser));
        // window.location.href = "" اكتب امتداد صفحة الهوم هنا

        
        window.location.href = "./Home/home.html";
        return;
      } else if (emailLogin.value != emailLs ) {
        document.getElementById("error").innerHTML = `
         <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
           You don't have account you must sign up
        </span>
        
        `;
      }
      else {
         document.getElementById("error").innerHTML = `
         <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
           Password is Wrong
        </span>
        
        `;
      }
    }
  } else {
    document.getElementById("error").innerHTML = `
        <span style="color:red">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ff0000;"></i>
           You don't have account you must sign up
        </span>
        
      `;
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

let passwordInputs = document.querySelectorAll(".passwordInput");
console.log(passwordInputs);
let toggleIcons = document.querySelectorAll(".toggle-password");

passwordInputs.forEach((passwordInput, i) => {
  toggleIcons[i].addEventListener("click", () => {
    passwordVisiability(passwordInput, i);
  });
});

function passwordVisiability(passwordInput, i) {
  if (passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text");
    toggleIcons[i].innerHTML = '<i class="fa-solid fa-eye eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleIcons[i].innerHTML = `<i class="fa-solid fa-eye-slash eye"></i>`;
  }
}
