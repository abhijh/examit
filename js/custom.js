$(function(){
  $('#counter').countdownCube({target: new Date( 'January 25, 2017 00:30:00' ), cubeSize: 25 } );
  var loading = $('#loadbar').hide();
  $(document)
    .ajaxStart(function () {
      loading.show();
    }).ajaxStop(function () {
    loading.hide();
  });

  $("label.btn").on('click',function () {
    var choice = $(this).find('input:radio').val();
    $('#loadbar').show();
    $('#quiz').fadeOut();
    setTimeout(function(){
      $( "#next" ).html(  $(this).checking(choice) );
      $('#quiz').show();
      $('#loadbar').fadeOut();
      /* something else */
    }, 1500);
  });

  $ans = 1;

  $.fn.checking = function(ck) {
    if (ck != $ans)
      return 'INCORRECT';
    else {
      return 'CORRECT';
    }
  };
});
