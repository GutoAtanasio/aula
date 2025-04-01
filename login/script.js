const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("senha");

const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-senha");

function login() {
    const email = emailInput.value;
    const senha = passwordInput.value;

    if (email === "" || senha === "") {
        errorEmail.classList.remove("hidden");
        errorPassword.classList.remove("hidden");

        return;
    } else {
        errorEmail.classList.add("hidden");
        errorPassword.classList.add("hidden");
    }

    // Simulacao de login
    Toastify({
        text: "Login realizado com sucesso",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}