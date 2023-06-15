function login() {
    var ineNumber = document.getElementById("ine-number").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes realizar la lógica de autenticación con el INE y comprobar las credenciales
    
    // Si las credenciales son válidas, muestra el panel de usuario y oculta el formulario de inicio de sesión
    document.getElementById("login-form").style.display = "none";
    document.getElementById("user-panel").style.display = "block";
    
    // Actualiza el nombre del usuario en el panel de usuario
    document.getElementById("user-name").innerHTML = "Usuario";
    
    // Aquí puedes cargar la lista de citas programadas desde una fuente de datos (por ejemplo, una API)
    var appointmentList = document.getElementById("appointment-list");
    appointmentList.innerHTML = "<li>Cita 1</li><li>Cita 2</li><li>Cita 3</li>";
  }
  