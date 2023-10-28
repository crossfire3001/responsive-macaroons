let loader = $(".loader");
let orderForm = $(".order__form");
let orderTitle = $(".order__text-title");
let orderMessage = $(".order__text-message");

$("#submit").click(function (e) {
  let foodName = $("#foodName");
  let name = $("#name");
  let phone = $("#phone");
  let hasError = false;

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
        orderTitle.text("Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!");
        orderMessage.hide();
      } else {
        loader.css("display", "flex");

        setTimeout(function () {
          loader.hide();
          alert(
            "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ"
          );
        }, 3000);
      }
    });
  }
});
