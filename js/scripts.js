console.log("Hello! Welcome to Anima Creativa Studio.");
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  
  // Check if the class is strictly 'navtoggle'
  if (x.className === 'navtoggle') {
    // Add the 'responsive' class (notice the space before the word)
    x.className += ' responsive';
  } else {
    // Remove the 'responsive' class
    x.className = 'navtoggle';
  }
}
// Smooth scrolling for anchor links
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  );
});