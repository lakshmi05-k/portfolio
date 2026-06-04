let showPassword =
    document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("change", function () {

        let pass =
            document.getElementById("password");

        let confirm =
            document.getElementById("confirmPassword");

        if (this.checked) {

            pass.type = "text";
            confirm.type = "text";

        }
        else {

            pass.type = "password";
            confirm.type = "password";

        }

    });

}

let registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("name").value;

        let email =
            document.getElementById("email").value;

        let password =
            document.getElementById("password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;

        let message =
            document.getElementById("message");

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "") {
            message.innerHTML =
                "Please fill all fields";
            message.style.color = "red";
            return;
        }

        if (password.length < 6) {
            message.innerHTML =
                "Password must be at least 6 characters";
            message.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {
            message.innerHTML =
                "Passwords do not match";
            message.style.color = "red";
            return;
        }

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        message.innerHTML =
            "Registration Successful";

        message.style.color = "green";

        setTimeout(function () {

            window.location.href = "login.html";

        }, 1500);

    });

}

let loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email =
            document.getElementById("loginEmail").value;

        let password =
            document.getElementById("loginPassword").value;

        let savedEmail =
            localStorage.getItem("email");

        let savedPassword =
            localStorage.getItem("password");

        let loginMessage =
            document.getElementById("loginMessage");

        if (
            email === savedEmail &&
            password === savedPassword) {

            loginMessage.innerHTML =
                "Login Successful";

            loginMessage.style.color = "green";

        }
        else {

            loginMessage.innerHTML =
                "Invalid Email or Password";

            loginMessage.style.color = "red";

        }

    });

}