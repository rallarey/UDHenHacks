const firebaseConfig = {
    apiKey: "AIzaSyAcTb0AVwtoOlslV51omp6yZX1Db13s59Q",
    authDomain: "henhacks-1b587.firebaseapp.com",
    databaseURL: "https://henhacks-1b587-default-rtdb.firebaseio.com",
    projectId: "henhacks-1b587",
    storageBucket: "henhacks-1b587.appspot.com",
    messagingSenderId: "287637493438",
    appId: "1:287637493438:web:0b1bcc71969fb912d4f0ef",
    measurementId: "G-X98Z7CYW7D"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


  let renderLogIn = ()=>{
    $("body").html(`
    <div class = "log-in">
      <div class = "container">
        <div class="row align-items-center">
          
          <div class = "col">
            <h3>Login</h3>
            <input type = "text" placeholder = "Email" id = "user-email" class = form-control mb-3">
            <input type = "password" placeholder = "Password" id = "user-password" class = form-control mb-3">
            <br>
              <i>
                <small id = "signinpage">Go back </small>
              </i>
              <small>
                <input type="checkbox" id = "checkbox2"> Show Password
              </small>
            </br>
            <button type = "text" id = "loginbutton" class = "btn btn-outline-primary mb-3">Login</button>
            <button type = "text" id = "login2" class = "btn btn-outline-primary mb-3">Google</button>
          </div>
        </div>
      </div>
    </div>
    `);
  
    $("#checkbox2").on("click", ()=>{
      var x = document.getElementById("user-password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    })
  
    $("#login2").on("click", ()=>{
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result)=>{
          var credential = result.credential;
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var userName = user["displayName"];
          var avatar = user["photoURL"];
          var email = user["email"];
          var uid = user["uid"];
          writeUserData(uid, userName, email, avatar);
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
    });
  
    $("#signinpage").on("click", ()=>{
      renderSignIn();
    });
  
    $("#loginbutton").on("click", ()=>{
  
      var userEmail = $("#user-email").val();
      var userPassword = $("#user-password").val();
  
      auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential)=> {
          var user = userCredential.user;
        })
        .catch((error)=>{
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    });
  }
  
  let renderSignIn = ()=>{
    var profile_picture = '';
  
    $("body").html(`
    <div class = "sign-in">
      <div class = "container">
        <div class="row align-items-center">
          <div class="col">
            <h3>Sign Up</h3>
            
            <input type = "text" placeholder = "Fullname" id = "new-user-name" class = form-control mb-3">
            
            <input type = "text" placeholder = "Email" id = "new-user-email" class = form-control mb-3">
            <!--
            <input type = "text" placeholder = "Username" id = "userInp" class = form-control mb-3">
            -->
            <input type = "password" placeholder = "Password" id = "new-user-password" class = form-control mb-3">
            <input type = "password" placeholder = "Confirm Password" id = "confirm-password" class = form-control mb-3">
            <div id="fileuploadwrap">
            <span id="status"></span>
              <input type="file" id="fileupload" accept="image/png, image/jpeg"/>
              <button id="imageupload">Upload Image</button>
                <div id="output">
                </div>
            </div>
            <br>
              <small id = "image">*u must hit upload image for your profile picture to upload</small>
            </br>
            <br>
              <i>
                <small id = "loginpage">Already have an account?</small>
              </i>
              <small>
                <input type="checkbox" id = "checkbox"> Show Password
              </small>
            </br>
      
            <button type = "text" id = "signup" class = "btn btn-outline-primary mb-3">Sign Up</button>
            <button type = "text" id = "login" class = "btn btn-outline-primary mb-3">Google</button>
                  
          </div>
        </div>
      </div>
    </div>
    `);
  
    $("#loginpage").on("click", ()=>{
      renderLogIn();
    })
  
    $("#checkbox").on("click", ()=>{
      var x = document.getElementById("new-user-password");
      var y = document.getElementById("confirm-password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
      if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
    })
    

  
    $("#signup").on("click", ()=>{
  
      var userEmail = $("#new-user-email").val();
      var userPassword = $("#new-user-password").val();
      var confirmPassword = $("#confirm-password").val();
  
      var userName = $("#new-user-name").val();
  
      if (userPassword === confirmPassword) {
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
          .then((userCredential)=> {
            var user = userCredential.user;
            let myuid = user.uid;
            writeUserData(myuid, userName, userEmail, profile_picture);
          })
          .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      } else {
        window.alert("Passwords must match!");
      }
    });
  
    $("#login").on("click", ()=>{
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result)=>{
          var credential = result.credential;
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var userName = user["displayName"];
          var avatar = user["photoURL"];
          var email = user["email"];
          var uid = user["uid"];
          writeUserData(uid, userName, email, avatar);
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
    });
  
  }
  
  let writeUserData = (userId, name, email, picURL) => {
    let usersRef = firebase.database().ref('/users/' + userId);
  
    usersRef.update({
      username: name,
      email: email,
      profile_picture : picURL
    })
  }
  
  
  let renderPage = (loggedIn)=>{
    var username = '';
    var pic = '';
    let myuid = loggedIn.uid;
  
    
    $("body").html(`
    <p>hi</p>
    <button id = "logout">LOG OUT</button>
    `);
  
  
    $("#logout").on("click", ()=>{
      firebase.auth().signOut();
    });
  
  };
  

  
  
  firebase.auth().onAuthStateChanged(user=>{
    if (!user){
      renderSignIn();
    } else {
      renderPage(user);
    }
  })