class CalculadoraMilan{

    constructor() {
        
        this.result = ""; //memoria
        this.op1="0"; //primer operando
        this.init=1; //saber si hay que inicializar el nº en pantalla , donde 1 indica true y 0 indica false
        this.coma=0; //para saber si un número tiene coma o no, 1 si si tiene coma 0 del caso contrario
        this.op2=0; //segundo operando
        this.op="no"; //indicador de operaciones (+,-,*,/,...) si no hay ninguna se indica con un no
        this.cadena = ""; //cadena de caracteres utiliza en el método equals()
        this.answer ="";  //cadena de caracteres utiliza en el método equals()
       
    }
  

    //Métodos básicos para la calculadora

    //Método para los números
    //________________________________________________________________

    num(x){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += Number(x);

    }

    punto(){
        
        document.querySelector('input[type=text][name=\"pantalla\"]').value += ".";
        
    }

    suma(){

        document.querySelector('input[type=text][name=\"pantalla\"]').value += '+';

    }

    resta(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += '-';
    }

    mult(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += '*';
    }

    div(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += '/';
    }

    //Método de raíz cuadrada
    raíz() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value +="Math.sqrt(";
    }

    //método para calcular el porcentaje
    modulo(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += '%'; 
       
    }

    //Método de cambio de signo
    masmenos() {
       this.cambia = Number(document.querySelector('input[type=text][name=\"pantalla\"]').value);
       document.querySelector('input[type=text][name=\"pantalla\"]').value = this.cambia*(-1);  
    }

    //método que calcula la operación que hay por pantalla
    equals() {
           var ans = document.querySelector('input[type=text][name=\"pantalla\"]').value;
           document.querySelector('input[type=text][name=\"pantalla\"]').value = eval(ans);
         
        
    }


    //Método para borrar lo que haya en la pantalla
    borrar() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value = "";
    }

    mr(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.result;
    }

    mc(){
        this.result = "";
    }

    CE(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value = ""; 
        this.op1=0;
        this.coma=0; 
    }


}

class CalculadoraCientifica extends CalculadoraMilan{
    constructor(){
       super();
       this.shift = false;
       this.deg = true;
    }

    abreParentesis(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "(";
    }

    cierraParentesis(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += ")";
    }

    factorial(){
        var auxFact;
        try{
            auxFact =  eval(document.querySelector('input[type=text][name=\"pantalla\"]').value);
            var fact = 1;
            for(var i = 1; i<=auxFact; i++){
                fact = fact * i;
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = fact;
        }catch (error) {
            document.querySelector('input[type=text][name=\"pantalla\"]').value = "Syntax Error";
        }
    }
        
    pi(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value +=Math.PI; 
    }

    log(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value+='Math.log10(';
    }

    pot(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value+='**'; 
    }

    pot10(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value+='10**'; 
    }

    pot2(){

        document.querySelector('input[type=text][name=\"pantalla\"]').value+='**2';

    }

    exp(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.exp('; 
    }

    sin(){
        if(this.shift == false){
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.sin('; 
        }else{
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.asin('; 
        }
    
    }

    cos(){
        if(this.shift == false){
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.cos('; 
        }else{
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.acos('; 
        }
    }

    tan(){
        if(this.shift == false){
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.tan('; 
        }else{
            document.querySelector('input[type=text][name=\"pantalla\"]').value += 'Math.atan('; 
        }
         
    }

    sft(){
        if(this.shift == false){
            this.shift = true;
        }else{
            this.shift = false;
        }
    }

    DEG(){


        let x = eval(document.querySelector('input[type=text][name=\"pantalla\"]').value);

        if(this.deg == true){

            document.querySelector('input[type=text][name=\"pantalla\"]').value = x *( Math.PI/180);
            this.deg = false;

        }else{
            
            document.querySelector('input[type=text][name=\"pantalla\"]').value = x *(180/Math.PI);
            this.deg = true;
        }

    }

    borrarUno(){
        var auxBorro = document.querySelector('input[type = text][name=\"pantalla\"]').value;
        this.op1 = auxBorro.slice(0,-1);
        document.querySelector('input[type = text][name=\"pantalla\"]').value = this.op1;
    }

}


var calculadoraM = new CalculadoraCientifica();


document.addEventListener('keydown', function (event) {
    if(event.key >= '0' && event.key <= '9'){

        calculadoraM.num(Number(event.key));

    }
    if (event.key === '+') {
      calculadoraM.suma();
    }
    if (event.key === '-') {
      calculadoraM.resta();
    }
    if (event.key === 'd') {
        calculadoraM.div();
      }
    if (event.key === 'x') {
        calculadoraM.mult();
    }
    if(event.key === 'e'){
        calculadoraM.CE();
    }
    if(event.key === 's'){
        calculadoraM.masmenos();
    }
    if(event.key === 'r'){
        calculadoraM.raíz();
    }
    if(event.key === 'p'){
        calculadoraM.modulo();
    }
    if(event.key === '.'){
        calculadoraM.punto();
    }
    if(event.key === 'Enter'){
        event.preventDefault();
        calculadoraM.equals();
    }
    if(event.key === 'Delete'){
        event.preventDefault();
        calculadoraM.borrar();
    }
    if (event.key === 'b') {
        calculadoraM.abreParentesis();
    }
    if (event.key === 'c') {
        calculadoraM.cierraParentesis();
    }
    if (event.key === 'q') {
        calculadoraM.mr();
    }
    if (event.key === 'w') {
        calculadoraM.mc();
    }
    if (event.key === 'f') {
        calculadoraM.sft();
    }
    if (event.key === 'g') {
        calculadoraM.DEG();
    }
    if (event.key === 'Tab') {
        event.preventDefault();
        calculadoraM.borrarUno();
    }
    if (event.key === 'z') {
        calculadoraM.pot2();
    }
    if (event.key === 'a') {
        calculadoraM.pot10();
    }
    if (event.key === 'l') {
        calculadoraM.pot();
    }
    if (event.key === 'y') {
        calculadoraM.factorial();
    }
    if (event.key === 'u') {
        calculadoraM.pi();
    }
    if (event.key === 'v') {
        calculadoraM.log();
    }
    if (event.key === 'k') {
        calculadoraM.exp();
    }
    if (event.key === 'i') {
        calculadoraM.sin();
    }
    if (event.key === 'o') {
        calculadoraM.cos();
    }
    if (event.key === 't') {
        calculadoraM.tan();
    }


  });

