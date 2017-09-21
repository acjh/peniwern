# Write-up

➔ Home page: index.html

➔ Description of the website
  * Organization website: This submission is a refreshed look with better mobile UX for peniwern.sg, by having a responsive UI and categorization of products.

➔ Where to locate each element in the website
  * Bootstrap
    * Usage of a grid system:              .col (index.html)
    * Responsive Design:                   multiple .col for products and footer (index.html)
    * Any of the base CSS:                 "Buttons", "Forms" (index.html, login.html, register.html)
    * Any of the components:               "Badges", "Input groups", "Thumbnail" (index.html, login.html, register.html)
    * Any of the JavaScript category item: "Carousel", "Modals", "Togglable tabs", "Tooltips" (index.html, js/script.js)
  * jQuery
    * Form Validation:                     .contact-form, .form-signin, .form-register (index.html, login.html, register.html, js/validate-xxx.js)
    * jQuery Effects:                      animate(), fadeIn(), fadeOut() (js/script.js)

➔ References taken
  * Target website:   https://peniwern.sg
  * Bootstrap docs:   https://getbootstrap.com/docs/3.3/
  * Validate.js docs: https://validatejs.org/

➔ Any special instruction to take note
  * "Login" and "Sign Up" are implemented to demonstrate persistent state in navbar links (I used `localStorage` and `sessionStorage` - no data is collected).
