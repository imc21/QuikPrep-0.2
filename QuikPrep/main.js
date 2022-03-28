document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#Account");

    document.querySelector("#CreateAccountlink").addEventListener("click", e => {
        e.preventDefault();
loginForm.classList.add("form_hidden");
CreateAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#Loginlink").addEventListener("click", e => {
        e.preventDefault();
loginForm.classList.remove("form_hidden");
CreateAccountForm.classList.add("form_hidden");

    });
});

