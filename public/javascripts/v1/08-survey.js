var THE_PROTOTYPE_URL = "/v1";

$(window).load( function() {

  $( 'form' ).change( function() {

    $( 'input[name="assisted-journey"]:checked' ).each( function () {

      $(this).parent().addClass( "checked" );

    })

    $( 'input[name="assisted-journey"]:not(:checked)' ).each( function () {

      $(this).parent().removeClass( "checked" );

    })

  })
});

function survey(){

  // get form value
  // check it exists
  // if not, add error message
  // if it does. Save to localStorage
  // Then remove items in page with thank you message

  var surveyResponse = $('input[name="assisted-journey"]:checked').val();

  if (surveyResponse == "assisted-journey-yes") {

    saveResponse(surveyResponse);

  } else if (surveyResponse == "assisted-journey-no") {

    saveResponse(surveyResponse);
  }

  else {

    $('.form-row').addClass("form-row-error-active");
    $( '.error-message' ).addClass( 'error-message-active' );
    $(" .error-summary ").addClass(" error-message-active ").focus();
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});

  }
}

function saveResponse(response) {

  localStorage.surveyResponse = response;
  $(" .error-summary ").removeClass( 'error-message-active' );
  $('.form, #survey-message').fadeOut("slow", function(){
    $('#thank-you-message').fadeIn();
  });

}
