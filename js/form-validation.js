let loader = $(".loader");
let orderForm = $(".order__form");
let orderTitle = $(".order__text-title");
let orderMessage = $(".order__text-message");
// let modal = $("#fade-block");
// let closeModal = $("#close-modal");

$("#submit").click(function (e) {
  let foodName = $("#foodName");
  let name = $("#name");
  let phone = $("#phone");
  let hasError = false;
  loader.css("display", "flex");

  $(".error-input").hide();

  if (!foodName.val()) {
    foodName.next().show();
    hasError = true;
  }
  if (!name.val()) {
    name.next().show();
    hasError = true;
  }
  if (!phone.val()) {
    phone.next().show();
    hasError = true;
  }

  if (!hasError) {
    $.ajax({
      method: "POST",
      url: "https://testologia.site/checkout",
      data: { foodName: foodName.val(), name: name.val(), phone: phone.val() },
    }).done(function (msg) {
      loader.hide();
      if (msg.success) {
        orderForm.hide();

        // modal.show();

        /*closeModal.click(function () {
          modal.hide();
        });*/
      } else {
        alert(
          "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
        );
      }
    });
  }
});
