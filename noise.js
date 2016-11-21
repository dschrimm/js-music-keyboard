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
    var className = "note " + event.key;
    audio = getAudio(event.key);
    audio.load();
    audio.play();
  });

});
