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
    console.log(surnamenameInput);
    surnamenameInput.classList.add("bg-danger", "text-white");
  }

  if(isMin) {
    console.log(surnamenameInput);
    surnamenameInput.classList.replace("bg-danger", "bg-success");
  }
}

const emailValidation = () => {
  const emailInput = document.querySelector("#email");


}