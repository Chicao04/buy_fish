

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 let activeLink = document.querySelector('header .navbar a[href*=' + id + ']');
//                 if (activeLink) {
//                     activeLink.classList.add('active');
//                 }
//             });
//         }
//     });
// };



// tự động home-slider di chuyển
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });