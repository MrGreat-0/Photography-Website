//-----------------------------GSAP- for menu-------------------------------- //

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


//--------------GSAP- for menu-it doesn't work properly but upper one's work----------------//
//--------------it's for reference----------------//

// var menu = document.querySelector(".menu i");
// var cross = document.querySelector("#contain-nav .m-btn");
// var mtl = gsap.timeline();

// function handleResize() {
//     if (window.innerWidth <= 768) {
//         // Add menu animations for smaller screens
//         mtl.to("#contain-nav", {
//             right: 0,
//             duration: 0.5
//         });
//         mtl.from(".nav-prt a", {
//             duration: 0.76,
//             x: 150,
//             stagger: 0.2,
//             opacity: 0
//         });
//         mtl.from("#contain-nav .m-btn", {
//             opacity: 0
//         });
//         mtl.pause();
//         menu.addEventListener("click", function () {
//             mtl.play();
//         });
//         cross.addEventListener("click", function () {
//             mtl.reverse();
//         });
//     } else {
//         // Remove menu animations for larger screens
//         mtl.kill(); // Kill the animation timeline
//     }
// }

// // Add event listener for initial resize check
// window.addEventListener('resize', handleResize);

// // Call the resize handler function initially to check the screen size
// handleResize();

//-------------------------------------------------------------------------------------//