document.getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("name").value;

        let email =
            document.getElementById("email").value;

        if (name === "" || email === "") {
            document.getElementById("result").innerHTML =
                "Please fill all fields";
            return;
        }

        if (!email.includes("@")) {
            document.getElementById("result").innerHTML =
                "Invalid Email";
            return;
        }

        document.getElementById("result").innerHTML =
            "Form Submitted Successfully";

    });