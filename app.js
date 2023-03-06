const name = document.getElementById("firstName");
const last = document.getElementById("lastName");
const mail = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (name.value === "" || name.value == null) {
    document.querySelector("#firstName").style.borderColor = "red";
    document.querySelector(".fNameWarning").classList.remove("invisible");
    document.querySelector(".iconfName").classList.remove("invisible");
    e.preventDefault();
  }
  if (last.value === "" || last.value == null) {
    document.querySelector("#lastName").style.borderColor = "red";
    document.querySelector(".lNameWarning").classList.remove("invisible");
    document.querySelector(".iconlName").classList.remove("invisible");
    e.preventDefault();
  }
  if (
    mail.value === "" ||
    mail.value == null ||
    !mail.value.includes("@") ||
    !mail.value.includes(".")
  ) {
    document.querySelector("#email").style.borderColor = "red";
    document.querySelector(".emailWarning").classList.remove("invisible");
    document.querySelector("#email").placeholder = "email@example/com";
    document
      .querySelector("#email")
      .classList.remove("placeholder:text-clr_Netural_1");
    document.querySelector("#email").classList.add("placeholder-red-500");
    e.preventDefault();
  }

  if (pass.value === "" || pass.value == null) {
    document.querySelector("#password").style.borderColor = "red";
    document.querySelector(".passwordWarning").classList.remove("invisible");
    document.querySelector(".iconPassword ").classList.remove("invisible");
    e.preventDefault();
  } else {
  }
});

// boder color
// document.querySelector("#firstName").style.borderColor = "red";
// document.querySelector("#lastName").style.borderColor = "red";
// document.querySelector("#email").style.borderColor = "red";
// document.querySelector("#password").style.borderColor = "red";

// warning text!
// document.querySelector(".fNameWarning").classList.remove("invisible");
// document.querySelector(".lNameWarning").classList.remove("invisible");
// document.querySelector(".emailWarning").classList.remove("invisible");
// document.querySelector(".passwordWarning").classList.remove("invisible");

// placeholder red
// document.querySelector("#email").placeholder = "email@example/com";
// document
//   .querySelector("#email")
//   .classList.remove("placeholder:text-clr_Netural_1");
// document.querySelector("#email").classList.add("placeholder-red-500");

// warning icon
// document.querySelector(".iconfName").classList.remove("invisible");
// document.querySelector(".iconlName").classList.remove("invisible");
// document.querySelector(".iconEmail").classList.remove("invisible");
// document.querySelector(".iconPassword ").classList.remove("invisible");
