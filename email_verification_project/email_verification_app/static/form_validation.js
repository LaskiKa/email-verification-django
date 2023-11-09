const formValidation = () => {
  const registerButton = document.querySelector("#register-button")
  const nameInput = document.querySelector("#user_name");
  const surnamenameInput = document.querySelector("#user_surname");
  const emailInput = document.querySelector("#typeEmailX");
  const nameInputStatus = nameInput.classList.contains("bg-success");
  const surnamenameInputStatus = surnamenameInput.classList.contains("bg-success")
  const emailInputStatus = emailInput.classList.contains("bg-success")

  if (nameInputStatus && surnamenameInputStatus && emailInputStatus) {
    registerButton.disabled = false;
  } else {
    registerButton.disabled = true;
  }

}

const nameValidation = () => {
  const nameInput = document.querySelector("#user_name");
  const isMin = nameInput.value.length > 3;
  const statusSuccess = nameInput.classList.contains("bg-success");

  if(!isMin) {

    if (statusSuccess) {
      nameInput.classList.replace("bg-success", "bg-danger");

    } else {

      nameInput.classList.add("bg-danger", "text-white");
      
    }
  }

  if(isMin) {
    nameInput.classList.replace("bg-danger", "bg-success");
  
  }

  formValidation()
}

const surnameValidation = () => {
  const surnamenameInput = document.querySelector("#user_surname");
  const isMin = surnamenameInput.value.length > 1;
  const statusSuccess = surnamenameInput.classList.contains("bg-success");



  if(!isMin) {
    if (statusSuccess) {
      surnamenameInput.classList.replace("bg-success", "bg-danger");

    } else {

      surnamenameInput.classList.add("bg-danger", "text-white");
      
    }
  }

  if(isMin) {
    surnamenameInput.classList.replace("bg-danger", "bg-success");
  }

  formValidation();
}

const emailValidation = () => {
  const emailInput = document.querySelector("#typeEmailX");
  const statusSuccess = emailInput.classList.contains("bg-success");

  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);  
};

  if (!isEmailValid(emailInput.value)) {
    if (statusSuccess) {
      emailInput.classList.replace("bg-success", "bg-danger");

    } else {

      emailInput.classList.add("bg-danger", "text-white");
      
    }


  }
  if(isEmailValid(emailInput.value)) {
    emailInput.classList.replace("bg-danger", "bg-success");
  }
  formValidation()
}