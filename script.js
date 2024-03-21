class Chronometre {
    #heure ;
    #minute;
    #seconde;
    #millSeconde;
    constructor(heure,minute,seconde,millSeconde){
        this.#heure=heure;
        this.#minute=minute;
        this.#seconde=seconde;
        this.#millSeconde=millSeconde;
    }
   get heure(){
    return this.#heure;
   } 
   get minute(){
    return this.#minute;
   } 
   get seconde(){
    return this.#seconde;
   } 
   get millSeconde(){
    return this.#millSeconde;
   }
   set heure(heure){
     this.#heure=heure;
   } 
   set minute(minute){
     this.#minute=minute;
   } 
   set seconde(seconde){
     this.#seconde=seconde;
   } 
   set millSeconde(millSeconde){
     this.#millSeconde=millSeconde;
   }

}
var chrono=new Chronometre(0,0,0,0);
msec=document.getElementById("msec");
sec=document.getElementById("sec");
min=document.getElementById("min");
heur=document.getElementById("heur");

function update_chrono() {
    chrono.millSeconde=chrono.millSeconde+1;
    if(chrono.millSeconde==100){
       chrono.millSeconde=0;
       chrono.seconde=chrono.seconde+1;

    }else if(chrono.seconde==60){
        chrono.seconde=0;
        chrono.minute=chrono.minute+1;
    }else if(chrono.minute==60){
        chrono.minute=0;
        chrono.setHeure=chrono.heure+1;
    }
    msec.textContent=chrono.millSeconde;
    sec.textContent=chrono.seconde;
    min.textContent=chrono.minute;
    heur.textContent=chrono.heure;
}
var interval;
function start() {
    interval=setInterval(update_chrono,10);
    
}
function pause (){
clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    msec.textContent=0;
    sec.textContent=0;
    min.textContent=0;
    heur.textContent=0;
    chrono.millSeconde=0;
    chrono.seconde=0;
    chrono.minute=0;
    chrono.heure=0;
}
