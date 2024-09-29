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
  $("#contactForm").validate({
    rules: {
      footer_name: {
        required: true,
        minlength: 3
      },
      footer_email: {
        required: true,
        email: true
      },
      footer_phone: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10
      },
      footer_country: {
        required: true
      },
      footer_message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      footer_name: {
        required: "Please enter your name",
        minlength: "Name must be at least 3 characters long"
      },
      footer_email: {
        required: "Please enter your email",
        email: "Please enter a valid email address"
      },
      footer_phone: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits"
      },
      footer_country: {
        required: "Please enter your country"
      },
      footer_message: {
        required: "Please enter your message",
        minlength: "Message must be at least 10 characters long"
      }
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
        first_name: $("#footer_name").val(),
        last_name: $("#footer_country").val(),
        email: $("#footer_email").val(),
        company_id: 2,
        company: "ECSCloudInfotech",
        lead_status: "PENDING",
        description_info: $("#footer_message").val(),
        phone: $("#footer_phone").val(),
        country_code: "65",
      };
      console.log("Payload to be sent:", payload);

      $.ajax({
        url: "https://crmlah.com/ecscrm/api/newClient",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload),
        success: function (response, status, xhr) {
          if (xhr.status === 201 && response) {
            $("#successModal").modal("show");
            $("#contactForm")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#contactForm")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#contactForm")[0].reset();
        },
      });
    }
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

// Contact US Form Api
$(document).ready(function () {
  $("#contactUsForm").validate({
    rules: {
      contact_us_first_name: {
        required: true,
      },
      contact_us_last_name: {
        required: true,
      },
      contact_us_email: {
        email: true,
      },
      contact_us_phone: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      contact_us_message: {
        required: true,
      },
    },
    messages: {
      contact_us_first_name: {
        required: "Please enter your first name",
      },
      contact_us_last_name: {
        required: "Please enter your last name",
      },
      contact_us_email: {
        email: "Please enter a valid email address",
      },
      contact_us_phone: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      contact_us_message: {
        required: "Please enter your message",
      },
    },

    errorPlacement: function (error, element) {
      // Insert error after the .error div next to each input
      error.appendTo(element.closest(".input-group").find(".error"));
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
        first_name: $("#contact_us_first_name").val(),
        last_name: $("#contact_us_last_name").val(),
        email: $("#contact_us_email").val(),
        description_info: $("#contact_us_message").val(),
        phone: $("#contact_us_phone").val(),
        company_id: 2,
        company: "ECSCloudInfotech",
        lead_status: "PENDING",
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
            $("#contactUsForm")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#contactUsForm")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#contactUsForm")[0].reset();
        },
      });
    },
  });
});

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
