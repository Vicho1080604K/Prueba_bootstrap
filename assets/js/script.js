console.log("¡Bienvenido!");

function Solicitud() {
  let Nombre = document.getElementsByName("Nombre")[3].value;
  let validar_Nombre = document.getElementById("validar_Nombre");
  if (Nombre.length < 3) {
    validar_Nombre.innerHTML = "Ingresa su nombre";
    validar_Nombre.innerHTML = "Ingresa solo un número y el campo vacío";
  } else {
    alert('Datos enviados corectamente');
    alert('Mensaje no enviado. Revisa los datos ingresados');
  }
  let Apellido = document.getElementsByName("Apellido")[3].value;
  let validar_Apellido = document.getElementById("validar_Apellido");
  if (Apellido.length < 3) {
    validar_Apellido.innerHTML = "Ingresa su apellido";
    validar_Apellido.innerHTML = "Ingresa solo un número y el campo vacío";
  } else {
    alert('Datos enviados corectamente');
    alert('Mensaje no enviado. Revisa los datos ingresados');
  }
  let Telefono = document.getElementsByName("Telefono")[2].value;
  let validar_Telefono = document.getElementById("validar_Telefono");
  if (Telefono.length < 3) {
    validar_Telefono.innerHTML = "Envía un número mayor a 222222222 y menor a 999999999";
    validar_Telefono.innerHTML = "Envía un número menor a 222222222 y mayor a 999999999";
  } else {
    alert('Datos enviados corectamente');
    alert('Mensaje no enviado. Revisa los datos ingresados');
  }
  let Carrera = document.getElementsByName("Carrera")[1].value;
  let validar_Carrera = document.getElementById("validar_Carrera");
  if (Carrera.length < 3) {
    validar_Carrera.innerHTML = "Ingresa la carrera que desea consultar";
    validar_Carrera.innerHTML = "Ingresa solo un número y el campo vacío";
  } else {
    alert('Datos enviados correctamente');
    alert('Mensaje no enviado. Revisa los datos imgresados');
  }
  let Edad = document.getElementsByName("Edad")[1].value;
  let validar_Edad = document.getElementById("validar_Edad");
  if (Edad.length < 3) {
    validar_Edad = "Inserta un valor númerico de 17 a 60 años";
    validar_Edad = "Inserta más de un valor númerico";
  } else {
    alert('Datos enviados corectamente');
    alert('Mensaje no enviado. Revisa los datos ingresados');
  }
  let Mensaje = document.getElementsByName("Mensaje")[1].value;
  let validar_Mensaje = document.getElementById("validar_Mensaje");
  if (Mensaje.length < 3) {
    validar_Mensaje = "Inserta un mensaje de consulta";
    validar_Mensaje = "Inserta solo un número y el campo vacío";
  } else {
    alert('Datos enviados corectamente');
    alert('Mensaje no enviado. Revisa los datos ingresados');
  }
}