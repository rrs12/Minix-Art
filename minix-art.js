
 const form = document.querySelector('#sell-art');
 user_name = document.getElementById("name").value
 user_email = document.getElementById("email").value
 user_no = document.getElementById("phone_no").value




 form.addEventListener('submit', (e) => {
   e.preventDefault();
   user_name = document.getElementById("name").value
   user_email = document.getElementById("email").value
   user_no = document.getElementById("phone_no").value

   firebase.database().ref("Sell-art").push({
     Phone_no: user_no,
     email_of_user: user_email,
     name: user_name
   })
   document.getElementById("thanks").style.display = "block"
   document.getElementById("sell").style.display = "none"
 });



 $(document).on("contextmenu", function (e) {
   e.preventDefault();
 });