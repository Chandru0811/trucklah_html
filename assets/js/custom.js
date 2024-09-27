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

$(document).ready(function () {
  $("#registrationForm").validate({
    rules: {
      driver_name: {
        required: true,
        minlength: 3,
      },
      driver_email: {
        required: true,
        email: true,
      },
      driver_phone: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      driver_VehicleType: {
        required: true,
      },
    },
    messages: {
      driver_name: {
        required: "Please enter the driver's name",
        minlength: "Driver name must be at least 3 characters long",
      },
      driver_email: {
        required: "Please enter the driver's email",
        email: "Please enter a valid email address",
      },
      driver_phone: {
        required: "Please enter the driver's phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      driver_VehicleType: {
        required: "Please select the vehicle type",
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    highlight: function (element, errorClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass("is-invalid");
    },
    submitHandler: function (form) {
      var payload = {
        first_name: $("#driver_name").val(),
        last_name: $("#lastName").val(),
        email: $("#driver_email").val(),
        company_id: 2,
        company: "ECSCloudInfotech",
        lead_status: "PENDING",
        description_info: $("#driver_VehicleType").val(),
        phone: $("#driver_phone").val(),
        country_code: "65",
      };

      $.ajax({
        url: "https://crmlah.com/ecscrm/api/newClient",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload),
        success: function (response, status, xhr) {
          if (xhr.status === 201 && response) {
            $("#successModal").modal("show");
            $("#registrationForm")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#registrationForm")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#registrationForm")[0].reset();
        },
      });
    },
  });
});

function closePopup() {
  $("#successModal").modal("hide");
  $("#errorModal").modal("hide");
}

document
  .getElementById("view-more-item-moving")
  .addEventListener("click", function () {
    document.getElementById("pills-home-tab").click();
  });

document
  .getElementById("view-more-house-moving")
  .addEventListener("click", function () {
    document.getElementById("pills-profile-tab").click();
  });

document
  .getElementById("view-more-cross-border")
  .addEventListener("click", function () {
    document.getElementById("pills-contact-tab").click();
  });
