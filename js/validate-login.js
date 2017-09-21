(function() {
    if (typeof(Storage) === "undefined") {
        alert("Please use a different browser!");
        location.href = "index.html";
    }

    // These are the constraints used to validate the form
    var constraints = {
        email: {
            presence: true,
            email: true
        },
        password: {
            presence: true,
            length: {
                minimum: 5,
                maximum: 20
            }
        }
    };

    // Hook up the form so we can prevent it from being posted
    var form = document.querySelector(".form-signin");
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        handleFormSubmit(form);
    });

    // Hook up the inputs to validate on the fly
    var inputs = document.querySelectorAll("input, textarea, select")
    for (var i = 0; i < inputs.length; ++i) {
        inputs.item(i).addEventListener("change", function(ev) {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(this, errors[this.name])
        });
    }

    function handleFormSubmit(form, input) {
        // validate the form aainst the constraints
        var errors = validate(form, constraints);
        // then we update the form to reflect the results
        showErrors(form, errors || {});
        if (!errors) {
            login(form.email.value, form.password.value, form.remember.checked);
        }
    }

    function login(email, password, remember) {
        if (!localStorage.email) {
            alert("Please register!");
            location.href = "register.html";
        } else {
            var hash = getHash(password);
            if (localStorage.pwd === String(hash)) {
                localStorage.login = remember;
                sessionStorage.login = true;
                location.href = "index.html";
            } else {
                alert("Password incorrect!");
            }
        }
    }

    function getHash(password) {
        var hash = 0, i, chr;
        if (password.length === 0) return hash;
        for (i = 0; i < password.length; i++) {
          chr   = password.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
})();
