$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


    let map = L.map('leaflet-map').setView([40.74114378556225, -73.88131884079952], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([40.74114378556225, -73.88131884079952]).addTo(map);
    marker.bindPopup("<b>Our Restaurant</b><br><a href='https://www.google.com/maps/place/Pulau+Pinang/@40.7411438,-73.8838805,17z/data=!4m16!1m9!3m8!1s0x89c25facc8ee7a3d:0x5917eaef8867cee2!2sPulau+Pinang!8m2!3d40.7411438!4d-73.8813056!9m1!1b1!16s%2Fg%2F1tcvq8g9!3m5!1s0x89c25facc8ee7a3d:0x5917eaef8867cee2!8m2!3d40.7411438!4d-73.8813056!16s%2Fg%2F1tcvq8g9?entry=ttu' target='_blank'>View on Google Maps</a>").openPopup();



    $('.carousel').on('slide.bs.carousel', function (event) {
    let activeSlide = $(event.relatedTarget).index();
    let indicators = $('.carousel-indicators li');

    indicators.removeClass('active');
    indicators.eq(activeSlide).addClass('active');
});



    $(document).ready(function() {
    $("#menu-toggle").click(function() {
        $("#menu").slideToggle();
    });
});

    window.onscroll = function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            // When the user scrolls down, add a CSS class to make the navbar sticky
            navbar.classList.add('sticky');
        } else {
            // When the user scrolls back to the top, remove the sticky class
            navbar.classList.remove('sticky');
        }
    };


  function handleOrderNow() {
    // Add logic here for what happens when the button is clicked
    console.log('Order Now clicked!');
  }