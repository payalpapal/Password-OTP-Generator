function goToNext(self,next){
           console.log(self,'self')
           console.log(next)
           if(self.value.length == 1){
            document.getElementById(next).focus()
           }
            
     }
     

        function GenerateOTP(){
            otp = Math.floor((Math.random() + 1)*1000)
            console.log(otp,"otp")
            document.querySelector("#showOTP").textContent = otp
        }
        
       document.getElementById('submitBTN').addEventListener('click',()=>{

        userOTP=''
        userOTP= document.getElementById('digit1').value +
                 document.getElementById('digit2').value +
                 document.getElementById('digit3').value +
                 document.getElementById('digit4').value 

        let isCorrect

        if(otp == userOTP)
        isCorrect = true

        if(isCorrect){
            document.getElementById("successMsg").classList.remove("d-none");
            document.getElementById("registerForm").reset();
        }else{
            document.getElementById("errorMsg").classList.remove("d-none");
        }
        })