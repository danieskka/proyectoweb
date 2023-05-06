console.log("Esto funciona??");

// FORMULARIO
document.querySelector(".form-contact").addEventListener("submit",function(event){
    event.preventDefault();
  
    const name = event.target.name.value;
    const respuesta = event.target.respuesta.value;
    const conditions = event.target.conditions.checked;
  
    let msj = "";
      let validado = true;
  
      if (name.length < 3) {
        validado = false;
        console.log("Nombre muy corto");
        msj += "Nombre muy corto\n";
      }
  
      if (respuesta == "") {
        validado = false;
        console.log("Debes marcar una opción");
        msj += "Debes marcar una opción\n";
      }
  
      if (conditions == false) {
        validado = false;
        console.log("Debes aceptar condiciones uso");
        msj += "Debes aceptar condiciones uso\n";
      }
  
      // Comprobación final - Todo validado
      if (validado) {
        // Envía el form
        alert("ÉXITO - Formulario correcto y enviado");
        event.target.submit();
      } else {
        document.querySelector("#contact").innerHTML +=
          '<pre class="danger">' + msj + "</pre>";
        alert("ERRORES: " + msj);
      } 
    });