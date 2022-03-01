$("input").focus(function (e) {
    e.preventDefault();
    $(this).parent().addClass("inputFocused ");
  });
  $("input").blur(function (e) {
    e.preventDefault();
    let inputVal = $(this).val();
    if (inputVal === "") {
      $(this).parent().removeClass("inputFocused ");
    } else {
      return;
    }
  });
  
  $(".button").click(function (e) {
    e.preventDefault();
  });
  