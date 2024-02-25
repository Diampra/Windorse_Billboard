'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// LOGIN

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const closeOutside = document.getElementById("myForm");

// Close the login popup when clicking outside of it
window.addEventListener('click', function(event) {
      console.log(event.target);
      if (event.target == closeOutside) {
        document.getElementById("myForm").style.display = "none";
      }
});


// Get the Map element
// var btn = document.getElementById('disappearBtn1');

// Add click event listener
// btn.addEventListener('click', function() {
  // Hide the frame by setting its display property to 'none'
//   document.getElementById('frame').style.display = 'none';
//   document.getElementById('background').style.display = 'block';
// });

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 800) {
//     document.getElementById('frame').style.display = 'block';
//     document.getElementById('background').style.display = 'none';
//   } 
  // else {
  //   header.classList.remove("active");
  //   backTopBtn.classList.remove("active");
  // }
// });

/*** Nav Bar active color change ***/
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar-link');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      // Remove 'active' class from all links
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      navLink.classList.add('active');
    });
  });
});


function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}