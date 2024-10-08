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


function motion() {
    // -----------------------------GSAP- for page animation-------------------------------- //

    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {

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

    });

}