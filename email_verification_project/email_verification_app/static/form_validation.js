function myFunction() {
  alert("Hello from a static file!");
}

const nameValidation = () => {
  const nameInput = document.querySelector("#user_name");
  const isMin = nameInput.value.length > 3;

  console.log(isMin);
  console.log(nameInput.value);

  if(!isMin) {
    console.log(nameInput);
    nameInput.classList.add("bg-danger", "text-white");
  }

  if(isMin) {
    console.log(nameInput);
    nameInput.classList.replace("bg-danger", "bg-success");
  }
}

const surnameValidation = () => {
  const surnamenameInput = document.querySelector("#user_surname");
  const isMin = surnamenameInput.value.length > 1;

  console.log(isMin);
  console.log(surnamenameInput.value);

  if(!isMin) {
    surnamenameInput.classList.add("bg-danger", "text-white");
  }

  if(isMin) {
    surnamenameInput.classList.replace("bg-danger", "bg-success");
  }
}

const emailValidation = () => {
  const emailInput = document.querySelector("#typeEmailX");
  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);  
};

  if (!isEmailValid(emailInput.value)) {
    emailInput.classList.add("bg-danger", "text-white");
  }
  if(isEmailValid(emailInput.value)) {
    emailInput.classList.replace("bg-danger", "bg-success");
  }

}