function validarConsulta(){
    var nombre= document.getElementById("nombreConsulta");
    var email= document.getElementById("correoConsulta");
    var respNombre= document.getElementById("respNombre");
    var respCorreo= document.getElementById("respCorreo");
    if(nombre.value===""){
        nombre.style.borderColor="red";
        respNombre.innerHTML="(*este campo es obligatorio*) ";
    }else if( /\d/.test(nombre.value)){ 
        nombre.style.borderColor="red";
        respNombre.innerHTML="(*nombre inválido*)"+"<br>";
    }else{
        nombre.style.borderColor="green";
        respNombre.innerHTML="";
    }

    var arroba = email.value.indexOf("@");
    var punto = email.value.lastIndexOf(".");
    if(email.value===""){
        email.style.borderColor="red";
        respCorreo.innerHTML="(*este campo es obligatorio*) ";
    }else if (arroba < 1 || ( punto - arroba < 2 ) && email.value.endsWith(".")){
      email.style.borderColor="red";
      respCorreo.innerHTML="(*email inválido*)"+ "<br>";
    }else{
        respCorreo.innerHTML="";
      email.style.borderColor="green";
    }

    var consultCliente= document.getElementById("consultaCliente");
    var respConsulta= document.getElementById("respConsulta");
    if(consultCliente.value===""){
        consultCliente.style.borderColor="red";
        respConsulta.innerHTML="(*este campo es obligatorio*) ";
    }else{
        consultCliente.style.borderColor="green";
        respConsulta.innerHTML="";
    }
}


    //filtro todo
    const boton= document.querySelectorAll(".boton");
    const productosTienda= document.querySelectorAll(".producto");
    for(i=0; i < boton.length; i++){
        boton[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filtro=e.target.dataset.filtro;
            //console.log(filtro)
            productosTienda.forEach((producto)=>{
                if(filtro == "todo"){
                    producto.style.display ="block";
                } else {
                    if(producto.classList.contains(filtro)) {
                        producto.style.display="block";
                    }else {
                        producto.style.display="none";
                    }
                }
                console.log(filtro);
            })
        })
    }

 //buscador
document.addEventListener("keyup", e =>{
    if(e.target.matches("#buscador")){

        productosTienda. forEach( producto=>{
            
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())? 
            producto.style.display="block" : producto.style.display="none";
        })

    }
    //console.log(e.target.value);
    
})



function validarDatosComprador (){
    var nombre = document.getElementById('nombreComprador');
    var apellido= document.getElementById('apellidoComprador');
    var dni= document.getElementById('dniComprador');
    var telefono= document.getElementById('telefonoComprador');
    var mail= document.getElementById('mailComprador');
    var direccion= document.getElementById('direccionCasaComprador');
    var provincia= document.getElementById('provincias');
    var ciudad= document.getElementById('ciudad');
    var codigoPostal= document.getElementById('codigoPostal');
    var resultado=false;
    var btnPago= document.getElementById('btnProcederPago');
    if(nombre.value==="" || /\d/.test(nombre.value)){
        nombre.style.borderColor="red";  
        resultado=false;
    }else{
        nombre.style.borderColor="green";  
        resultado=true;
    }
    if(apellido.value==="" || /\d/.test(apellido.value)){
        apellido.style.borderColor="red";
        resultado=false;
    }else{
        resultado=true;
        apellido.style.borderColor="green";
    }
    if(dni.value==="" || dni.value.length!=8 || isNaN(dni.value)){
        dni.style.borderColor="red";
        resultado=false;
    }else{
        dni.style.borderColor="green";
        resultado=true;
    }
    if(telefono.value==="" || telefono.value.length!=10 || isNaN(telefono.value)){
        telefono.style.borderColor="red";
        resultado=false;
    }else{
        telefono.style.borderColor="green";
        resultado=true;
    }
    if(provincia.value===""){
        provincia.style.borderColor="red";
        resultado=false;
    }else{
        resultado=true;
        provincia.style.borderColor="green";
    }

    var arroba = mail.value.indexOf("@");
    var punto = mail.value.lastIndexOf(".");
    if(mail.value===""){
        mail.style.borderColor="red";
        resultado=false;
    }else if (arroba < 1 || ( punto - arroba < 2 ) && mail.value.endsWith(".")){
        mail.style.borderColor="red";
        resultado=false;
      
    }else{
        mail.style.borderColor="green";
        resultado=true;
    }
    
    if(direccion.value===""){
        direccion.style.borderColor="red";
        resultado=false;
    }else{
        direccion.style.borderColor="green";
        resultado=true;
    }
    if(ciudad.value===""){
        ciudad.style.borderColor="red";
        resultado=false;
    }else{
        ciudad.style.borderColor="green";
        resultado=true;
    }
    if(codigoPostal.value==="" || codigoPostal.value.length!=4){
        codigoPostal.style.borderColor="red";
        resultado=false;
    }else{
        codigoPostal.style.borderColor="green";
        resultado=true;
    }

    if(resultado){
        btnPago.style.display="block";
    }else{
        btnPago.style.display="none";
    }
}

//validar tarjeta


function validarTarjeta(){
    var tipoTarjeta=document.getElementById('opcionPago');
    var numtarjeta1=document.getElementById('numtarjeta1');
    var numtarjeta2=document.getElementById('numtarjeta2');
    var numtarjeta3=document.getElementById('numtarjeta3');
    var numtarjeta4=document.getElementById('numtarjeta4');
    var codigoTarjeta=document.getElementById('codigoTarjeta');
    var dni= document.getElementById('dniTarjeta');
    var nombre= document.getElementById('nombreTitular');
    var btnConfirmarCompra=document.getElementById('confirmarCompra')
    var resultado=false;

    var inputDia= document.getElementById("Vdia");
   var inputMes= document.getElementById("Vmes");
   var inputAnio= document.getElementById("Vanio");

  
   if(tipoTarjeta.value===""){
        tipoTarjeta.style.borderColor="red";
        resultado=false;
    }else{
        tipoTarjeta.style.borderColor="green";
        resultado=false;
    }

    
    if(dni.value==="" || dni.value.length!=8 || isNaN(dni.value)){
        dni.style.borderColor="red";
        resultado=false;
    }else{
        dni.style.borderColor="green";
        resultado=true;
    }
    
    if(numtarjeta1.value==="" || isNaN(numtarjeta1.value) || numtarjeta1.value.length!==4){
        numtarjeta1.style.borderColor="red";
        resultado=false;
    }else{
        numtarjeta1.style.borderColor="green";
        resultado=true;
    }
    
    if(numtarjeta2.value==="" || isNaN(numtarjeta2.value)  || numtarjeta2.value.length!==4){
        numtarjeta2.style.borderColor="red";
        resultado=false;
    }else{
        numtarjeta2.style.borderColor="green";
        resultado=true;
    }

    if(numtarjeta3.value==="" || isNaN(numtarjeta3.value)  || numtarjeta3.value.length!==4){
        numtarjeta3.style.borderColor="red";
        resultado=false;
    }else{
        numtarjeta3.style.borderColor="green";
        resultado=true;
    }

    if(numtarjeta4.value==="" || isNaN(numtarjeta4.value)  || numtarjeta4.value.length!==4){
        numtarjeta4.style.borderColor="red";
        resultado=false;
    }else{
        numtarjeta4.style.borderColor="green";
        resultado=true;
    }

    if(codigoTarjeta.value==="" || codigoTarjeta.value.length!=3 || isNaN(codigoTarjeta.value)){
        codigoTarjeta.style.borderColor="red";
        resultado=false;
    }else{
        codigoTarjeta.style.borderColor="green";
        resultado=true;
    }

   
    if(nombre.value==="" || /\d/.test(nombre.value)){
        nombre.style.borderColor="red";
        resultado=false;
    }else{
        nombre.style.borderColor="green";
        resultado=true;
    }

    var fechaValida = false;
   

   if(!isNaN(inputDia.value) && inputDia.value > 0 && Math.trunc(inputDia.value) &&
      inputMes.value > 0 && inputMes.value <= 12 && Math.trunc(inputMes.value) &&
      inputAnio.value > 0  && inputAnio.value <= 2023 && Math.trunc(inputAnio.value) )
      
      { 
      if(inputMes.value == 1 || inputMes.value == 3 || inputMes.value == 5 || inputMes.value == 7 || inputMes.value == 8 || inputMes.value == 10 || inputMes.value == 12) { //con 31 dias
         if(inputDia.value <= 31) {
            fechaValida = true;
         }

      }else if(inputMes.value == 4 || inputMes.value == 6 || inputMes.value == 9 || inputMes.value == 11) { // con 30 dias
         if(inputDia.value <= 30) {
            fechaValida = true;
         }
      }else{
           if((inputAnio.value % 4 == 0 && inputAnio.value % 100 != 0) || (inputAnio.value % 400 == 0 && inputAnio.value % 4 == 0)) {  //corrobora si el año es bisiesto
               if(inputDia.value <= 29) {
                  fechaValida = true;
               }
            }else{
               if (inputDia.value <= 28) { 
                  fechaValida = true;
               }
            }
      }
   }

   if (fechaValida) {
      inputDia.style.borderColor = 'green';
      inputMes.style.borderColor = 'green';
      inputAnio.style.borderColor = 'green';
   } else {
      inputDia.style.borderColor = 'red';
      inputMes.style.borderColor = 'red';
      inputAnio.style.borderColor = 'red';
    
   }


    if(resultado){
        btnConfirmarCompra.style.display="block";
    }



}

function confirmarCompra(){
    var pagina=document.getElementById('datos-tarjeta');
    var mensaje= document.getElementById('mensajeConfirmacion');
    pagina.style.display="none";
    mensaje.style.display="block";  

}




































