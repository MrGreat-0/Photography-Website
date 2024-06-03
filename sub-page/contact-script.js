// -----------------------------GSAP- for menu-------------------------------- //

var menu = document.querySelector(".menu i");
var cross = document.querySelector("#contain-nav .m-btn");

var mtl = gsap.timeline();
let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {

    mtl.to("#contain-nav", {
        right: 0,
        duration: 0.5
    })

    mtl.from(".nav-prt a", {
        duration: 0.76,
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