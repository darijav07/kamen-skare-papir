let niz=["kamen","škare","papir"];

let kompjuter="";

let Brojacigrac=document.getElementById("igrac");
let Brojackomp=document.getElementById("komp");

let kamen= document.getElementById("kamen");
let škare=document.getElementById("škare");
let papir=document.getElementById("papir");


let rezultat=document.getElementById("rezultat");

let igrac=document.getElementById("igrac");
let komp=document.getElementById("komp");
let brojacigrac=0;
let brojackomp=0;

function dajRandom(){
    let num =Math.floor(Math.random()*3);// mozemo staviti niz.lenght
    
     kompjuter=niz[num];
    }
    
dajRandom(); 



kamen.addEventListener('click',function(){
    dajRandom();
if(kompjuter==="kamen"){

    rezultat.textContent="ne rjeseno";
    console.log("kompjuter je odabrao" + " " + kompjuter);
}else if(kompjuter==="škare")
  {
    rezultat.textContent="I win";
    console.log("kompjuter je odabrao" + " " + kompjuter);
    brojacigrac++;
    igrac.textContent="pobjede igrača :" + " " + brojacigrac;
}else{
rezultat.textContent="he wins";
console.log("kompjuter je odabrao" + " " + kompjuter);
brojackomp++;
komp.textContent="pobjede komp: " + " " + brojackomp;
}
});





škare.addEventListener('click',function(){
    dajRandom();
    if(kompjuter==="kamen"){
        rezultat.textContent="he wins";
        console.log("kompjuter je odabrao" + " " + kompjuter);
        brojackomp++;
        komp.textContent="pobjede komp: " + " " + brojackomp;
    }else if(kompjuter==="škare"){
        rezultat.textContent="ne rjeseno";
        console.log("kompjuter je odabrao" + " " + kompjuter);

    }else{
        rezultat.textContent="I win"; 
        console.log("kompjuter je odabrao"  + " " + kompjuter);
        brojacigrac++;
        igrac.textContent="pobjede igrača :" + " " + brojacigrac;

        
    }

    
});


papir.addEventListener('click',function(){
    if(kompjuter==="kamen"){
        rezultat.textContent="I win";
        console.log("kompjuter je odabrao" + " " + kompjuter);
        dajRandom();
        brojacigrac++;
        igrac.textContent="pobjede igrača :" + " " + brojacigrac;
    }else if(kompjuter==="škare"){
        rezultat.textContent="he wins";
        console.log("kompjuter je odabrao" + " " + kompjuter);
        dajRandom();
        brojackomp++;
        komp.textContent="pobjede komp: " + " " + brojackomp;
    }else{
        rezultat.textContent="ne rjeseno";
        console.log("kompjuter je odabrao" + " " + kompjuter);
        dajRandom();
    }
    
});


