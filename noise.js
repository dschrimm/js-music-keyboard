$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    audio = getAudio($(this).html());
    audio.load();
    audio.play();
  });

  var getAudio = function(note) {
    var id = note + ('Audio');
    var audio = document.getElementById(id);

    return audio;
  };


  $("body").keydown(function(event) {
    var buttonSelector = "button." + event.key;
    audio = getAudio(event.key);
    $(buttonSelector).addClass('active');
    audio.load();
    audio.play();
    setTimeout(function() {
      $(buttonSelector).removeClass('active');}, 20
    );
  });

});
