const firebaseConfig = {
        apiKey: "AIzaSyD-BBshNUbgt-c1qiSyVqcMLGhf0iz864g",
        authDomain: "baseball-37e0d.firebaseapp.com",
        projectId: "baseball-37e0d",
        storageBucket: "baseball-37e0d.appspot.com",
        messagingSenderId: "422995163027",
        appId: "1:422995163027:web:4b49ffa090ca952ad55a66",
        measurementId: "G-792QSK4ZY7"
};
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().settings.appVerificationDisabledForTesting = false;
  function aloha ()
  {
     render();     
  }
   function render()
  {      
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
           window.recaptchaVerifier.render();      
  } 
 
  function phoneAuth(){  
    number = "+91" + document.getElementById('phone number').value;
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult)
      {
         window.confirmationResult = confirmationResult;         
         code_result = confirmationResult;         
         console.log(code_result);      
         alert("Message sent! check it out");        
      }).catch(function (error)
      {          
          alert(error.message);
      }
       )}
function codeVerify()
{      
    var code = document.getElementById('code').value;
    code_result.confirm(code).then(function (result)
   {
        alert("Sucesfully Registered");
        var user = result.user;       
        console.log(user);     
        console.log(number);
    }).catch(function (error)
    {          
        alert(error.message);
    }
    )
}
