   


   function getNum(num) {
       var wrIte=document.getElementById("input")
       wrIte.value+=num
   }
   function clearResult(){
       var wrIte=document.getElementById("input")
       wrIte.value=""
   }
   function answer(){
       var wrIte=document.getElementById("input")
       wrIte.value=eval(input.value)
   }

   function deleted(){
       var a=document.getElementById("input").value
       var b=a /10|0;
       input.value=b;
   }
  