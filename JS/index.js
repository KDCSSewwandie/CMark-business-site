function shop(){
    document.querySelector("footer").style.visibility ="hidden";
    document.getElementById("join").disabled = true;
    document.getElementById("join").style.backgroundColor= "gray";
    startzoom();
    
}

id;

function startzoom(){
    
    let d=150;
    let s=0;
   
     id = setInterval(function() {
         s= s+1;
        let f=s+"px";
         document.getElementById("tnx").style.fontSize= f;
         document.getElementById("tnx").style.visibility ="visible";
         if (s==160) {
              stopzoom();
              document.getElementById("tnx").style.visibility ="hidden";
              document.querySelector("footer").style.visibility ="visible";
         }
         
     },1);
}

function stopzoom() {
    clearInterval(id);
}

