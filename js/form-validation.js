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
    // ajax
  }
});
