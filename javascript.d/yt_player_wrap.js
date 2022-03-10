
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
    // YT.PlayerState.ENDED
    // YT.PlayerState.PLAYING
    // YT.PlayerState.PAUSED
    // YT.PlayerState.BUFFERING
    // YT.PlayerState.CUED
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
      console.log("video ENDED, starting next in queue.")
      setTimeout(video_next, 2000);
    }
    // YT.PlayerState.PLAYING
    if (event.data == YT.PlayerState.PLAYING) {
      document.getElementById("yt-status").textContent      = 'Play';
      document.getElementById("yt-status").style.fontWeight = 'bold';
      document.getElementById("yt-status").fontStyle        = 'italic';
      document.getElementById("yt-status").style.background = '';

      document.getElementById("yt-sofar").textContent       =  Math.round(yt_player.getCurrentTime());
    }
    // YT.PlayerState.PAUSED
    if (event.data == YT.PlayerState.PAUSED) {
      document.getElementById("yt-status").textContent      = 'Pause';
      document.getElementById("yt-status").style.fontWeight = 'normal';
      document.getElementById("yt-status").fontStyle        = '';
      document.getElementById("yt-status").style.background = '#E0E0E0';

      document.getElementById("yt-sofar").textContent       =  Math.round(yt_player.getCurrentTime());
    }
  }

  function stopVideo() {
    console.log("got STOP signal");
    yt_player.stopVideo();
    return;
  }

  function playVideo() {
    console.log("got PLAY signal");
    status_update();
    yt_player.playVideo();
    return;
  }

  function pauseVideo() {
    console.log("got PAUSE signal");
    status_update();
    yt_player.pauseVideo()
    return;
  }
