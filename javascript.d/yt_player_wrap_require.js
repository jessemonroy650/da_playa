
  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log("onPlayerReady");
    document.getElementById("yt-status").textContent      = 'Ready';
    document.getElementById("yt-sofar").textContent       = Math.round(yt_player.getCurrentTime());
    document.getElementById("yt-duration").textContent    = Math.round(yt_player.getDuration());
    playVideo();
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
      document.getElementById("yt-status").textContent      = 'videoEnd';
      document.getElementById("yt-status").style.fontWeight = 'bold';
      document.getElementById("yt-status").fontStyle        = '';
      document.getElementById("yt-status").style.background = '';

      document.getElementById("yt-sofar").textContent       =  Math.round(yt_player.getCurrentTime());
      /*            */
      /* NEXT VIDEO */
      /*            */
      console.log("video ENDED, starting next in queue in 2 seconds.")
      set_next_video();
      setTimeout( do_reload , 2000);
      function do_reload() { document.location.reload(); }
    }
  }

  function onPlayerApiChange(event) {
    console.log("onPlayerApiChange");
  }

  function onPlayerError(event) {
    console.log("onPlayerError");
  }

  function playVideo() {
    console.log("got PLAY signal");
    status_update();
    yt_player.playVideo();
    return;
  }
