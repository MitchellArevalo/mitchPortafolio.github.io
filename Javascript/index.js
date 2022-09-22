window.addEventListener('scroll', (event)=>{ 
    var divMitchell = document.getElementById("mitchell");
    var positionMitchell = divMitchell.getBoundingClientRect().top;
    var tamañoPantalla = window.innerHeight;
    
    var x1 = (positionMitchell * -1) + 100;
   
    if(positionMitchell < tamañoPantalla){
        divMitchell.style.transform = "translate("+x1+"px,0px)";
    }

    var divKevind = document.getElementById("kevind");
    var positionKevind = divKevind.getBoundingClientRect().top;
    
    var x = positionKevind - 20;
    if(positionKevind < tamañoPantalla){
        divKevind.style.transform = "translate("+x+"px,0px)";
    }
});

// window.scrollTo({
//     top: 1000,
//     left: 0,
//     behavior: "smooth"
// });
