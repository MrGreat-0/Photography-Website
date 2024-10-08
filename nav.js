function applyGradientStyle() {
    return `
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-image: -o-linear-gradient(left, rgba(199, 17, 59, 1) 5%, rgba(228, 94, 81, 1) 100%);
    background-image: -webkit-gradient(linear, left top, right top, color-stop(5%, rgba(199, 17, 59, 1)), to(rgba(228, 94, 81, 1)));
    background-image: linear-gradient(90deg, rgba(199, 17, 59, 1) 5%, rgba(228, 94, 81, 1) 100%);
    `;
}

document.addEventListener('DOMContentLoaded', () => {

    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector("nav").innerHTML = data;
            setupMenu(); // Call to set up menu after loading
            customizeNav();
            if (window.location.pathname === '/') {
                motion();
            }
        })
        .catch(error => console.error('Error loading the navigation:', error));
});


function customizeNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-prt a');

    // Define the specific links for each page
    const pageLinks = {
        'about.html': ['/', '', 'work.html', 'contact.html'],
        'work.html': ['/', 'about.html', '', 'contact.html'],
        'contact.html': ['/', 'about.html', 'work.html', '']
    };

    const currentLinks = pageLinks[currentPage] || ['/', 'about.html', 'work.html', 'contact.html'];

    navLinks.forEach((link, index) => {
        link.setAttribute('href', currentLinks[index]);

        // Disable the link for the current page
        if (currentLinks[index] === currentPage) {
            link.setAttribute('href', ''); // Disable the active link
        }
    });

    let body = document.body;
    //  Check for specific pages
    if (body.classList.contains('about-page')) {
        navLinks[1].style.cssText = applyGradientStyle();
    }
    else if (body.classList.contains('work-page')) {
        navLinks[2].style.cssText = applyGradientStyle();
    }
    else if (body.classList.contains('contact-page')) {
        navLinks[3].style.cssText = applyGradientStyle();
    } else {
        navLinks[0].style.cssText = applyGradientStyle();
    }
}


function setupMenu() {
    // -----------------------------GSAP- for menu-------------------------------- //

    let menu = document.querySelector(".menu i");
    let cross = document.querySelector("#contain-nav .m-btn");
    let body = document.body;

    let mmm = gsap.matchMedia();
    let mtl = gsap.timeline({ paused: true });

    mmm.add("(max-width: 768px)", () => {

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

        // Open menu function
        menu.addEventListener("click", () => {
            mtl.play();
            body.classList.add('no-scroll');
        });

        // Close menu function
        cross.addEventListener("click", () => {
            mtl.reverse();
            body.classList.remove('no-scroll');
        });

    });
}


function backBrowse() {

    function editPath(name, redirectPath) {
        // Push the state to the history
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, name);

            window.addEventListener('popstate', () => {
                window.location.href = redirectPath; // Redirect to the specified path
            });
        }
    }

    // Check the current path and call backBrowse with appropriate parameters
    window.addEventListener('load', () => {
        const currentPath = window.location.pathname;

        if (currentPath === '/contact.html') {
            editPath('./contact.html', '/');
        } else if (currentPath === '/about.html') {
            editPath('./about.html', '/');
        } else if (currentPath === '/work.html') {
            editPath('./work.html', '/');
        }
    });

}

backBrowse();