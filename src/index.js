import Reveal from "reveal.js";
import "reveal.js/css/reveal.css";
import "font-awesome/css/font-awesome.min.css" // https://fontawesome.com/v4.7.0/icons/

/*** Theme options ***/
// import "reveal.js/css/theme/beige.css";
// import "reveal.js/css/theme/black.css";
// import "reveal.js/css/theme/blood.css";
// import "reveal.js/css/theme/league.css";
import "reveal.js/css/theme/moon.css"
// import "reveal.js/css/theme/night.css"
// import "reveal.js/css/theme/serif.css"
// import "reveal.js/css/theme/simple.css"
// import "reveal.js/css/theme/sky.css"
// import "reveal.js/css/theme/solarized.css"
// import "reveal.js/css/theme/white.css"
import "./styles.scss";


Reveal.initialize({
  // Display controls in the bottom right corner
  controls: true,

  // Display a presentation progress bar
  progress: true,

  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Number of milliseconds between automatically proceeding to the 
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Apply a 3D roll to links on hover
  rollingLinks: true,

  // Transition style
  transition: 'default' // default/cube/page/concave/zoom/linear/fade/none
});
