  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDj0op-8L21-KQu9yQ1Zr8zM4IISL-FIos",
    authDomain: "minix-art.firebaseapp.com",
    databaseURL: "https://minix-art-default-rtdb.firebaseio.com",
    projectId: "minix-art",
    storageBucket: "minix-art.appspot.com",
    messagingSenderId: "977940743944",
    appId: "1:977940743944:web:fa8cd983f968e9aafccebd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=document.getElementById("name").value
  user_email=document.getElementById("email").value
  user_no=document.getElementById("phone_no").value

function submit(){
    user_name=document.getElementById("name").value
    user_email=document.getElementById("email").value
    user_no=document.getElementById("phone_no").value

    firebase.database().ref("Sell-art").push({
        Phone_no: user_no,
        email_of_user: user_email,
        name: user_name
  })
  document.getElementById("thanks").style.display="block"
  document.getElementById("sell").style.display="none"
}



$(document).on("contextmenu", function (e) {        
  e.preventDefault();
});

$("#submit").click(function(event) {
  alert("Please fill out the fields");
});