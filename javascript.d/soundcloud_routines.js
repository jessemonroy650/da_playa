/*
  SoundCloud Player Routines - 2022-02-20

  ++ SoundCloud
  * https://developers.soundcloud.com/blog/html5-widget-api
  * https://developers.soundcloud.com/docs/api/html5-widget
  * https://soundcloud.com/pages/embed

*/
if ( theHost == 'soundcloud.com' ) {
  sc_player = {};

  document.getElementById('soundcloud-example').src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + theMediaId + "&color=4568a2&show_comments=false"

  intervalID = setInterval( function() {
    sc_player.getPosition( function(a) {
        Seconds_sofar = Math.round(a);
        //console.log("Seconds_sofar " + Seconds_sofar);
    });
  }, 500);

  intervalID = setInterval( function() {
    ui_update_media_pointer_sofar();
    ui_update_media_pointer_duration();
  }, 10000);

  console.log("final soundcloud.com init");
  (function(){
    var widgetIframe = document.getElementById('soundcloud-example'),
        widget       = SC.Widget(widgetIframe);

    sc_player = widget;
    widget.bind(SC.Widget.Events.READY, function() {
      console.log("Got READY");
      widget.bind(SC.Widget.Events.PLAY, function() {
        console.log("Got PLAY");
        ui_update_status('playing');
        // get information about currently playing sound
        widget.getCurrentSound(function(currentSound) {
          //console.log('----oo0oo----');
          //console.log('sound ' + JSON.stringify(currentSound) + ' began to play');
          /*
          console.log('sound.id ' + currentSound.id );
          console.log('sound.description ' + currentSound.description );
          console.log('sound.duration ' + currentSound.duration );
          console.log('sound.embeddable_by ' + currentSound.embeddable_by );
          console.log('sound.genre ' + currentSound.genre );
          console.log('sound.permalink_url' + currentSound.permalink_url );
          console.log('sound.playback_count ' + currentSound.playback_count );
          // console.log('sound ' + currentSound.publisher_metadata.
          console.log('sound.title ' + currentSound.title )
          console.log('sound.user.avatar_url ' + currentSound.user.avatar_url );
          */
          ui_update_media_pointer_sofar();
          ui_update_media_pointer_duration();
          //
          ui_update_media_title(currentSound.title);
          document.getElementById('video-url').value      = currentSound.permalink_url;
          Seconds_duration                                = Math.round(currentSound.duration); 
          document.getElementById("duration").textContent = Seconds_duration;
          //
        });
      });
      // get current level of volume
      widget.getVolume(function(volume) {
        console.log('current volume value is ' + volume);
      });
      // set new volume level
      widget.setVolume(50);
      widget.bind(SC.Widget.Events.FINISH, function() {
        console.log("Got FINISH");
        ui_update_media_pointer_sofar();
        ui_update_media_pointer_duration();
        //
        ui_update_status('podcastEnd');
        /*            */
        /* NEXT CLIP  */
        /*            */
        console.log("Clip ENDED, starting next in queue in 2 seconds.")

        set_next_video();
        var clipId = get_next_clipId();
        if ( clipId === 'END' ) {
          setTimeout( do_reload , 2000);
        } else {
          setTimeout( do_next , 2000);
        }
        function do_next() {
          url = 'https://api.soundcloud.com/tracks/' + clipId;
          widget.load(url);
        }
      });
      //
      soundcloud_play();
    });

    function soundcloud_play () {
      console.log("GOT sc Play");
      widget.play();
    }

  }());
}