import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { getDatabase, get, ref, child   } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

const firebaseConfig = {
        apiKey: "AIzaSyDVicO_C2jr12IGpcJ-Wns8DMavIy_8to8",
        authDomain: "tataboga.firebaseapp.com",
        databaseURL: "https://tataboga-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "tataboga",
        storageBucket: "tataboga.appspot.com",
        messagingSenderId: "283985494757",
        appId: "1:283985494757:web:4cf8c7451002dc2fa54a0c"
      };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);


function loginSubmit() {

    var email = document.getElementById("fname").value;
    var password = document.getElementById("fpassword").value;

    if(email.length >0 && password.length >0){
        login(email, password);
        swal({
         title:"", 
         text:"Loading...",
         icon: "https://www.boasnotas.com/img/loading2.gif",
         closeOnClickOutside: false
              //icon: "success"
            });
    }
}; window.loginSubmit = loginSubmit;

function login(_email, _password){
  signInWithEmailAndPassword(auth, _email, _password)
  .then((userCredential) => {
    console.log("sukses");
    const user = userCredential.user;
    window.location.href = "index.html";

    /*var adminCheck = ref(db, 'admin');
    var childUID = child(adminCheck, user.uid);
    get(childUID).then((snapshot) => {
        if(snapshot.val() !== null){
          console.log("anda admin");
          console.log(snapshot.val());

          window.location.href = "dashboard";
        }else{
          swal({
           title:"", 
           text:"Login dengan akun admin",
           type: "info",
           timer: 2000,
           closeOnClickOutside: false
                //icon: "success"
            });
          signOut(auth).then(() => {
          // Sign-out successful.
            console.log("logout success");
          }).catch((error) => {
            // An error happened.
          });
        }
      }).catch((error) => {
    });*/


    //
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    swal({
           title: "",text: errorMessage,type: "info",timer: 3000
         });
  });
}

//akun Login
if(window.location.href == "http://localhost:8080/restaurantservice/index.html"){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if(window.location.href == "http://localhost:8080/restaurantservice/index.html"){
        for(var i = 0; i < profileName.length; i++)
        {
          profileName[i].innerHTML = user.email;
        }


        /*setTimeout(()=>{
          logout();
        },4000);*/
      }else{
        window.location.href = "dashboard";
      }
      console.log(user.email, user.uid);

      // ...
    } else {
      // No user is signed in.
      if(window.location.href == "http://localhost:8080/restaurantservice/login.html"){
        console.log("login room");
      }else{
      window.location.href = "login.html";
      }
    }
  });
}

var profileName = document.querySelectorAll(".profileName");

function logout(){
  signOut(auth).then(() => {
  // Sign-out successful.
    console.log("logout success");
    window.location.href = "login";
  }).catch((error) => {
    // An error happened.
  });
} window.logout = logout;

function adminTest(){
  var uid = "iwH7pPJgdJhvY83WbZwiMNqru3m1";
  admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
    console.log("uid: "+uid+", "+"is admin");
  });
}