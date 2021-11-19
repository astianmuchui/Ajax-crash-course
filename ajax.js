//Just a store for the code, Do not run this file
function showSuggestions(str){
    if(str.length == 0){
        document.getElementById('output').innerHTML = '';

    }else{
     var xmlhttp = new XMLHttpRequest();   
     xmlhttp.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200){
            document.getElementById('output').innerHTML = this.responseText;

         }
     }
     xmlhttp.open("GET","suggest.php?q="+str,true);
     xmlhttp.send(); 
    }
}