let loader = $(".loader");
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
      data: { foodName: foodName.val(), name: name.val(), phone: phone.val() }
    })
        .done(function( msg ) {
          loader.hide();
          if (msg.success) {
            alert("Заказ создан");
          } else {
            alert("Заказ не создан");
          }
        });
  }
});
