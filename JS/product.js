SPp;
function goto(me){
    window.scrollTo(0,0);
     SPp = setInterval(function() {
        var po = me.offsetTop-80;
       window.scrollTo(0,po);
         SPstopgetscroll();
     },10);
}

function SPstopgetscroll() {
    clearInterval(SPp);
}