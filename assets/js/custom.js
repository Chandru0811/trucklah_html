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
  $("#registrationForm").submit(function (event) {
    event.preventDefault();

    var formData = {
      driver_name: $("#driver_name").val(),
      driver_email: $("#driver_email").val(),
      driver_phone: $("#driver_phone").val(),
      driver_VehicleType: $("#driver_VehicleType").val(),
    };

    // console.log("Form Data:", formData);

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

    // console.log("Payload for First API:", payload);

    // First API call
    $.ajax({
      url: "https://crmlah.com/ecscrm/api/newClient",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(payload),
      success: function (response, status, xhr) {
        console.log("First API response:", response);

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
