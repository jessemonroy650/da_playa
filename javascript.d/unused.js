

<!-- #### -->
<!-- #### -->

//
function video_done(player,video) {
}

<!-- #### -->
<!-- #### -->

const myTimeout2 = setTimeout(hide_players, 3000);

function hide_players() {
    //document.getElementById("youtube-vid-info").style = 'display:none';
    // document.getElementById("player").style           = 'display:none';

    clearTimeout(myTimeout2);
}

// const myTimeout3 = setTimeout(show_player, 6000);
// var   playername = 'youtube.com';

function show_player() {

    switch (playername) {
      case "youtube.com":
        document.getElementById("youtube-vid-info").style = 'display:block';
        document.getElementById("player").style           = 'display:block';
      break;
      case "rumble.com":
        document.getElementById("rumble-vid-info").style  = 'display:block';
        document.getElementById("rumble_vpy1iz").style    = 'display:block';
      break;
    }

    // clearTimeout(myTimeout3);
}
