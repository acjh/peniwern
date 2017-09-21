(function() {
    // These are the constraints used to validate the form
    var constraints = {
        name: {
            presence: true,
            length: {
                minimum: 3,
                maximum: 20
            }
        },
        email: {
            presence: true,
            email: true
        },
        website: {
            presence: false,
            url: true
        },
        comment: {
            presence: true,
            length: {
                minimum: 3
            }
        }
    };

    // Hook up the form so we can prevent it from being posted
    var form = document.querySelector(".contact-form > form");
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
            showSuccess();
        }
    }
})();
