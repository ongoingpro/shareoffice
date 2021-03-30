
$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
      $(".screen").toggleClass("show");
    }
});


 

// $(".toggle-password").click(function () {

//   $(this).toggleClass("eye-on eye-off");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });

function checkKey(val) {
  var next = val + 1;
  var value = $('#inputs' + val).val();
  if (value) {
      $('#inputs' + next).focus();
  }
  if (value.length == '1') {
      $('#inputs' + val).blur();
  }


}

$('body').on('keyup', 'input.otp-input', function() {
  var key = event.keyCode || event.charCode;
  var inputs = $('input.otp-input');
  if (($(this).val().length === this.size) && key != 32) {
      inputs.eq(inputs.index(this) + 1).focus();
  }
  if (key == 8 || key == 46) {
      var indexNum = inputs.index(this);
      if (indexNum != 0) {
          inputs.eq(inputs.index(this) - 1).val('').focus();
      }
  }

});



$(window).on('load', function() {
  $('#intromodal').modal('show');
});
 


function myFunction() {
  var x = document.getElementById("password_show");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  };

}


$(".eye").click(function () {
  $(".on").toggleClass("show");
});








$(".increment-quantity,.decrement-quantity").on("click", function (ev) {
  var currentQty = $('input[name="quantity"]').val();
  var qtyDirection = $(this).data("direction");
  var newQty = 0;

  if (qtyDirection == "1") {
    newQty = parseInt(currentQty) + 1;
  }
  else if (qtyDirection == "-1") {
    newQty = parseInt(currentQty) - 1;
  }

  // make decrement disabled at 1
  if (newQty == 1) {
    $(".decrement-quantity").attr("disabled", "disabled");
  }

  // remove disabled attribute on subtract
  if (newQty > 1) {
    $(".decrement-quantity").removeAttr("disabled");
  }

  if (newQty > 0) {
    newQty = newQty.toString();
    $('input[name="quantity"]').val(newQty);
  }
  else {
    $('input[name="quantity"]').val("1");
  }
});



// Run Animation

// This changes everything
"use strict";

// retrieve the element
var element = document.getElementById("refresh");

// reset the transition by...
element.addEventListener("click", function (e) {
  e.preventDefault;

  // -> removing the class
  element.classList.remove("refresh_animation");

  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;

  void element.offsetWidth;

  // -> and re-adding the class
  element.classList.add("refresh_animation");
}, false);
 
 

 