(function () {
    $(function () {
        // Configure behavior of anchors
        $("a[href='#']").click(function (e) {
            e.preventDefault();
        });
        $('.smooth-scroll').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 1000);
        });

        // Configure visibility of #back-to-top-button
        var backToTopButton = $('#back-to-top-button');
        var previousScrollPosition = 0;
        var buffer = 5/*px*/;
        $(window).scroll(function () {
            var currentScrollPosition = $(this).scrollTop();
            if (currentScrollPosition === 0 || currentScrollPosition > previousScrollPosition) {
                backToTopButton.fadeOut();
            } else {
                backToTopButton.fadeIn();
            }
            previousScrollPosition = currentScrollPosition;
        });

        // Configure visibility of .navbar-right
        var login = (localStorage && localStorage.login) || (sessionStorage && sessionStorage.login);
        if (login) {
            $('#login-link').hide();
            $('#register-link').hide();
            $('#logout-link').show();

            $('#logout-link').click(function () {
                logout();
            });
        }
        function logout() {
            localStorage.removeItem("login");
            sessionStorage.clear();
            location.href = "index.html";
        }
    });
})();
