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
        mtl.play();
    })
    
    cross.addEventListener("click",function(){
        mtl.reverse();
    })

}

// ------------------------Full Screen Image View----------------------//

// const images = [...document.querySelectorAll('.b-img')];

// // popup

// const popup = document.querySelector('.popup');
// const closeBtn = document.querySelector('.close-btn');
// // const imageName = document.querySelector('.image-name');
// const largeImage = document.querySelector('.large-img');
// // const imageIndex = document.querySelector('.index');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// // let index = 0; // will track our current image;

// images.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         updateImage(i);
//         popup.classList.toggle('active');
//     })
// })

// const updateImage = (i) => {
//     let path = `img/img${i+1}.png`;
//     largeImage.src = path;
//     imageName.innerHTML = path;
//     imageIndex.innerHTML = `0${i+1}`;
//     index = i;
// }

// closeBtn.addEventListener('click', () => {
//     popup.classList.toggle('active');
// })

// leftArrow.addEventListener('click', () => {
//     if(index > 0){
//         updateImage(index - 1);
//     }
// })

// rightArrow.addEventListener('click', () => {
//     if(index < images.length - 1){
//         updateImage(index + 1);
//     }
// })