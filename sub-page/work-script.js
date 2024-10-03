// --------------------images ko category mai display karne ka function------------------- //

(function () {

    const buttons = document.querySelectorAll(".bar .btn");
    const storeItems = document.querySelectorAll(".box .items");

    buttons.forEach((button) => {

        button.addEventListener("click", (e) => {

            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
                if (filter === "all") {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
})();

// -----------------------------GSAP- for menu-------------------------------- //

var menu = document.querySelector(".menu i");
var cross = document.querySelector("#contain-nav .m-btn");

var mtl = gsap.timeline();
let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {

    mtl.to("#contain-nav", {
        right: 0,
        duration: 0.4
    })

    mtl.from(".nav-prt a", {
        duration: 0.3,
        x: 150,
        stagger: 0.2,
        opacity: 0
    })

    mtl.from("#contain-nav .m-btn", {
        opacity: 0
    })

    mtl.pause();

    menu.addEventListener("click", function () {
        mtl.play();
    })

    cross.addEventListener("click", function () {
        mtl.reverse();
    })

});

//------------------------Direct Browser Back Button to Specific Page-------------------------- //

window.addEventListener('load', function () {
    if (window.history && window.history.pushState) {
        window.history.pushState('forward', null, './work.html');

        window.addEventListener('popstate', function () {
            window.location.href = '/'; // Adjust the path as needed
        });
    }
});