var firebaseConfig = {
    apiKey: "AIzaSyC6FY9OApwC52CHr7BCUP9KWcOGv1o88Cc",
    authDomain: "phone-book-ffd11.firebaseapp.com",
    databaseURL: "https://phone-book-ffd11.firebaseio.com",
    projectId: "phone-book-ffd11",
    storageBucket: "phone-book-ffd11.appspot.com",
    messagingSenderId: "922206425112",
    appId: "1:922206425112:web:78a5b11da15432ac3e736d",
    measurementId: "G-2J1YLX2BV2"
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
