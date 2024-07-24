//referencias de elementos html
var txtEmail = document.getElementById("txt-email");
var txtPassword = document.querySelector("#txt-password");
var formulario = document.querySelector("#formulario");
var divPasswordHelp = document.getElementById ("password-help");
var divEmailHelp = document.getElementById ("email-help")
var btnLimpiar = document.getElementById ("btn-limpiar")
var labelPassword = document.getElementById("lbl-password")
var labelEmail = document.getElementById ("lbl-email")
var alertSend = document.getElementById ("alert-send")


function limpiarErrores() {
    divEmailHelp.innerHTML = ""
    divPasswordHelp.innerHTML = ""
    
    labelEmail.classList.remove("text-danger")
    labelPassword.classList.remove("text-danger")
}

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    //alert(txtEmail.value);
    //alert(txtPassword.value);
    limpiarErrores()
    var valido = true
    if(txtEmail.value == ""){  ///verificacion de campos vacios
        divEmailHelp.innerHTML = "Ingresar  correo electronico"
        labelEmail.classList.add ("text-danger")
        valido = false
    } 

    if(txtPassword.value == ""){ ///verificacion de campos vacios
        divPasswordHelp.innerHTML = "Ingresar contraseña"
        labelPassword.classList.add("text-danger")
        valido = false
    }

    if(valido) {
        alertSend.classList.remove("d-none")
    }
})

btnLimpiar.addEventListener("click", function() {
    limpiarErrores()
    txtEmail.value = ""
    txtPassword.value = ""
    alertSend.classList.add("d-none")

})



//formulario.addEventListener("submit", function(evento){
 //   evento.preventDefault();
//    //alert(txtEmail.value);
 //   //alert(txtPassword.value);
//    if(txtEmail.value == ""){  ///verificacion de campos vacios
 //       divEmailHelp.innerHTML = "Ingresar  correo electronico"
    
//    } 

  //  if(txtPassword.value == ""){ ///verificacion de campos vacios
  //      divPasswordHelp.innerHTML = "Ingresar contraseña"
  //  }
//})




console.log(txtEmail);
console.log(txtPassword);