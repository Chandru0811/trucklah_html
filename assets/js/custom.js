$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      country: $("#country").val(),
      message: $("#message").val(),
    };

    console.log("Form Data:", formData);

    $.ajax({
      data: formData,
      success: function () {
        $("#contactForm").trigger("reset");
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
});
