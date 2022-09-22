window.addEventListener('scroll', (event)=>{ 
    
    var divMitchell = document.getElementById("mitchell");
    var positionMitchell = divMitchell.getBoundingClientRect().top;
    var tamañoPantalla = window.innerHeight;
    
    var x1 = (positionMitchell * -1) + 100;
   
    if(positionMitchell < tamañoPantalla){
        divMitchell.style.transform = "translate(" + x1 + "px,0px)";
    }

    var divKevind = document.getElementById("kevind");
    var positionKevind = divKevind.getBoundingClientRect().top;
    
    var x = positionKevind - 20;
    if(positionKevind < tamañoPantalla){
        divKevind.style.transform = "translate(" + x + "px,0px)";
    }
});

 document.getElementById("KevindBtn").addEventListener("click", function(){

    var heightDivMitchell = document.getElementById("mitchell").clientHeight + 200;    

    window.scrollTo({
        top: heightDivMitchell,
        left: 0,
        behavior: 'smooth'
    })
 });

//  document.getElementById("KevindBtn").addEventListener("click", function(){
//     document.getElementById("kevind").scrollIntoView({behavior: 'smooth'});
//  });

 document.getElementById("MitchellBtn").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
 });
