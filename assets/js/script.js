let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");

  // Verifica si todos los campos están válidos
  if (username.value.trim() !== "" && validateEmail(email.value.trim()) && password.value.trim() !== "") {
    errorMsg[3].innerHTML = "Form submitted successfully!";
    errorMsg[3].style.color = "green";
    }
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        // Campo vacío
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else if (id.type === 'email' && !validateEmail(id.value.trim())) {
        // Correo electrónico inválido
        errorMsg[serial].innerHTML = "Please enter a valid email address";
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        // Campo válido
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};

// Función para validar el formato del correo electrónico
let validateEmail = (email) => {
    // Utiliza una expresión regular para verificar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
