/*
  YouTube Player Routines - 2022-02-18

  ++ YouTube
  * https://developers.google.com/youtube/iframe_api_reference
  * https://developers.google.com/youtube/player_parameters
*/
if ( theHost == 'youtube.com' ) {
  //
  // Da Playa modification
  //
  document.getElementById('youtube-example').src = "https://www.youtube.com/embed/" + theMediaId + "?enablejsapi=1";
  console.log("YT_load " + "theMediaId:" + theMediaId);

  intervalID = setInterval(function() {
    ui_update_media_pointer_sofar()
  }, 10000);


  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  console.log("firstScriptTag " + firstScriptTag.id);
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
  var yt_player;
  function onYouTubeIframeAPIReady() {
    theItem  = myStorage.getItem('video-current');
    console.log("onYouTubeIframeAPIReady - theItem " + theItem);
    yt_player = new YT.Player('youtube-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onApiChange': onPlayerApiChange,
        'onError': onPlayerError
      }
    });
  }
  //
  //
  //
  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log("onPlayerReady");
    ui_update_status('ready');
    // sof = Math.round(yt_player.getCurrentTime());
    // dur = Math.round(yt_player.getDuration());
    // ui_update_media_pointer(sof, dur);
    ui_update_media_pointer_duration();
    ui_update_media_pointer_sofar();
    ui_update_location_text(theHost,theMediaId);

    yt_playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  function onPlayerStateChange(event) {
    //console.log("onPlayerStateChange=" + event.data);
    //              (unstarted) = -1
    // YT.PlayerState.ENDED     = 0
    // YT.PlayerState.PLAYING   = 1
    // YT.PlayerState.PAUSED    = 2
    // YT.PlayerState.BUFFERING = 3
    // YT.PlayerState.CUED      = 5
    //
    // YT.PlayerState.ENDED
    if (event.data == YT.PlayerState.ENDED) {
      ui_update_status('videoEnd');
      ui_update_media_pointer_sofar();
      //
      clearInterval(intervalID);
      // commit_marked();
      /*            */
      /* NEXT VIDEO */
      /*            */
      console.log("video ENDED, starting next in queue in 2 seconds.")
      set_next_video();
      setTimeout( do_reload , 2000);
    }
    if (event.data == YT.PlayerState.PAUSED) {
      ui_update_status('paused');
      ui_update_media_pointer_sofar();
    }
    if (event.data == YT.PlayerState.PLAYING) {
      ui_update_status('playing');
      ui_update_media_pointer_sofar();
    }
  }

  function onPlayerApiChange(event) {
    console.log("onPlayerApiChange");
  }

  function onPlayerError(event) {
    console.log("onPlayerError");
  }
  //
  //
  //
  function yt_playVideo() {
    console.log("got PLAY signal");
    ui_update_status('playing');
    ui_update_media_pointer_sofar();
    //
    yt_player.playVideo();
    return;
  }

}
