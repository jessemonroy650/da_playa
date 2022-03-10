/*
  Wait for User Interface - 2022-02-20

*/
  console.log("theHost " + theHost);
  console.log("theMediaId " + theMediaId);

  // ui_update_location_text();
  ui_update_status('pending');
  if ( theMediaId == 'END' ) {
    ui_update_status('listEnd');
    document.getElementById('items-sofar').textContent = 'END';
  } else {
    ui_update_list_pointer();
  }
  // The next 3 will change
  ui_update_media_block_visibility('youtube-wrap', 'hide');
  ui_update_media_block_visibility('rumble-example', 'hide');
  ui_update_media_block_visibility('soundcloud-wrap', 'hide');
  //
  if ( theHost == 'youtube.com' ) {
    ui_update_media_block_visibility('youtube-wrap', 'show');
    ui_update_platform_logo('youtube');
    // ui_update_location_text(theHost, theMediaId);
  } else if ( theHost == 'rumble.com' ) {
    ui_update_media_block_visibility('rumble-example', 'show');
    ui_update_platform_logo('rumble');
    // ui_update_location_text(theHost, theMediaId);
  } else if ( theHost == 'soundcloud.com' ) {
    ui_update_media_block_visibility('soundcloud-wrap', 'show');
    ui_update_platform_logo('soundcloud');
    // ui_update_location_text(theHost, theMediaId);
  }
