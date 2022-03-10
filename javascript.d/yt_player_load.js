/* 2022-01-30T09:13:04 */
function YT_load() {
  console.log("YT_load");

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
    yt_player = new YT.Player('iframe-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}
