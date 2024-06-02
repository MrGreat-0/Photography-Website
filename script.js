// ----------------------------Locomotive Scroll + ScrollTrigger----------------------------- //

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// -----------------------------GSAP- for page animation-------------------------------- //

var tl = gsap.timeline();

if (window.innerWidth > 768) {

    tl.from("nav a", {
        y: -50,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.3
    })

    tl.from(".h-bg h1", {
        y: -500,
        opacity: 0,
        duration: 0.8,
    })

    tl.from(".p1-top h1", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".p1-top h1",
            scroller: "#wrapper",
            // markers: true,
            start: "top 70%",
            end: "end 30%",
            scrub: 4
        }
    })

    tl.from(".p1-tleft", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".p1-top h1",
            scroller: "#wrapper",
            // markers: true,
            start: "top 70%",
            end: "end 20%",
            scrub: 3
        }
    })

    tl.from(".p1-tright", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".p1-top h1",
            scroller: "#wrapper",
            // markers: true,
            start: "top 70%",
            end: "end 20%",
            scrub: 3
        }
    })

    tl.from(".p1-bcard", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".p1-top h1",
            scroller: "#wrapper",
            // markers: true,
            start: "top -30%",
            end: "end -100%",
            scrub: 3
        }
    })

    tl.from(".page2 h1", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".p1-top h1",
            scroller: "#wrapper",
            // markers: true,
            start: "top -80%",
            end: "end -170%",
            scrub: 3
        }
    })

}

// -----------------------------GSAP- for menu-------------------------------- //

// // Define a function to disable scrolling
// function disableScroll() {
//     locoScroll.stop();
//     locoScroll.destroy();
// }

// // Define a function to enable scrolling
// function enableScroll() {
//     locoScroll.init();
//     locoScroll.start();
// }

var menu = document.querySelector(".menu i");
var cross = document.querySelector("#contain-nav .m-btn");

var mtl = gsap.timeline();

if (window.innerWidth <= 768) {

    mtl.to("#contain-nav",{
        right:0,
        duration:0.5
    })
    
    mtl.from(".nav-prt a",{
        duration:0.76,
        x:150,
        stagger:0.2,
        opacity:0
    })
    
    mtl.from("#contain-nav .m-btn",{
        opacity:0
    })
    
    mtl.pause();
    
    menu.addEventListener("click",function(){
        // disableScroll();
        mtl.play();
    })
    
    cross.addEventListener("click",function(){
        mtl.reverse();
        // enableScroll();
    })

}

// ------------------------------------Loader-------------------------------------- //


// // Function to show the loader
// function showLoader() {
//     document.querySelector(".loader").style.display = "block";
//   }
  
//   // Function to hide the loader
//   function hideLoader() {
//     document.querySelector(".loader").style.display = "none";
//   }
  
//   // Function to check network status and load content accordingly
//   function handleNetworkAndContentLoad() {
//     // Check if the browser is online
//     if (navigator.onLine) {
//       // Show loader when DOM content starts loading
//       showLoader();
  
//       // Hide loader when all content including images and stylesheets are loaded
//       window.addEventListener('load', function() {
//         hideLoader();
//       });
//     } else {
//       // If browser is offline, always show loader
//       showLoader();
//     }
  
//     // Hide loader when DOM content is fully loaded
//     document.addEventListener('DOMContentLoaded', function() {
//       hideLoader();
//     });
//   }
  
//   // Call the function to handle network and content load
//   handleNetworkAndContentLoad();
  

// ------------------------- //


