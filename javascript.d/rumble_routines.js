/*
  Rumble Player Routines - 2022-02-19

  ++ Rumble
  * https://www.rumbleplayer.com/developers/Player-Methods.html

*/
if ( theHost == 'rumble.com' ) {
  console.log("rumble_load " + theHost);

  RUMBLE_OBJECT = {};

  intervalID = setInterval( function() {
    ui_update_media_pointer_sofar();
    ui_update_media_pointer_duration();
  }, 10000);

  !function(r,u,m,b,l,e) {
    r._Rumble=b,r[b]||(r[b]=function(){
      (r[b]._=r[b]._||[]).push(arguments);
      if(r[b]._.length==1){
        l=u.createElement(m),e=u.getElementsByTagName(m)[0],
        l.async=1,l.src="https://rumble.com/embedJS/bwaj5"+
        (arguments[1].video?'.'+arguments[1].video:'')+"/?url="+
        encodeURIComponent(location.href)+"&args="+
        encodeURIComponent(JSON.stringify([].slice.apply(arguments))),
       e.parentNode.insertBefore(l,e)
  }})}(window,document,"script","Rumble");

  Rumble("play", {"video":theMediaId,"div":"rumble-example", api: function(api) {
    /* API calls can go here, or you can pass the API to your own functions */
    // console.log(api.getCurrentVideo().title);
    console.log("TITLE " + api.getCurrentVideo().title);
    RUMBLE_OBJECT  = api;
    document.title = api.getCurrentVideo().title;
    ui_update_media_title(api.getCurrentVideo().title);
    ui_update_status('notLoaded');
    // ui_update_location_text(theHost,theMediaId);
    document.getElementById('video-url').value = 'https:' +RUMBLE_OBJECT.getCurrentVideo().link;
    //
    intervalID0 = setInterval( function () {
      Seconds_sofar    = Math.round(api.getCurrentTime());
      Seconds_duration = Math.round(api.getDuration());
    }, 10000);
    //
    api.on('loadVideo', function() {
      console.log('*******GOT loadVideo');
    });
    api.on('preplay', function() {
      console.log('*******GOT preplay');
      Seconds_sofar    = Math.round(api.getCurrentTime());
      Seconds_duration = Math.round(api.getDuration());
      ui_update_media_pointer_sofar();
      ui_update_media_pointer_duration();
    });
    api.on('play', function() {
      //
      document.title = api.getCurrentVideo().title;
      ui_update_status('playing');
      ui_update_media_pointer_sofar();
      ui_update_media_pointer_duration();
      //
    });
    api.on('pause', function() {
      //
      ui_update_status('paused');
      ui_update_media_pointer_sofar();
    });
    api.on('videoEnd', function() {
      //
      ui_update_status('videoEnd');
      ui_update_media_pointer_sofar();
      clearInterval(intervalID);
      /*            */
      /* NEXT VIDEO */
      /*            */
      console.log("video ENDED, starting next in queue in 2 seconds.")
      set_next_video();
      setTimeout( do_reload , 2000);
      function do_reload() { document.location.reload(); }
    });
  }});

}