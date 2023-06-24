<template>
  <header class="header-area">
  <!-- site-navbar start -->
  <div class="navbar-area">
    <div class="container">
      <nav class="site-navbar">
        <!-- site logo -->
        <a href="#home" class="site-logo">Hyderabad Tourism</a>

        <!-- site menu/nav -->
        <ul>
          <!-- <li><a href="#">home</a></li> -->
          <li><a href="#">about</a></li>
          <!-- <li><a href="#">service</a></li>
          <li><a href="#">contact</a></li> -->
        </ul>

        <!-- nav-toggler for mobile version only -->
        <button class="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div><!-- navbar-area end -->
</header> 
</template>

<script>
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

export default {
  mounted() {
    // load all event listners
    allEventListners();
  },
  methods: {
    // functions of all event listners
    allEventListners() {
      // toggler icon click event
      navToggler.addEventListener('click', togglerClick);
      // nav links click event
      navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
    },

    // togglerClick function
    togglerClick() {
      navToggler.classList.toggle('toggler-open');
      navMenu.classList.toggle('open');
    },

    // navLinkClick function
    navLinkClick() {
      if(navMenu.classList.contains('open')) {
        navToggler.click();
      }
    }
  },
};




// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
</script>

<style>
/* default css start */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}
.header-area {
  background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)),
  url(https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80);
  background-position: center center;
  background-size: cover;
}
/* default css end */


/* navbar regular css start */
.navbar-area {
  background: rgba(0,0,0,.6);
  border-bottom: 1px solid #000;
}
.site-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a.site-logo {
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
}
.site-navbar ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.site-navbar ul li a {
  color: #fff;
  padding: 20px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
}
.site-navbar ul li a:hover {
  background: rgba(255,255,255,.1);
}
/* navbar regular css end */


/* nav-toggler css start */
.nav-toggler {
  border: 3px solid #fff;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  height: 39px;
  display: none;
}
.nav-toggler span, 
.nav-toggler span:before, 
.nav-toggler span:after {
  width: 28px;
  height: 3px;
  background-color: #fff;
  display: block;
  transition: .3s;
}
.nav-toggler span:before {
  content: '';
  transform: translateY(-9px);
}
.nav-toggler span:after {
  content: '';
  transform: translateY(6px);
}
.nav-toggler.toggler-open span {
  background-color: transparent;
}
.nav-toggler.toggler-open span:before {
  transform: translateY(0px) rotate(45deg);
}
.nav-toggler.toggler-open span:after {
  transform: translateY(-3px) rotate(-45deg);
}
/* nav-toggler css start */


/* mobile breakpoint start */
@media screen and (max-width: 767px) {
  .container {
    max-width: 720px;
  }
  /* navbar css for mobile start */
  .nav-toggler{
    display: block;
  }
  .site-navbar {
    min-height: 60px;
  }
  .site-navbar ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #444;
    background-color: rgba(0,0,0,.75);
    max-height: 0;
    overflow: hidden;
    transition: .3s;
  }
  .site-navbar ul li {
    width: 100%;
    text-align: center;
  }
  .site-navbar ul li a {
    padding: 25px;
  }
  .site-navbar ul li a:hover {
    background-color: rgba(255,255,255,.1);
  }
  .site-navbar ul.open {
    max-height: 100vh;
    overflow: visible;
  }
  /* navbar css for mobile end */
}
/* mobile breakpoint end */</style>
