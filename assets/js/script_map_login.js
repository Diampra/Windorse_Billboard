
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


  // ****** Profile ***** 

  function menuToggle() {
    const toggleMenu = document.querySelector(".Menu");
    toggleMenu.classList.toggle("active");
  }

  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("Menu");
    let j;
    for (j = 0; j < dropdowns.length; j++) {
      var openDropdown = dropdowns[j];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}