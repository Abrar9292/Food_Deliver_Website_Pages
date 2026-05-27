document.addEventListener("DOMContentLoaded", function () {

    const protectedPages = [

        "index.html",
        "foodmenu.html",
        "restaurant.html",
        "cart.html"

    ];

    const currentPage =
        window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {

        const loggedIn =
            localStorage.getItem("foodUserLoggedIn");

        if (!loggedIn) {

            window.location.href = "auth.html";

        }

    }

});