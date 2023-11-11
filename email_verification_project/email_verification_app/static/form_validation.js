const formValidation = () => {
  const registerButton = document.querySelector("#register-button")
  const nameInput = document.querySelector("#user_name");
  const surnamenameInput = document.querySelector("#user_surname");
  const emailInput = document.querySelector("#typeEmailX");
  const passwordInput = document.querySelector("#typePasswordX");
  const nameInputStatus = nameInput.classList.contains("bg-success");
  const surnamenameInputStatus = surnamenameInput.classList.contains("bg-success");
  const emailInputStatus = emailInput.classList.contains("bg-success");
  const passwordInputStatus = passwordInput.classList.contains("bg-success");

  if (nameInputStatus && surnamenameInputStatus && emailInputStatus && passwordInputStatus) {
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

const passwordValidation = () => {
  const passwordInput = document.querySelector("#typePasswordX");
  const lowerCaseDiv = document.querySelector("#lowercase");
  const upperCaseDiv = document.querySelector("#uppercase");
  const numberDiv = document.querySelector("#number");
  const lengthDiv = document.querySelector("#length")

  // lowercase
  const lowerCaseReg = /[a-z]/g;
  if (passwordInput.value.match(lowerCaseReg)) {
    lowerCaseDiv.classList.remove("bg-danger");
    lowerCaseDiv.classList.add("bg-success")
  } else {
    lowerCaseDiv.classList.remove("bg-success");
    lowerCaseDiv.classList.add("bg-danger")
  }

  // uppercase
  const upperCase = /[A-Z]/g;
  if (passwordInput.value.match(upperCase)) {
    upperCaseDiv.classList.remove("bg-danger");
    upperCaseDiv.classList.add("bg-success")
  } else {
    upperCaseDiv.classList.remove("bg-success");
    upperCaseDiv.classList.add("bg-danger")
  }
  // number
  const numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {
    numberDiv.classList.remove("bg-danger");
    numberDiv.classList.add("bg-success")
  } else {
    numberDiv.classList.remove("bg-success");
    numberDiv.classList.add("bg-danger")
  }  
  
  // minimum 8 characters
  if (passwordInput.value.length >= 8) {
    lengthDiv.classList.remove("bg-danger");
    lengthDiv.classList.add("bg-success");
  } else {
    lengthDiv.classList.remove("bg-success");
    lengthDiv.classList.add("bg-danger");
  }

  if (lowerCaseDiv.classList.contains("bg-success") &&
      upperCaseDiv.classList.contains("bg-success") &&
      numberDiv.classList.contains("bg-success") &&
      lengthDiv.classList.contains("bg-success")) {

        passwordInput.classList.add("bg-success");
        passwordInput.classList.remove("bg-danger");
  
      } else {
        passwordInput.classList.remove("bg-success");
        passwordInput.classList.add("bg-danger")
      }

  formValidation()
}

const showRequirements = () => {
  const passwordRequrements = document.querySelector("#pwd-requirements");
  passwordRequrements.hidden = false;

}

const hideRequirementsifEmpty = () => {
  const passwordInput = document.querySelector("#typePasswordX");
  const passwordRequrements = document.querySelector("#pwd-requirements");

  if ( passwordInput.value == "") {
    passwordRequrements.hidden = true;  

  }

}